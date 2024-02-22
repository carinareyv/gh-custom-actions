import { useState } from "react";

import HelpArea from "./HelpArea";

function MainContent() {
  const [helpVisible, setHelpVisible] = useState(false);

  function toggleHelp() {
    setHelpVisible((isVisible) => !isVisible);
  }

  return (
    <main>
      <button onClick={toggleHelp}>
        {helpVisible ? "Hide" : "Show"} What we have learned
      </button>
      {helpVisible && <HelpArea />}
      <h2>
        Thanks Maximilian @{" "}
        <a id="link" href="https://academind.com/">
          Academind
        </a>
      </h2>
    </main>
  );
}

export default MainContent;
