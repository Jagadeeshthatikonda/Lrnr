//TODO: We can make avatar design system and can use across modules.
import "./styles.css";

export const Avatar = (): React.ReactElement => {
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
    <div className={"avatar-with-status-stage-container"}>
      {renderAvatarWithStatus()}
      {renderAvatarStage()}
    </div>
  );
};
