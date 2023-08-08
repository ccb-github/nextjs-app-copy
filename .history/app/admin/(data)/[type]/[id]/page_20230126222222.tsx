import React from "react"
import DataItem from "#/ui/DataItem"
import MongoDbLists  from "#/ui/MongodbList"
import Button from "#/ui/Button"



export default function Page({ params }: { params : {type: string} }) {
	
	const {type} = params
	return (
	  <div>
		<MongoDbLists type={"Record"} filter={{description: 'Random record'}}/>
		
      </div>
	)
}


