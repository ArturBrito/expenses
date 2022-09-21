export class Account {
  constructor(
    private readonly account_id: number,
    private readonly user_id: number,
    private readonly account_name: string,
    private balance: number
  ) {}
}
