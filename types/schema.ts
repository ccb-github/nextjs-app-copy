export interface SchemaProps {
	name: string;
  optional: boolean;
	type: PropType;
	indexed: boolean;
	mapTo: string;
	objectType?: string;
}
//TODO keep two field exclusive
type PropType =
  | 'double'
  | 'int'
  | 'objectType'
  | 'string'
  | 'objectId'
  | 'object'
  | 'date'
	| 'list'
	| 'uuid'
	| 'bool'

export type SchemaName = 'Enterprise' | 'Order' | 'Product'
export interface SchemaObject {
	name: string,
	primaryKey?: string,
	embedded: boolean,
	properties: {
		[key: string] : SchemaProps
	}
}

export interface SchemaJson {
	[key: string]: SchemaObject
}