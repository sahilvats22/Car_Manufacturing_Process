import React from "react";
import { img_url } from "./constant";

const Trial = () => {
  return (
    <div className="manufacturing-process">
      <img src={img_url} className="car-image"/>
      <h2>Car Manufacturing Process</h2>
      <p>
        The car manufacturing process involves several steps, each crucial for
        the final product:
      </p>
      <ol>
        <li>
          Design & Engineering: Engineers and designers create the blueprint of
          the car, considering aesthetics, functionality, and safety.
        </li>
        <li>
          Prototyping: A prototype is built to test the design and make
          necessary adjustments.
        </li>
        <li>
          Materials Selection: High-quality materials such as steel, aluminum,
          plastics, and glass are chosen for various components.
        </li>
        <li>
          Body Manufacturing: The car body is manufactured, often using stamping
          presses to shape metal sheets.
        </li>
        <li>
          Painting: The car body goes through a painting process to protect it
          from corrosion and give it the desired color.
        </li>
        <li>
          Assembly Line: Various parts like engine, transmission, suspension,
          and electronics are assembled together on the production line.
        </li>
        <li>
          Testing: Each car undergoes rigorous testing for safety, performance,
          and quality control.
        </li>
        <li>
          Final Inspection: A final inspection ensures that every detail meets
          the company's standards before the car is shipped.
        </li>
      </ol>
    </div>
  );
};

export default Trial;
