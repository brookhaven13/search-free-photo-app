import React from "react";
import IonIcon from "@reacticons/ionicons";

function Footer() {
  return (
    <div className="footer">
      <div>Harley Lin 2022©</div>
      <div className="social-media">
        <div>
          <IonIcon name="logo-github" />
          GitHub
        </div>
        <div>
          <IonIcon name="mail" />
          Gmail
        </div>
        <div>
          <IonIcon name="logo-linkedin" />
          LinkIn
        </div>
      </div>
    </div>
  );
}

export default Footer;
