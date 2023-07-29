import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidUserPlus } from "react-icons/bi";

import { collectionsTabList } from "../../store/fixtures/collectionsTabsFixture";

import "./styles.css";

interface HeaderProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}
export const Header = (props: HeaderProps): React.ReactElement => {
  const { selectedTab, setSelectedTab } = props;
  const renderIcon = (): React.ReactElement => <GiHamburgerMenu />;

  const renderInvitePeople = (): React.ReactElement => <BiSolidUserPlus />;

  const renderTabsList = (): React.ReactElement => {
    return (
      <div className={"tabs-list"}>
        {collectionsTabList.map(eachTab => {
          const isCurrentItemSelected = selectedTab === eachTab.id;
          return (
            <p
              key={eachTab.id}
              className={`each-tab-item ${
                isCurrentItemSelected ? "selected-tab-border-styles" : ""
              }`}
              onClick={() => setSelectedTab(eachTab.id)}
            >
              {eachTab.value}
            </p>
          );
        })}
      </div>
    );
  };
  return (
    <div className="header-container">
      <div className={"header-top-container"}>
        <div className={"icon-container"}>{renderIcon()}</div>
        <div className={"header-right-section"}>
          {renderInvitePeople()}
          <p className={"invite-team-member"}>INVITE TEAM MEMBER</p>
          <p>avatar</p>
        </div>
      </div>
      <div className={"header-bottom-section"}>{renderTabsList()}</div>
    </div>
  );
};
