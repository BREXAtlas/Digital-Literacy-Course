// Ram Ready Digital Literacy — Browser-Generated Certificates
//
// Opens a print-friendly certificate in a new tab. The learner uses the
// browser's own "Print to PDF" option — no PDF library or external service
// is used, so nothing is uploaded anywhere.

const CERT_COPY = {
  foundations: {
    path: "University Digital Literacy Foundations",
    skills: [
      "College file systems, naming, and version control",
      "Professional academic communication and calendar readiness",
      "Research, source evaluation, and citation integrity",
      "Account security, phishing recognition, and private-document handling",
      "Sharing permissions, weekly digital routines, and professional recovery"
    ]
  },
  "ai-quest": {
    path: "AI Digital Literacy Quest",
    skills: [
      "How generative AI works and why fluent output still needs verification",
      "Prompting, tutoring use, and research support without losing authorship",
      "Academic integrity, disclosure, and citation of AI use",
      "Synthetic media verification and responsible tool matching",
      "Coding assistants, workflows, and agent permission boundaries"
    ]
  },
  full: {
    path: "Full Ram Ready Digital Literacy",
    skills: [
      "Complete University Digital Literacy Foundations",
      "Complete AI Digital Literacy Quest",
      "Applied digital-readiness habits for college, work, and responsible AI use"
    ]
  }
};

export function generateCertificate({ pathId, displayName }) {
  const copy = CERT_COPY[pathId];
  if (!copy) throw new Error(`Unknown certificate path: ${pathId}`);
  const name = displayName?.trim() || "Guest Learner";
  const date = new Date().toISOString().slice(0, 10);

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Certificate — ${escapeHtml(copy.path)}</title>
<style>
  body { font-family: Georgia, 'Times New Roman', serif; margin: 0; padding: 3rem; background: #fff; color: #1a1a1a; }
  .cert { border: 6px solid #245397; padding: 3rem; text-align: center; max-width: 800px; margin: 0 auto; }
  .cert h1 { color: #245397; font-size: 1.6rem; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 0.25rem; }
  .cert .gold-rule { height: 4px; width: 120px; background: #F0C33B; margin: 1rem auto; }
  .cert .name { font-size: 2rem; margin: 1.5rem 0 0.5rem; }
  .cert .path { font-size: 1.25rem; color: #245397; margin-bottom: 1.5rem; }
  .cert ul { text-align: left; display: inline-block; margin: 0 auto 1.5rem; }
  .cert .notice { font-size: 0.75rem; color: #555; margin-top: 2rem; line-height: 1.5; }
  .cert .date { margin-top: 1rem; font-size: 0.9rem; }
  @media print { body { padding: 0; } }
</style>
</head>
<body>
  <div class="cert">
    <h1>Ram Ready Digital Literacy</h1>
    <div class="gold-rule"></div>
    <p>This certifies that</p>
    <p class="name">${escapeHtml(name)}</p>
    <p class="path">has completed ${escapeHtml(copy.path)}</p>
    <p><strong>Skills covered:</strong></p>
    <ul>${copy.skills.map((skill) => `<li>${escapeHtml(skill)}</li>`).join("")}</ul>
    <p class="date">Completion date: ${date}</p>
    <p class="notice">
      Ram Ready Digital Literacy is an independent, open-source educational pilot.
      This certificate is not official Angelo State University credit, a transcript
      credential, a professional certification, or proof of compliance with any
      specific instructor's AI-use policy. It documents completion of introductory
      digital-literacy content only.
      ${pathId === "full" ? " Recommended next course: Ram Ready Financial Futures." : ""}
    </p>
  </div>
  <script>window.onload = () => window.print();</script>
</body>
</html>`;

  const win = window.open("", "_blank");
  if (win) {
    win.document.write(html);
    win.document.close();
  }
  return html;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
