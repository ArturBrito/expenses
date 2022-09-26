import { AddMovementController } from '@/core/account/application/add-movement-controller';
import { DbAddMovement } from '@/core/account/infrastructure/db-movement-movement';
import { AccountPrismaRepository } from '@/core/account/infrastructure/db/account-prisma-repository';
import { Controller } from '@/libs/ddd/base-classes/controllers';
import { makeAddMovementValidation } from './add-movement-validator';

export const makeAddMovementController = (): Controller => {
  const validation = makeAddMovementValidation();
  const accountPrismaRepository = new AccountPrismaRepository();
  const movementManager = new DbAddMovement(accountPrismaRepository, accountPrismaRepository);
  const controller = new AddMovementController(validation, movementManager);

  return controller;
};
