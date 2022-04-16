import React from "react";
import Breadcrumb from "../common/components/breadcrumb";
import Footer from "../common/components/footer";
import HeaderTwo from "../common/components/header-two";
import NewsSection from "../common/components/news-section";
import Layout from "../common/layout";
import MenuContextProvider from "../context/menu-text";

const NewsPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="News">
        <HeaderTwo />
        <Breadcrumb main="Home" subMain="News" />
        <NewsSection />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default NewsPage;
