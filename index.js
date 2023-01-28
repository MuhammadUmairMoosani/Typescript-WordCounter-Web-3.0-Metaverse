import inquirer from 'inquirer';
import chalk from 'chalk';
const paragraph = await inquirer.prompt({
    name: "paragraphText",
    message: "Please type paragraph"
});
const { paragraphText } = paragraph;
if (paragraphText) {
    console.log(chalk.green(`Type paragraph total work is ${paragraphText.split(" ").length}`));
}
else {
    console.log(chalk.red("Something when wrong!"));
}
