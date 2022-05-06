import React from "react";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
import Header from "./header";

function Contact() {
  const contacts = [
    {
      id: 1,
      name: "chirag",
      email: "chirag@gmail.com",
      mobile: 1234567890,
    },
    {
      id: 2,
      name: "baljeet",
      email: "baljeet@gmail.com",
      mobile: 7896354102,
    },
  ];
  return (
    <>
      <Header />
      <AddContact />
      {/*<ContactCard />*/}
      <ContactList contacts={contacts} />
    </>
  );
}

export default Contact;
