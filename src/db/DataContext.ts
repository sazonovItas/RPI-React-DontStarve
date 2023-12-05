import { useContext } from "react";
import { createContext } from "react";
import db from "../assets/data/database.json";
import { Database } from "./DbScheme.ts";

const DatabaseContext = createContext<Database>(db);

export function useDatabase(): Database {
  return useContext(DatabaseContext);
}
