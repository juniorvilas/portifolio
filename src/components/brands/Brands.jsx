import React, { Component } from "react";
import arloesi from "../../assets/images/brand/arloesi.png";
import colab from "../../assets/images/brand/colab.jpg";

class brand extends Component {
  render() {
    return (
      <React.Fragment>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "30px",
            textAlign: "center",
            color: "#6c757d",
          }}
        >
          I'm proud to have collaborated with some awesome companies
        </p>

        <ul style={{ filter: "invert(1)" }} className="brand-style-2">
          <li>
            <a href="https://arloesitech.com.br/">
              <img src={arloesi} alt="Logo Arloesi" />
            </a>
          </li>
          <li>
            <a href="https://www.colab.com.br/">
              <img src={colab} alt="Logo Colab" />
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
export default brand;
