'use client';
import { useApp } from '#/hooks/useApp';
import useDataList from '#/hooks/useDataList';
import fieldConvert, { objectIdConvert } from '#/lib/fieldConvert';

import React, { FormEvent, useCallback, useEffect, useRef } from 'react';
import { BSON } from 'realm-web';
import LinkDataSelect from '../mongodbData/LinkDataSelect'
import type { SchemaObject, SchemaProps } from 'types/schema';
import RelatedObjSelect from './RelatedObjSelect';
//import Error from 'next/error';

function templateSwitch(prop: SchemaProps) {

}
const enterpriseFormHTML = (prop: SchemaProps) => (
  <div key={prop.name} className="form-group">
    <label className="col-md-8 control-label" htmlFor={prop.name}>
      {prop.name}
    </label>
    <div className="w-full">
      <input
        id={prop.name}
        name={prop.name}
        type="number"
        className="form-control input-md w-full"
      />
    </div>
  </div>
)
function templateHtml(prop: SchemaProps) {
	var DATE_FORMAT = 'YYYY-MM-DD HH:MM:SS';
	const DOUBLE_PRECISION = 0.0001
	if (prop.type === 'objectId' || prop.name === '_partition') {
    return null
  } else if (prop.type === 'int')
    return (
      <div key={prop.name} className="form-group">
        <label className="col-md-8 control-label" htmlFor={prop.name}>
          {prop.name}
        </label>
        <div className="w-full">
          <input
            id={prop.name}
            name={prop.name}
            type="number"
            className="form-control input-md w-full"
          />
        </div>
      </div>
    )
  else if (prop.type === 'double')
    return (
      <div key={prop.name} className="form-group">
        <label className="col-md-8 control-label" htmlFor={prop.name}>
          {prop.name}
        </label>
        <div className="col-md-8 w-4/5">
          <input
            id={prop.name}
            name={prop.name}
            type="number"
            step={DOUBLE_PRECISION}
            required={prop.optional}
            placeholder={`please Enter your ${prop.name} here, presion up to ${DOUBLE_PRECISION}`}
            className="form-control input-md w-full"
          />
        </div>
      </div>
    )
  else if (prop.type === 'date') {
    return (
      <div key={prop.name} className="form-group">
        <label className="col-md-8 control-label" htmlFor="prop.name">
          {prop.name}
        </label>
        <div className="col-md-8 w-4/5">
          <input
            contentEditable="false"
            id={prop.name}
            name={prop.name}
            type="datetime"
            value={new Date().toUTCString()}
            readOnly
            placeholder={`please Enter your ${prop.name}, fromat: ${DATE_FORMAT} here`}
            className="form-control input-md w-full"
            required={prop.optional}
          />
        </div>
      </div>
    )
  } else if (prop.type === 'string') {
    return (
      <div key={prop.name} className="form-group">
        <label className="col-md-8 control-label" htmlFor={prop.name}>
          {prop.name}
        </label>
        <div className="col-md-8 w-4/5">
          <input
            id={prop.name}
            name={prop.name}
            type="text"
            placeholder={`please Enter your ${prop.name} here`}
            className="form-control input-md w-full"
            required={!prop.optional}
          />
        </div>
      </div>
    )
  } else if (prop.type === 'list') {
    return (
      <div key={prop.name} className="form-group w-4/5">
        <label className="col-md-8 control-label" htmlFor={prop.name}>
          {prop.name}
        </label>
        <div className="col-md-8 w-full">
          <input
            id={prop.name}
            name={prop.name}
            type="text"
            placeholder={`please Enter your ${prop.name} here`}
            className="form-control input-md w-full"
            required={!prop.optional}
          />
        </div>
      </div>
    )
  } else if (prop.type === 'object' && prop.objectType === 'Location') {
    console.log('Embed field Loation ' + JSON.stringify(prop))
    return (
      <div key={prop.name} className="form-group w-4/5">
        <label className="col-md-8 control-label" htmlFor={prop.name}>
          {prop.name}{' '}
        </label>
        <div className="col-md-8 w-full">
          <label
            className="control-label"
            htmlFor={`${prop.name}Longitude`}
          >{`${prop.name}.longitude`}</label>
          <input
            id={`${prop.name}_Longitude`}
            name={prop.name}
            type="text"
            placeholder={`please Enter your ${prop.name}.longtitude here, Location content, required=${prop.optional}`}
          />
          <label className="control-label" htmlFor={`${prop.name}_Latitude`}>
            {' '}
            {`${prop.name}.latitude`}{' '}
          </label>
          <input
            id={`${prop.name}_Latitude`}
            name={`${prop.name}`}
            type="text"
            placeholder={`please Enter your ${prop.name} latitude here, Location content,    required=" + prop.optional `}
          />
        </div>
      </div>
    )
  }
  // onclick="this.focus();this.select();"
  else if (prop.type === 'object' && prop.objectType === 'Qrcode') {
    return (
      <div key={prop.name} className="form-group w-4/5">
        <label className="col-md-8 control-label" htmlFor={`${prop.name}`}>
          {prop.name}
        </label>
        <div className="col-md-8 w-full">
          <input
            id={prop.name}
            name={prop.name}
            type="textarea"
            placeholder={`please Enter your ${
              prop.name
            } here,generate qrcode base on the content entered   ${
              prop.optional ? '' : 'required'
            }`}
          />{' '}
        </div>
        <div id="qrcode" title="Preview of your qrcode"></div>
      </div>
    )
  } else {
    return (
      <div key={prop.name} className="form-group">
        <label className="col-md-8 control-label" htmlFor={`${prop.name}`}>
          {prop.name}{' '}
        </label>
        <div className="col-md-8 w-4/5 flex-row">
          <RelatedObjSelect
            objectType={prop.name}
            id={prop.name}
            linked={false}
            name={prop.name}
            className="flex-1"
          />
          <input
            id={prop.name}
            name={prop.name}
            className="flex-1"
            type="text"
            placeholder={`Or just enter the primary key manually here ${
              prop.name
            }  ${prop.optional ? '' : 'required'}`}
          />
        </div>
      </div>
    )
  }
};
export default function AddDataForm({
  schemaObj
}: {
  schemaObj: SchemaObject;
}) {
  const dataList = useDataList('Product')
  const mongodbApp = useApp()
  //TODO we need type
  const insertData = useRef<{
    ownerId?: string;_id?: BSON.ObjectID
  }>({})
  
  useEffect(() => {
    console.log('SchemaObj', { schemaObj })
    if (!mongodbApp.currentUser?.id) {
      throw new Error("Please login first")
    }
    
  })
	const customField = async () => {
		 
    insertData.current._id = new BSON.ObjectId()
		Object.defineProperty(insertData.current, '_id', {
			writable: true,
			enumerable: true,
			value: new BSON.ObjectId(),
		})
	}
  
  const submitForm = async (submitEvent: FormEvent<HTMLFormElement>) => {
    try {
      //@ts-ignore submitEvent: FormEvent<HTMLFormElement>
      const eventForm: HTMLFormElement = submitEvent.target
      const FD = new FormData(eventForm)
      console.log(FD)
      const mongoCollection = mongodbApp?.currentUser
        ?.mongoClient('mongodb-atlas')
        .db('qrcodeTraceability')
        .collection(schemaObj.name)
      for (let item of FD.entries()) {
        Object.defineProperty(insertData.current, item[0], {
          writable: true,
          enumerable: true,
          value: fieldConvert(item[1], schemaObj.properties[item[0]].type),
        })
      }
    
      insertData.current._id = new BSON.ObjectId(),
      insertData.current.ownerId = mongodbApp.currentUser?.id
     
   

      console.log('Insert data', insertData.current)
      let result = await mongoCollection?.insertOne(insertData.current)
      console.table(result)
      alert(`Just insert ${schemaObj.name} one with ${result}`)
      submitEvent.preventDefault()
    } catch (error: any) {
      
      if(error.message){
        //@ts-ignore
        alert(error.message)
      }
      submitEvent.preventDefault()
      throw error
    }
  }
  function readURL() {}
 
  return (
    <form
        method="post"
        action="#"
        id="insertForm"
        onSubmit={submitForm}
        className="h-full overflow-y-scroll bg-vercel-cyan 
			             pt-2"
      >
        {Object.keys(schemaObj.properties).map((e) =>
          templateHtml(schemaObj.properties[e]),
        )}
      <LinkDataSelect objectType='Product'/>
      <div className="form-group">
        <button type="submit">
          Submit
        </button>
      </div>
     
    </form>
	  
     
    
  )
}
