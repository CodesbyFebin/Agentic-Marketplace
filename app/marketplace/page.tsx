import type { Metadata } from "next";
import Link from "next/link";
import { approvedListings } from "@/lib/registry";
export const metadata:Metadata={title:"Reviewed agent registry"};
export default function Marketplace(){return <><h1>Community registry</h1><p>Only editorially accepted YAML entries appear here. A listing is not a product verification, payment integration or security approval.</p>
<div className="grid">{approvedListings.map(x=><article className="card" key={x.id}><h2>{x.name}</h2><p>{x.tagline}</p><p><small>{x.type} · {x.deployment}</small></p><a href={x.repository} rel="noopener noreferrer">Primary repository</a></article>)}</div>
{approvedListings.length===0&&<p>No accepted entries have been published yet. <Link href="/submit/">Propose the first listing</Link>.</p>}</>}