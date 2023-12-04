import { createContext, useContext } from "react";
import { Database } from "./DbScheme";
import db from "./assets/data/database.json";

const DbContext = createContext<Database>(db["en"]);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const lang = "en";

  return <DbContext.Provider value={db[lang]}>{children}</DbContext.Provider>;
}

export function useDatabase(): Database {
  return useContext(DbContext);
}
