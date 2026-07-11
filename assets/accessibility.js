// Ram Ready Digital Literacy — Accessibility Helpers
//
// Shared helpers for skip links, focus management, reduced motion, and
// accessible alternatives to visual maps/dashboards. See docs/ACCESSIBILITY.md.

export function initSkipLink() {
  const skip = document.querySelector(".skip-link");
  const main = document.getElementById("main-content");
  if (!skip || !main) return;
  skip.addEventListener("click", (e) => {
    e.preventDefault();
    main.setAttribute("tabindex", "-1");
    main.focus();
    main.scrollIntoView();
  });
}

export function trapFocus(container) {
  if (!container) return () => {};
  const focusable = container.querySelectorAll(
    'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusable.length === 0) return () => {};
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  function handleKeydown(e) {
    if (e.key !== "Tab") return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  container.addEventListener("keydown", handleKeydown);
  first.focus();
  return () => container.removeEventListener("keydown", handleKeydown);
}

export function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function announce(message) {
  let region = document.getElementById("a11y-live-region");
  if (!region) {
    region = document.createElement("div");
    region.id = "a11y-live-region";
    region.setAttribute("role", "status");
    region.setAttribute("aria-live", "polite");
    region.className = "visually-hidden";
    document.body.appendChild(region);
  }
  region.textContent = "";
  window.setTimeout(() => { region.textContent = message; }, 50);
}

export function renderAccessibleListAlternative(container, items, { getLabel, getState }) {
  if (!container) return;
  const list = document.createElement("ol");
  list.className = "accessible-map-list";
  for (const item of items) {
    const li = document.createElement("li");
    const state = getState(item);
    li.textContent = `${getLabel(item)} — ${state}`;
    list.appendChild(li);
  }
  container.innerHTML = "";
  container.appendChild(list);
}
