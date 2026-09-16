const fs = require('fs');

let content = fs.readFileSync('README.md', 'utf8');

// Star map for lookup
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
    return `[<img src="https://img.shields.io/github/stars/${repo}?style=social&color=white" alt="Stars"/>](https://github.com/${repo}/stargazers)`;
}

// 1. Legal Document Automation Comparison (with Star badges and sorted descending)
const compRows = [
    { name: '[Docassemble](https://github.com/jhpyle/docassemble)', repo: 'jhpyle/docassemble', row: '| [Docassemble](https://github.com/jhpyle/docassemble) ' + getBadge('jhpyle/docassemble') + ' | ✅ | ✅ | ✅ | ✅ | ✅ | Integration | ✅ |' },
    { name: '[AssemblyLine](https://github.com/SuffolkLITLab/docassemble-AssemblyLine)', repo: 'SuffolkLITLab/docassemble-AssemblyLine', row: '| [docassemble-AssemblyLine](https://github.com/SuffolkLITLab/docassemble-AssemblyLine) ' + getBadge('SuffolkLITLab/docassemble-AssemblyLine') + ' | ✅ | ✅ | ✅ | ✅ | ✅ | Integration | ✅ |' },
    { name: '[Accord Project](https://github.com/accordproject)', repo: 'accordproject/cicero', row: '| [Accord Project](https://github.com/accordproject) ' + getBadge('accordproject/cicero') + ' | ✅ | ⚠️ | ✅ | ⚠️ | ⚠️ | ⚠️ | ✅ |' },
    { name: '[Cicero](https://github.com/accordproject/cicero)', repo: 'accordproject/cicero', row: '| [Cicero](https://github.com/accordproject/cicero) ' + getBadge('accordproject/cicero') + ' | ✅ | ❌ | ✅ | ⚠️ | ⚠️ | ❌ | ✅ |' },
    { name: '[Blawx](https://github.com/Lexpedite/blawx)', repo: 'Lexpedite/blawx', row: '| [Blawx](https://github.com/Lexpedite/blawx) ' + getBadge('Lexpedite/blawx') + ' | ⚠️ | ⚠️ | ✅ | ❌ | ❌ | ❌ | ✅ |' },
    { name: '[Catala](https://github.com/CatalaLang/catala)', repo: 'CatalaLang/catala', row: '| [Catala](https://github.com/CatalaLang/catala) ' + getBadge('CatalaLang/catala') + ' | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |' },
    { name: '[OpenFisca](https://github.com/openfisca/openfisca-core)', repo: 'openfisca/openfisca-core', row: '| [OpenFisca](https://github.com/openfisca/openfisca-core) ' + getBadge('openfisca/openfisca-core') + ' | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |' },
    { name: '[CommonAccord](https://github.com/CommonAccord)', repo: 'CommonAccord', row: '| [CommonAccord](https://github.com/CommonAccord) ' + getBadge('CommonAccord') + ' | ✅ | ⚠️ | ✅ | ⚠️ | ⚠️ | ❌ | ✅ |' },
    { name: '[Wraft](https://github.com/wraft/wraft)', repo: 'wraft/wraft', row: '| [Wraft](https://github.com/wraft/wraft) ' + getBadge('wraft/wraft') + ' | ✅ | ❌ | ⚠️ | ✅ | ✅ | Integration | ✅ |' },
    { name: '[DocuSeal](https://github.com/docusealco/docuseal)', repo: 'docusealco/docuseal', row: '| [DocuSeal](https://github.com/docusealco/docuseal) ' + getBadge('docusealco/docuseal') + ' | ❌ | ❌ | ❌ | ⚠️ | ✅ | ✅ | ✅ |' },
    { name: '[OpenSign](https://github.com/opensignlabs/opensign)', repo: 'opensignlabs/opensign', row: '| [OpenSign](https://github.com/opensignlabs/opensign) ' + getBadge('opensignlabs/opensign') + ' | ❌ | ❌ | ❌ | ⚠️ | ✅ | ✅ | ✅ |' },
    { name: '[Documenso](https://github.com/documenso/documenso)', repo: 'documenso/documenso', row: '| [Documenso](https://github.com/documenso/documenso) ' + getBadge('documenso/documenso') + ' | ❌ | ❌ | ❌ | ⚠️ | ✅ | ✅ | ✅ |' }
];

compRows.sort((a, b) => (starsMap[b.repo] || 0) - (starsMap[a.repo] || 0));

const compTable = `| Project | Document Assembly | Interviews | Rules | DOCX | PDF | E-Sign | Self-Host |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
${compRows.map(r => r.row).join('\n')}`;

content = content.replace(/# 📊 Legal Document Automation Comparison[\s\S]*?(?=\n# 🚀 Recommended Open-Source Stacks)/, '# 📊 Legal Document Automation Comparison\n\n' + compTable + '\n\n');

fs.writeFileSync('README.md', content, 'utf8');
console.log('Successfully updated comparison table with Star badges!');
