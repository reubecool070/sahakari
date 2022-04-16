import { Outlet } from "react-router-dom";
import AboutPage from "../page/AboutPage";
import CareerPage from "../page/CareerPage";
import ContactPage from "../page/ContactPage";
import DownloadPage from "../page/DownloadPage";
import Homepage from "../page/Homepage";
import NewsPage from "../page/NewsPage";
import ServicesPage from "../page/ServicesPage";

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
        { path: "/", element: <Homepage /> },
      ],
    },
  ];
};
