# Supabase Setup (Optional Account Mode)

Guest mode works fully without any of this. Follow these steps only if you want optional cross-device account
sync.

**Important: create a brand-new, separate Supabase project dedicated to `BREXAtlas/Digital-Literacy-Course`.**
Do not reuse the Financial-Literacy-Course project or the trailing-hyphen Digital-Literacy-Course- project —
their URLs, keys, and migrations are unrelated systems. No dedicated project has been configured for this
repository yet; account mode remains disabled until an owner completes the steps below.

## Steps

1. Create a new project at [supabase.com](https://supabase.com) dedicated to this repository.
2. In the SQL editor, run `supabase/migrations/create_digital_literacy_profiles_and_progress.sql`. This
   creates `learner_profiles`, `course_progress`, `story_choices`, `achievements`, and `completion_records`,
   and enables Row Level Security with owner-only policies on every table.
3. Enable email magic-link (passwordless OTP) sign-in under Authentication settings.
4. Add this deployment's GitHub Pages URL (`https://brexatlas.github.io/Digital-Literacy-Course/`) to the
   allowed redirect URLs, pointing at `auth-callback.html`.
5. Copy `assets/supabase-config.example.js` to `assets/supabase-config.js`.
6. Fill in `url` with your project URL and `anonKey` with the **public anon/publishable key only**. Set
   `enabled: true`.
7. Never commit a service-role key to this repository. `assets/supabase-config.js` should only ever contain
   the public anon key, which is safe to expose given the RLS policies in step 2.
8. Confirm Row Level Security is enabled on all five tables before going live — the migration does this, but
   verify it in the Supabase dashboard.

## Verifying

Sign in with a test email, complete an episode, and confirm a row appears in `course_progress` scoped to your
`auth.uid()`. Sign in from a second browser to confirm sync via the "Sync now" button on `profile.html`.
