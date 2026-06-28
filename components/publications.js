function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function externalLink(label, url) {
  const link = element("a", "", label);
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  return link;
}

function renderAuthors(authors) {
  const container = element("div", "pub-authors");
  authors.forEach((author, index) => {
    if (index > 0) container.append(", ");
    container.append(element("span", author.me ? "pub-me" : "", author.name));
  });
  return container;
}

function iconLink(link) {
  const anchor = externalLink("", link.url);
  const isDownload = link.label.toLowerCase() === "pdf";
  const description = isDownload ? "Download PDF" : `Open ${link.label}`;
  const icon = element("img");

  icon.src = isDownload ? "icons/download.png" : "icons/link.png";
  icon.alt = "";
  anchor.className = "pub-icon-link";
  anchor.setAttribute("aria-label", description);
  anchor.title = description;
  anchor.append(icon);
  return anchor;
}

function renderVenue(venue, links) {
  const container = element("div", "pub-venue");
  container.append(element("i", "", venue.name));
  if (venue.volume) container.append(" ", element("b", "", venue.volume));
  if (venue.article) container.append(`, ${venue.article}`);
  if (venue.year) container.append(` (${venue.year})`);
  if (venue.note) container.append(` — ${venue.note}`);

  const linkGroup = element("span", "pub-links");
  links.forEach((link) => linkGroup.append(iconLink(link)));
  container.append(linkGroup);
  return container;
}

function renderPublication(publication) {
  const card = element("li", "pub-card");
  const thumb = element("div", "pub-thumb");
  const image = element("img");
  image.src = publication.image || "paper.svg";
  image.alt = publication.imageAlt || "Paper icon";
  thumb.append(image);

  const body = element("div", "pub-body");
  const title = element("div", "pub-title");
  title.append(externalLink(publication.title, publication.url));
  body.append(title, renderAuthors(publication.authors), renderVenue(publication.venue, publication.links));

  if (publication.summary) body.append(element("div", "pub-summary", publication.summary));
  card.append(thumb, body);
  return card;
}

function loadPublications() {
  const list = document.getElementById("publications-list");
  const publications = window.PUBLICATIONS;

  if (!Array.isArray(publications)) {
    console.error("Could not load publications: PUBLICATIONS data is missing.");
    list.replaceChildren(element("li", "pub-error", "The publications could not be loaded. Please try refreshing the page."));
    return;
  }

  list.replaceChildren(...publications.map(renderPublication));
}

document.addEventListener("DOMContentLoaded", loadPublications);
