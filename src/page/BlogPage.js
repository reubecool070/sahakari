import React from "react";
import Breadcrumb from "../common/components/breadcrumb";
import Footer from "../common/components/footer";
import HeaderTwo from "../common/components/header-two";
import StorySection from "../common/components/story-section";
import Layout from "../common/layout";
import MenuContextProvider from "../context/menu-text";

const BlogPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Opening Ceremony">
        <HeaderTwo />
        <Breadcrumb main="Home" subMain="Our Story" child="Our Ceremony" />
        <StorySection />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default BlogPage;
