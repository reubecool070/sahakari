import React from "react";
import Footer from "../common/components/footer";
import HeaderTwo from "../common/components/header-two";
import HomeCarousel from "../common/components/home-carousel";
import ServiceOne from "../common/components/service-one";
import Layout from "../common/layout";
import MenuContextProvider from "../context/menu-text";

const Homepage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Home">
        <HeaderTwo />
        <HomeCarousel />
        <ServiceOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default Homepage;
