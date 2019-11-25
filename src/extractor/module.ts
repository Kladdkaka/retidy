
import { Node } from "@babel/types"

export type ModuleId = number | string;  // e.g. 120 | "EwB5" 
export type ModuleAST = Node
export interface Module {
    id?: ModuleId;
    ast: ModuleAST;
    isEntry?: boolean;
}

// alias
export type AssetId = ModuleId
