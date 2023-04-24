import HomePage from "./HomePage";
import RightPane from "./RightPane";
import LeftPane from "./LeftPane";

function BodyContent() {
  return (
    <div style={{ display: "flex" }}>
      <RightPane />
      <HomePage />
      <LeftPane />
    </div>
  );
}

export default BodyContent;
