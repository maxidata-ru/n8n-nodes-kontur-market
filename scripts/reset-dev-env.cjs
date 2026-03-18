const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const projectRoot = process.cwd();
const targets = [
	path.join(projectRoot, 'dist'),
	path.join(projectRoot, 'package'),
	path.join(os.homedir(), '.n8n-node-cli'),
];

for (const target of targets) {
	fs.rmSync(target, { recursive: true, force: true });
	console.log(`removed ${target}`);
}

for (const entry of fs.readdirSync(projectRoot)) {
	if (entry.endsWith('.tgz')) {
		const target = path.join(projectRoot, entry);
		fs.rmSync(target, { force: true });
		console.log(`removed ${target}`);
	}
}
