// Five-brain usefulness ratings are private, optional, and independent from
// completion, stars, achievements, certificates, and lesson sequencing.

import { announce } from "./accessibility.js";
import { getLessonRating, setLessonRating } from "./profile-engine.js";

let controlCount = 0;
const RATING_MEANINGS = ["Not useful", "Slightly useful", "Useful", "Very useful", "Extremely useful"];

function clampRating(value) {
  return Math.min(5, Math.max(1, Number(value) || 1));
}

export function mountLessonRating(container, { lessonId, completed }) {
  if (!container) return null;
  controlCount += 1;
  const instanceId = `lesson-rating-${lessonId}-${controlCount}`;
  let isCompleted = Boolean(completed);
  let currentRating = getLessonRating(lessonId);

  container.innerHTML = `
    <div class="lesson-rating" data-lesson-rating="${lessonId}">
      <span class="lesson-rating__label" id="${instanceId}-label">Rate usefulness</span>
      <div class="lesson-rating__buttons" role="radiogroup" aria-labelledby="${instanceId}-label" aria-describedby="${instanceId}-status"></div>
      <span class="lesson-rating__status" id="${instanceId}-status" aria-live="polite"></span>
    </div>`;

  const group = container.querySelector(".lesson-rating__buttons");
  const status = container.querySelector(".lesson-rating__status");
  const buttons = [];

  for (let rating = 1; rating <= 5; rating += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "brain-rating-button";
    button.dataset.rating = String(rating);
    button.setAttribute("role", "radio");
    button.setAttribute("aria-label", `Rate this lesson ${rating} out of 5: ${RATING_MEANINGS[rating - 1]}`);
    button.innerHTML = `<span class="brain-rating-button__icon" aria-hidden="true">🧠</span><span class="brain-rating-button__number" aria-hidden="true">${rating}</span>`;
    button.addEventListener("click", () => choose(rating));
    button.addEventListener("keydown", handleKeydown);
    group.appendChild(button);
    buttons.push(button);
  }

  function render() {
    group.setAttribute("aria-disabled", String(!isCompleted));
    buttons.forEach((button, index) => {
      const value = index + 1;
      const isSelected = currentRating === value;
      button.disabled = !isCompleted;
      button.setAttribute("aria-checked", String(isSelected));
      button.classList.toggle("is-filled", currentRating !== null && value <= currentRating);
      button.classList.toggle("is-selected", isSelected);
      button.tabIndex = isCompleted && (isSelected || (currentRating === null && value === 1)) ? 0 : -1;
    });
    status.textContent = !isCompleted
      ? "Complete this lesson before rating it."
      : currentRating === null
        ? "No usefulness rating yet."
        : `Your rating: ${currentRating} of 5 brains.`;
  }

  function choose(rating, { focus = false } = {}) {
    if (!isCompleted) return;
    currentRating = clampRating(rating);
    setLessonRating(lessonId, currentRating);
    render();
    if (focus) buttons[currentRating - 1].focus();
    const message = `Your rating: ${currentRating} of 5 brains.`;
    announce(message);
    document.dispatchEvent(new CustomEvent("lessonratingchange", {
      detail: { lessonId, rating: currentRating }
    }));
  }

  function handleKeydown(event) {
    if (!isCompleted) return;
    const value = Number(event.currentTarget.dataset.rating);
    let next = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = value === 5 ? 1 : value + 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = value === 1 ? 5 : value - 1;
    if (event.key === "Home") next = 1;
    if (event.key === "End") next = 5;
    if (next === null) return;
    event.preventDefault();
    choose(next, { focus: true });
  }

  render();
  return {
    getRating: () => currentRating,
    setCompleted(value) {
      isCompleted = Boolean(value);
      render();
    }
  };
}
