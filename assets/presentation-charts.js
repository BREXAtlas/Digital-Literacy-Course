// Ram Ready Digital Literacy — native SVG and semantic presentation charts.

import { PRESENTATION_CHARTS } from "../data/presentation-data.js";

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function svgText(value) {
  return escapeHtml(value);
}

function renderVerticalBars(chart) {
  const width = 720;
  const height = 310;
  const left = 54;
  const right = 18;
  const top = 26;
  const bottom = 58;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const max = Math.max(100, ...chart.values);
  const slot = plotWidth / chart.values.length;
  const barWidth = Math.min(72, slot * 0.58);
  const bars = chart.values.map((value, index) => {
    const barHeight = (value / max) * plotHeight;
    const x = left + slot * index + (slot - barWidth) / 2;
    const y = top + plotHeight - barHeight;
    return `
      <g class="p-chart__series">
        <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="7"></rect>
        <text class="p-chart__value" x="${x + barWidth / 2}" y="${Math.max(18, y - 8)}" text-anchor="middle">${svgText(value)}%</text>
        <text class="p-chart__label" x="${x + barWidth / 2}" y="${height - 27}" text-anchor="middle">${svgText(chart.labels[index])}</text>
      </g>`;
  }).join("");

  const grid = [0, 25, 50, 75, 100].map((value) => {
    const y = top + plotHeight - (value / max) * plotHeight;
    return `<line x1="${left}" y1="${y}" x2="${width - right}" y2="${y}"></line><text x="${left - 9}" y="${y + 4}" text-anchor="end">${value}%</text>`;
  }).join("");

  return `<svg class="p-chart__svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(chart.accessibleSummary)}">
    <g class="p-chart__grid" aria-hidden="true">${grid}</g>
    ${bars}
  </svg>`;
}

function renderHorizontalBars(chart) {
  const width = 720;
  const height = 290;
  const left = 154;
  const right = 70;
  const top = 28;
  const rowHeight = 72;
  const plotWidth = width - left - right;
  const bars = chart.values.map((value, index) => {
    const y = top + index * rowHeight;
    const barWidth = (value / 100) * plotWidth;
    return `<g class="p-chart__series">
      <text class="p-chart__label" x="${left - 12}" y="${y + 29}" text-anchor="end">${svgText(chart.labels[index])}</text>
      <rect x="${left}" y="${y}" width="${barWidth}" height="42" rx="7"></rect>
      <text class="p-chart__value" x="${Math.min(width - right + 8, left + barWidth + 10)}" y="${y + 28}">${svgText(value)}%</text>
    </g>`;
  }).join("");

  return `<svg class="p-chart__svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(chart.accessibleSummary)}">${bars}</svg>`;
}

function renderPercentageCallout(chart) {
  return `<div class="p-chart__callout" role="img" aria-label="${escapeHtml(chart.accessibleSummary)}">
    <span class="p-chart__callout-value">${escapeHtml(chart.values[0])}%</span>
    <span>${escapeHtml(chart.labels[0])}</span>
  </div>`;
}

function renderRangeCards(chart) {
  return `<div class="p-chart__ranges" role="img" aria-label="${escapeHtml(chart.accessibleSummary)}">
    ${chart.labels.map((label, index) => `<div class="p-chart__range-card">
      <span class="p-chart__range-value">${escapeHtml(chart.values[index].join("–"))}</span>
      <span>${escapeHtml(label)}</span>
    </div>`).join("")}
  </div>`;
}

function renderTimeline(chart) {
  return `<ol class="p-chart__timeline" aria-label="${escapeHtml(chart.accessibleSummary)}">
    ${chart.labels.map((label, index) => `<li><span class="p-chart__timeline-date">${escapeHtml(label)}</span><span>${escapeHtml(chart.values[index])}</span></li>`).join("")}
  </ol>`;
}

function renderDashboard(chart) {
  return `<div class="p-chart__dashboard" role="group" aria-label="${escapeHtml(chart.accessibleSummary)}">
    ${chart.labels.map((label, index) => `<section>
      <h4>${escapeHtml(label)}</h4>
      <ul>${chart.values[index].map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </section>`).join("")}
  </div>`;
}

function renderPlot(chart) {
  switch (chart.type) {
    case "vertical-bar":
    case "comparison-bar":
      return renderVerticalBars(chart);
    case "horizontal-bar":
      return renderHorizontalBars(chart);
    case "percentage-callout":
      return renderPercentageCallout(chart);
    case "range-cards":
      return renderRangeCards(chart);
    case "timeline":
      return renderTimeline(chart);
    case "dashboard":
      return renderDashboard(chart);
    default:
      return "";
  }
}

function renderTable(chart) {
  return `<details class="p-chart__data" data-chart-table>
    <summary>View chart data</summary>
    <div class="p-table-scroll">
      <table>
        <caption>${escapeHtml(chart.title)} — exact plotted data</caption>
        <thead><tr>${chart.tableHeaders.map((header) => `<th scope="col">${escapeHtml(header)}</th>`).join("")}</tr></thead>
        <tbody>${chart.tableRows.map((row) => `<tr>${row.map((cell, index) => index === 0 ? `<th scope="row">${escapeHtml(cell)}</th>` : `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  </details>`;
}

export function renderPresentationChart(container, chart) {
  const titleId = `${chart.id}-title`;
  const altId = `${chart.id}-alt`;
  container.classList.add("p-chart");
  container.dataset.chartRendered = "true";
  container.setAttribute("aria-labelledby", titleId);
  container.setAttribute("aria-describedby", altId);
  container.innerHTML = `
    <h3 id="${titleId}" class="p-chart__title">${escapeHtml(chart.title)}</h3>
    <p class="p-chart__takeaway"><strong>Takeaway:</strong> ${escapeHtml(chart.takeaway)}</p>
    <div class="p-chart__plot">${renderPlot(chart)}</div>
    <p id="${altId}" class="visually-hidden" data-chart-text-alternative>${escapeHtml(chart.accessibleSummary)}</p>
    <figcaption class="p-chart__caption">
      <span data-chart-source><strong>Source:</strong> ${escapeHtml(chart.sourceNote)}</span>
      <span data-chart-limitation><strong>Context / limitation:</strong> ${escapeHtml(chart.limitation)}</span>
    </figcaption>
    ${renderTable(chart)}
  `;
}

export function renderPresentationCharts(root = document) {
  const chartById = new Map(PRESENTATION_CHARTS.map((chart) => [chart.id, chart]));
  for (const container of root.querySelectorAll("[data-chart-id]")) {
    const chart = chartById.get(container.dataset.chartId);
    if (chart) renderPresentationChart(container, chart);
  }
}
