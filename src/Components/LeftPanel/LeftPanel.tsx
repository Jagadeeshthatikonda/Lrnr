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
        return <p>graph</p>;
      case CollectionsTabListEnum.Recent:
        return <p>recent</p>;
      case CollectionsTabListEnum.Board:
        return <p>Board</p>;
      default:
        return <>Empty</>;
    }
  };

  return (
    <div className={"left-panel-container "}>
      {renderLeftPanelBasedOnSelectedTab()}
    </div>
  );
};
