import { Contents } from "../../../db/DbScheme";

export interface ContentsProps {
  Title: string;
  CurUrl: string;
  Contents: Contents[];
}
