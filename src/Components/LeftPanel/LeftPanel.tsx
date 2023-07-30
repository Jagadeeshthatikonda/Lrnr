import React from "react";
import { CollectionsTabListEnum } from "../../Constants/collections";
import { Collections } from "../Collections/Collections";
import "./styles.css";

interface LeftPanelProps {
  selectedTab: string;
}
export const LeftPanel = (props: LeftPanelProps): React.ReactElement => {
  const { selectedTab } = props;

  const renderLeftPanelBasedOnSelectedTab = (): React.ReactElement => {
    switch (selectedTab) {
      case CollectionsTabListEnum.All:
        return <Collections selectedTab={selectedTab} />;
      case CollectionsTabListEnum.Graph:
        return (
          <div className="tab-container-class-name">
            ...GRAPH..Coming Soon...
          </div>
        );
      case CollectionsTabListEnum.Recent:
        return (
          <div className="tab-container-class-name">
            ...RECENT..Coming Soon...
          </div>
        );
      case CollectionsTabListEnum.Board:
        return (
          <div className="tab-container-class-name">
            ...BOARD..Coming Soon...
          </div>
        );
      default:
        return <>...Coming Soon...</>;
    }
  };

  return (
    <div className={"left-panel-container "}>
      {renderLeftPanelBasedOnSelectedTab()}
    </div>
  );
};
