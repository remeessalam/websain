import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { LandingPage } from "./pages/landingPages/LandingPage";
import LandingHeader from "./components/landingPages/LandingHeader";
import LandingFooter from "./components/landingPages/LandingFooter";
import WebsiteHeader from "./components/website/WebsiteHeader";
import WebsiteFooter from "./components/website/WebsiteFooter";
import { routes } from "./constant";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./components/common/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/common/ScrollToTop";
import BlogPost1 from "./pages/blogPages/Blog1";
import BlogPost2 from "./pages/blogPages/Blog2";
import BlogPost3 from "./pages/blogPages/Blog3";
import BlogPost4 from "./pages/blogPages/Blog4";
import BlogPost5 from "./pages/blogPages/Blog5";
import BlogPost6 from "./pages/blogPages/Blog6";
import BlogPost7 from "./pages/blogPages/Blog7";
const Thankyou = lazy(() => import("./pages/Thankyou"));

AOS.init({
  once: true,
  duration: 500,
});
export default function App() {
  return (
    <SpinnerContextProvider>
      <LoadingSpinnerContext />
      <Suspense fallback={<LoadingSpinner />}>
        <Toaster />
        <ScrollToTop />
        <Routes>
          {/* Website Pages */}
          {routes.map(({ component, name, path }, index) => (
            <Route
              path={path}
              element={
                <>
                  <WebsiteHeader name={name} />
                  {component}
                  <WebsiteFooter />
                </>
              }
            />
          ))}

          <Route path="/thankyou" element={<Thankyou />} />
          <Route
            path="/blog/blog1"
            element={
              <>
                <WebsiteHeader />
                <BlogPost1 />
                <WebsiteFooter />
              </>
            }
          />
          <Route
            path="/blog/blog2"
            element={
              <>
                <WebsiteHeader />
                <BlogPost2 />
                <WebsiteFooter />
              </>
            }
          />
          <Route
            path="/blog/blog3"
            element={
              <>
                <WebsiteHeader />
                <BlogPost3 />
                <WebsiteFooter />
              </>
            }
          />
          <Route
            path="/blog/blog4"
            element={
              <>
                <WebsiteHeader />
                <BlogPost4 />
                <WebsiteFooter />
              </>
            }
          />
          <Route
            path="/blog/blog5"
            element={
              <>
                <WebsiteHeader />
                <BlogPost5 />
                <WebsiteFooter />
              </>
            }
          />
          <Route
            path="/blog/blog6"
            element={
              <>
                <WebsiteHeader />
                <BlogPost6 />
                <WebsiteFooter />
              </>
            }
          />
          <Route
            path="/blog/blog7"
            element={
              <>
                <WebsiteHeader />
                <BlogPost7 />
                <WebsiteFooter />
              </>
            }
          />

          {/* Landing Pages */}
          <Route
            path="/web-development"
            element={
              <>
                <LandingHeader />
                <LandingPage page={"web-development"} />
                <LandingFooter />
              </>
            }
          />
          <Route
            path="/app-development"
            element={
              <>
                <LandingHeader />
                <LandingPage page={"app-development"} />
                <LandingFooter />
              </>
            }
          />
        </Routes>
      </Suspense>
    </SpinnerContextProvider>
  );
}
