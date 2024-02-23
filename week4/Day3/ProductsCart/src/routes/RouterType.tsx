
// export type RouteNames = "/" | "wishlist" | "products/:id" | "add-product";


type RouteEntry = {
  label: string;
  link: string;
};

const routes = {
  "/": { label: "Home", link: "/" },
  "wishlist": { label: "Wishlist", link: "/wishlist" },
  "products/:id": { label: "Product Detail", link: "/products/:id" },
  "add-product": { label: "Add Product", link: "/add-product" }
} satisfies Record<string, RouteEntry>;

export default routes;
