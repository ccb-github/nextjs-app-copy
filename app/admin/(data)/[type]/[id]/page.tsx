import React from "react"
import DataItem from "#/ui/DataItem"
import MongodbList  from "#/ui/MongodbList"
import Button from "#/ui/Button"
import HooksServer from "#/ui/HooksServer"



export default function Page({ params }: { params : {type: string, id: string} }) {
	
	const {type, id} = params
  console.log('Type', type)
	return (
    <div>
      {/* <HooksServer/> */}
      <MongodbList
        type={type}
        filter={{ description: 'Random record' }}
        id={id}
      />
    </div>
  )
}


