import { Connection } from "@ntq/sdk";
import { createContext } from "react";


export const ConnectionContext = createContext<Connection | null>(null);


