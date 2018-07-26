const chalk = require("chalk");
const figlet = require("figlet");

exports.init = () => {
  console.log(
    chalk.red(
      figlet.textSync("File Creator", {
        font: "Standard",
        horizontalLayout: "full",
        verticalLayout: "default"
      })
    )
  );
};