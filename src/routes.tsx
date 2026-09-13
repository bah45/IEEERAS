import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Events from "./pages/Events";
import Chapters from "./pages/Chapters";
import Resources from "./pages/Resources";
import News, { NewsArticlePage } from "./pages/News";
import Join from "./pages/Join";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="font-mono-ui text-8xl mb-4" style={{ color: "rgba(228,0,43,0.3)" }}>404</div>
        <h1 className="font-display font-black text-4xl text-white mb-3">Page Not Found</h1>
        <p className="text-sm mb-8" style={{ color: "rgba(192,196,208,0.6)" }}>The page you're looking for doesn't exist.</p>
        <a href="/" className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold" style={{ textDecoration: "none" }}>← Back to Home</a>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "research", Component: Research },
      { path: "events", Component: Events },
      { path: "chapters", Component: Chapters },
      { path: "resources", Component: Resources },
      { path: "news", Component: News },
      { path: "news/:slug", Component: NewsArticlePage },
      { path: "join", Component: Join },
      { path: "contact", Component: Contact },

      { path: "*", Component: NotFound },
    ],
  },
]);
