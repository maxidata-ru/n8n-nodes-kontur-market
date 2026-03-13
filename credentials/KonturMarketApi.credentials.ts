import type {
	Icon,
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class KonturMarketApi implements ICredentialType {
	name = 'konturMarketApi';

	displayName = 'Контур.Маркет API';

	icon: Icon = 'file:konturMarket.svg';

	// Link to your community node's README
	documentationUrl = 'https://developer.kontur.ru/doc/market.public?about=0';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-kontur-apikey': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.kontur.ru/market',
			url: '/v1/organizations',
		},
	};
}
