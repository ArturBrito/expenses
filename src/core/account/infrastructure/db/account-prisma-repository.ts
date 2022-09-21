import { prismaClient } from '@/core/infrastructure/db/prisma-helper';
import { AddAccountRepository } from '../../contracts/db/add-account-repository';

export class AccountPrismaRepository implements AddAccountRepository {
  async add(request: AddAccountRepository.Request): Promise<void> {
    
    await prismaClient.account.create({
      data: {
        user_id: request.userId,
        balance: request.balance,
        account_name: request.accountName,
      },
    });

  }
}
