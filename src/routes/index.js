import { Outlet } from "react-router-dom";
import AboutPage from "../page/AboutPage";
import BlogPage from "../page/BlogPage";
import CareerPage from "../page/CareerPage";
import ContactPage from "../page/ContactPage";
import DownloadPage from "../page/DownloadPage";
import Homepage from "../page/Homepage";
import InvestorRelationPage from "../page/InvestorRelationPage";
import NewsPage from "../page/NewsPage";
import OurStoryPage from "../page/OurStoryPage";
import PrivacyPolicy from "../page/PrivacyPolicy";
import ProjectPage from "../page/ProjectPage";
import ServicesPage from "../page/ServicesPage";
import TermsUsePage from "../page/TermsPage";

export const routes = () => {
  return [
    {
      path: "/",
      element: <Outlet />,
      children: [
        { path: "/about", element: <AboutPage /> },
        { path: "/download", element: <DownloadPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/services", element: <ServicesPage /> },
        { path: "/news", element: <NewsPage /> },
        { path: "/careers", element: <CareerPage /> },
        { path: "/privacy-policy", element: <PrivacyPolicy /> },
        { path: "/terms-of-use", element: <TermsUsePage /> },
        { path: "/our-story", element: <OurStoryPage /> },
        { path: "/projects", element: <ProjectPage /> },
        { path: "/investor-relations", element: <InvestorRelationPage /> },
        { path: "/story-1", element: <BlogPage /> },
        { path: "/", element: <Homepage /> },
      ],
    },
  ];
};
