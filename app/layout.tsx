import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Agentic Marketplace — Source-linked agent registry", template: "%s | Agentic Marketplace" },
  description: "A GitHub-native registry for proposed AI agent, bot, model, skill, MCP server and framework listings. No verified transactions, rentals or payouts.",
  robots: { index: false, follow: true },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body>
  <header><strong>Agentic Marketplace</strong><nav aria-label="Main"><Link href="/">Home</Link><Link href="/marketplace/">Registry</Link><Link href="/submit/">Submit</Link><a href="https://bestaiagent.in/">BestAIAgent.in</a><a href="https://github.com/CodesbyFebin/Agentic-Marketplace">Source</a></nav></header>
  <main>{children}</main><footer>Maintained by <a href="https://github.com/CodesbyFebin">CodesbyFebin</a>. Independent companion to BestAIAgent.in. Unknown stays unknown.</footer>
 </body></html>;
}
