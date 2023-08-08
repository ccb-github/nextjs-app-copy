import React from "react"
import DataItem from "#/ui/DataItem"
import MongodbList  from "#/ui/MongodbList"
import Button from "#/ui/Button"
import { toSchemaTypestring } from "#/lib/stringFactory"


type PageProps = {
	params: {
		type: string
	}
	searchParams?: {
		[key: string]: string | string[] | undefined
	}
}


export default function Page({ params, searchParams }: PageProps) {
	const { type } = params
	console.table(searchParams)
	return (
		<MongodbList type={toSchemaTypestring(type)} filter={searchParams}/>
	)
}

export function getServerSideProps({pa}) {

}
