import React from "react";

function Footer() {
  var d = new Date();
  var currentYear = d.getFullYear();
  return (
    <footer>
      <p>Copyright © {currentYear} Made By Soham Khade</p>
    </footer>
  );
}

export default Footer;
