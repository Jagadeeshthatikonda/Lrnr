import React from "react";

import { CollectionsTabListEnum } from "../../Constants/collections";

import { Header } from "../Header/Header";
import { LeftPanel } from "../LeftPanel/LeftPanel";
import { Body } from "../Body/Body";

import "./styles.css";

//TODO: Need to refactor with tailwind css

const CollectionsLayout = (): React.ReactElement => {
  const [selectedTab, setSelectedTab] = React.useState<string>(
    CollectionsTabListEnum.All
  );

  return (
    <div className={"layout-container"}>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className={"layout-body-container"}>
        <LeftPanel selectedTab={selectedTab} />
        <Body />
      </div>
    </div>
  );
};

export default CollectionsLayout;
