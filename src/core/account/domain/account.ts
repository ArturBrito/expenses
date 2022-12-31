import { Entity } from '@/libs/ddd/domain/base-classes/entity.base';
import { UniqueEntityID } from '@/libs/ddd/domain/base-classes/unique-entity-id.base';

interface IAccountProps {
  //readonly account_id: number;
  readonly user_id: number;
  account_name: string;
  account_balance: number;
}

export class Account extends Entity<IAccountProps> {
  get userId(): number {
    return this.props.user_id;
  }

  get accountId(): string {
    return this._id.toString();
  }

  get accountName(): string {
    return this.props.account_name;
  }

  get accountBalance(): number {
    return this.props.account_balance;
  }

  public static create(props: IAccountProps, id?: UniqueEntityID): Account {
    // Change to use guard
    return new Account(props, id);
  }
}
