import { UsersRemover } from '@/core/authentication/contracts/users-remover';
import { ConsoleController } from '@/libs/ddd/base-classes/controllers/console-controller';

import * as readline from 'readline';
let rl = readline.createInterface({
  input: process.stdin,
});

export class UsersBootstrap implements ConsoleController {
  constructor(private readonly accountRemover: UsersRemover) {}
  async exec(): Promise<void> {
    console.log('Removing users...');
    await this.accountRemover.remove();

    const enter = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        console.log('\nPress enter to continue..');
        rl.question('', (answer) => {
          try {
            resolve();
          } catch (err) {
            resolve();
          }
        });
      });
    };

    await enter();
  }
}
