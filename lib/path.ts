const pathMap = {
	admin: '/admin',
  users: '/users', 
  adminQuery: (schemaName: string) => `/admin/${schemaName}`,
  adminInsert: (schemaName: string) => `/admin/${schemaName}/insert`
} 

export default pathMap