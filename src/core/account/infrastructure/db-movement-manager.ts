import { prismaClient } from '@/core/infrastructure/db/prisma-helper';
import { AddMovementRepository } from '../contracts/db/add-movement-repository';
import { GetAccountByUserAndIdRepository } from '../contracts/db/get-account-repository';
import { UpdateAccountBalanceRepository } from '../contracts/db/update-account-balance-repository';
import { MovementManager } from '../contracts/movement-manager';

export class DbAddMovement implements MovementManager {
  constructor(
    private readonly addMovementRepository: AddMovementRepository,
    private readonly getAccountByUserAndIdRepository: GetAccountByUserAndIdRepository,
    private readonly updateAccountBalanceRepository: UpdateAccountBalanceRepository
  ) {}

  async addMovement(
    request: MovementManager.AddMovementRequest
  ): Promise<boolean> {
    const account = await this.getAccountByUserAndIdRepository.getAccount(
      request
    );

    let movementSuc: any;
    if (account) {
      await this.addMovementRepository
        .addMovement(request)
        .then(async (res) => {
          request.value = account.accountBalance + request.value;

          movementSuc = await this.updateAccountBalanceRepository
            .update(request)
            .catch(async (err) => {
              let deleteRequest = { ...request, movementId: res.movement_id };
              await this.removeMovement(deleteRequest);
            });
        });
    }

    if (movementSuc) {
      return true;
    }
    return false;
  }

  async removeMovement(
    request: MovementManager.RemoveMovementRequest
  ): Promise<boolean> {
    const account = await this.getAccountByUserAndIdRepository.getAccount(
      request
    );

    if (account) {
      await prismaClient.movement.delete({
        where: {
          movement_id: request.movementId,
        },
      });

      return true;
    }

    return false;
  }
}
