import React, { useEffect, useState } from "react";

import { useExecutions } from "@/app/contexts/terminal/terminalcontext";
import { TerminalUsername } from "./username";

export const TerminalInput = ({ inputRef, containerRef }) => {
  const {
    executions,
    command,
    addExecution,
    setCommand,
    clearExecutions,
    executeCommand,
    isValidCommand,
    autocomplete,
  } = useExecutions();

  const [lastViewedCommand, setLastViewedCommand] = useState<number>(0);

  useEffect(() => {
    setLastViewedCommand(executions.length - 1);
    containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
  }, [executions]);

  const onKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    // filtering out strings, nulls etc.
    const commands = executions
      .map(({ command }) => command)
      .filter((command: string) => command);

    // get a fresh start TODO: CHECK IF THE COMMAND STAYS
    if (event.key === "c" && event.ctrlKey) {
      event.preventDefault();
      setCommand("");
      addExecution("");
    }
    // clears
    if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();
      clearExecutions();
    }
    // autocompletion
    if (event.key === "Tab") {
      event.preventDefault();
      autocomplete(command);
    }

    // submit execution
    if (event.key === "Enter" || event.code === "13") {
      event.preventDefault();
      await executeCommand(command);
    }

    // previous command in list and its edge cases
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index = lastViewedCommand - 1;
      if (index < 0) {
        setLastViewedCommand(0);
        setCommand("");
      } else {
        if (index < commands.length) {
          setLastViewedCommand(index);
          setCommand(commands[index]);
        }
      }
    }
    // next command in list and its edge cases
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index = lastViewedCommand + 1;
      if (index < commands.length) {
        setLastViewedCommand(index);
        setCommand(commands[index]);
      } else {
        setLastViewedCommand(commands.length - 1);
        setCommand(commands[commands.length - 1]);
      }
    }
  };

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(value);
  };

  return (
    <div className="flex flex-row space-x-2">
      <label htmlFor="prompt" className="flex-shrink">
        <TerminalUsername />
      </label>

      <input
        ref={inputRef}
        id="prompt"
        type="text"
        className={`bg-primaryLightNavyBlue focus:outline-none flex-grow ${
          isValidCommand(command) || command === "" ? "text-green" : "text-red"
        }`}
        value={command}
        onChange={onChange}
        autoFocus
        onKeyDown={onKeyDown}
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
};

export default TerminalInput;
