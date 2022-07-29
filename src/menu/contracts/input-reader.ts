import { MenuItem } from "./menu-item";

export interface InputReader {
  read(options: MenuItem[]): Promise<number>;
}
