// Ram Ready Digital Literacy — Optional Account Authentication
//
// Passwordless email magic-link auth via Supabase. Entirely optional — the
// site is fully functional in guest mode without this file ever running.
// Requires assets/supabase-config.js (copied from the .example file) with a
// SEPARATE Digital-Literacy-Course Supabase project — never the Financial-
// Literacy-Course or trailing-hyphen Digital-Literacy-Course- project. See
// SUPABASE-SETUP.md.

let supabaseClient = null;

async function loadConfig() {
  try {
    const mod = await import("./supabase-config.js");
    return mod.SUPABASE_CONFIG;
  } catch {
    return { enabled: false, url: "", anonKey: "" };
  }
}

export async function getClient() {
  if (supabaseClient) return supabaseClient;
  const config = await loadConfig();
  if (!config.enabled || !config.url || !config.anonKey) return null;
  const { createClient } = await import("https://esm.run/@supabase/supabase-js@2");
  supabaseClient = createClient(config.url, config.anonKey);
  return supabaseClient;
}

export async function isAccountModeAvailable() {
  return Boolean(await getClient());
}

export async function signInWithMagicLink(email) {
  const client = await getClient();
  if (!client) throw new Error("Account mode is not configured on this deployment.");
  const redirectTo = `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, "")}auth-callback.html`;
  return client.auth.signInWithOtp({ email, options: { emailRedirectTo: redirectTo } });
}

export async function getSession() {
  const client = await getClient();
  if (!client) return null;
  const { data } = await client.auth.getSession();
  return data.session;
}

export async function signOut() {
  const client = await getClient();
  if (!client) return;
  await client.auth.signOut();
}

export async function onAuthStateChange(callback) {
  const client = await getClient();
  if (!client) return () => {};
  const { data } = client.auth.onAuthStateChange((_event, session) => callback(session));
  return () => data.subscription.unsubscribe();
}
