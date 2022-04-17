import React from "react";
import Breadcrumb from "../common/components/breadcrumb";
import Footer from "../common/components/footer";
import HeaderTwo from "../common/components/header-two";
import TermsofUseSection from "../common/components/termsOfUse";
import Layout from "../common/layout";
import MenuContextProvider from "../context/menu-text";

const TermsUsePage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Terms Of Use">
        <HeaderTwo />
        <Breadcrumb main="Home" subMain="Terms Of Use" />
        <TermsofUseSection />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default TermsUsePage;
