export type Account = {
	name: string;
	slug: string;
	description?: string;
  };

export type AccountCustomData = {
	email: string;
	_userId : string;
	emailVerified: boolean
}