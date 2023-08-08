import { useApp } from "#/hooks/useApp";
import fieldConvert, { objectIdConvert } from "#/lib/fieldConvert";
import { SchemaObject, SchemaProps } from "#/types/schema";
import { useRef, useEffect, FormEvent } from "react";



export default function RegisterEnterprise({
	schemaObj
  }: {
	schemaObj: SchemaObject;
  }) {
	const mongodbApp = useApp()
	const insertData = useRef({})
	useEffect( () => {
	  console.log("SchemaObj",{schemaObj})
	  if(!mongodbApp.currentUser?.id){
		  throw new Error("Please login first")
	  }
	})
	
	const submitForm = async (submitEvent: FormEvent<HTMLFormElement>) => {
	  try {
		  
		//@ts-ignore submitEvent: FormEvent<HTMLFormElement>
		const eventForm: HTMLFormElement = submitEvent.target 
		const FD = new FormData( eventForm )
		console.log(FD)
		const mongoCollection = mongodbApp
		  ?.currentUser
		  ?.mongoClient('mongodb-atlas')
		  .db('qrcodeTraceability')
		  .collection(schemaObj.name);
		for(let item of FD.entries()) {
		  Object.defineProperty(insertData.current, item[0], fieldConvert(item[1], schemaObj.properties[item[0]].type))
		}
		//@ts-ignore
		Object.defineProperty(
		  insertData.current, 
		  "ownerId", 
		  objectIdConvert(mongodbApp.currentUser.id)
		)
		console.log("Insert data",insertData.current)
		console.log( await mongoCollection?.insertOne(insertData.current) )
		submitEvent.preventDefault()
	  }catch (error) {
		throw error	
	  }
	}
	async () => {
	  let beforeData, afterData
	  const mongoCollection = mongodbApp
	  ?.currentUser
	  ?.mongoClient('mongodb-atlas')
	  .db('qrcodeTraceability')
	  .collection(schemaObj.name);
	  //@ts-ignore
	  await mongoCollection?.updateOne({_id: beforeData._id},afterData)
	}
	async function deleteData() {
	  let beforeData
	  const mongoCollection = mongodbApp
		  ?.currentUser
		  ?.mongoClient('mongodb-atlas')
		  .db('qrcodeTraceability')
		  .collection(schemaObj.name);
	  //@ts-ignore
	  mongoCollection?.deleteOne({_id: beforeData._id}).then( result => alert(result)).catch(
		error => console.error(error)	
	  )
	  
	}
	return (
	  <>
		<form method="post" action="#" id="insertForm" 
			  onSubmit={submitForm} className="pt-2 bg-vercel-cyan"
		>
		  {Object.keys(schemaObj.properties).map((e) =>
			templateHtml(schemaObj.properties[e]),
		  )}
		</form>
		
	  </>
	);
  }