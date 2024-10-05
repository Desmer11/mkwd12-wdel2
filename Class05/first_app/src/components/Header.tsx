import React from "react";

export const Header = () => {
  // style = {} => we have to provide some value in the {}

  // We applied React.CSSProperties so we get inteliense also from the vsCode
  const navigationStyles: React.CSSProperties = {
    display: "flex",
    listStyleType: "none",
    gap: "20px",
  };

  // Since for this object that is containing style props. we won't have intelisnse support since type is not applied
  const logoStyles = {
    color: "magenta",
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={logoStyles}>LOGO</h1>
      <nav>
        <ul style={navigationStyles}>
          <li>Home</li>
          <li>Contact</li>
          <li>About us</li>
        </ul>
      </nav>
    </header>
  );
};
