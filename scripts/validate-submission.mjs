import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { parse } from "yaml";
const types=["agent","bot","model","skill","mcp-server","framework"];
const issues=[];const seen=new Set();let checked=0;
for(const type of types){
 const dir=path.join("submissions",type+"s");
 if(!existsSync(dir))continue;
 for(const file of readdirSync(dir).filter(x=>x.endsWith(".yaml"))){
  checked++;const loc=path.join(dir,file);
  try {
   const x=parse(readFileSync(loc,"utf8"));
   if(!x||typeof x!=="object")throw Error("Expected YAML mapping");
   for(const k of ["id","type","slug","name","repository","evidence","status"])if(!x[k])throw Error("Missing "+k);
   if(x.type!==type)throw Error("Type does not match folder");
   if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(x.slug))throw Error("Invalid slug");
   if(file!==x.slug+".yaml")throw Error("Filename must match slug");
   if(seen.has(type+"/"+x.slug))throw Error("Duplicate type and slug");
   seen.add(type+"/"+x.slug);
   if(!/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/?$/.test(x.repository))throw Error("Repository must be a public GitHub repository URL");
   if(!["pending","under-review","approved","rejected","quarantined"].includes(x.status))throw Error("Invalid status");
   if(typeof x.evidence?.sourceUrl!=="string"||!x.evidence.sourceUrl.startsWith("https://"))throw Error("Missing evidence URL");
   if(!/^\d{4}-\d{2}-\d{2}T/.test(x.evidence?.retrievedAt??"") || Number.isNaN(Date.parse(x.evidence.retrievedAt)))throw Error("Invalid evidence time");
   if(!/^sha256:[0-9a-f]{64}$/.test(x.evidence?.sha256??""))throw Error("Missing actual sha256:<64 lowercase hex> snapshot digest");
   if(!Array.isArray(x.categories)||!Array.isArray(x.tags)||!Array.isArray(x.capabilities))throw Error("Missing arrays");
   console.log("VALID "+loc+" (structural only)");
  }catch(e){issues.push(loc+": "+e.message);}
 }
}
if(issues.length){console.error(issues.join("\n"));process.exit(1);}
console.log("Checked "+checked+" submissions. No source or security verification is implied.");
