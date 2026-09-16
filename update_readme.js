const fs = require('fs');

let content = fs.readFileSync('README.md', 'utf8');

// 1. Add SVG banner at top
if (!content.includes('assets/banner.svg')) {
    content = content.replace(/^# Awesome-Legal-Document-Automation\s*/i, '# Awesome-Legal-Document-Automation\n\n![Awesome Legal Document Automation Banner](assets/banner.svg)\n\n');
}

// 2. Add Badges
const badges = `<p align="center">
  <a href="https://github.com/ishandutta2007/Awesome-Awesome-Awesome"><img src="https://img.shields.io/badge/Awesome-%E2%9C%94-blueviolet?style=flat-square&logo=github" alt="Awesome"/></a>
  <a href="https://discord.gg/jc4xtF58Ve"><img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" /></a>
  <a href="https://github.com/ishandutta2007/Awesome-Legal-Document-Automation/stargazers"><img src="https://img.shields.io/github/stars/ishandutta2007/Awesome-Legal-Document-Automation?style=flat-square" alt="Stars"/></a>
  <a href="https://github.com/ishandutta2007/Awesome-Legal-Document-Automation/network/members"><img src="https://img.shields.io/github/forks/ishandutta2007/Awesome-Legal-Document-Automation?style=flat-square" alt="Forks"/></a>
  <a href="https://github.com/ishandutta2007/Awesome-Legal-Document-Automation/blob/main/LICENSE"><img src="https://img.shields.io/github/license/ishandutta2007/Awesome-Legal-Document-Automation?style=flat-square" alt="License"/></a>
  <a href="https://github.com/ishandutta2007"><img alt="GitHub followers" src="https://img.shields.io/github/followers/ishandutta2007?label=Follow" /></a>
</p>`;

if (!content.includes('https://img.shields.io/badge/Awesome-%E2%9C%94-blueviolet')) {
    content = content.replace(/(# ⚖️ Top Legal Document Automation\s*\n+)/, `$1${badges}\n\n`);
}

// 3. Replace sindresorhus awesome link
content = content.replace(/https:\/\/github\.com\/sindresorhus\/awesome/g, 'https://github.com/ishandutta2007/Awesome-Awesome-Awesome');

// 4. Update SaaS section
const saasMarketNote = `> **Market Size & Overview:** The Legal Document Automation & Contract Lifecycle Management (CLM) market size is estimated at **$3.2 Billion in 2026** and is projected to reach **$7.8 Billion by 2032**, growing at a CAGR of ~15.8%. The sector is currently **highly fragmented**, split between high-growth AI-native CLMs (Ironclad, SpotDraft), established enterprise legal suites (Thomson Reuters, Litera), and dedicated no-code interview/assembly platforms (Gavel, Legito).`;

const saasTable = `| Platform | Company | Revenue / Valuation (Est.) | Starting Price | Free Tier / Trial Limits | Primary Focus | Key Capabilities |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [Ironclad](https://ironcladapp.com/) | Ironclad | **$3.2B** (Valuation) | $500/mo (Billed annually) | 14-day free trial on request | Contract lifecycle | Contract creation, workflows and lifecycle management |
| [SpotDraft](https://www.spotdraft.com/) | SpotDraft | **$300M** (Valuation) | $350/mo (Starter tier) | 14-day free demo / sandbox trial | Contract lifecycle | Contract creation, workflows and management |
| [Litera Create](https://www.litera.com/) | Litera | **$300M+** (Annual Revenue) | $250/user/yr (Enterprise tier) | No free tier; demo upon request | Document drafting | Legal document creation and Microsoft Word integration |
| [Contract Express](https://legal.thomsonreuters.com/) | Thomson Reuters | **$250M+** (Legal Division Rev) | $150/user/mo (Enterprise) | 30-day enterprise trial for legal teams | Enterprise document automation | Legal templates, interviews and document assembly |
| [BRYTER](https://bryter.com/) | BRYTER | **$210M** (Valuation) | $400/mo (Business tier) | 14-day trial for enterprise users | No-code legal automation | Decision trees, legal workflows, client applications |
| [Gavel](https://www.gavel.io/) | Gavel | **$50M** (Valuation) | $99/mo (Standard plan) | 14-day free trial (no credit card required) | No-code legal automation | Document automation, intake, workflows, PDF/DOCX automation |
| [Juro](https://juro.com/) | Juro | **$50M** (Valuation) | $59/user/mo (Essential plan) | Free plan (Up to 50 active contracts/yr) | Contract automation | Collaborative contract creation and workflow |
| [ClauseBase](https://www.clausebase.com/) | ClauseBase | **$20M** (Valuation) | €149/mo (Drafting plan) | 14-day full feature free trial | Contract automation | Clause libraries, document automation, conditional logic |
| [Contractbook](https://contractbook.com/) | Contractbook | **$20M** (Valuation) | $199/mo (Core plan) | 14-day free trial | Contract management | Contract creation, collaboration and signing |
| [Legito](https://www.legito.com/) | Legito | **$15M** (Valuation) | $120/user/mo (Small Business) | 14-day free trial | Document automation | No-code templates, document assembly and workflows |
| [Documate](https://www.documate.org/) | Documate / Gavel | **$15M** (Valuation) | $99/mo (Merged with Gavel) | 14-day free trial | Legal document automation | Document assembly and guided interviews |
| [Checkbox](https://www.checkbox.ai/) | Checkbox | **$15M** (Valuation) | $250/mo (Starter team tier) | 14-day trial upon approval | Legal workflow automation | No-code legal apps, intake and document automation |
| [Avvoka](https://www.avvoka.com/) | Avvoka | **$12M** (Valuation) | £99/user/mo (Starter plan) | 14-day trial for qualified teams | Contract automation | Contract drafting, automation, collaboration and workflows |
| [Clio Draft](https://www.clio.com/) | Clio | **$10M+** (Draft Division Rev) | $49/user/mo (Add-on to Clio) | 7-day free trial | Legal document automation | Document automation integrated with legal practice management |
| [Woodpecker](https://www.woodpeckerweb.com/) | Woodpecker | **$10M** (Valuation) | $39/user/mo (Pro plan) | 14-day free trial (Up to 5 document fills) | Legal document automation | Interviews, document assembly and workflow automation |
| [Neota Logic](https://www.neotalogic.com/) | Neota Logic | **$10M** (Valuation) | $300/mo (Creator tier) | 14-day demo environment trial | Legal automation | Expert systems, decision trees and legal workflows |
| [DocJuris](https://www.docjuris.com/) | DocJuris | **$8M** (Valuation) | $150/user/mo (Editor plan) | 14-day free trial | Contract automation | Contract workflows and review |
| [HotDocs](https://www.hotdocs.com/) | Caret Legal | **$8M** (Valuation) | $80/user/mo (Standard plan) | 30-day developer evaluation trial | Document automation | Template-based document assembly and interviews |
| [Malbek](https://www.malbek.io/) | Malbek | **$8M** (Valuation) | $200/mo (Growth tier) | 14-day free demo trial | CLM | Contract lifecycle and automation |
| [Afterpattern](https://afterpattern.com/) | Afterpattern | **$5M** (Valuation) | $79/mo (Pro plan) | 14-day free trial | Legal automation | Visual document automation and workflows |`;

content = content.replace(/# ☁️ SaaS\/Hosted Platforms[\s\S]*?(?=---|\n# 🌍 Open-Source)/, `# ☁️ SaaS/Hosted Platforms\n\nCommercial platforms provide managed authoring environments, document templates, interviews, workflows, integrations and document generation without requiring users to build the underlying infrastructure.\n\n${saasMarketNote}\n\n${saasTable}\n\n> **Historical note:** Documate has been incorporated into the Gavel product family; Gavel's own documentation describes Documate as having become Gavel.\n\n`);

// 5. Star History & Support Section
const bottomSection = `---

## 📈 Star History

[![Star History Chart](https://star-history.dera.page/svg?repos=ishandutta2007/Awesome-Legal-Document-Automation&type=date&legend=top-left)](https://star-history.dera.page/#ishandutta2007/Awesome-Legal-Document-Automation&type=date&legend=top-left)

---

## 💖 Support & Community

If you find this repository helpful, please consider:
- Giving it a ⭐ **Star** on GitHub to show your support.
- Sharing it with colleagues, developers, and LegalTech enthusiasts.
- [Sponsoring the project on GitHub](https://github.com/sponsors/ishandutta2007) to help maintain and expand these resources.

---

`;

if (!content.includes('## 📈 Star History')) {
    content = content.replace(/---\s*\n+## ⭐ Star This Repository/, bottomSection + '## ⭐ Star This Repository');
}

fs.writeFileSync('README.md', content, 'utf8');
console.log('Successfully updated README.md');
