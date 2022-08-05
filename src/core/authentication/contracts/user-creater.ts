export interface UserCreater {
    create(name: string, email: string, password: string): Promise<void>;
  }
  