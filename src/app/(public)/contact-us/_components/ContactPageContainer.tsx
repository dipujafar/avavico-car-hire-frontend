import React from "react";
import ContactForm from "./ContactForm";
import Container from "@/components/shared/Container";
import ContactLocation from "./ContactLocation";

const ContactPageContainer = () => {
  return (
    <Container className="flex flex-col xl:flex-row  justify-center gap-x-6 lg:gap-y-10 gap-y-6">
      <div className="flex-1">
        <ContactForm />
      </div>
      <div className="flex-1">
        <ContactLocation></ContactLocation>
      </div>
    </Container>
  );
};

export default ContactPageContainer;
