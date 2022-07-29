import { Exit } from '@/bootstrap/application/system/exit-controller';
import { RlInputReader } from '@/libs/ddd/base-classes/menu/application/rl-input-reader';
import { Menu } from '@/libs/ddd/base-classes/menu/domain/menu';

const inputReader = new RlInputReader();

export const mainMenu = new Menu('Bootstrap', inputReader);
mainMenu.addItem({
  option: 0,
  text: 'Exit\n',
  callback: new Exit(),
});
mainMenu.addItem({
    option: 1,
    text: 'Users'
})

/*
-- For new menu from main
const menuX = new Menu('LALAL', inputReader);
menuX.addItem({
  option: 0,
  text: 'Back\n',
  callback: mainMenu,
});

mainMenu.addItem({ option: 1, text: 'Users', callback: menuX });
*/
