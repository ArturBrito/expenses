export interface CreateUserRepository {
    createUser(name: string, email: string, password: string): Promise<void>;
  }
  