import { ConsoleController } from '@/libs/ddd/base-classes/controllers/console-controller';

export class Exit implements ConsoleController {
    exec(): Promise<void> {
        console.log('Exiting...')
        process.exit(0);
    }
}
