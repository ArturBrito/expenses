import { UserCreater } from '@/core/authentication/contracts/user-creater';
import { UsersRemover } from '@/core/authentication/contracts/users-remover';
import { ConsoleController } from '@/libs/controllers/console-controller';

import * as readline from 'readline';
let rl = readline.createInterface({
  input: process.stdin,
});

const users = [
  {
    name: 'teste1',
    email: 'teste1@gmail.com',
    password: 'password',
    hashed_password: '$2a$12$9n6YN7Cwy2g/lNmb9XhtquXPKRj7Gk0UDIhzh7IjKWiPhJ.d1/TEi',
  },
  {
    name: 'teste2',
    email: 'teste2@gmail.com',
    password: 'teste',
    hashed_password: '$2a$12$TIxHPZL1uVV.1nRy7QiG5.b33ubOV/.VusRVzU.uLpSYZJm1CZ2jG'
  }
];

export class UsersBootstrap implements ConsoleController {
  constructor(
    private readonly userRemover: UsersRemover,
    private readonly userCreater: UserCreater
  ) {}

  async exec(): Promise<void> {
    console.log('Removing users...');
    await this.userRemover.remove();
    console.log('Users removed\n');

    for (let i = 0; i < users.length; i++) {
      console.log('Creating user:');
      console.log('Name: ' + users[i].name);
      console.log('Email: ' + users[i].email);
      console.log('Password: ' + users[i].password);

      try {
        await this.userCreater.create(
          users[i].name,
          users[i].email,
          users[i].hashed_password
        );
        console.log('\nUser created');
        console.log('-------------------------------\n')
      } catch (e) {
        console.error('Failed to create user!');
        console.error(e);
      }
    }

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
