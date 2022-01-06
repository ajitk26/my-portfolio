import React from "react";
import footerImg from "../logo1.png";
function Footer() {
  return (
    <div
      className="footer"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <img src={footerImg} alt="footer_img" className="footer_img " />
      <span className="copyright">
        Copyright © 2022 Ajit kumar. All Rights Reserved.
      </span>
    </div>
    
  );
}

export default Footer;