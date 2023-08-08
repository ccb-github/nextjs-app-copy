import { Account } from "#/types/data";

export const accounts: Account[] =  [
	{
	  name: 'Data manage',
	  slug: 'route-groups',
	  description: 'Organize routes without affecting URL paths',
	},
	
	{
	  name: 'Account Manage',
	  slug: 'layouts',
	  description: 'Create UI that is shared across routes',
	},
  
	{
	  name: 'Setting',
	  slug: './setting',
	  description:
		'Streaming data fetching from the server with React Suspense',
	}
  ]