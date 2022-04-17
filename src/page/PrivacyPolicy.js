import React from "react";
import Breadcrumb from "../common/components/breadcrumb";
import Footer from "../common/components/footer";
import HeaderTwo from "../common/components/header-two";
import PrivacyPolicySection from "../common/components/privacy-section";
import Layout from "../common/layout";
import MenuContextProvider from "../context/menu-text";

const PrivacyPolicy = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Privacy Policy">
        <HeaderTwo />
        <Breadcrumb main="Home" subMain="Privacy Policy" />
        {/* <AboutUsSection /> */}
        <PrivacyPolicySection />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default PrivacyPolicy;
