import React from "react";
import AboutUsSection from "../common/components/aboutUsSection";
import Breadcrumb from "../common/components/breadcrumb";
import Footer from "../common/components/footer";
import HeaderTwo from "../common/components/header-two";
import Layout from "../common/layout";
import MenuContextProvider from "../context/menu-text";

const AboutPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Home">
        <HeaderTwo />
        <Breadcrumb main="Home" subMain="About Us" />
        <AboutUsSection />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default AboutPage;
