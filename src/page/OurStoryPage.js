import React from "react";
import Breadcrumb from "../common/components/breadcrumb";
import Footer from "../common/components/footer";
import HeaderTwo from "../common/components/header-two";
import StoryList from "../common/components/story-list";
import Layout from "../common/layout";
import MenuContextProvider from "../context/menu-text";

const OurStoryPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Our Story">
        <HeaderTwo />
        <Breadcrumb main="Home" subMain="Our Story" />
        <StoryList />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default OurStoryPage;
