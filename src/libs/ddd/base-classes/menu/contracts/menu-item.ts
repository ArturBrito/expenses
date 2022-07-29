import { ConsoleController } from "@/libs/ddd/base-classes/controllers/console-controller";
import { Menu } from "../domain/menu";


export type MenuItem = {
  option: number;
  text: string;
  callback?: ConsoleController | Menu;
};
