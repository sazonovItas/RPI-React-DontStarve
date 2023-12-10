export interface Database {
  NotFoundPage: NotFoundPage;
  ServerErrorPage: ServerErrorPage;
  Header: Header;
  Footer: Footer;
  MainPage: MainPage;
  SearchPage: SearchPage;
  CharacterPage: CharacterPage;
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

export interface CharacterPage {
  Content: Content;
  Footer: FooterItems;
}

export interface Content {
  Title: string;
  Contents: Contents[];
  Background: string;
  Percs: string;
  Tips: string;
  Quotes: string;
  Other: string;
  Gallery: string;
}

export interface Contents {
  Url: string;
  Text: string;
}

export interface MainPage {
  Intro: Intro;
  Update: Update;
  DailyCharacter: DailyCharacter;
  Authors: Authors;
  Footer: FooterItems;
}

export interface SepTitle {
  Text: string;
  Id: string;
}

export interface SearchPage {
  Intro: Intro;
  Title: SepTitle;
  SearchInput: Input;
  Footer: FooterItems;
}

export interface Input {
  Text: string;
}

export interface Intro {
  Title: string;
  Desc: string;
}

export interface Update {
  Img: string;
  Desc: string;
}

export interface Header {
  Logo: Logo;
  Title: string;
  Menu: Menu[];
}

export interface DailyCharacter {
  Title: string;
}

export interface Authors {
  Title: string;
  Developers: Developer[];
}

export interface Developer {
  Logo: Logo;
  Nick: string;
  Link: string;
}

export interface Footer {
  Logo: Logo;
  GithubLogo: string;
}

export interface FooterItems {
  Title: string;
  Menu: Menu[];
}

export interface Character {
  ID: string;
  Name: string;
  Phrase: string;
  PhraseColor: string;
  Background: string;
  Description: string;
  Percs: Percs;
  Tips: string[];
  Quotes: string[];
  Others: string;

  // Images paths, links and others
  StatsImg: string;
  SearchImg: string;
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
