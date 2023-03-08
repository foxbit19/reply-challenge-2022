import { Demon } from "./src/models/demon.js";
import { Player } from "./src/models/player.js";
import { IO } from "./src/utils/io.js";

const inputs = ["a_example.txt"];
const order = [];

IO.readInput("inputs/00-example.txt").then((result) => {
  processData(result);
});

const createOutput = (demons) => {
  let output = "";
  demons.forEach((demon) => {
    output += `${demon.index}\n`;
  });

  return output;
};

const processData = (data) => {
  const lines = data.split("\n");

  const [staminaAmount, maxStamina, availableTurns, demonsAvailable] =
    parseLine(lines[0]);
  const player = new Player(staminaAmount, maxStamina, availableTurns);
  console.log(player);

  const demons = parseDemons(lines, demonsAvailable);
  console.log(demons);

  IO.writeOutput("outputs/00-example.txt", createOutput(demons));
};

// splits a single line (player or demon)
const parseLine = (line) => {
  return line.split(" ");
};

// parse the demons
const parseDemons = (lines, demonsAvailable) => {
  const demons = [];

  for (let i = 1; i < lines.length && i <= demonsAvailable; i++) {
    if (!lines[i]) break;

    const line = parseLine(lines[i]);
    const demon = new Demon(i, line[0], line[1], line[2], line[3]);

    for (let j = 4; j < line.length; j++) {
      demon.addFragment(line[j]);
    }

    demons.push(demon);
  }
  return demons;
};
