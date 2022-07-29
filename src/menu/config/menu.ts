import { InputReader } from '../contracts/input-reader';
import { MenuItem } from '../contracts/menu-item';

export class Menu {
  private readonly title: string = '';
  private readonly menuItems: MenuItem[] = [];
  private readonly separator = '------------------------------------';

  constructor(title: string, private readonly inputReader: InputReader) {
    this.title = title;
  }

  addItem(item: MenuItem) {
    this.menuItems.push(item);
  }

  printTitle() {
    this.printSeparator();
    console.log(this.title);
    this.printSeparator();
  }

  printSeparator() {
    console.log(this.separator);
  }

  async exec() {
    console.clear();

    this.printTitle();

    const selected = await this.inputReader.read(this.menuItems);

    if (selected <= this.menuItems.length - 1) {
      if (this.menuItems[selected].callback) {
        return await this.menuItems[selected].callback.exec({});
      }
    }
    return this.exec();
  }
}
