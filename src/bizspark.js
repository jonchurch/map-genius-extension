const OWNER_SELECTOR =
  "#taxParcelTab > #table-7 > tbody > tr:nth-child(3) > td";
const OWNER_LINK_SELECTOR =
  "#taxParcelTab > #table-7 > tbody > tr:nth-child(3) > td > a";

setInterval(() => {
  const ownerContent = document.querySelector(OWNER_SELECTOR);
  console.log("text beep");
  if (ownerContent) {
    const linkSelect = document.querySelector(OWNER_LINK_SELECTOR);
    console.log({ linkSelect });
    if (linkSelect) {
      console.log("link exists");
      return;
    }
    const content = ownerContent.textContent;
    const ownerName = content.split(" ").slice(1).join(" ");
    console.log({ content });
    const SEARCH_URL = `https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResults/EntityName/${encodeURI(
      ownerName
    )}/Page1`;
    ownerContent.innerHTML = `<b>${
      content.split(" ")[0]
    }</b> <a target="_blank" rel="noopener noreferrer" href="${SEARCH_URL}">${ownerName}</a>`;
  }
}, 1500);
