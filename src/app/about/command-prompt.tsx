import Head from "next/head";
import React from "react";
import { useHistory } from "../components/history/hook";
import { History } from "../components/history/History";
import { banner } from "../utils/cmd-prompt/bin";
import Input from "../components/cmd-input/input";

interface CommandPromptProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const CommandPrompt: React.FC<CommandPromptProps> = ({ inputRef }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = React.useCallback(() => setHistory(banner()), [setHistory]);

  React.useEffect(() => {
    init();
  }, [init]);

  React.useEffect(() => {
    console.log("here ?");
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <>
      <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </>
  );
};

export default CommandPrompt;
