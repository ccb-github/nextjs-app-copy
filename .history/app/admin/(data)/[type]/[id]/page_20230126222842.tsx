import React from "react"
import DataItem from "#/ui/DataItem"
import MongodbList  from "#/ui/MongodbList"
import Button from "#/ui/Button"



export default function Page({ params }: { params : {type: string} }) {
	
	const {type} = params
	return (
	  <div>
		<MongodbList type={"Record"} filter={{description: 'Random record'}}/>
		
      </div>
	)
}


