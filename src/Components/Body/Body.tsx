import { Editor } from "../../Components/Editor/Editor";

import "./styles.css";

export const Body = (): React.ReactElement => {
  return (
    <div className={"body-container"}>
      <Editor />
    </div>
  );
};
