import fsPromise from "fs/promises";
import chalk from "chalk";

// NAMED EXPORT
export const writeFile = async (filePath, data) => {
  try {
    console.log(chalk.blue("WRITING TO A FILE..."));

    await fsPromise.writeFile(filePath, data);
  } catch (error) {
    console.error(error);
  }
};

// NAMED EXPORT
export const appendFile = async (filePath, data) => {
  try {
    await fsPromise.appendFile(filePath, data);
  } catch (error) {
    console.error(error);
  }
};

// NAMED EXPORT
export const readFile = async (filePath) => {
  try {
    const data = await fsPromise.readFile(filePath, { encoding: "utf-8" });
    return data;
  } catch (error) {
    console.error(error);
  }
};
