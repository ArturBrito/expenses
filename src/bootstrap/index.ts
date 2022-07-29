import ModuleAlias from 'module-alias';
ModuleAlias.addAliases({
  '@': __dirname + '/../',
});

import { mainMenu } from './factories/menu/menu-factory';

mainMenu.exec()