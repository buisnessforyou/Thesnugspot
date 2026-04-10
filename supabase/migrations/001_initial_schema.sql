-- ============================================
-- LeadPilot Database Schema
-- ============================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- Custom types
-- ============================================

CREATE TYPE plan_tier AS ENUM ('starter', 'growth', 'pro');
CREATE TYPE subscription_status AS ENUM ('active', 'cancelled', 'past_due');
CREATE TYPE lead_status AS ENUM ('new', 'contacted');
CREATE TYPE lead_urgency AS ENUM ('normal', 'urgent');
CREATE TYPE lead_score AS ENUM ('hot', 'warm', 'cold');
CREATE TYPE sentiment_type AS ENUM ('positive', 'neutral', 'negative');
CREATE TYPE personality_mode AS ENUM ('warm_welcoming', 'professional_reassuring', 'energetic_helpful', 'calm_caring', 'custom');

-- ============================================
-- Businesses table
-- ============================================

CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL DEFAULT '',
  website_url TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  services JSONB NOT NULL DEFAULT '[]'::jsonb,
  prices JSONB NOT NULL DEFAULT '{}'::jsonb,
  opening_hours JSONB NOT NULL DEFAULT '{}'::jsonb,
  contact_email TEXT NOT NULL DEFAULT '',
  contact_phone TEXT NOT NULL DEFAULT '',
  widget_colour TEXT NOT NULL DEFAULT '#0066FF',
  welcome_message TEXT NOT NULL DEFAULT 'Hi! How can I help?',
  personality_mode personality_mode NOT NULL DEFAULT 'warm_welcoming',
  custom_personality TEXT,
  competitors JSONB NOT NULL DEFAULT '[]'::jsonb,
  proactive_triggers JSONB NOT NULL DEFAULT '{"time_on_page_seconds": 30, "scroll_depth_percent": 80, "pages_visited": 3}'::jsonb,
  page_specific_greetings JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- Conversations table
-- ============================================

CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  messages JSONB NOT NULL DEFAULT '[]'::jsonb,
  lead_captured BOOLEAN NOT NULL DEFAULT FALSE,
  summary TEXT,
  sentiment sentiment_type,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- Leads table
-- ============================================

CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  conversation_id UUID REFERENCES conversations(id) ON DELETE SET NULL,
  customer_name TEXT NOT NULL DEFAULT '',
  customer_email TEXT NOT NULL DEFAULT '',
  customer_phone TEXT NOT NULL DEFAULT '',
  interest TEXT NOT NULL DEFAULT '',
  preferred_time TEXT NOT NULL DEFAULT '',
  status lead_status NOT NULL DEFAULT 'new',
  urgency lead_urgency NOT NULL DEFAULT 'normal',
  score lead_score NOT NULL DEFAULT 'warm',
  qualification_notes TEXT NOT NULL DEFAULT '',
  suggested_followup TEXT NOT NULL DEFAULT '',
  source_page TEXT NOT NULL DEFAULT '',
  is_returning_visitor BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- Subscriptions table
-- ============================================

CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id TEXT NOT NULL DEFAULT '',
  stripe_subscription_id TEXT NOT NULL DEFAULT '',
  plan plan_tier NOT NULL DEFAULT 'starter',
  status subscription_status NOT NULL DEFAULT 'active',
  current_period_end TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  conversation_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- Indexes
-- ============================================

CREATE INDEX idx_businesses_user_id ON businesses(user_id);
CREATE INDEX idx_conversations_business_id ON conversations(business_id);
CREATE INDEX idx_leads_business_id ON leads(business_id);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_score ON leads(score);
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_stripe_customer_id ON subscriptions(stripe_customer_id);

-- ============================================
-- Row Level Security (RLS)
-- ============================================

ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Business owners can only see/edit their own businesses
CREATE POLICY "Users can view own businesses"
  ON businesses FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own businesses"
  ON businesses FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own businesses"
  ON businesses FOR UPDATE
  USING (auth.uid() = user_id);

-- Conversations: owners can view, widget can insert (via service role)
CREATE POLICY "Users can view own conversations"
  ON conversations FOR SELECT
  USING (business_id IN (SELECT id FROM businesses WHERE user_id = auth.uid()));

-- Leads: owners can view and update status
CREATE POLICY "Users can view own leads"
  ON leads FOR SELECT
  USING (business_id IN (SELECT id FROM businesses WHERE user_id = auth.uid()));

CREATE POLICY "Users can update own leads"
  ON leads FOR UPDATE
  USING (business_id IN (SELECT id FROM businesses WHERE user_id = auth.uid()));

-- Subscriptions: users can view their own
CREATE POLICY "Users can view own subscriptions"
  ON subscriptions FOR SELECT
  USING (auth.uid() = user_id);

-- ============================================
-- Updated_at trigger
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER businesses_updated_at
  BEFORE UPDATE ON businesses
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER subscriptions_updated_at
  BEFORE UPDATE ON subscriptions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
