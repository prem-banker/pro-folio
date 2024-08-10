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

  const { executions, addExecution } = useExecutions();

  return (
    <>
      <div className="p-2 overflow-hidden h-full">
        <div
          ref={containerRef}
          className="overflow-y-auto h-full custom-scrollbar"
        >
          <PreviousExecutions />

          <TerminalInput containerRef={containerRef} />
        </div>
      </div>
    </>
  );
};

export default Terminal;
