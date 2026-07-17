# Presentation guide

## Page purpose and audience

[`presentation.html`](../presentation.html) is a native, website-based working-session presentation for Porter
Henderson Library on Tuesday, July 21, 2026, from 8:00 to 10:00 a.m. It supports a discussion among Lawrence
McGaffie, doctoral student and project creator; Emily Haynes, MLS, Instruction Librarian; Aubrey Madler, PhD,
MLS, Executive Director of Library Services; and Kim Wirth, MLIS, Assistant Director of Academic Engagement.

The working outcome is deliberately limited: determine whether Porter Henderson Library should help shape and
test a small, evidence-generating Ram Ready Digital Literacy pilot. The deck is not a request for immediate
institutional adoption, and the proposed timeline, sample sizes, and decision thresholds are discussion drafts,
not approvals or validated institutional benchmarks.

The live demonstration uses only Ram Ready Digital Literacy. Ram Ready Financial Futures appears only as
evidence that the open-source shell can support another literacy domain, as a next-course link, and as broader
ecosystem context. Do not demonstrate it live, embed it, or substitute it for a Digital Literacy example.

## Page modes and stable links

The initial normal webpage mode keeps the shared site header and footer visible and presents all slides in
vertical reading order. Every section has a stable anchor from `#slide-01` through `#slide-21`. A URL such as
`presentation.html#slide-12` opens that slide directly.

Select **Start Presentation** to enter the one-slide-at-a-time mode. On desktop, the active slide uses a 16:9
frame; phones retain a readable vertical layout. Presentation mode hides the normal site header, never
auto-advances, and always provides an exit control. **View all slides** or the overview returns to an all-slide
view without changing the slide content.

## Slide sequence

The sequence moves from general evidence to the specific prototype, a bounded pilot, possible library roles,
and decisions. Do not merge, omit, or reorder slides; the APA references remain a separate final slide.

| Slide | Title | Working purpose or visual |
| --- | --- | --- |
| 1 | From Access to Applied Literacy | State the purpose and three outcomes; show the library connection diagram. |
| 2 | Today's Working Session | Set the 8:00-10:00 agenda as a visual timeline. |
| 3 | The Business Task | Frame Need, Fit, and Evidence as decisions rather than assumptions. |
| 4 | Literacy Extends Beyond Reading | Center applied student judgment in the broad literacy ecosystem. |
| 5 | Applied Problem Solving Is Not Automatic | Show the NCES adaptive-problem-solving age-group chart and its national-data limitation. |
| 6 | College Research Changes the Environment | Bridge existing search habits to college research processes and authority expectations. |
| 7 | AI Is Already Part of Academic Life | Compare weekly AI use by role and distinguish national findings from local usage. |
| 8 | Digital Systems Shape Other Literacies | Show three brief FINRA signals; treat Financial Futures only as later ecosystem proof. |
| 9 | One Entry Point Will Not Fit Every Learner | Compare four strengths-based learner pathways without deficit framing. |
| 10 | The Library Can Coordinate Without Owning Everything | Use the library hub-and-spoke to show coordination across existing expertise. |
| 11 | A Working Open-Source Prototype Already Exists | Inventory the Digital Literacy prototype and link its maps and feedback route. |
| 12 | One Complete Learning Cycle | Demonstrate a Digital Literacy scenario-to-feedback cycle in guest mode. |
| 13 | The Pilot Is a Question, Not a Conclusion | Present the ten questions the pilot must answer. |
| 14 | Start Small Enough to Learn | Compare minimum and recommended participation; label both as proposed. |
| 15 | A Six-Week Formative Pilot | Show the proposed July-September timeline and approval caveat. |
| 16 | What Would Count as Useful Evidence? | Organize student, learning, and professional-review evidence plus draft criteria. |
| 17 | This Is Both Technical and Adaptive Work | Compare technical and adaptive work and show the adaptive experiment cycle. |
| 18 | Library Participation Can Scale With the Evidence | Compare four bounded participation options without treating any as a commitment. |
| 19 | What Do You See From the Library's Perspective? | Use ten prompts and the non-storing discussion worksheet. |
| 20 | What Is the Smallest Responsible Test? | Seek five decisions and link feedback, testing, and course-home routes. |
| 21 | References | Provide the complete, alphabetized APA 7 registry output. |

Suggested pacing is five minutes for slides 1-3; 15 minutes for slides 4-10; 20-25 minutes for slides 11-12,
including the live demonstration; 15 minutes for slides 13-16; 10 minutes for slides 17-18; and 35-40 minutes
for discussion and decisions on slides 19-20. Slide 21 is for reference and follow-up rather than a narrated
section.

## Presenter controls

- **Previous** and **Next** move one slide and update the slide number, progress indicator, live-region
  announcement, `aria-current` state, and URL hash.
- **Fullscreen** requests browser fullscreen for the presentation; browser policy may require a user gesture.
- **Show/Hide presenter notes** reveals or hides notes for every slide. Notes are hidden from screen readers
  while visually hidden.
- **Show all slides** opens the overview/vertical review without losing the active slide.
- **Print / Save as PDF** opens the browser print dialog.
- **Exit presentation** restores the normal webpage, site header, and all-slide review.

The slide counter and progress indicator are status, not navigation targets. No control starts a timer, stores a
discussion response, or advances automatically.

## Keyboard controls

| Key | Action |
| --- | --- |
| `Right Arrow` or `Page Down` | Next slide |
| `Left Arrow` or `Page Up` | Previous slide |
| `Space` | Next slide unless focus is in an interactive control |
| `Home` | First slide |
| `End` | Last slide |
| `Escape` | Exit fullscreen first, or exit presentation mode |
| `N` | Show or hide presenter notes |
| `O` | Open the slide overview |

Keyboard handling must not override form entry, buttons, links, or other interactive elements and must never
trap focus. After entering, exiting, or closing a panel, return focus to a logical visible control.

## Live demonstration runbook

Slide 12 is the only live course demonstration. Its buttons use complete public Digital Literacy URLs and load
in the current tab so popup blocking cannot produce a blank tab. Use the browser's Back command to return to
the presentation:

- `https://brexatlas.github.io/Digital-Literacy-Course/foundations.html?ep=ep09&generic=1` for source selection
- `https://brexatlas.github.io/Digital-Literacy-Course/ai-quest.html?q=q11&generic=1` for AI citation and disclosure
- `https://brexatlas.github.io/Digital-Literacy-Course/feedback.html` for pilot feedback

Begin in guest mode. Show the lesson visual, choose one decision, point out the consequence inside the selected
card, complete the knowledge check, open the source drawer, and finish at the feedback form. Do not enter real
student information, private documents, passwords, or institutional records. If a route identifier changes,
inspect the current curriculum data and choose the closest matching lesson before the meeting. Do not add a
Financial Futures demonstration button.

## Update slide text and presenter notes

Visible slide content and presenter notes are maintained in `presentation.html`. Slide titles, source mappings,
and chart data are maintained in `data/presentation-data.js`; presentation interactions are in
`assets/presentation.js`. Keep the IDs exactly `slide-01` through `slide-21` so hashes,
source mappings, validation, and direct links continue to work.

When editing a slide:

1. Find its stable section `id` in `presentation.html` and the matching slide registry item in `data/presentation-data.js`.
2. Keep one title, one-sentence takeaway, three to five short supporting points, a purposeful visual when
   applicable, and a short source footer. Move detailed explanation out of visible content and into notes.
3. Preserve the slide's evidence and chart source IDs. If a claim changes, reverify its source and update the
   registry before editing the claim.
4. Maintain presenter notes for every slide: suggested speaking points, expected time, transition, source
   reminders, an important caveat, and a discussion prompt when applicable.
5. Reload both the all-slide view and presentation mode, then test the direct slide hash.

Keep strengths-based language, distinguish national evidence from an Angelo State finding, and never imply
that the pilot is approved or that a proposed sample can establish effectiveness.

## Update chart data

Quantitative values belong in the structured chart records in `data/presentation-data.js`, not inside SVG path
or HTML drawing markup. Each chart record retains its ID, slide ID, title, type, labels, values, units, source
IDs, takeaway, limitation, and accessible summary.

To revise a chart:

1. Verify the value and population against the primary source.
2. Update the structured labels and values without changing a chart ID that existing markup uses.
3. Update its direct labels, visible takeaway, source note, limitation/context note, and text alternative.
4. Confirm the semantic data table displays every plotted value and unit exactly; a visual callout with a
   quantitative value also needs an accessible equivalent.
5. Confirm every `sourceId` exists in `data/presentation-sources.js` and lists the slide in its `slideIds`.
6. Run validation and compare the visual, labels, table, and text alternative at desktop and mobile widths.

Every quantitative chart must retain a visible title, plain-language takeaway, source note, limitation, exact
data table, direct value labels, and text alternative. Do not replace a semantic SVG/HTML chart with Canvas or
generated random data.

## Add or update a source

Presentation evidence uses the separate registry in `data/presentation-sources.js`. A source record includes:

```text
id, shortCitation, apa, title, authorOrOrganization, year, url, doi,
sourceType, peerReviewed, usEvidence, slideIds, verifiedDate, notes
```

Use this workflow:

1. Open the publisher, organization, DOI, or journal page and verify the title, responsible author or
   organization, publication date, report or journal details, URL, and the exact claim being cited.
2. Use the responsible organization as author when no individual author is listed. Use `n.d.` only when no
   publication date is available. Never infer a volume, issue, page range, author, year, DOI, or report title.
3. Prefer HTTPS and express a DOI as `https://doi.org/...`. External new-tab links must include
   `rel="noopener noreferrer"`.
4. Add a stable unique ID, record `verifiedDate: "2026-07-16"` for sources checked in this implementation (or
   the actual later review date), and map every use in `slideIds`.
5. Add the source ID to the relevant slide and chart record. Evidence-slide source drawers must show the short
   citation, title, organization or journal, year, secure link, relevance, limitation/context, and verification
   date.
6. Remove superseded source IDs only after no slide or chart refers to them; do not leave placeholder or unused
   registry entries.

The EdTechReview file-handling article is a project catalyst, not sole prevalence evidence. National NCES,
D2L/Tyton, and FINRA findings must remain qualified as national or study-specific signals rather than local
Angelo State measurements. Follow [`SOURCE_POLICY.md`](SOURCE_POLICY.md) and
[`SOURCE_REVIEW_CHECKLIST.md`](SOURCE_REVIEW_CHECKLIST.md) for the broader course policy.

## Regenerate the APA 7 references

Slide 21 is registry-driven; the site does not scrape or invent citation metadata at runtime. After source
verification, update the record's complete `apa` value and its component metadata in
`data/presentation-sources.js`. Use the organization as author when appropriate; include an HTTPS DOI, journal
title and volume styling, and verified issue and page range for journal articles. Reload the page so the
reference grid is rebuilt from the registry, then confirm alphabetical order, hanging indents, active secure
links, two columns on wide screens, one column on small screens, and the complete untruncated list in print.

Every source ID cited by slide text or chart data must render on slide 21, and no unused placeholder reference
should appear.

## Accessibility and interaction testing

Run `node scripts/validate-site.mjs`, then serve the repository locally with `python3 -m http.server 8080`.
Test at 360 x 800, 390 x 844, 768 x 1024, 1366 x 768, and 1920 x 1080. At minimum, verify:

- The skip link, semantic slide headings, visible focus states, large touch targets, slide live region, and
  current-slide state work in both modes.
- Tab and Shift+Tab reach every control and source drawer; all keyboard shortcuts work without capturing input
  from interactive elements or trapping focus.
- Direct hashes load the correct slide, changing slides updates the hash, and refreshing a hash preserves it.
- Reduced-motion mode removes nonessential motion, dark mode remains readable, and no meaning depends on color.
- The page has no timed interaction, required audio, inaccessible drag action, or horizontal scrolling.
- Presenter notes are absent from the accessibility tree while hidden and readable when displayed.
- Every chart has the required title, takeaway, source, limitation, direct labels, text alternative, and exact
  semantic table; every conceptual diagram has a text alternative.
- Source drawers identify evidence and its limits, external links are secure, and the APA list is complete.
- Start, Previous, Next, Space, Home, End, Escape, notes, overview, fullscreen, print, and exit all work; browser
  console output remains free of errors.
- The Digital Literacy demonstration, Pilot Feedback, Testing Checklist, Instructor Guide, and course-home links
  resolve under `/Digital-Literacy-Course/`; no iframe or Financial Futures live demonstration appears.

The discussion worksheet on slide 19 is intentionally local and printable. Confirm that typing in it does not
send or automatically store a response.

## Print or save as PDF

Select **Print / Save as PDF** to call the browser print dialog. Print CSS must show all 21 slides on a white
background, keep one slide per page where practical, preserve chart labels and complete source notes, expand the
full reference list, avoid clipped charts, and hide site navigation and interactive controls.

Presenter notes remain hidden in ordinary print output. To include them, open
`presentation.html?notes=1` (a slide hash may follow the query) before printing. Check print preview at Letter
and A4 sizes before sharing a PDF, especially slides with charts, the pilot timeline, and the full references.

## Diagnose before prescribing

The course is a working prototype, not evidence that the library has a confirmed local problem or should own
the response. Slides 3, 13, 16, 19, and 20 deliberately test need, fit, evidence, duplication, maintenance,
ownership, and the smallest responsible next action. Stakeholders may recommend revision, another diagnostic
step, continuation, integration elsewhere, pausing, or discontinuation. Each is a legitimate evidence-based
outcome.

Adaptive Leadership is therefore a provisional discussion lens, not a settled diagnosis. Broken links,
navigation, accessibility defects, and source errors are technical work; responsibility, legitimacy, competing
expectations, cross-unit coordination, and sustainability may be adaptive work. Library, faculty, student, IT,
accessibility, advising, and student-success stakeholders must first help confirm which challenge exists, who
experiences it, which current services address it, and whether adaptation is actually required. Only then
should participants decide whether that lens is useful and what, if anything, to test next.
