import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          "PICSWALA" is a website which lets you purchase camera equipment and accessories, as well as book professional photographers in different cities.

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
