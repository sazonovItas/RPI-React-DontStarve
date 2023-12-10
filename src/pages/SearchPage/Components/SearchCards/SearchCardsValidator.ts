import { Character } from "../../../../db/DbScheme";

export interface SearchCardsProps {
  cards: Character[] | null;
  children?: React.ReactNode;
}
