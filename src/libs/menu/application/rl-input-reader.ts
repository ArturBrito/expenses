import { InputReader } from '../contracts/input-reader';
import { MenuItem } from '../contracts/menu-item';
import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export class RlInputReader implements InputReader {
  async read(options: MenuItem[]): Promise<number> {
    let optionsString = '';
    let optionSelected: number;

    options.forEach((item) => {
      optionsString += item.option + ' - ' + item.text + '\n';
    });

    optionsString += '\nSelect: ';

    const question = (): Promise<number> => {
      return new Promise((resolve, reject) => {
        rl.question(optionsString, (answer) => {
          try {
            resolve(parseInt(answer));
          } catch (err) {
            resolve(-1);
          }
        });
      });
    };

    optionSelected = await question();

    return optionSelected;
  }
}
