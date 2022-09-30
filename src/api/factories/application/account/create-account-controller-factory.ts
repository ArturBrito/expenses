import { CreateAccountController } from '@/core/account/application/create-account-controller';
import { DbAccountManager } from '@/core/account/infrastructure/db-account-manager';
import { AccountPrismaRepository } from '@/core/account/infrastructure/db/account-prisma-repository';
import { UserPrismaRepository } from '@/core/authentication/infrastructure/db/user-prisma-repository';
import { Controller } from '@/libs/ddd/base-classes/controllers';
import { makeCreateAccountValidation } from './create-account-validator';

export const makeCreateAccountController = (): Controller => {
  const userPrismaRepository = new UserPrismaRepository();
  const accountPrismaRepository = new AccountPrismaRepository();
  const accountManager = new DbAccountManager(accountPrismaRepository, accountPrismaRepository, accountPrismaRepository);
  const controller = new CreateAccountController(
    makeCreateAccountValidation(),
    userPrismaRepository,
    accountManager
  );

  return controller;
};
