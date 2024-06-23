const getLinkText = (line: string) => {
  const url = new URL(line);
  if (url.hostname === "www.jonprell.com") {
    if (url.pathname === "/") {
      return "Home";
    }
    const path = url.pathname.replaceAll("/", "");
    return path.charAt(0).toUpperCase() + path.slice(1);
  }
  return (
    url.hostname.split(".")[1].charAt(0).toUpperCase() +
    url.hostname.split(".")[1].slice(1)
  );
};

export const writeLine = (line: string, output: Element) => {
  const isUrl = line.startsWith("http");

  return new Promise((resolve) => {
    const newElem = document.createElement(isUrl ? "a" : "pre");
    output.appendChild(newElem);
    newElem.style.margin = "0";

    if (isUrl) {
      (newElem as HTMLAnchorElement).href = line;
      newElem.style.color = "#0080ff";
      newElem.style.textDecoration = "none";
      newElem.style.textShadow = "0 0 5px #0080ff";
      const breakElem = document.createElement("br");
      output.appendChild(breakElem);
    } else {
      newElem.style.textWrap = "wrap";
    }
    const text = isUrl ? getLinkText(line) : line.split("");

    let index = 0;

    const intervalId = setInterval(() => {
      if (index < text.length) {
        newElem.textContent += text[index];
        index++;
        window.scrollTo(0, document.body.scrollHeight);
      } else {
        clearInterval(intervalId);
        resolve(true);
      }
    }, 20);
  });
};

export const persistInputLine = (input: HTMLInputElement, output: Element) => {
  const caret = document.createElement("span");
  caret.textContent = "$>";
  caret.style.marginRight = "0.5rem";
  caret.style.color = "white";
  output.appendChild(caret);

  const inputPersist = document.createElement("span");
  inputPersist.textContent = input.value;
  inputPersist.style.color = "white";
  output.appendChild(inputPersist);
  output.appendChild(document.createElement("br"));
};

export const clearAll = (input: HTMLInputElement, output: Element) => {
  output.innerHTML = "";
  input.value = "";
};
