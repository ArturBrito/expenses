import { UsersBootstrap } from '@/bootstrap/application/users/create-users-bootstrap-controller';
import { DbUsersRemover } from '@/core/authentication/infrastructure/db-users-remover';
import { AccountPrismaRepository } from '@/core/authentication/infrastructure/db/account-prisma-repository';
import { ConsoleController } from '@/libs/ddd/base-classes/controllers/console-controller';

export const usersBootstrapFactory = (): ConsoleController => {
    const prismaRepository = new AccountPrismaRepository();
    const usersRemover = new DbUsersRemover(prismaRepository);
    return new UsersBootstrap(usersRemover);
};
