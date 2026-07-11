// Ram Ready Digital Literacy — Supabase configuration EXAMPLE
//
// Copy this file to assets/supabase-config.js and fill in values from a
// SEPARATE, dedicated Digital-Literacy-Course Supabase project — never the
// Financial-Literacy-Course project and never the trailing-hyphen
// Digital-Literacy-Course- project. See SUPABASE-SETUP.md.
//
// Only the PUBLIC anon/publishable key belongs here. Never commit a service
// role key to this repository. Row Level Security must be enabled (see
// supabase/migrations/create_digital_literacy_profiles_and_progress.sql)
// before this file is ever filled in and deployed.
//
// If this file does not exist or SUPABASE_URL is left blank, the site runs
// entirely in guest mode with local storage and Supabase is never contacted.

export const SUPABASE_CONFIG = {
  enabled: false,
  url: "", // e.g. "https://YOUR-PROJECT-REF.supabase.co"
  anonKey: "" // the PUBLIC anon/publishable key only
};
