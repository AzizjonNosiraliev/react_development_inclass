import React from "react";

function Footer() {
  const footer_style = {
    backgroundColor: "#000",
    borderTop: "2px solid #ccc",
    textAlign: "center",
    padding: "20px",
    width: "100%",
  };
  return(
    <footer style={footer_style}>
        <p>© 2025 Space Adventure Blog. All rights reserved.</p>
    </footer>
  )
}

export default Footer;
