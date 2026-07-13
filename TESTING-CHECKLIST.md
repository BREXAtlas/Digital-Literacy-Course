# Ram Ready Digital Literacy Testing Checklist

Use this checklist before and during the first library pilot.

## Repository and deployment

- [ ] Confirm the repository is `BREXAtlas/Digital-Literacy-Course` without a trailing hyphen.
- [ ] Confirm the active branch is `main`.
- [ ] Confirm GitHub Pages deploys from the current workflow.
- [ ] Confirm the public URL opens: `https://brexatlas.github.io/Digital-Literacy-Course/`.
- [ ] Confirm no service-role key, password, private document, or student record is committed.

## Mobile menu

- [ ] Open the site on an Android phone.
- [ ] Open the site on an iPhone or Safari responsive mode.
- [ ] Tap **Menu**.
- [ ] Confirm the navigation links appear directly below the header.
- [ ] Confirm the button changes to **Close**.
- [ ] Confirm every navigation link works.
- [ ] Confirm tapping outside or pressing Escape closes the menu.
- [ ] Confirm the menu does not appear behind lesson content.

## Create Your Story

- [ ] Complete Steps 1–7.
- [ ] Reach Step 8.
- [ ] Confirm **Next** remains visible.
- [ ] Confirm **Next** is greyed out and disabled.
- [ ] Confirm **Back** works.
- [ ] Confirm **Edit selections** works.
- [ ] Confirm **Begin your story** works.
- [ ] Confirm **Begin with a generic story** works.
- [ ] Leave the display name blank and begin.
- [ ] Confirm the course uses natural `you` and `your` language.
- [ ] Confirm no `{{name}}`, `{{subject}}`, `{{object}}`, or other placeholder appears.
- [ ] Enter a display name and begin again.
- [ ] Confirm the saved name appears naturally.

## Foundations lessons

Test at minimum Episodes 1, 2, 5, 10, 15, and 20.

For each tested episode:

- [ ] Opening narrative renders without a placeholder.
- [ ] Fictional example is clearly labeled and understandable.
- [ ] Lesson figure appears.
- [ ] Figure includes a readable text alternative.
- [ ] Concept section displays four grouped cards.
- [ ] Choice cards are readable on mobile.
- [ ] Selecting **Choose this** displays the result inside that card.
- [ ] Selecting another card closes the first result and opens the second.
- [ ] Knowledge check appears.
- [ ] Every answer gives an explanation.
- [ ] Continue works after all checks are answered.
- [ ] Stars and achievements save.
- [ ] The next episode unlocks.
- [ ] Refreshing preserves progress.

## AI Quest

Test at minimum Quests 1, 5, 10, 15, and 20.

- [ ] No unresolved learner placeholders appear.
- [ ] Lesson figure appears and supports the topic.
- [ ] Concept groups display correctly.
- [ ] Choice results stay inside selected cards.
- [ ] Source drawer works.
- [ ] Knowledge checks and explanations work.
- [ ] Continue saves progress.
- [ ] The next quest unlocks.

## My Journey and achievements

- [ ] Dashboard shows completed episodes and quests.
- [ ] Stars are correct.
- [ ] Achievements are correct.
- [ ] Resume links open the expected lesson.
- [ ] Export progress produces JSON.
- [ ] Import progress restores state.
- [ ] Reset requires confirmation and clears state.
- [ ] Certificate buttons unlock only when appropriate.
- [ ] Financial Futures handoff link works.

## Accessibility

- [ ] Navigate the site using keyboard only.
- [ ] Visible focus appears on every interactive element.
- [ ] Skip link works.
- [ ] Menu exposes accurate expanded/collapsed state.
- [ ] Choice results are announced through an aria-live region.
- [ ] Figures have text alternatives.
- [ ] No lesson requires dragging.
- [ ] No quiz is timed.
- [ ] Reduced-motion preference removes unnecessary animation.
- [ ] Dark mode remains readable.
- [ ] Text zoom at 200% does not hide essential controls.

## Pilot feedback form

- [ ] Open `feedback.html`.
- [ ] Confirm role and course-path validation works.
- [ ] Complete ratings and open comments.
- [ ] Submit the form.
- [ ] Confirm an email is prepared for `lmcgaffie@angelo.edu`.
- [ ] Confirm the structured summary remains visible if no email app opens.
- [ ] Confirm **Copy feedback** works.
- [ ] Confirm **Download feedback JSON** works.
- [ ] Confirm the form does not store responses in local storage.
- [ ] Confirm the privacy warning is visible.

## Browser console

- [ ] No uncaught JavaScript error appears on the landing page.
- [ ] No uncaught JavaScript error appears in onboarding.
- [ ] No uncaught JavaScript error appears in Foundations.
- [ ] No uncaught JavaScript error appears in AI Quest.
- [ ] No missing asset or 404 appears for figures, scripts, or styles.

## Final pilot readiness

- [ ] Run `node scripts/validate-site.mjs`.
- [ ] Confirm validation passes.
- [ ] Confirm GitHub Actions passes.
- [ ] Record the deployed commit SHA.
- [ ] Give testers the public URL and `feedback.html` link.
- [ ] Assign different testers to different lesson ranges.
- [ ] Preserve returned feedback using de-identified pilot IDs.
- [ ] Use `docs/PILOT_FEEDBACK_PROTOCOL.md` to code and prioritize findings.
