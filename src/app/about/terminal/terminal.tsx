import { banner } from "@/app/contexts/terminal";
import { useExecutions } from "@/app/contexts/terminal/terminalcontext";
import React, { useEffect, useRef } from "react";
import PreviousExecutions from "./prevexecs";
import TerminalInput from "./input";

interface TerminalProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const Terminal: React.FC<TerminalProps> = ({ inputRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    executions,
    command,
    addExecution,
    setCommand,
    clearExecutions,
  } = useExecutions();

  useEffect(() => {
    addExecution(banner());
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [executions]);

  return (
    <>
      <div className="p-2 overflow-hidden h-full">
        <div
          ref={containerRef}
          className="overflow-y-auto h-full custom-scrollbar"
        >
          <PreviousExecutions />

          <TerminalInput inputRef={inputRef} containerRef={containerRef} />
        </div>
      </div>
    </>
  );
};

export default Terminal;
