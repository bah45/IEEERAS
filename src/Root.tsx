import { Outlet, ScrollRestoration } from "react-router";
import { Navbar, Footer } from "./components/shared";

export default function Root() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
