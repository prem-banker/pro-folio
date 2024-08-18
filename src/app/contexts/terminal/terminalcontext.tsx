import React, { createContext, ReactNode, useContext, useState } from "react";
import { Execution } from "../../utils/interfaces";
import * as commands from "./commands";
interface TerminalContextType {
  executions: Execution[];
  command: string;
  addExecution: (result: string) => void;
  setCommand: (command: string) => void;
  clearExecutions: () => void;
  executeCommand: (command: string) => Promise<void>;
  isValidCommand: (command: string) => boolean;
  autocomplete: (command: string) => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(
  undefined
);

export const TerminalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [executions, setExecutions] = useState<Execution[]>([]);
  const [command, setCommand] = useState<string>("");

  const addExecution = (result: string) => {
    setExecutions([
      ...executions,
      {
        id: executions.length,
        date: new Date(),
        command,
        output: result,
      },
    ]);
  };

  const executeCommand = async (command: string) => {
    const [sanitisedCommand, ...args] = command.trim().split(" ");

    if (sanitisedCommand === "clear" || sanitisedCommand === "cls") {
      clearExecutions();
    } else if (command === "") {
      addExecution("");
    } else if (Object.keys(commands).indexOf(sanitisedCommand) === -1) {
      addExecution(
        `shell: command not found: ${sanitisedCommand}. Try 'help' to get started.`
      );
    } else {
      // handling the easteregg command
      if (command === "easteregg") {
        const output = await commands[sanitisedCommand](executions);
        addExecution(output);
      } else {
        const output = await commands[sanitisedCommand](args);
        addExecution(output);
      }
    }

    setCommand("");
  };

  const clearExecutions = () => setExecutions([]);

  const isValidCommand = (command: string) => {
    const validcommands = ["clear", "cls", ...Object.keys(commands)];
    return validcommands.indexOf(command.split(" ")[0].toLowerCase()) !== -1;
  };

  const autocomplete = (command: string) => {
    const validcommands = Object.keys(commands).filter((entry) =>
      entry.startsWith(command)
    );

    if (validcommands.length === 1) {
      setCommand(validcommands[0]);
    }
  };

  return (
    <TerminalContext.Provider
      value={{
        executions,
        command,
        addExecution,
        setCommand,
        clearExecutions,
        executeCommand,
        isValidCommand,
        autocomplete,
      }}
    >
      {children}
    </TerminalContext.Provider>
  );
};

export const useExecutions = () => {
  const context = useContext(TerminalContext);
  if (context === undefined) {
    throw new Error("useExecutions must be used within a TerminalProvider");
  }
  return context;
};
