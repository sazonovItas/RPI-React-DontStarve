import { Menu } from "../../../db/DbScheme";

export interface FooterProps {
  Title: string;
  Menu: Menu[];
  children?: React.ReactNode;
}
