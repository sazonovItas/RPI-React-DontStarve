export interface Database {
  NotFoundPage: NotFoundPage;
  ServerErrorPage: ServerErrorPage;
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

export interface Header { }

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
