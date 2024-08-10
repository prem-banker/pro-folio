import { Execution } from "@/app/utils/interfaces";
import React from "react";
import TerminalUsername from "./username";
import { useExecutions } from "@/app/contexts/terminal/terminalcontext";

export const PreviousExecutions: React.FC = ({}) => {
  const { executions } = useExecutions();
  return (
    <>
      {executions.map((entry: Execution, index: number) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <TerminalUsername />
            </div>

            <div className="flex-grow">{entry.command}</div>
          </div>

          <p
            className="mb-2"
            style={{ lineHeight: "normal" }}
            dangerouslySetInnerHTML={{ __html: entry.output }}
          />
        </div>
      ))}
    </>
  );
};

export default PreviousExecutions;
