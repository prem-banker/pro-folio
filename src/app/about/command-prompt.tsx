import React from "react";
import Input from "../components/cmd-input/input";
import { History } from "../components/history/History";
import { useHistory } from "../components/history/hook";
import { banner } from "../utils/cmd-prompt/bin";

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

  const init = React.useCallback(() => setHistory(banner()), []);

  React.useEffect(() => {
    init();
    inputRef.current.focus();
  }, [init]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <>
      <div className="p-2 overflow-hidden h-full">
        <div
          ref={containerRef}
          className="overflow-y-auto h-full custom-scrollbar"
        >
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
