import { NavItem } from "../types/webContent";
//This is a directory describe the content webpage display
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
			link: './settings',
			description: 'setting page',
		  },
	  ],
	},
]

export const adminSettings: { name: string; items: NavItem[] }[] = [	
		{
		  name: 'Qrcode',
		  items: [
			{
			  name: 'Settings',
			  link: 'admin/settings/qrcode',
			  description: 'Create UI that is shared across routes',
			},
		
		  ],
		},
		{
		  name: 'Appearance',
		  items: [
			{
			  name: 'theme',
			  link: 'show/record',
			  description:
				'Change the application theme',
			},
		  ],
		},
		
]

