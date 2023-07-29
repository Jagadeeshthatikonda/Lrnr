import React from "react";

import "./styles.css";

const CollectionsLayout = (): React.ReactElement => {
  return (
    <div className={"layout-container"}>
      <p>header</p>
      <div className={"layout-body-container"}>
        <p>Left panel</p>
        <p>body</p>
      </div>
    </div>
  );
};

export default CollectionsLayout;
