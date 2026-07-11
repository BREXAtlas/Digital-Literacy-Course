# Quickstart

No build step, no package manager, no server framework.

```bash
git clone https://github.com/BREXAtlas/Digital-Literacy-Course.git
cd Digital-Literacy-Course
python3 -m http.server 8080
```

Open `http://localhost:8080/` and:

1. Click **Create your story** to try the vision-casting onboarding (every question can be skipped).
2. Or click **Explore the generic version** to see the standard, non-personalized story.
3. Visit **Digital Foundations** or **AI Quest** to see the story/quest maps.
4. Visit **My Journey** for your local progress dashboard, export/import, and certificates.
5. Visit **Sources** for the full centralized source registry.

To validate the site before deploying:

```bash
node scripts/validate-site.mjs
```

Optional account sync (Supabase) and optional local-model personalization (WebLLM) are both off by default —
see `SUPABASE-SETUP.md` and `docs/OPEN_SOURCE_AI.md`.
