import React from "react";

import { CollectionsTabListEnum } from "../../Constants/collections";

import { Header } from "../Header/Header";

import "./styles.css";

const CollectionsLayout = (): React.ReactElement => {
  const [selectedTab, setSelectedTab] = React.useState<string>(
    CollectionsTabListEnum.All
  );

  return (
    <div className={"layout-container"}>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className={"layout-body-container"}>
        <>left panel body</>
      </div>
    </div>
  );
};

export default CollectionsLayout;
