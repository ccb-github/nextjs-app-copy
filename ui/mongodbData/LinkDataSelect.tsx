'use client';


import React, { useEffect, useState } from 'react';
import { BSON } from 'realm-web';
type GeneralData = {
  _id: BSON.ObjectID,
  name?: string
}
export default function LinkedObjectSelect({ objectType }: {objectType: string}) {
  
  const[objectLists, setObjectLists] = useState<GeneralData[]>([])
  useEffect(() => {
    (async ( typeString ) => {
      const requestEndpoint = "https://data.mongodb-api.com/app/application-qrcode-ukplu/endpoint/search"
      try {
  
        const response = await fetch(requestEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: `{ "collectionName": "Product"}`
        })
        //const searchResult = JSON.parse(await response.json())
        console.log({response})
        // setObjectLists((_prevLists) => {
        //   return searchResult.map( (item: GeneralData) => 
        //     {
        //       name: item.name;
        //       _id: item._id
        //     } 
        //   )
        // })
      } catch (error) {
        throw error        
      }
      
    })(objectType)
    
  }, [])
  
  
  return (
    <select>
      <option>Select the related {objectType}</option>
        {
          objectLists.map( (item, index) =>
            {return (<option key={item._id.toHexString()} value={item._id.toString()}>{item.name || item._id.toString()}</option>)}
          )
        }
      </select>
  );
}
