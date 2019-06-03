import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="col-md-6 text-center text-capitalize contact-column py-5">
      <h2 className="mt-3 mb-5">contact</h2>
      <div className="d-flex flex-wrap my-4 ml-5">
        <button className="contact-icon btn">
          <i className="fas fa-address-book fa-2x mr-4" />
        </button>
        <p className="mb-0 align-self-center">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="d-flex flex-wrap my-4 ml-5">
        <button className="contact-icon btn">
          <i className="fas fa-phone fa-2x mr-4" />
        </button>
        <p className="mb-0 align-self-center">123 456 789</p>
      </div>
      <div className="d-flex flex-wrap my-4 ml-5">
        <button className="contact-icon btn">
          <i className="fas fa-envelope fa-2x mr-4" />
        </button>
        <p className="mb-0 align-self-center text-lowercase">email@email.com</p>
      </div>
    </div>
  );
};

export default Contact;
