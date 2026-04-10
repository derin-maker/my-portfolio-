import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <p>&copy;{new Date().getFullYear()} Derin. All Rights Reserved.</p>
        </div>
    );
}

export default Footer;