import AboutBanner from "../../components/Banner/about-banner";
import Collapse from "../../components/Collapsible";
import Datas from "../About/about.json";
import React from "react";

function About() {
  return (
    <div className="about">
      <AboutBanner />
      <div className="aboutMain">
        <div className="collapse-content">
          {Datas.map((data) => {
            return (
              <div key={data.id}>
                <Collapse content={data.content} title={data.title}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
