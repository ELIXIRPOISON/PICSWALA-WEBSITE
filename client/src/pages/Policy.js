import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>This privacy policy ("Policy") outlines how we collect, use, and 
            protect the information you provide to us when you visit our website ("Site"), purchase products from our Site, or book a photographer through our Site.
             We are committed to protecting your privacy, and we encourage you to read this Policy carefully.

Information We Collect
We collect both personal and non-personal information from you when you use our Site. 
Personal information is information that can be used to identify you, such as your name, email address, phone number, and shipping address. Non-personal information is information that cannot be used to identify you, such as your IP address,
 browser type, and device information.
 </p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
