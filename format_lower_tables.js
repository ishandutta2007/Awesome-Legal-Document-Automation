const fs = require('fs');

let content = fs.readFileSync('README.md', 'utf8');

// Compact table 1: Commercial Platform → Open-Source Equivalent
const table1 = `| Commercial Platform | Open-Source Equivalent / Building Blocks |
| :--- | :--- |
| **Gavel** | Docassemble + AssemblyLine + Jinja2 + python-docx-template |
| **Documate** | Docassemble + AssemblyLine + Jinja2 |
| **ClauseBase** | Docassemble + Jinja2 + python-docx-template + clause library |
| **Woodpecker** | Docassemble + Jinja2 + DOCX/PDF tooling |
| **Legito** | Docassemble + template engine + rules engine |
| **HotDocs** | Docassemble + Jinja2 + python-docx-template |
| **Afterpattern** | Docassemble + rules engine + template engine |
| **BRYTER** | Docassemble + Blawx + workflow engine |
| **Checkbox** | Docassemble + rules engine + web application |
| **Avvoka** | Docassemble + template engine + workflow + e-signature |
| **Contract Express** | Docassemble + Jinja2 + DOCX automation |
| **Neota Logic** | Docassemble + Blawx + rules-as-code |
| **Cicero / Accord Project** | Accord Project + Cicero |
| **Legal Expert System** | Docassemble + Python + YAML |
| **Legal Form Automation** | Docassemble + AssemblyLine |
| **Contract Generation** | Jinja2 + python-docx-template + LibreOffice |
| **AI Legal Document Automation** | Docassemble + LLM + RAG + rules engine |
| **Document Lifecycle** | Wraft + DocuSeal + document storage |
| **E-signature** | DocuSeal / OpenSign / Documenso |
| **Full Open-Source Stack** | Docassemble + Jinja2 + Finer rules + DOCX/PDF + e-signature |`;

content = content.replace(/# 🧩 Commercial Platform → Open-Source Equivalent[\s\S]*?(?=---|\n# ⚖️ Commercial vs Open-Source)/, '# 🧩 Commercial Platform → Open-Source Equivalent\n\n' + table1 + '\n\n');

// Compact table 2: Commercial vs Open-Source
const table2 = `| Capability | Commercial Platform | Open-Source Stack |
| :--- | :--- | :--- |
| Guided Interviews | ✅ | ✅ |
| Conditional Logic | ✅ | ✅ |
| Document Assembly | ✅ | ✅ |
| DOCX Generation | ✅ | ✅ |
| PDF Generation | ✅ | ✅ |
| Clause Libraries | ✅ | ✅ |
| Rules Engine | ✅ | ✅ |
| Client Portal | ✅ | ✅ Build |
| Visual Authoring | Usually ✅ | ⚠️ Varies |
| No-Code Authoring | Usually ✅ | ⚠️ Limited |
| AI Assistance | Increasingly ✅ | ✅ Build |
| LLM Integration | ✅ | ✅ |
| RAG | Usually | ✅ Build |
| E-Signature | Usually integrated | ✅ Via OSS |
| Workflow | ✅ | ✅ Build |
| Audit Trail | ✅ | ✅ Build |
| Version Control | ✅ | ✅ |
| Self Hosting | Limited | ✅ |
| Source Code | ❌ | ✅ |
| Customization | Medium | Very High |
| Data Ownership | Vendor-dependent | Full control |
| Air-Gapped Deployment | Limited | ✅ |
| Vendor Lock-In | Higher | Lower |
| Enterprise Support | ✅ | Community / vendors |
| Legal Templates | Often included | Build / contribute |
| Regulatory Responsibility | Customer + vendor | Customer |
| Implementation Effort | Lower | Higher |`;

content = content.replace(/# ⚖️ Commercial vs Open-Source[\s\S]*?(?=---|\n# 📊 Legal Document Automation Comparison)/, '# ⚖️ Commercial vs Open-Source\n\n' + table2 + '\n\n');

// Compact table 3: Legal Document Automation Comparison
const table3 = `| Project | Document Assembly | Interviews | Rules | DOCX | PDF | E-Sign | Self-Host |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Docassemble | ✅ | ✅ | ✅ | ✅ | ✅ | Integration | ✅ |
| AssemblyLine | ✅ | ✅ | ✅ | ✅ | ✅ | Integration | ✅ |
| Accord Project | ✅ | ⚠️ | ✅ | ⚠️ | ⚠️ | ⚠️ | ✅ |
| Cicero | ✅ | ❌ | ✅ | ⚠️ | ⚠️ | ❌ | ✅ |
| Blawx | ⚠️ | ⚠️ | ✅ | ❌ | ❌ | ❌ | ✅ |
| Catala | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |
| OpenFisca | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |
| CommonAccord | ✅ | ⚠️ | ✅ | ⚠️ | ⚠️ | ❌ | ✅ |
| Wraft | ✅ | ❌ | ⚠️ | ✅ | ✅ | Integration | ✅ |
| DocuSeal | ❌ | ❌ | ❌ | ⚠️ | ✅ | ✅ | ✅ |
| OpenSign | ❌ | ❌ | ❌ | ⚠️ | ✅ | ✅ | ✅ |
| Documenso | ❌ | ❌ | ❌ | ⚠️ | ✅ | ✅ | ✅ |`;

content = content.replace(/# 📊 Legal Document Automation Comparison[\s\S]*?(?=---|\n# 🚀 Recommended Open-Source Stacks)/, '# 📊 Legal Document Automation Comparison\n\n' + table3 + '\n\n');

// Compact table 4: Recommended Projects by Use Case
const table4 = `| Use Case | Recommended Starting Point |
| :--- | :--- |
| Full open-source legal automation | **Docassemble** |
| Legal guided interviews | **Docassemble** |
| Court forms | **Docassemble + AssemblyLine** |
| No-code legal workflows | **Docassemble + custom visual builder** |
| HotDocs alternative | **Docassemble** |
| Gavel alternative | **Docassemble + AssemblyLine + Jinja2** |
| Contract template automation | **Jinja2 + python-docx-template** |
| DOCX automation | **python-docx-template** |
| PDF automation | **WeasyPrint / ReportLab** |
| Rules-as-code | **Blawx / Catala / OpenFisca** |
| Smart legal contracts | **Accord Project / Cicero** |
| Structured agreements | **CommonAccord** |
| AI legal drafting | **Docassemble + LLM + RAG** |
| Local/private AI | **Docassemble + Ollama / vLLM** |
| Contract signing | **DocuSeal / Documenso / OpenSign** |
| Document lifecycle | **Wraft** |
| Legal document storage | **Paperless-ngx / Mayan EDMS** |
| Legal RAG | **Docling + Qdrant + LLM** |
| Enterprise automation | **Docassemble + Temporal + PostgreSQL** |`;

content = content.replace(/# 🎯 Recommended Projects by Use Case[\s\S]*?(?=---|\n# 🏢 Building a Gavel Alternative)/, '# 🎯 Recommended Projects by Use Case\n\n' + table4 + '\n\n');

fs.writeFileSync('README.md', content, 'utf8');
console.log('Successfully formatted comparison and use case tables!');
