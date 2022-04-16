import React from "react";
import Breadcrumb from "../common/components/breadcrumb";
import DownloadSection from "../common/components/downloadSection";
import Footer from "../common/components/footer";
import HeaderTwo from "../common/components/header-two";
import Layout from "../common/layout";
import MenuContextProvider from "../context/menu-text";

const DownloadPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Home">
        <HeaderTwo />
        <Breadcrumb main="Home" subMain="Downloads" />
        <DownloadSection />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default DownloadPage;
