// Ram Ready Digital Literacy — Source Drawer Renderer
//
// Renders "Sources for this lesson" chips/drawers from the centralized
// source registry. All external links open in a new tab with
// rel="noopener noreferrer". See docs/SOURCE_POLICY.md.

import { getSourcesByIds } from "../data/source-registry.js";

export function renderSourceDrawer(container, sourceIds) {
  if (!container) return;
  const sources = getSourcesByIds(sourceIds);
  container.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = "Sources for this lesson";
  container.appendChild(heading);

  if (sources.length === 0) {
    const p = document.createElement("p");
    p.textContent = "No external sources are attached to this section.";
    container.appendChild(p);
    return;
  }

  const list = document.createElement("ul");
  list.className = "source-list";
  for (const source of sources) {
    const li = document.createElement("li");
    li.className = "source-chip";
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = `${source.title} — ${source.org}`;
    li.appendChild(link);
    const meta = document.createElement("span");
    meta.className = "source-chip__meta";
    meta.textContent = ` (${source.classification}, reviewed ${source.reviewed})`;
    li.appendChild(meta);
    if (source.notes) {
      const note = document.createElement("p");
      note.className = "source-chip__note";
      note.textContent = source.notes;
      li.appendChild(note);
    }
    list.appendChild(li);
  }
  container.appendChild(list);
}

export function renderSourceChips(sourceIds) {
  const sources = getSourcesByIds(sourceIds);
  return sources.map((s) => `<span class="source-chip-inline">${escapeHtml(s.title)}</span>`).join(" ");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
