import { observer } from "mobx-react-lite";
import "./App.css";
import CollectionsLayout from "./Components/CollectionsLayout/CollectionsLayout";

export const App = observer(() => {
  return <CollectionsLayout />;
});
