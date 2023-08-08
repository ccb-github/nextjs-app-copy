import { NavItem } from "../types/webContent";

export const adminActions: { name: string; items: NavItem[] }[] = [
	{
	  name: 'Admin function',
	  items: [
		{
		  name: 'Account Manage',
		  link: 'account',
		  description: 'Manage user account for the app',
		},
		{
		  name: 'Data manage',
		  link: '',
		  description: 'Manage Data',
		},
		{
			name: 'Setting',
			link: './setting',
			description: 'setting page',
		  },
	  ],
	},
]

export const adminTables: { name: string; items: NavItem[] }[] = [	
		{
		  name: 'Table',
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
]

