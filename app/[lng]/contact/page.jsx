import Contact from "@/app/components/pages/contact/Contact";
import React from "react";
import DataHome from "@/app/components/pages/home/data";

const ContactPage = async ({ params: { lng } }) => {
  const { contact } = await DataHome(lng);
  return <Contact lng={lng} contact={contact} />;
};

export default ContactPage;
