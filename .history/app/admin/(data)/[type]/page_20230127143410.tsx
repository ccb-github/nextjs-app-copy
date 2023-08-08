import React from "react"
import DataItem from "#/ui/DataItem"
import MongoDbList  from "#/ui/MongodbList"
import Button from "#/ui/Button"
import { toSchemaTypestring } from "#/lib/stringFactory"


type PageProps = {
	params: {
		type: string,
		id: string
	}
	searchParams?: {
		[key: string]: string | string[] | undefined
	}
}


export default function Page({ params, searchParams }: PageProps) {
	const { type } = params
	console.table(type)
	return (
		<MongoDbList type={toSchemaTypestring(type)} filter={searchParams} 
		/>
	)
}

