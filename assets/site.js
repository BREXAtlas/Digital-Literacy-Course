// Ram Ready Digital Literacy — Shared Site Shell
// Header/nav rendering, mobile menu, guest/account indicator, footer.

import { loadState } from "./profile-engine.js";
import { initSkipLink } from "./accessibility.js";
import { isAccountModeAvailable, getSession } from "./auth-sync.js";

const NAV_ITEMS = [
  { href: "index.html", label: "Home" },
  { href: "foundations.html", label: "Digital Foundations" },
  { href: "ai-quest.html", label: "AI Quest" },
  { href: "journey.html", label: "My Journey" },
  { href: "achievements.html", label: "Achievements" },
  { href: "sources.html", label: "Sources" },
  { href: "instructor-guide.html", label: "Instructor Guide" },
  { href: "feedback.html", label: "Pilot Feedback" }
];

export function basePath() {
  // Works whether hosted at domain root or under /Digital-Literacy-Course/
  const path = window.location.pathname;
  return path.slice(0, path.lastIndexOf("/") + 1);
}

function setMenuState(toggle, nav, open) {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "Close" : "Menu";
  nav.classList.toggle("site-nav--open", open);
  document.body.classList.toggle("nav-is-open", open);
}

export function renderHeader(activeHref) {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;
  const base = basePath();

  const nav = NAV_ITEMS.map((item) => {
    const isActive = activeHref === item.href;
    return `<a href="${base}${item.href}"${isActive ? ' aria-current="page"' : ""}>${item.label}</a>`;
  }).join("");

  header.innerHTML = `
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <div class="site-header__bar">
      <a class="site-header__brand" href="${base}index.html">
        <span class="brand-mark" aria-hidden="true"></span>
        Ram Ready Digital Literacy
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open main menu">Menu</button>
      <nav id="site-nav" class="site-nav" aria-label="Primary">
        ${nav}
        <a href="${base}profile.html" class="site-nav__profile" data-account-indicator>Guest</a>
      </nav>
    </div>
  `;

  const toggle = header.querySelector(".nav-toggle");
  const navEl = header.querySelector(".site-nav");

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setMenuState(toggle, navEl, open);
    toggle.setAttribute("aria-label", open ? "Close main menu" : "Open main menu");
  });

  navEl.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuState(toggle, navEl, false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenuState(toggle, navEl, false);
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (toggle.getAttribute("aria-expanded") !== "true") return;
    if (!header.contains(event.target)) setMenuState(toggle, navEl, false);
  });

  const desktopQuery = window.matchMedia("(min-width: 760px)");
  desktopQuery.addEventListener?.("change", (event) => {
    if (event.matches) setMenuState(toggle, navEl, false);
  });

  updateAccountIndicator();
}

async function updateAccountIndicator() {
  const indicator = document.querySelector("[data-account-indicator]");
  if (!indicator) return;
  const available = await isAccountModeAvailable();
  if (!available) {
    indicator.textContent = "Guest mode";
    return;
  }
  const session = await getSession();
  indicator.textContent = session ? (session.user.email || "Account") : "Guest";
}

export function renderFooter() {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer) return;
  const base = basePath();
  footer.innerHTML = `
    <p>
      Ram Ready Digital Literacy is an independent, open-source educational pilot.
      It is not official Angelo State University credit, policy, or an official
      AI-use policy. See <a href="${base}disclaimer.html">full disclaimer</a>
      and <a href="${base}privacy.html">privacy model</a>.
    </p>
    <p>
      <a href="${base}feedback.html">Send pilot feedback</a> ·
      <a href="${base}BRANDING-NOTICE.md">Branding notice</a> ·
      <a href="https://github.com/BREXAtlas/Digital-Literacy-Course" target="_blank" rel="noopener noreferrer">Source on GitHub</a> ·
      <a href="https://brexatlas.github.io/Financial-Literacy-Course/" target="_blank" rel="noopener noreferrer">Continue to Ram Ready Financial Futures</a>
    </p>
  `;
}

export function initPage(activeHref) {
  initSkipLink();
  renderHeader(activeHref);
  renderFooter();
}

export function currentProfile() {
  return loadState().profile;
}
