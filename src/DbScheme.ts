export interface Database {
  NotFoundPage: NotFoundPage;
  ServerErrorPage: ServerErrorPage;
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

export interface Character {
  ID: number;
  Name: string;
  ShortInfo: string;
  Images: string[];
}
