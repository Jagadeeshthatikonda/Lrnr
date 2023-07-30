import { BsDot } from "react-icons/bs";
import React from "react";
import { Popover } from "antd";

import { profileOptions } from "../../store/fixtures/collectionsProfileFixture";
import { ProfileSectionDetails } from "../../types/types";

import { ToggleSwitch } from "../ToggleSwitch/ToggleSwicth";

import "./styles.css";

interface ProfileDetailsProps {
  children: React.ReactElement;
}

export const ProfileDetails = (
  props: ProfileDetailsProps
): React.ReactElement => {
  const { children } = props;
  const [selectedTabId, setSelectedTabId] = React.useState<string>();
  const shouldRenderToggle = (value: string): boolean => value === "Dark Mode";
  const isTabActive = (tabId: string): boolean => tabId === selectedTabId;

  const renderProfileSectionDetails = (
    profileSectionDetails: ProfileSectionDetails
  ): React.ReactElement => (
    <ul
      key={profileSectionDetails.id}
      className={"profile-details-unordered-list"}
    >
      {profileSectionDetails.section.map(profileSectionDetail => {
        const isCurrentTabActive = isTabActive(profileSectionDetail.id);
        const isThemeOption = shouldRenderToggle(profileSectionDetail.value);
        return (
          <li
            key={profileSectionDetail.id}
            className={`profile-detail-option  ${
              isCurrentTabActive ? "active" : ""
            }`}
            title={profileSectionDetail.value}
            onClick={() => setSelectedTabId(profileSectionDetail.id)}
          >
            <p className={"profile-detail-option-text"}>
              {profileSectionDetail.value}
            </p>
            {isThemeOption ? <ToggleSwitch /> : null}
            {isCurrentTabActive && !isThemeOption ? (
              <BsDot className={"bs-dot-icon"} />
            ) : null}
          </li>
        );
      })}
    </ul>
  );

  const isLastProfileSection = (index: number): boolean =>
    index === profileOptions.length - 1;

  const renderProfileDetails = (): React.ReactElement => (
    <div>
      {profileOptions.map((eachProfileSectionDetails, index) => (
        <div key={eachProfileSectionDetails.id}>
          {renderProfileSectionDetails(eachProfileSectionDetails)}
          {isLastProfileSection(index) ? null : (
            <hr className={"horizontal-line-class-name"} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <Popover
      content={renderProfileDetails()}
      trigger="hover"
      placement={"bottomRight"}
    >
      <div>{children}</div>
    </Popover>
  );
};
