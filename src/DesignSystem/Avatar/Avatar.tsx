//TODO: We can make avatar design system and can use across modules.

import { Popover } from "antd";

import { profileOptions } from "../../store/fixtures/collectionsProfileFixture";

import "./styles.css";

export const Avatar = (): React.ReactElement => {
  const profileActionsContent = (): React.ReactElement => {
    return (
      <div>
        {profileOptions.map(eachProfile => (
          <ul key={eachProfile.id} className={"unordered-list"}>
            {eachProfile.section.map(profileSectionDetails => (
              <li
                key={profileSectionDetails.id}
                className={"profile-detail-option-text"}
              >
                {profileSectionDetails.value}
              </li>
            ))}
          </ul>
        ))}
      </div>
    );
  };

  const renderAvatarWithStatus = (): React.ReactElement => (
    <div className={"avatar-container"}>
      <div className={"avatar"}>
        <span className={"avatar-text"}>FL</span>
      </div>
      <div className={"status-container"}></div>
    </div>
  );

  const renderAvatarStage = (): React.ReactElement => (
    <div className={"stage"}>
      <p className={"stage-text"}>NEW</p>
    </div>
  );

  return (
    <Popover
      content={profileActionsContent}
      trigger="hover"
      placement={"bottomRight"}
      open={true}
    >
      <div className={"avatar-with-status-stage-container"}>
        {renderAvatarWithStatus()}
        {renderAvatarStage()}
      </div>
    </Popover>
  );
};
