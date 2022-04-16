import React from "react";
import Breadcrumb from "../common/components/breadcrumb";
import CareerSection from "../common/components/careerSection";
import Footer from "../common/components/footer";
import HeaderTwo from "../common/components/header-two";
import Layout from "../common/layout";
import MenuContextProvider from "../context/menu-text";

const CareerPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Home">
        <HeaderTwo />
        <Breadcrumb main="Home" subMain="Careers" />
        <CareerSection />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default CareerPage;
