export default {
  logo: (
    <>
      <b>Js Docs</b>
      <span>– JavaScript Notes</span>
    </>
  ),
  github: "https://github.com/thatbeautifuldream/js",
  docsRepositoryBase:
    "https://github.com/thatbeautifuldream/js/blob/master/pages",
  titleSuffix: ` – Js Docs`,
  search: true,
  toc: true,
  darkMode: true,
  defaultMenuCollapsed: true,
  nextThemes: {
    defaultTheme: "system",
    storageKey: "theme",
  },
  navigation: {
    next: true,
    prev: true,
  },
  editLinkText: "Edit this page on GitHub",
  gitTimestamp: "Last updated on",
  feedback: {
    link: "Question? Give us feedback →",
    labels: "feedback",
  },
  serverSideError: {
    labels: "bug",
    link: "Submit an issue about this error →",
  },
  sidebar: {
    defaultMenuCollapsed: false,
    subtitle: null,
  },
  titleSuffix: " – Js Docs",
  toc: {
    component: TOC,
    extraContent: null,
    float: true,
    title: "On This Page",
  },
  unstable_faviconGlyph: "",
};
