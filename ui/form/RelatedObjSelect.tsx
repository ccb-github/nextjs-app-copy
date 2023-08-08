import { SchemaName } from "#/types/schema"
import { useEffect, useState } from "react"

export default function RelatedObjectSelect({ objectType, linked, ...props }:{
	objectType: SchemaName
}){
  const [dataList, setDataList] = useState<any []>([])
  useEffect(() => {
	
  }, [objectType])
  
  return(
	<select {...props}>
	  <option>{`Select the related ${objectType} id`}</option>
	    {
		
			dataList !== undefined ? dataList.map( (item, key) =>
			  {return (<option key={key} value={item._id.toString()}>{item.name || item._id.toString()}</option>)}
			): null
		  	
	    }
	</select>
  )
}