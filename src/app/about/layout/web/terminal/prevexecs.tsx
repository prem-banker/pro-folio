import { Execution } from "@/app/utils/interfaces";
import React from "react";
import { useExecutions } from "@/app/contexts/terminal/terminalcontext";
import TerminalUsername from "./username";

export const PreviousExecutions: React.FC = ({}) => {
  const { executions } = useExecutions();
  return (
    <>
      {executions.map((entry: Execution, index: number) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <TerminalUsername />
            <span className="flex-grow min-w-0 break-words">
              {entry.command}
            </span>
          </div>

          <p
            className="mb-2 break-words"
            style={{ lineHeight: "normal", whiteSpace: "pre-wrap" }}
          >
            {entry.output}
          </p>
        </div>
      ))}
    </>
  );
};

export default PreviousExecutions;
