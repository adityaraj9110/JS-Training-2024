type RouteEntry = {
  label: string;
  link: string;
};

const routes = {
  "/": { label: "Home", link: "/" },
  "login":{label:"login",link:"/login"},
  "signup":{label:"signup",link:"/signup"}
} satisfies Record<string, RouteEntry>;

export default routes;
