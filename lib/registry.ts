import { readdirSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { parse } from "yaml";
import type { Listing } from "./types";
import { TYPES } from "./types";
const root = path.join(process.cwd(),"submissions");
export function loadListings(): Listing[] {
  const result: Listing[] = [];
  for(const type of TYPES) {
    const folder=path.join(root,type+"s");
    if(!existsSync(folder)) continue;
    for(const filename of readdirSync(folder).filter(x=>x.endsWith(".yaml")).sort()) {
      try { const data=parse(readFileSync(path.join(folder,filename),"utf8")) as Listing;
        if(data && data.type===type && data.status==="approved" && data.id && data.repository?.startsWith("https://github.com/")) result.push(data);
      } catch (error) { throw new Error("Invalid accepted submission "+filename,{cause:error}); }
    }
  }
  return result;
}
export const approvedListings=loadListings();
