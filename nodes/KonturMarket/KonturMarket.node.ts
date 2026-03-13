import { NodeConnectionTypes, type INodeProperties, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import properties from './properties.json';

const nodeProperties = properties as unknown as INodeProperties[];

export class KonturMarket implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Контур.Маркет',
		name: 'konturMarket',
		icon: { light: 'file:konturMarket.svg', dark: 'file:konturMarket.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Kontur Market API',
		defaults: {
			name: 'Kontur Market',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'konturMarketApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.kontur.ru/market',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: nodeProperties,
	};
}
