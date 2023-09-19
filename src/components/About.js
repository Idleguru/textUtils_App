import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setBtntext] = useState("Enable dark mode");

  const toggleDarkMode = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "#5BD1D7",
        backgroundColor: "#23272f",
        border: "1px solid white",
      });
      setBtntext("Enable Light mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtntext("Enable Dark mode");
    }
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
      <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={myStyle}
                className="accordion-button"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
      </div>
      <button type="button" onClick={toggleDarkMode} className="btn btn-dark my-2">
        {btntext}
      </button>
    </div>
  );
}
