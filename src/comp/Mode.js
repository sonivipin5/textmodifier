import React, { useState } from "react";

export default function Mode(prop) {

  localStorage.setItem("rootKey", [ "--primary-color", "--first-base-color", "--second-base-color", "--third-base-color" ]);
  const rootKey = localStorage.getItem("rootKey").split(",");

  const [color, setColor] = useState(localStorage.getItem("color").split(","));

  const root = document.querySelector(":root");

  setTimeout(() => {
    let check = document.querySelector("#checkbox");
    if (color[0] === "#333742") {
      check.setAttribute("checked", "checked");
    }
  }, 0);
  root.style.setProperty("--primary-color", `${color[0]}`);

  const rootVar = getComputedStyle(root);
  let pc = rootVar.getPropertyValue("--primary-color");

  for (let i = 0; i < color.length && rootKey.length; i++) {
    if (pc === color[0]) {
      root.style.setProperty(`${rootKey[i]}`, `${color[i]}`);
    }
  }

  //------------ Mode Function --------------------//
  const Mode = () => {

    setTimeout(() => {
      pc = rootVar.getPropertyValue("--primary-color");
      setColor(localStorage.getItem("color").split(","))

    }, 0);

    if (color[0] === "#e0e0e0") {

      for (let i = 0; i < color.length && rootKey.length; i++) {
        if (pc === color[0]) {
          root.style.setProperty(`${rootKey[i]}`, `${color[i]}`);
        }
      }

      localStorage.setItem("color", ["#333742","#252830","#414654","#3ddddd",]);
    }
    if (color[0] === "#333742") {
      localStorage.setItem("color", ["#e0e0e0","#bebebe","#ffffff","#000000",
      ]);
    }
  };

  
    
 
  
  return (
    <div>
      <label className="switch" onClick={Mode}>
       <input type="checkbox" id='checkbox' />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
