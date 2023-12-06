import { useContext } from "react";
import { createContext } from "react";
import db from "../assets/data/database.json";
import { Database } from "./DbScheme.ts";
import { GetLangOrSetDefault } from "../utils/LangSettings.ts";

const DatabaseContext = createContext<Database>(db["en"]);

export function useDatabase(): Database {
  return useContext(DatabaseContext);
}

export function DataProvider({ children }: { children: React.ReactNode }) {
  const lang = GetLangOrSetDefault();

  return (
    <DatabaseContext.Provider value={db[lang as keyof typeof db]}>
      {children}
    </DatabaseContext.Provider>
  );
}
