const fs = require('node:fs');
const path = require('node:path');
const { N8NPropertiesBuilder } = require('@devlikeapro/n8n-openapi-node');

const root = path.resolve(__dirname, '..');
const openApiPath = path.join(root, 'nodes', 'KonturMarket', 'openapi.json');
const outputPath = path.join(root, 'nodes', 'KonturMarket', 'properties.json');

const openApiDoc = JSON.parse(fs.readFileSync(openApiPath, 'utf8'));
const properties = new N8NPropertiesBuilder(openApiDoc, {}).build();

fs.writeFileSync(outputPath, `${JSON.stringify(properties, null, 2)}\n`);
console.log(`Generated ${outputPath}`);
