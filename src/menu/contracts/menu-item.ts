import { Controller } from "@/libs/ddd/base-classes/controllers";
import { Menu } from "../config/menu";


export type MenuItem = {
  option: number;
  text: string;
  callback?: Controller | Menu;
};
