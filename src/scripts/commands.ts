export const commands: { [key: string]: any } = {
  help: {
    description: "List all commands",
    exec: () => {
      return [
        "Options:",
        ...Object.keys(commands).map(
          (command) => `\t${command}: \n\t\t${commands[command].description}`
        ),
      ];
    },
  },
  clear: {
    description: "Clear the screen",
  },
  echo: {
    description: "Print a message;\tUsage: echo [message]",
    exec: (args: any) => {
      return [args.join(" ")];
    },
  },
  whoami: {
    description: "Print the current user",
    exec: () => {
      return [
        "User:\t\tJon Prell",
        "Occupation:\tSoftware Engineer",
        "Job History:",
        "\tCoterie Insurance - 12/2021 to Present",
        "\t\tSenior Software Engineer and Engineering Advocate",
        "\tGo iLawn (contractor) - 11/2021 to 12/2021",
        "\t\tLead Software Engineer",
        "\tCoterie Insurance (contractor)- 09/2021 to 11/2021",
        "\t\tSoftware Engineer",
        "\tKroger Digital (contractor) - 02/2018 to 09/2021",
        "\t\tSoftware Engineer",
        "\tLaunch Scout (consultant) - 02/2018 to 12/2021",
        "\t\tSoftware Engineer and Engineering Manager",
      ];
    },
  },
  social: {
    description: "Print social media links",
    exec: () => {
      return [
        "https://www.linkedin.com/in/jon-prell-web-dev/",
        "https://www.github.com/jtp709",
      ];
    },
  },
  // navigation: {
  //   description: "Print navigation links",
  //   exec: () => {
  //     return [
  //       "https://www.jonprell.com/",
  //       "https://www.jonprell.com/blog/",
  //       "https://www.jonprell.com/projects/",
  //     ];
  //   },
  // },
};
