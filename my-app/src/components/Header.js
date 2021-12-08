import React from "react";
import Logo from "../assets/pizzalogo.png"

export default function Header() {
    return (
        <div style={{
            background: "#0d0628",
            padding: "15px 50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src={Logo} alt="pizzalogo" height="40px" />
                <div style={{
                    marginLeft: 20,
                    fontSize: 30,
                    color: "yellow",
                    fontFamily: "Indie Flower,cursive",
                }}>
                    Pizza Customization
                </div>
            </div>
        </div>
    );
}
