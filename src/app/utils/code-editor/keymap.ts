import { keymap } from "@codemirror/view";

/**
 * Prevents typing in the editor.
 */
function preventTyping() {
  return true; // Returning true in a command function prevents the action
}

/**
 *  Generates key bindings for alphabetic and numeric characters.
 */
function generateAlphaKeyBindings() {
  const bindings = [];
  // Loop through lowercase and uppercase letters
  for (let i = 0; i < 26; i++) {
    const lowerCase = String.fromCharCode(97 + i); // 'a' starts at ASCII code 97
    const upperCase = String.fromCharCode(65 + i); // 'A' starts at ASCII code 65
    bindings.push({ key: lowerCase, run: preventTyping, preventDefault: true });
    bindings.push({ key: upperCase, run: preventTyping, preventDefault: true });
  }

  // Loop through numeric keys
  for (let i = 0; i < 10; i++) {
    const number = i.toString();
    bindings.push({ key: number, run: preventTyping, preventDefault: true });
  }

  return bindings;
}

/**
 * Custom key handler that prevents all modifications to the editor.
 */
const customKeymap = keymap.of([
  ...generateAlphaKeyBindings(),

  { key: "Space", run: preventTyping, preventDefault: true },
  { key: "Enter", run: preventTyping, preventDefault: true },
  { key: "Backspace", run: preventTyping, preventDefault: true },
  { key: "Delete", run: preventTyping, preventDefault: true },
  // Add other specific keys or functionalities here
]);

export default customKeymap;
