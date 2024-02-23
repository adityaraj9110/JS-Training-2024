type RouteEntry = {
  label: string;
  link: string;
};

const RoutesForApp = {
  "/": { label: "Home", link: "/" },
  about: { label: "about", link: "/about" },
  work: { label: "work", link: "/work" },
} satisfies Record<string, RouteEntry>;

// Please do not forget review points, use them and utilize them in your working

export default RoutesForApp;
