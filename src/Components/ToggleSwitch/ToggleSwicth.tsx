import React from "react";

import "./styles.css";

//TODO: Need to use tailwind or styles components for dark or light themes

export const ToggleSwitch = (): React.ReactElement => (
  <label className="switch">
    <input type="checkbox" />
    <span className="slider round"></span>
  </label>
);
