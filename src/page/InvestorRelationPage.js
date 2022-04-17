import React from "react";
import Breadcrumb from "../common/components/breadcrumb";
import Footer from "../common/components/footer";
import HeaderTwo from "../common/components/header-two";
import UpdateSection from "../common/components/UpdateSection";
import Layout from "../common/layout";
import MenuContextProvider from "../context/menu-text";

const InvestorRelationPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Investor Relations">
        <HeaderTwo />
        <Breadcrumb main="Home" subMain="Investor Relations" />
        <UpdateSection />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default InvestorRelationPage;
