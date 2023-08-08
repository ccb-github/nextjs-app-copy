import { SchemaJson } from "#/types/schema";
import { NavItem } from "#/types/webContent";

export const PAGINATION_LIMIT = 40;

export const userActions: { name: string; items: NavItem[] }[] = [
	{
	  name: 'Layouts',
	  items: [
		{
		  name: 'Nested Layouts',
		  link: 'layouts',
		  description: 'Create UI that is shared across routes',
		},
		{
		  name: 'Grouped Layouts',
		  link: 'route-groups',
		  description: 'Organize routes without affecting URL paths',
		},
		{
		  name: 'Streaming with Suspense',
		  link: 'streaming',
		  description:
			'Streaming data fetching from the server with React Suspense',
		},
	  ],
	},
	{
	  name: 'Show data',
	  items: [
		{
		  name: 'record',
		  link: 'show/record',
		  description:
			'Create meaningful loading UI for specific parts of an app',
		},
		{
		  name: 'error.js',
		  link: 'error-handling',
		  description: 'Create error UI for specific parts of an app',
		},
		{
		  name: 'head.js',
		  link: 'head',
		  description: 'Configure the <head> tag of a route segment',
		},
	  ],
	},
	{
	  name: 'Data Fetching',
	  items: [
		{
		  name: 'Static-Site Generation',
		  link: 'ssg',
		  description: 'Generate static pages',
		},
		{
		  name: 'Server-Side Rendering',
		  link: 'ssr',
		  description: 'Server-render pages',
		},
		{
		  name: 'Incremental Static Regeneration',
		  link: 'isr',
		  description: 'Get the best of both worlds between static & dynamic',
		},
	  ],
	},
	{
	  name: 'Components',
	  items: [
		// TODO: Re-add this page once hooks have been updated.
		// {
		//   name: 'Hooks',
		//   slug: 'hooks',
		//   description:
		//     'Preview the hooks available for Client and Server Components',
		// },
		{
		  name: 'Client Context',
		  link: 'context',
		  description:
			'Pass context between Client Components that cross Server/Client Component boundary',
		},
	  ],
	},
	{
	  name: 'Styling',
	  items: [
		{
		  name: 'CSS and CSS-in-JS',
		  link: 'styling',
		  description: 'Preview the supported styling solutions',
		},
	  ],
	}, {
	  name:"admin action",
	  items: [{
		name: 'CSS and CSS-in-JS',
		link: 'styling',
		description: 'Preview the supported styling solutions',
	  }],
	}
];
export const schemaJson: SchemaJson = {
	Checker: {
	  name: "Checker",
	  properties: {
		_id: {
		  name: "_id",
		  type: "objectId",
		  indexed: true,
		  optional: false,
		  mapTo: "_id",
		},
		address: {
		  name: "address",
		  type: "string",
		  indexed: false,
		  optional: true,
		  mapTo: "address",
		},
		belong: {
		  name: "belong",
		  type: "object",
		  objectType: "Regulatory",
		  indexed: false,
		  optional: true,
		  mapTo: "belong",
		},
		email: {
		  name: "email",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "email",
		},
		name: {
		  name: "name",
		  type: "string",
		  indexed: false,
		  optional: true,
		  mapTo: "name",
		},
		// ownerId: {
		//   name: "ownerId",
		//   type: "string",
		//   indexed: false,
		//   optional: false,
		//   mapTo: "ownerId",
		// },
	  },
	  primaryKey: "_id",
	  embedded: false,
	},
	
	Enterprise: {
	  name: "Enterprise",
	  properties: {
			_id: {
				name: "_id",
				type: "objectId",
				indexed: true,
				optional: false,
				mapTo: "_id",
			},
			address: {
				name: "address",
				type: "string",
				indexed: false,
				optional: true,
				mapTo: "address",
			},
			createdAt: {
				name: "createdAt",
				type: "date",
				indexed: false,
				optional: false,
				mapTo: "createdAt",
			},
			creditCode: {
				name: "creditCode",
				type: "string",
				indexed: false,
				optional: false,
				mapTo: "creditCode",
			},
			description: {
				name: "description",
				type: "string",
				indexed: false,
				optional: false,
				mapTo: "description",
			},
			email: {
				name: "email",
				type: "string",
				indexed: false,
				optional: true,
				mapTo: "email",
			},
			name: {
				name: "name",
				type: "string",
				indexed: false,
				optional: true,
				mapTo: "name",
			},
			registerPlace: {
				name: "registerPlace",
				type: "string",
				indexed: false,
				optional: false,
				mapTo: "registerPlace",
			},
			tradeMark: {
				name: "tradeMark",
				type: "string",
				indexed: false,
				optional: true,
				mapTo: "tradeMark",
			},
	  },
	  primaryKey: "_id",
	  embedded: false,
	},
	
	Order: {
	  name: "Order",
	  properties: {
		_id: {
		  name: "_id",
		  type: "uuid",
		  indexed: true,
		  optional: false,
		  mapTo: "_id",
		},
		customerId: {
		  name: "customerId",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "customerId",
		},
		orderTime: {
		  name: "orderTime",
		  type: "date",
		  indexed: false,
		  optional: false,
		  mapTo: "orderTime",
		},
		products: {
		  name: "products",
		  type: "list",
		  objectType: "Product",
		  indexed: false,
		  optional: false,
		  mapTo: "products",
		},
	  },
	  primaryKey: "_id",
	  embedded: false,
	},

	Part: {
	  name: "Part",
	  properties: {
		_id: {
		  name: "_id",
		  type: "objectId",
		  indexed: true,
		  optional: false,
		  mapTo: "_id",
		},
		manufacturer: {
		  name: "manufacturer",
		  type: "object",
		  objectType: "Enterprise",
		  indexed: false,
		  optional: true,
		  mapTo: "manufacturer",
		},
	  },
	  primaryKey: "_id",
	  embedded: false,
	},
	Producer: {
	  name: "Producer",
	  properties: {
		_id: {
		  name: "_id",
		  type: "objectId",
		  indexed: true,
		  optional: false,
		  mapTo: "_id",
		},
		description: {
		  name: "description",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "description",
		},
		location: {
		  name: "location",
		  type: "object",
		  objectType: "Location",
		  indexed: false,
		  optional: true,
		  mapTo: "location",
		},
		ownerId: {
		  name: "ownerId",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "ownerId",
		},
	  },
	  primaryKey: "_id",
	  embedded: false,
	},
	Product: {
	  name: "Product",
	  properties: {
		_id: {
		  name: "_id",
		  type: "objectId",
		  indexed: true,
		  optional: false,
		  mapTo: "_id",
		},
		assemlePlace: {
		  name: "assemlePlace",
		  type: "string",
		  indexed: false,
		  optional: true,
		  mapTo: "assemlePlace",
		},
		checker: {
		  name: "checker",
		  type: "object",
		  objectType: "Checker",
		  indexed: false,
		  optional: true,
		  mapTo: "checker",
		},
		description: {
		  name: "description",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "description",
		},
		name: {
		  name: "name",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "name",
		},
		ownerId: {
		  name: "ownerId",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "ownerId",
		},
		produceDay: {
		  name: "produceDay",
		  type: "date",
		  indexed: false,
		  optional: false,
		  mapTo: "produceDay",
		},
		shelfLife: {
		  name: "shelfLife",
		  type: "int",
		  indexed: false,
		  optional: false,
		  mapTo: "shelfLife",
		},
		standard: {
		  name: "standard",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "standard",
		},
		producer: {
		  name: "producer",
		  type: "object",
		  objectType: "Enterprise",
		  indexed: false,
		  optional: true,
		  mapTo: "producer",
		},
	  },
	  primaryKey: "_id",
	  embedded: false,
	},
	Record: {
	  name: "Record",
	  properties: {
		_id: {
		  name: "_id",
		  type: "objectId",
		  indexed: true,
		  optional: false,
		  mapTo: "_id",
		},
		code: {
		  name: "code",
		  type: "object",
		  objectType: "Qrcode",
		  indexed: false,
		  optional: true,
		  mapTo: "code",
		},
		createdAt: {
		  name: "createdAt",
		  type: "date",
		  indexed: false,
		  optional: false,
		  mapTo: "createdAt",
		},
		description: {
		  name: "description",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "description",
		},
		isVerified: {
		  name: "isVerified",
		  type: "bool",
		  indexed: false,
		  optional: false,
		  mapTo: "isVerified",
		},
		location: {
		  name: "location",
		  type: "object",
		  objectType: "Location",
		  indexed: false,
		  optional: true,
		  mapTo: "location",
		},
		ownerId: {
		  name: "ownerId",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "ownerId",
		},
		url: {
		  name: "url",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "url",
		},
	  },
	  primaryKey: "_id",
	  embedded: false,
	},
	Regulatory: {
	  name: "Regulatory",
	  properties: {
		_id: {
		  name: "_id",
		  type: "objectId",
		  indexed: true,
		  optional: false,
		  mapTo: "_id",
		},
		address: {
		  name: "address",
		  type: "string",
		  indexed: false,
		  optional: true,
		  mapTo: "address",
		},
		creditCode: {
		  name: "creditCode",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "creditCode",
		},
		description: {
		  name: "description",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "description",
		},
		name: {
		  name: "name",
		  type: "string",
		  indexed: false,
		  optional: true,
		  mapTo: "name",
		},
		ownerId: {
		  name: "ownerId",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "ownerId",
		},
	  },
	  primaryKey: "_id",
	  embedded: false,
	},
}

const EmbeddedType = {
	Location: {
	  name: "Location",
	  properties: {
		latitude: {
		  name: "latitude",
		  type: "float",
		  indexed: false,
		  optional: false,
		  mapTo: "latitude",
		},
		longitude: {
		  name: "longitude",
		  type: "float",
		  indexed: false,
		  optional: false,
		  mapTo: "longitude",
		},
	  },
	  embedded: true,
	},
}