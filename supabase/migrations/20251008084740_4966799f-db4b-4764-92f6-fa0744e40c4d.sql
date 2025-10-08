-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Create leads table for contact form submissions
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  source_page TEXT DEFAULT 'contact',
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Leads policies - anyone can create, only admins can read
CREATE POLICY "Anyone can submit leads"
  ON public.leads FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads"
  ON public.leads FOR SELECT
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update leads"
  ON public.leads FOR UPDATE
  USING (auth.uid() IS NOT NULL);

-- Create projects table for portfolio
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  image_url TEXT,
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  demo_url TEXT,
  case_study_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Projects are publicly readable
CREATE POLICY "Projects are viewable by everyone"
  ON public.projects FOR SELECT
  USING (true);

-- Only authenticated users can modify projects
CREATE POLICY "Authenticated users can insert projects"
  ON public.projects FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update projects"
  ON public.projects FOR UPDATE
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete projects"
  ON public.projects FOR DELETE
  USING (auth.uid() IS NOT NULL);

-- Create services table
CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  icon TEXT,
  price_starting INTEGER,
  features TEXT[] DEFAULT ARRAY[]::TEXT[],
  popular BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Enable RLS
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Services are publicly readable
CREATE POLICY "Services are viewable by everyone"
  ON public.services FOR SELECT
  USING (true);

-- Only authenticated users can modify services
CREATE POLICY "Authenticated users can insert services"
  ON public.services FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update services"
  ON public.services FOR UPDATE
  USING (auth.uid() IS NOT NULL);

-- Create update timestamp function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Add triggers for updated_at
CREATE TRIGGER set_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Create function to auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', 'User'),
    NEW.email
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Insert demo projects
INSERT INTO public.projects (title, slug, description, image_url, tags, featured) VALUES
  ('Modern Landing Page', 'modern-landing-page', 'High-converting landing page for SaaS products with animations and modern design.', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', ARRAY['Landing Page', 'SaaS', 'React'], true),
  ('Real Estate Portal', 'real-estate-portal', 'Full-featured property listing platform with search, filters, and user dashboard.', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800', ARRAY['Web App', 'Real Estate', 'Full Stack'], true),
  ('E-commerce Store', 'ecommerce-store', 'Complete online store with cart, checkout, payment integration, and admin panel.', 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800', ARRAY['E-commerce', 'Stripe', 'Admin'], true),
  ('Learning Management System', 'learning-management-system', 'Educational platform with courses, quizzes, progress tracking, and certificates.', 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800', ARRAY['LMS', 'Education', 'Dashboard'], false),
  ('Portfolio Website', 'portfolio-website', 'Stunning portfolio site for creatives with project galleries and contact forms.', 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800', ARRAY['Portfolio', 'Design', 'Responsive'], false),
  ('Admin Dashboard', 'admin-dashboard', 'Comprehensive admin interface with analytics, charts, and data management.', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', ARRAY['Dashboard', 'Analytics', 'Admin'], false);

-- Insert demo services
INSERT INTO public.services (title, slug, description, icon, price_starting, features, popular) VALUES
  ('Website Development', 'website-development', 'Custom website development tailored to your business needs with modern technologies.', 'Code', 25000, ARRAY['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile First', '3 Revisions'], true),
  ('Landing Pages', 'landing-pages', 'High-converting landing pages designed to capture leads and drive conversions.', 'Rocket', 15000, ARRAY['Conversion Focused', 'A/B Testing Ready', 'Fast Delivery', 'Analytics Setup', '2 Revisions'], true),
  ('Website Maintenance', 'website-maintenance', 'Keep your website running smoothly with regular updates, backups, and support.', 'Settings', 5000, ARRAY['Monthly Updates', 'Security Patches', 'Backup Management', 'Priority Support', 'Performance Monitoring'], false),
  ('SEO Optimization', 'seo-optimization', 'Improve your search engine rankings with technical SEO and content optimization.', 'TrendingUp', 10000, ARRAY['Keyword Research', 'On-Page SEO', 'Technical Audit', 'Meta Optimization', 'Monthly Reports'], false),
  ('Performance Audit', 'performance-audit', 'Comprehensive website performance analysis with actionable improvement recommendations.', 'Gauge', 8000, ARRAY['Speed Analysis', 'Core Web Vitals', 'Optimization Plan', 'Implementation Guide', 'Follow-up Review'], false),
  ('AI Chatbot Integration', 'ai-chatbot-integration', 'Add intelligent AI chatbots to automate customer support and engagement.', 'Bot', 20000, ARRAY['Custom Training', 'Multi-language', 'Lead Capture', 'Analytics', 'Ongoing Support'], true);