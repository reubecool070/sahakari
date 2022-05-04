import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import EmiCalculator from "../common/components/EmiCalculator";
import Footer from "../common/components/footer";
import HeaderTwo from "../common/components/header-two";
import HomeCarousel from "../common/components/home-carousel";
import NewsSection from "../common/components/news-section";
import ServiceOne from "../common/components/service-one";
import SidePopUp from "../common/components/SidePopUp";
import StoryList from "../common/components/story-list";
import Layout from "../common/layout";
import MenuContextProvider from "../context/menu-text";

const Homepage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <MenuContextProvider>
      <Layout PageTitle="Home">
        <HeaderTwo />
        <HomeCarousel />
        <ServiceOne />
        <NewsSection limit={3} />
        <StoryList disperse />
        <SidePopUp />
        <EmiCalculator />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default Homepage;
