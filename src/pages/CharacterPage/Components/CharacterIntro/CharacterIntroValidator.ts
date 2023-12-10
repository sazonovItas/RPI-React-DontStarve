import { Content } from "../../../../db/DbScheme";

export interface CharacterIntroProps {
  Name: string;
  Phrase: string;
  PhraseColor: string;
  Description: string;
  StatsImg: string;
  Content: Content;
}
