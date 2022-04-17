import React from "react";
import Breadcrumb from "../common/components/breadcrumb";
import Footer from "../common/components/footer";
import HeaderTwo from "../common/components/header-two";
import UpdateSection from "../common/components/UpdateSection";
import Layout from "../common/layout";
import MenuContextProvider from "../context/menu-text";

const ProjectPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Our Projects">
        <HeaderTwo />
        <Breadcrumb main="Home" subMain="Our Projects" />
        <UpdateSection />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default ProjectPage;
