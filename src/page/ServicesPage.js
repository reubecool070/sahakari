import React from "react";
import Breadcrumb from "../common/components/breadcrumb";
import Footer from "../common/components/footer";
import HeaderTwo from "../common/components/header-two";
import ServiceList from "../common/components/ServiceList";
import Layout from "../common/layout";
import MenuContextProvider from "../context/menu-text";

const ServicesPage = () => {
  return (
    <div>
      <MenuContextProvider>
        <Layout PageTitle="Services">
          <HeaderTwo />
          <Breadcrumb main="Home" subMain="Services" />
          <ServiceList />
          <Footer />
        </Layout>
      </MenuContextProvider>
    </div>
  );
};

export default ServicesPage;
