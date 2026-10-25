import type { Metadata } from "next";
export const metadata:Metadata={title:"Submit an agent listing"};
export default function Submit(){return <><h1>Submit a project</h1><p>GitHub pull requests provide the submission process. No accounts, payment processing or service-level approval deadline is promised.</p><ol>
<li>Fork <a href="https://github.com/CodesbyFebin/Agentic-Marketplace">the repository</a>.</li>
<li>Copy <code>submissions/TEMPLATE.yaml</code> to the matching type directory, using a unique slug.</li>
<li>Provide honest source, license, capabilities, and dated evidence. Use unknown where unverified.</li>
<li>Run <code>npm run verify:submissions</code> and open a pull request.</li>
<li>A maintainer reviews the submission. Only explicitly approved entries appear in the public registry.</li>
</ol><p>Never claim that a SHA-256 string makes an external project safe. Do not include secrets or private user information.</p></>}