import { NodeConnectionTypes, type INodeProperties, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import properties from './properties.json';

const nodeProperties = properties as unknown as INodeProperties[];

export class KonturMarket implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Контур.Маркет',
		name: 'konturMarket',
		icon: { light: 'file:konturMarket.svg', dark: 'file:konturMarket.dark.svg' },
		group: ['transform'],
		documentationUrl: 'https://github.com/maxidata-ru/n8n-nodes-kontur-market',
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Нода для интеграции Контур.Маркет с платформой автоматизации n8n. Позволяет получать данные о товарах, остатках, продажах, клиентах и акциях, а также управлять товарами и остатками.',
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
