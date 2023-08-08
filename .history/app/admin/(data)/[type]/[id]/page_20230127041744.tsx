import React from "react"
import DataItem from "#/ui/DataItem"
import MongodbList  from "#/ui/MongodbList"
import Button from "#/ui/Button"



export default function Page({ params }: { params : {type: string, id: string} }) {
	
	const {type, id} = params
	return (
    <div>
      <MongodbList
        type={type}
        filter={{ description: 'Random record' }}
        id={id}
      />
    </div>
  )
}


