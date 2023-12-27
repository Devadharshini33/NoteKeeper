import React from "react"
var year=new Date().getFullYear();
function Footer(){
    return (
        <p className="footer">Copyright © {year}</p>
    )
}
export default Footer;