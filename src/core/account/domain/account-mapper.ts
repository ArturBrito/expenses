import { UniqueEntityID } from '@/libs/ddd/domain/base-classes/unique-entity-id.base';
import { Account } from './account';

export class AccountMapper {
  // toDTO if necessary

  
  public static toPersistence(account: Account): any {
    return {
      account_id: account.accountId,
      user_id: account.userId.toString(),
      account_name: account.accountName,
      account_balance: account.accountBalance,
    };
  }

  public static toDomain(raw: any): Account {
    const accountOrError = Account.create(
      {
        user_id: parseInt(raw.userId),
        account_name: raw.accountName,
        account_balance: raw.accountBalance,
      },
      new UniqueEntityID(raw.accountId)
    );

    //accountOrError.isFailure ? console.log(userOrError.error) : '';

    //return userOrError.isSuccess ? userOrError.getValue() : null;
    return accountOrError;
  }
}
