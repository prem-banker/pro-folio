import React from "react";
import { History as HistoryInterface } from "./interface";
import TerminalUsername from "../cmd-input/terminalusername";

export const History: React.FC<{ history: Array<HistoryInterface> }> = ({
  history,
}) => {
  return (
    <>
      {history.map((entry: HistoryInterface, index: number) => (
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

export default History;
