import { banner } from "@/app/contexts/terminal";
import { useExecutions } from "@/app/contexts/terminal/terminalcontext";
import React, { useEffect, useRef } from "react";
import PreviousExecutions from "./prevexecs";
import TerminalInput from "./terminalinput";

interface TerminalProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const Terminal: React.FC<TerminalProps> = ({ inputRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { executions } = useExecutions();

  useEffect(() => {
    containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
  }, [executions]);

  return (
    <>
      <div className="p-2 overflow-hidden h-full bg-black w-full">
        <div
          ref={containerRef}
          className="overflow-y-auto h-full custom-scrollbar flex flex-col"
        >
          <PreviousExecutions />

          <TerminalInput inputRef={inputRef} />
        </div>
      </div>
    </>
  );
};

export default Terminal;
