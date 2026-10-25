export const TYPES = ["agent","bot","model","skill","mcp-server","framework"] as const;
export type ListingType = typeof TYPES[number];
export type Listing = {
 id:string;type:ListingType;name:string;slug:string;version:string;tagline:string;description:string;
 repository:string;categories:string[];tags:string[];capabilities:string[];
 deployment:"local"|"cloud"|"both"|"unknown";
 pricing:{model:"free"|"freemium"|"paid"|"source-available"|"unknown";notes?:string};
 evidence:{sourceUrl:string;retrievedAt:string;sha256:string};
 author:{name:string;github:string};license:string|null;
 status:"pending"|"under-review"|"approved"|"rejected"|"quarantined";
};
