const fs = require('fs');

let content = fs.readFileSync('README.md', 'utf8');

// Map of repos to star counts
const starsMap = {
    'jhpyle/docassemble': 1056,
    'SuffolkLITLab/docassemble-AssemblyLine': 42,
    'SuffolkLITLab/docassemble-ALWeaver': 14,
    'CommonAccord/open-agreements': 12,
    'CommonAccord': 85,
    'accordproject': 320,
    'accordproject/cicero': 168,
    'wraft/wraft': 88,
    'Lexpedite/blawx': 95,
    'openlawteam/openlaw': 230,
    'pallets/jinja': 9850,
    'elapouya/python-docx-template': 2410,
    'makotemplates/mako': 720,
    'handlebars-lang/handlebars.js': 17800,
    'Shopify/liquid': 10900,
    'mozilla/nunjucks': 7800,
    'mustache': 3400,
    'CatalaLang/catala': 540,
    'openfisca/openfisca-core': 410,
    'akomantoso': 65,
    'Metanorma/authoring': 35,
    'python-openxml/python-docx': 4200,
    'superdoc-dev/superdoc': 180,
    'mwilliamson/mammoth.js': 4100,
    'LibreOffice/core': 1950,
    'plutext/docx4j': 1350,
    'dotnet/Open-XML-SDK': 3900,
    'Kozea/WeasyPrint': 6200,
    'Distrotech/reportlab': 490,
    'pymupdf/PyMuPDF': 4100,
    'py-pdf/pypdf': 2900,
    'mozilla/pdf.js': 47500,
    'wkhtmltopdf/wkhtmltopdf': 13200,
    'apache/pdfbox': 1150,
    'docusealco/docuseal': 6800,
    'opensignlabs/opensign': 3100,
    'LibreSign/libresign': 450,
    'documenso/documenso': 8200,
    'Keyfactor/signserver-ce': 220,
    'openxpki/openxpki': 380,
    'langchain-ai/langchain': 96500,
    'run-llama/llama_index': 37200,
    'deepset-ai/haystack': 16800,
    'vllm-project/vllm': 29500,
    'ollama/ollama': 105000,
    'qdrant/qdrant': 21400,
    'milvus-io/milvus': 30800,
    'weaviate/weaviate': 11900,
    'Unstructured-IO/unstructured': 10800,
    'docling-project/docling': 14200,
    'kermitt2/grobid': 3100,
    'nextcloud/server': 26800,
    'paperless-ngx/paperless-ngx': 24500,
    'mayan-edms/Mayan-EDMS': 2300
};

function getBadge(repo) {
    if (!repo || !starsMap[repo]) return 'N/A';
    return `[<img src="https://img.shields.io/github/stars/${repo}?style=social" alt="Stars"/>](https://github.com/${repo}/stargazers)`;
}

// 1. 📄 Open-Source Document Assembly
const table1 = `| Project | Description | Stars | License |
| :--- | :--- | :---: | :--- |
| [Docassemble](https://github.com/jhpyle/docassemble) | Full-stack guided interviews and legal document assembly | ${getBadge('jhpyle/docassemble')} | MIT |
| [Accord Project](https://github.com/accordproject) | Smart legal contracts and templating | ${getBadge('accordproject/cicero')} | Apache-2.0 |
| [Cicero](https://github.com/accordproject/cicero) | Template language and engine for legal agreements | ${getBadge('accordproject/cicero')} | Apache-2.0 |
| [Wraft](https://github.com/wraft/wraft) | Document lifecycle and generation platform | ${getBadge('wraft/wraft')} | AGPL-3.0 |
| [CommonAccord](https://github.com/CommonAccord) | Structured and composable legal agreements | ${getBadge('CommonAccord')} | MIT / OSS ecosystem |
| [docassemble-AssemblyLine](https://github.com/SuffolkLITLab/docassemble-AssemblyLine) | Framework for rapidly building legal form interviews | ${getBadge('SuffolkLITLab/docassemble-AssemblyLine')} | MIT |
| [docassemble-ALWeaver](https://github.com/SuffolkLITLab/docassemble-ALWeaver) | Generates Docassemble interview scaffolding from documents | ${getBadge('SuffolkLITLab/docassemble-ALWeaver')} | Open Source |
| [open-agreements](https://github.com/CommonAccord/open-agreements) | Structured legal agreement templates | ${getBadge('CommonAccord/open-agreements')} | Apache-2.0 |`;

content = content.replace(/# 📄 Open-Source Document Assembly[\s\S]*?(?=Docassemble supports several)/, '# 📄 Open-Source Document Assembly\n\n' + table1 + '\n\n');

// 2. 🧑‍⚖️ Open-Source Legal Interview Platforms
const table2 = `| Project | Description | Stars |
| :--- | :--- | :---: |
| [Docassemble](https://github.com/jhpyle/docassemble) | Full legal interview and document assembly platform | ${getBadge('jhpyle/docassemble')} |
| [OpenLaw](https://github.com/openlawteam/openlaw) | Structured agreement automation | ${getBadge('openlawteam/openlaw')} |
| [Blawx](https://github.com/Lexpedite/blawx) | Visual rules-as-code environment | ${getBadge('Lexpedite/blawx')} |
| [CommonAccord](https://github.com/CommonAccord) | Structured legal transactions | ${getBadge('CommonAccord')} |
| [docassemble-AssemblyLine](https://github.com/SuffolkLITLab/docassemble-AssemblyLine) | Reusable interview-building framework | ${getBadge('SuffolkLITLab/docassemble-AssemblyLine')} |
| [A2J Author](https://www.a2jauthor.org/) | Guided legal interviews and form completion | N/A |`;

content = content.replace(/# 🧑‍⚖️ Open-Source Legal Interview Platforms[\s\S]*?(?=Docassemble interviews can run)/, '# 🧑‍⚖️ Open-Source Legal Interview Platforms\n\nGuided interviews are the core mechanism behind many legal-document automation systems.\n\n```text\nQuestion\n   │\n   ▼\nAnswer\n   │\n   ▼\nConditional Logic\n   │\n   ├──► More Questions\n   │\n   ├──► Optional Clause\n   │\n   └──► Different Template\n   │\n   ▼\nGenerated Legal Document\n```\n\n' + table2 + '\n\n');

// 3. 🧩 Open-Source Template Engines
const table3 = `| Project | Technology | Typical Use | Stars |
| :--- | :--- | :--- | :---: |
| [Handlebars](https://github.com/handlebars-lang/handlebars.js) | JavaScript | Template generation | ${getBadge('handlebars-lang/handlebars.js')} |
| [Liquid](https://github.com/Shopify/liquid) | Ruby | Safe template rendering | ${getBadge('Shopify/liquid')} |
| [Jinja2](https://github.com/pallets/jinja) | Python | Template logic | ${getBadge('pallets/jinja')} |
| [Nunjucks](https://github.com/mozilla/nunjucks) | JavaScript | Jinja-like templates | ${getBadge('mozilla/nunjucks')} |
| [Mustache](https://github.com/mustache) | Multiple languages | Logic-light templates | ${getBadge('mustache')} |
| [python-docx-template](https://github.com/elapouya/python-docx-template) | Python / Jinja2 | DOCX generation | ${getBadge('elapouya/python-docx-template')} |
| [docxtpl](https://github.com/elapouya/python-docx-template) | Python | Word templates | ${getBadge('elapouya/python-docx-template')} |
| [Mako](https://github.com/makotemplates/mako) | Python | Dynamic document templates | ${getBadge('makotemplates/mako')} |`;

content = content.replace(/# 🧩 Open-Source Template Engines[\s\S]*?(?=A simple legal-document generation)/, '# 🧩 Open-Source Template Engines\n\nDocument automation does not always require a complete legal platform.\n\nA developer can combine a template engine with a document-generation library.\n\n' + table3 + '\n\n');

// 4. 📜 Open-Source Rules-as-Code
const table4 = `| Project | Description | Stars |
| :--- | :--- | :---: |
| [Catala](https://github.com/CatalaLang/catala) | Programming language for formalizing legislation | ${getBadge('CatalaLang/catala')} |
| [OpenFisca](https://github.com/openfisca/openfisca-core) | Open-source policy and legislation simulation | ${getBadge('openfisca/openfisca-core')} |
| [Accord Project](https://github.com/accordproject) | Smart legal contracts | ${getBadge('accordproject/cicero')} |
| [Cicero](https://github.com/accordproject/cicero) | Legal contract template language | ${getBadge('accordproject/cicero')} |
| [Blawx](https://github.com/Lexpedite/blawx) | Visual rules-as-code environment | ${getBadge('Lexpedite/blawx')} |
| [Akoma Ntoso](https://github.com/akomantoso) | Structured legal-document markup ecosystem | ${getBadge('akomantoso')} |
| [LEOS](https://github.com/Metanorma/authoring) | Legislative drafting ecosystem | ${getBadge('Metanorma/authoring')} |
| [LegalRuleML](https://www.oasis-open.org/committees/legalruleml/) | Standardization of legal rules | Standard |`;

content = content.replace(/# 📜 Open-Source Rules-as-Code[\s\S]*?(?=These projects are not all direct)/, '# 📜 Open-Source Rules-as-Code\n\nRules-as-code allows legal or regulatory logic to be represented as executable rules.\n\n```text\n                     Legal Rule\n                         │\n                         ▼\n                  Machine-readable\n                       Logic\n                         │\n              ┌──────────┼──────────┐\n              ▼          ▼          ▼\n           Eligible   Ineligible   Review\n              │          │          │\n              └──────────┼──────────┘\n                         ▼\n                    Legal Workflow\n```\n\n' + table4 + '\n\n');

// 5. 📝 Open-Source DOCX Automation
const table5 = `| Project | Description | Stars |
| :--- | :--- | :---: |
| [python-docx](https://github.com/python-openxml/python-docx) | Read/write DOCX files | ${getBadge('python-openxml/python-docx')} |
| [Mammoth](https://github.com/mwilliamson/mammoth.js) | DOCX → HTML conversion | ${getBadge('mwilliamson/mammoth.js')} |
| [Open XML SDK](https://github.com/dotnet/Open-XML-SDK) | Open XML document manipulation | ${getBadge('dotnet/Open-XML-SDK')} |
| [python-docx-template](https://github.com/elapouya/python-docx-template) | Jinja2-based DOCX templating | ${getBadge('elapouya/python-docx-template')} |
| [LibreOffice](https://github.com/LibreOffice/core) | Headless document conversion | ${getBadge('LibreOffice/core')} |
| [docx4j](https://github.com/plutext/docx4j) | Java DOCX manipulation | ${getBadge('plutext/docx4j')} |
| [SuperDoc](https://github.com/superdoc-dev/superdoc) | Web-based DOCX editor | ${getBadge('superdoc-dev/superdoc')} |`;

content = content.replace(/# 📝 Open-Source DOCX Automation[\s\S]*?(?=A production automation pipeline)/, '# 📝 Open-Source DOCX Automation\n\nMicrosoft Word remains central to legal workflows.\n\nUseful open-source projects include:\n\n' + table5 + '\n\n');

// 6. 📑 Open-Source PDF Automation
const table6 = `| Project | Description | Stars |
| :--- | :--- | :---: |
| [PDF.js](https://github.com/mozilla/pdf.js) | PDF rendering | ${getBadge('mozilla/pdf.js')} |
| [wkhtmltopdf](https://github.com/wkhtmltopdf/wkhtmltopdf) | HTML → PDF | ${getBadge('wkhtmltopdf/wkhtmltopdf')} |
| [WeasyPrint](https://github.com/Kozea/WeasyPrint) | HTML/CSS → PDF | ${getBadge('Kozea/WeasyPrint')} |
| [PyMuPDF](https://github.com/pymupdf/PyMuPDF) | PDF processing | ${getBadge('pymupdf/PyMuPDF')} |
| [pypdf](https://github.com/py-pdf/pypdf) | PDF manipulation | ${getBadge('py-pdf/pypdf')} |
| [LibreOffice](https://github.com/LibreOffice/core) | Office → PDF conversion | ${getBadge('LibreOffice/core')} |
| [Apache PDFBox](https://github.com/apache/pdfbox) | Java PDF processing | ${getBadge('apache/pdfbox')} |
| [ReportLab](https://github.com/Distrotech/reportlab) | Programmatic PDF generation | ${getBadge('Distrotech/reportlab')} |`;

content = content.replace(/# 📑 Open-Source PDF Automation[\s\S]*?(?=---|\n# ✍️)/, '# 📑 Open-Source PDF Automation\n\n' + table6 + '\n\n');

// 7. ✍️ Open-Source E-Signature Infrastructure
const table7 = `| Project | Description | Stars |
| :--- | :--- | :---: |
| [Documenso](https://github.com/documenso/documenso) | Open-source document signing | ${getBadge('documenso/documenso')} |
| [DocuSeal](https://github.com/docusealco/docuseal) | Self-hosted document signing | ${getBadge('docusealco/docuseal')} |
| [OpenSign](https://github.com/opensignlabs/opensign) | Open-source e-signature platform | ${getBadge('opensignlabs/opensign')} |
| [LibreSign](https://github.com/LibreSign/libresign) | Open-source signing for Nextcloud | ${getBadge('LibreSign/libresign')} |
| [OpenXPKI](https://github.com/openxpki/openxpki) | PKI infrastructure | ${getBadge('openxpki/openxpki')} |
| [SignServer](https://github.com/Keyfactor/signserver-ce) | Digital-signature infrastructure | ${getBadge('Keyfactor/signserver-ce')} |`;

content = content.replace(/# ✍️ Open-Source E-Signature Infrastructure[\s\S]*?(?=A complete legal automation)/, '# ✍️ Open-Source E-Signature Infrastructure\n\nDocument automation frequently ends with signature collection.\n\n' + table7 + '\n\n');

// 8. 🤖 Open-Source AI Legal Document Automation
const table8 = `| Project | Role | Stars |
| :--- | :--- | :---: |
| [Ollama](https://github.com/ollama/ollama) | Local model serving | ${getBadge('ollama/ollama')} |
| [LangChain](https://github.com/langchain-ai/langchain) | LLM application framework | ${getBadge('langchain-ai/langchain')} |
| [LlamaIndex](https://github.com/run-llama/llama_index) | Retrieval and document workflows | ${getBadge('run-llama/llama_index')} |
| [Milvus](https://github.com/milvus-io/milvus) | Vector database | ${getBadge('milvus-io/milvus')} |
| [vLLM](https://github.com/vllm-project/vllm) | LLM inference | ${getBadge('vllm-project/vllm')} |
| [Qdrant](https://github.com/qdrant/qdrant) | Vector database | ${getBadge('qdrant/qdrant')} |
| [Haystack](https://github.com/deepset-ai/haystack) | RAG / document pipelines | ${getBadge('deepset-ai/haystack')} |
| [Docling](https://github.com/docling-project/docling) | Document understanding | ${getBadge('docling-project/docling')} |
| [Weaviate](https://github.com/weaviate/weaviate) | Vector search | ${getBadge('weaviate/weaviate')} |
| [Unstructured](https://github.com/Unstructured-IO/unstructured) | Document parsing | ${getBadge('Unstructured-IO/unstructured')} |
| [GROBID](https://github.com/kermitt2/grobid) | Structured document extraction | ${getBadge('kermitt2/grobid')} |
| [Docassemble](https://github.com/jhpyle/docassemble) | Deterministic legal interviews | ${getBadge('jhpyle/docassemble')} |`;

content = content.replace(/# 🤖 Open-Source AI Legal Document Automation[\s\S]*?(?=A useful principle is)/, '# 🤖 Open-Source AI Legal Document Automation\n\nAI can be added on top of traditional deterministic document automation.\n\n```text\n                     User\n                      │\n                      ▼\n                AI Assistant\n                      │\n          ┌───────────┼───────────┐\n          ▼           ▼           ▼\n       Intake      Drafting    Analysis\n          │           │           │\n          └───────────┼───────────┘\n                      ▼\n                Rules Engine\n                      │\n                      ▼\n                Template Engine\n                      │\n                      ▼\n                 DOCX / PDF\n```\n\nUseful open-source building blocks:\n\n' + table8 + '\n\n');

// 9. 🔄 Open-Source Document Lifecycle Management
const table9 = `| Project | Primary Focus | Stars |
| :--- | :--- | :---: |
| [Nextcloud](https://github.com/nextcloud/server) | Document collaboration | ${getBadge('nextcloud/server')} |
| [Paperless-ngx](https://github.com/paperless-ngx/paperless-ngx) | Document management | ${getBadge('paperless-ngx/paperless-ngx')} |
| [Documenso](https://github.com/documenso/documenso) | Signing | ${getBadge('documenso/documenso')} |
| [DocuSeal](https://github.com/docusealco/docuseal) | Signing | ${getBadge('docusealco/docuseal')} |
| [OpenSign](https://github.com/opensignlabs/opensign) | Signing | ${getBadge('opensignlabs/opensign')} |
| [Mayan EDMS](https://github.com/mayan-edms/Mayan-EDMS) | Document management | ${getBadge('mayan-edms/Mayan-EDMS')} |
| [Docassemble](https://github.com/jhpyle/docassemble) | Legal document generation | ${getBadge('jhpyle/docassemble')} |
| [SuperDoc](https://github.com/superdoc-dev/superdoc) | Document editing | ${getBadge('superdoc-dev/superdoc')} |
| [Wraft](https://github.com/wraft/wraft) | Document lifecycle management | ${getBadge('wraft/wraft')} |`;

content = content.replace(/# 🔄 Open-Source Document Lifecycle Management[\s\S]*?(?=---|\n# 🏗️)/, '# 🔄 Open-Source Document Lifecycle Management\n\nDocument automation increasingly overlaps with document lifecycle management.\n\n' + table9 + '\n\n');

fs.writeFileSync('README.md', content, 'utf8');
console.log('Successfully updated all open-source tables with Star badges and descending order!');
