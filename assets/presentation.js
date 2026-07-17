// Ram Ready Digital Literacy - presentation interaction controller.

import { initPage } from "./site.js";
import { renderPresentationCharts } from "./presentation-charts.js";
import { PRESENTATION_SLIDES } from "../data/presentation-data.js";
import { PRESENTATION_SOURCES, getPresentationSources } from "../data/presentation-sources.js";

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function linkifyApa(apaHtml) {
  return apaHtml.replace(/https:\/\/[^\s<]+/g, (url) =>
    `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
  );
}

function renderReferences() {
  const container = document.querySelector("[data-reference-list]");
  if (!container) return;
  const sorted = [...PRESENTATION_SOURCES].sort((a, b) => a.apa.localeCompare(b.apa));
  container.innerHTML = sorted.map((source) =>
    `<p class="p-reference" data-reference-id="${escapeHtml(source.id)}">${linkifyApa(source.apaHtml)}</p>`
  ).join("");
}

function renderSourceCards(sources) {
  if (!sources.length) return "<p>No external evidence sources are attached to this slide.</p>";
  return sources.map((source) => {
    const links = [];
    if (source.url) links.push(`<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">Open source</a>`);
    if (source.doi && source.doi !== source.url) links.push(`<a href="${escapeHtml(source.doi)}" target="_blank" rel="noopener noreferrer">Open DOI</a>`);
    return `<article class="p-source-card">
      <p class="p-source-card__meta"><strong>${escapeHtml(source.shortCitation)}</strong> · ${escapeHtml(source.sourceType)}${source.peerReviewed ? " · Peer reviewed" : ""}</p>
      <h3>${escapeHtml(source.title)}</h3>
      <p class="p-source-card__meta">${escapeHtml(source.authorOrOrganization)} · ${escapeHtml(source.year)} · Verified ${escapeHtml(source.verifiedDate)}</p>
      <p><strong>Why it supports this slide:</strong> ${escapeHtml(source.support)}</p>
      <p><strong>Limitation / context:</strong> ${escapeHtml(source.limitation)}</p>
      ${links.length ? `<p>${links.join(" · ")}</p>` : ""}
    </article>`;
  }).join("");
}

function showDialog(dialog) {
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

function closeDialog(dialog) {
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
}

function isInteractiveTarget(target) {
  return Boolean(target.closest("a, button, input, select, textarea, summary, details, [contenteditable='true']"));
}

function slideIndexFromHash(slides) {
  const id = window.location.hash.slice(1);
  const index = slides.findIndex((slide) => slide.id === id);
  return index >= 0 ? index : 0;
}

function initPresentation() {
  const slides = [...document.querySelectorAll("[data-slide]")];
  const controls = document.querySelector("[data-presentation-controls]");
  const startButton = document.querySelector("[data-start-presentation]");
  const announcer = document.querySelector("[data-slide-announcer]");
  const numberDisplay = controls.querySelector("[data-slide-number]");
  const progress = controls.querySelector("[data-slide-progress]");
  const previousButton = controls.querySelector("[data-previous-slide]");
  const nextButton = controls.querySelector("[data-next-slide]");
  const notesButton = controls.querySelector("[data-toggle-notes]");
  const fullscreenButton = controls.querySelector("[data-toggle-fullscreen]");
  const overviewDialog = document.querySelector("[data-slide-overview]");
  const overviewGrid = document.querySelector("[data-overview-grid]");
  const sourceDialog = document.querySelector("[data-source-drawer]");
  const sourceContent = document.querySelector("[data-source-drawer-content]");
  const sourceTitle = document.getElementById("source-drawer-title");
  let currentIndex = slideIndexFromHash(slides);
  let notesVisible = false;

  if (slides.length !== PRESENTATION_SLIDES.length) {
    console.error(`Presentation data lists ${PRESENTATION_SLIDES.length} slides, but the page contains ${slides.length}.`);
  }

  overviewGrid.innerHTML = PRESENTATION_SLIDES.map((slide, index) =>
    `<button type="button" data-overview-slide="${index}">
      <span class="p-overview__number">Slide ${String(index + 1).padStart(2, "0")}</span>
      <span>${escapeHtml(slide.title)}</span>
    </button>`
  ).join("");

  function updateOverviewCurrent() {
    for (const [index, button] of [...overviewGrid.querySelectorAll("[data-overview-slide]")].entries()) {
      if (index === currentIndex) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    }
  }

  function setNotesVisible(visible) {
    notesVisible = visible;
    notesButton.setAttribute("aria-pressed", String(visible));
    notesButton.textContent = visible ? "Hide notes" : "Show notes";
    slides.forEach((slide, index) => {
      const notes = slide.querySelector("[data-presenter-notes]");
      const show = visible && index === currentIndex && document.body.classList.contains("is-presenting");
      notes.hidden = !show;
      notes.setAttribute("aria-hidden", String(!show));
    });
  }

  function updateControls() {
    const oneBased = currentIndex + 1;
    numberDisplay.textContent = `${oneBased} / ${slides.length}`;
    progress.max = slides.length;
    progress.value = oneBased;
    progress.textContent = `${oneBased} of ${slides.length}`;
    progress.setAttribute("aria-valuetext", `Slide ${oneBased} of ${slides.length}`);
    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
    updateOverviewCurrent();
  }

  function updateHash() {
    const hash = `#${slides[currentIndex].id}`;
    if (window.location.hash !== hash) history.replaceState(null, "", hash);
  }

  function showSlide(index, { focus = true, announce = true } = {}) {
    currentIndex = Math.max(0, Math.min(index, slides.length - 1));
    if (document.body.classList.contains("is-presenting")) {
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === currentIndex;
        slide.hidden = !active;
        if (active) slide.setAttribute("aria-current", "step");
        else slide.removeAttribute("aria-current");
      });
      setNotesVisible(notesVisible);
      if (focus) {
        const heading = slides[currentIndex].querySelector("h2");
        heading?.setAttribute("tabindex", "-1");
        heading?.focus({ preventScroll: true });
      }
    } else {
      slides.forEach((slide, slideIndex) => {
        if (slideIndex === currentIndex) slide.setAttribute("aria-current", "step");
        else slide.removeAttribute("aria-current");
      });
    }
    updateControls();
    updateHash();
    if (announce) announcer.textContent = `Slide ${currentIndex + 1} of ${slides.length}: ${PRESENTATION_SLIDES[currentIndex].title}`;
  }

  function enterPresentation() {
    document.body.classList.add("is-presenting");
    controls.hidden = false;
    showSlide(currentIndex, { focus: true });
  }

  async function exitPresentation() {
    if (document.fullscreenElement) await document.exitFullscreen().catch(() => {});
    document.body.classList.remove("is-presenting");
    controls.hidden = true;
    setNotesVisible(false);
    slides.forEach((slide) => {
      slide.hidden = false;
      slide.removeAttribute("aria-current");
    });
    slides[currentIndex].setAttribute("aria-current", "step");
    slides[currentIndex].scrollIntoView({ block: "start" });
    startButton.focus({ preventScroll: true });
  }

  async function toggleFullscreen() {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  }

  function openOverview() {
    updateOverviewCurrent();
    showDialog(overviewDialog);
    overviewGrid.querySelector(`[data-overview-slide="${currentIndex}"]`)?.focus();
  }

  function openSources(button) {
    const slide = button.closest("[data-slide]");
    const ids = (slide.dataset.sourceIds || "").split(/\s+/).filter(Boolean);
    const slideNumber = Number(slide.dataset.slideNumber);
    sourceTitle.textContent = `Sources for Slide ${slideNumber}`;
    sourceContent.innerHTML = renderSourceCards(getPresentationSources(ids));
    showDialog(sourceDialog);
    sourceDialog.querySelector("[data-close-sources]")?.focus();
  }

  startButton.addEventListener("click", enterPresentation);
  previousButton.addEventListener("click", () => showSlide(currentIndex - 1));
  nextButton.addEventListener("click", () => showSlide(currentIndex + 1));
  notesButton.addEventListener("click", () => setNotesVisible(!notesVisible));
  fullscreenButton.addEventListener("click", () => toggleFullscreen().catch(() => {
    announcer.textContent = "Fullscreen is not available in this browser.";
  }));
  controls.querySelector("[data-open-overview]").addEventListener("click", openOverview);
  controls.querySelector("[data-exit-presentation]").addEventListener("click", exitPresentation);
  document.querySelectorAll("[data-print-presentation]").forEach((button) => button.addEventListener("click", () => window.print()));
  document.querySelectorAll("[data-open-sources]").forEach((button) => button.addEventListener("click", () => openSources(button)));
  document.querySelector("[data-close-overview]").addEventListener("click", () => closeDialog(overviewDialog));
  document.querySelector("[data-close-sources]").addEventListener("click", () => closeDialog(sourceDialog));

  overviewGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-overview-slide]");
    if (!button) return;
    closeDialog(overviewDialog);
    showSlide(Number(button.dataset.overviewSlide));
  });

  document.addEventListener("fullscreenchange", () => {
    const active = Boolean(document.fullscreenElement);
    fullscreenButton.textContent = active ? "Exit fullscreen" : "Fullscreen";
    fullscreenButton.setAttribute("aria-label", active ? "Exit fullscreen" : "Enter fullscreen");
  });

  window.addEventListener("hashchange", () => {
    const index = slideIndexFromHash(slides);
    if (index !== currentIndex) showSlide(index, { focus: document.body.classList.contains("is-presenting"), announce: false });
  });

  document.addEventListener("keydown", (event) => {
    if (!document.body.classList.contains("is-presenting")) return;
    if (document.querySelector("dialog[open]")) return;
    const interactive = isInteractiveTarget(event.target);
    if ((event.key === "ArrowRight" || event.key === "PageDown") && !interactive) {
      event.preventDefault(); showSlide(currentIndex + 1);
    } else if ((event.key === "ArrowLeft" || event.key === "PageUp") && !interactive) {
      event.preventDefault(); showSlide(currentIndex - 1);
    } else if ((event.key === " " || event.code === "Space") && !interactive) {
      event.preventDefault(); showSlide(currentIndex + 1);
    } else if (event.key === "Home" && !interactive) {
      event.preventDefault(); showSlide(0);
    } else if (event.key === "End" && !interactive) {
      event.preventDefault(); showSlide(slides.length - 1);
    } else if (event.key.toLowerCase() === "n" && !interactive) {
      event.preventDefault(); setNotesVisible(!notesVisible);
    } else if (event.key.toLowerCase() === "o" && !interactive) {
      event.preventDefault(); openOverview();
    } else if (event.key === "Escape") {
      event.preventDefault();
      if (document.fullscreenElement) document.exitFullscreen();
      else exitPresentation();
    }
  });

  if (new URLSearchParams(window.location.search).get("notes") === "1") {
    document.body.classList.add("notes-print");
  }

  showSlide(currentIndex, { focus: false, announce: false });
  if (window.location.hash) requestAnimationFrame(() => slides[currentIndex].scrollIntoView({ block: "start" }));
}

initPage("presentation.html");
renderPresentationCharts();
renderReferences();
initPresentation();
