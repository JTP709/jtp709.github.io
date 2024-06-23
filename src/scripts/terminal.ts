import { commands } from "./commands";
import { writeLine, persistInputLine, clearAll } from "./utils";

const input = document.querySelector("input");
const output = document.querySelector("#output");
const datetime = document.querySelector("datetime");

if (input !== null && output !== null && datetime !== null) {
  input.focus();

  document.addEventListener("click", () => {
    input.focus();
  });

  setInterval(() => {
    datetime.textContent = new Date().toLocaleString();
  }, 1000);

  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      persistInputLine(input, output);

      const [command, ...args] = input.value.split(" ");
      const formattedCommand = command.toLowerCase();

      if (formattedCommand === "clear") {
        clearAll(input, output);
      } else {
        const cmd = commands[formattedCommand];
        const result = cmd
          ? cmd.exec(args)
          : [`Command not found: ${formattedCommand}`];
        input.value = "";

        for (const line of result) {
          await writeLine(line, output);
        }
      }
    }
  });
}
