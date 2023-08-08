import { SchemaName } from "#/types/schema"

export default function MyString(initString: string) {
	//@ts-ignore TODO
	this._self = initString
	
}

MyString.prototype.typeString = function (){
	return (`${this._self[0]?.toUpperCase()}${this._self?.slice(1)}`)
}

export function toSchemaTypestring( str: string ): SchemaName {
	//@ts-ignore
	return `${str[0].toUpperCase()}${str.slice(1)}`
}