import React from "react";
import Breadcrumb from "../common/components/breadcrumb";
import ContactSection from "../common/components/contact-section";
import Footer from "../common/components/footer";
import GoogleMap from "../common/components/google-map";
import HeaderTwo from "../common/components/header-two";
import Layout from "../common/layout";
import MenuContextProvider from "../context/menu-text";

const ContactPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Contact Us">
        <HeaderTwo />
        <Breadcrumb main="Home" subMain="Contact" />
        <ContactSection />
        <GoogleMap />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default ContactPage;
