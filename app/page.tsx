import Link from "next/link";
import { approvedListings } from "@/lib/registry";
export default function Home() {
 return <><p className="tag">Public development preview · no purchasing or payouts</p><h1>Build a trustworthy agent marketplace.</h1>
 <p>Agentic Marketplace is a source-linked GitHub-native registry for AI agents, bots, models, skills, frameworks and MCP servers. New listings are proposed through reviewed pull requests. Approval and source links are not independent security certification.</p>
 <div className="grid"><section className="card"><h2>Reviewed entries</h2><p>{approvedListings.length} editorially accepted entries in the current build. No invented inventory.</p><Link href="/marketplace/">Explore registry</Link></section><section className="card"><h2>Submit a listing</h2><p>Fork the repository, add a YAML submission and open a pull request. Maintain source provenance.</p><Link href="/submit/">Submission guide</Link></section></div>
 <h2>Future roadmap, not active features</h2><p>Verified agent execution, payment processing, subscriptions, rental plans, royalty distribution and composable agent chains require independent architecture, compliance and release work.</p>
 </>;
}
