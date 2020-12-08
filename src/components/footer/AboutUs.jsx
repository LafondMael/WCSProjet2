import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="About">
      <div className="Aline">
        <img
          className="avatar"
          src="data:image/jpeg;base64,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"
          alt="avatar"
        />
        <div>
          <p className="name">Aline BARRIER</p>
          <p>
            {" "}
            Développeur Web <br /> Scrum Manager{" "}
          </p>
        </div>
      </div>
      <div className="Maud">
        <img
          className="avatar"
          src="https://media.discordapp.net/attachments/771291835086798858/777813200296476722/20201030_155004.jpg?width=552&height=660"
          alt="avatar"
        />
        <div>
          <p className="name">Maud GOUGUET</p>
          <p>
            {" "}
            Développeur Web <br /> Product Owner{" "}
          </p>
        </div>
      </div>
      <div className="Hugo">
        <img
          className="avatar"
          src="https://media.discordapp.net/attachments/771291835086798858/777815426797142046/Hugo.jpg?width=495&height=660"
          alt="avatar"
        />
        <div>
          <p className="name">Hugo MONCHATRE</p>
          <p>
            {" "}
            Développeur Web <br /> Game Player{" "}
          </p>
        </div>
      </div>
      <div className="Maël">
        <img
          className="avatar"
          src="https://media.discordapp.net/attachments/771291835086798858/777815219203473418/Mael.jpg?width=495&height=660"
          alt="avatar"
        />
        <div>
          <p className="name">Maël LAFOND</p>
          <p>
            {" "}
            Développeur Web <br /> Game Player{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
