export interface Database {
  NotFoundPage: NotFoundPage;
  ServerErrorPage: ServerErrorPage;
  Header: Header;
  Characters: Character[];
}

export interface NotFoundPage {
  Title: string;
  SubTitle: string;
  Description: string;
}

export interface ServerErrorPage {
  Title: string;
  SubTitle: string;
  Description: string;
}

export interface Header {
  Logo: Logo;
  Title: string;
  Menu: Menu[];
}

export interface Character {
  ID: string;
  Name: string;
  Phrase: string;
  Background: string;
  Description: string;
  Percs: Percs;
  Tips: string[];
  Quotes: string[];
  Others: string;

  // Images paths, links and others
  StatsImg: string;
  DayCharacterImg: string;
  CharacterSkinsImg: string;
  VideoLink: string;
  Gallery: string[];
}

export interface Percs {
  Pros: string[];
  Cons: string[];
  General: string[];
}

export interface Logo {
  Src: string;
  Alt: string;
}

export interface Button {
  Text: string;
  Url: string;
}

export interface Menu {
  Text: string;
  Url: string;
}
