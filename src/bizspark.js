const OWNER_SELECTOR = "#table-7 > tbody > tr:nth-child(3) > td";

const ownerContent = document.querySelector(OWNER_SELECTOR);

if (ownerContent) {
  const text = ownerContent.textContent();
  console.log({ text });
  const SEARCH_URL = `https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResults/EntityName/${encodeURI(
    text
  )}/Page1`;
  ownerContent.wrapInner(() => `<a href="${SEARCH_URL}">`);
}
