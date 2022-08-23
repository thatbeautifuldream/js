export default {
  projectLink: "https://github.com/thatbeautifuldream/js", // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/thatbeautifuldream/js/blob/master", // base URL for the docs repository
  titleSuffix: " – Js Docs",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Milind Mishra.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <svg>...</svg>
      <span>Js Docs</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Js Docs" />
      <meta name="og:title" content="Js Docs" />
    </>
  ),
};
