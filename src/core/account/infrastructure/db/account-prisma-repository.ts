import { prismaClient } from '@/core/infrastructure/db/prisma-helper';
import { AccountManager } from '../../contracts/account-manager';
import { AddAccountRepository } from '../../contracts/db/add-account-repository';
import { AddMovementRepository } from '../../contracts/db/add-movement-repository';
import { GetAccountByUserAndIdRepository } from '../../contracts/db/get-account-repository';
import { UpdateAccountBalanceRepository } from '../../contracts/db/update-account-balance-repository';

export class AccountPrismaRepository
  implements
    AddAccountRepository,
    AddMovementRepository,
    GetAccountByUserAndIdRepository,
    UpdateAccountBalanceRepository
{
  async addAccount(request: AddAccountRepository.Request): Promise<void> {
    await prismaClient.account.create({
      data: {
        user_id: request.userId,
        balance: request.balance,
        account_name: request.accountName,
      },
    });
  }

  async addMovement(request: AddMovementRepository.Request): Promise<any> {
    const movement = await prismaClient.movement.create({
      data: {
        account_id: request.accountId,
        value: request.value,
      },
    });

    if (movement) {
      return movement;
    }

    return movement;
  }

  async getAccount(
    request: AccountManager.GetAccountRequest
  ): Promise<AccountManager.GetAccountResponse> {
    const account = await prismaClient.account.findFirst({
      where: {
        user_id: request.userId,
        account_id: request.accountId,
      },
    });

    if (account) {
      return {
        accountId: account.account_id,
        accountName: account.account_name,
        balance: account.balance,
        userId: account.user_id,
      };
    }

    return null;
  }

  async update(
    request: AccountManager.UpdateAccountBalanceRequest
  ): Promise<boolean> {
    const updateAccountBalance = await prismaClient.account.update({
      where: {
        account_id: request.accountId,
      },
      data: {
        balance: request.value,
      },
    });

    if (updateAccountBalance) {
      return true;
    }

    return false;
  }
}
