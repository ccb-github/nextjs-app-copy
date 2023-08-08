'use client';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useApp } from '#/hooks/useApp';
import DataItem from './normal/DataItem';

import { SchemaName, SchemaObject } from '#/types/schema';
import { toSchemaTypestring } from '#/lib/stringFactory';
import { useSelectedLayoutSegment } from 'next/navigation';

import Link from 'next/link';
import clsx from 'clsx';
import { schemaJson } from '#/lib/constants'
import { NavItem } from '#/types/webContent';

import { BSON } from 'realm-web';

interface MongodbListProps {
  type: string;
  id?: string;
  filter?: any;
  projection: {
    [key: string]: 0 | 1
  }
}

export default function MongodbList({ type, filter, id, projection }: MongodbListProps) {
  const schemaType = toSchemaTypestring(type)
  const schemaProperties = useRef(schemaJson[schemaType].properties);
  const tableHead = useRef(
    Object.keys(schemaProperties.current).map(
      (property) => schemaProperties.current[property].name
    ).sort()
  );
  const schemaObj = useRef<SchemaObject>(schemaJson[schemaType]);
  const [datas, setDatas] = useState<any>([]);
  const mongodbApp = useApp();
  
  useEffect(() => {
   
    console.log('In MongodbList props', { id }, filter);
    if (mongodbApp?.currentUser) {
      const mongoClient = mongodbApp.currentUser?.mongoClient('mongodb-atlas');
      const mongoCollection = mongoClient.db('qrcodeTraceability').collection(schemaType);
      id || ( filter._id = new BSON.ObjectId(id) )
      //console.log("role",mongodbApp.currentUser.customData.role)
      mongoCollection.find(filter, {projection: projection}).then((foundDatas) => {
        //console.log(tableHead.current)
        setDatas((_currentDatas: any[]) => [...foundDatas]);
      }).catch( 
        error => {
          console.error(error) 
          throw error;
        }
      )
    }
  }, [mongodbApp?.currentUser, filter, schemaType, id]);

  async function submitProfileChange() {
    mongodbApp?.currentUser?.refreshCustomData()  
  }
  const dataFetch =async () => {
    if (mongodbApp?.currentUser) {
      const mongo = mongodbApp?.currentUser?.mongoClient('mongodb-atlas');
      const recordsCollection = mongo.db('qrcodeTraceability').collection(schemaType);
      
      recordsCollection.find(filter, {projection: projection}).then((foundRecords) => {
        console.log(foundRecords.length);
        
        //console.log(tableHead.current)
        setDatas((_currentDatas: any[]) => [...foundRecords]);
      }).catch( 
        error => console.error(error) 
      )
    }
  }
  
  
  const updateItem = async (e: Event) => {
    e.preventDefault()
		
    
    let beforeData, afterData
    const mongoCollection = mongodbApp
      ?.currentUser
      ?.mongoClient('mongodb-atlas')
      .db('qrcodeTraceability')
      .collection(schemaType);
    //@ts-ignore
    await mongoCollection?.updateOne({_id: beforeData._id},afterData)
      
		// $(e.target.parentNode.parentNode).find('td.value-cell')
		// 		.attr('contenteditable', 'true').each(
		// 			(index, element)=>{
		// 				$(element).addClass('table-active')
		// 				valueBefore[element.id] = element.innerText
		// 			}
		// 		);
  };
  const deleteItem = async (id: string) => {
    console.log(mongodbApp?.currentUser?.id)
    
    if(confirm("Are you sure you want to delete it")) {
      const mongoCollection = mongodbApp
        ?.currentUser
        ?.mongoClient('mongodb-atlas')
        .db('qrcodeTraceability')
        .collection(schemaType);
      //@ts-ignore
      mongoCollection?.deleteOne({_id: id}).then( result => alert(result)).catch(
        error => console.error(error)	
      )
    }
  }
 

  return (
    <div
      id="data-table"
      className="h-full w-full overflow-x-scroll overflow-y-scroll"
    >
      <h1 className="table-head">Data from MongoDB realmapp service</h1>
      <table className="bg-azure table">
        <thead>
          <tr>
            <th>#</th>
            {tableHead.current.map((item: string, index: number) => (
              <th scope="col" key={index}>
                {item}
              </th>
            ))}
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {datas.length !== 0 ? (
            datas.map((data: any, index: number) => (
              <DataItem
                dataType={schemaType}
                dataItem={data}
                index={index}
                id={data._id}
                key={data._id}
                deleteClick={deleteItem}
              />
            ))
          ) : 
            <tr>
              <th scope='row'>Item</th>
              <td><p>{`No ${schemaType}`}</p></td>
            </tr>
          }
        </tbody>
        <tfoot>
          <tr>
            <td>{`Total documents ${datas.length}`}</td>
            <td colSpan={Object.keys(schemaProperties.current).length}>
              <LinkItem
                item={{
                  name: 'Insert new one',
                  link: `/admin/${schemaObj.current.name}/insert`,
                  description: `Insert a new ${schemaObj.current.name} item`,
                }}
                link={`/admin/${schemaObj.current.name}/insert`}
                close={() => {}}
              >
                <button>Insert</button>
              </LinkItem>
             
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

//(objectKey, index) =>
//<th scope='col' key={index}>{schema.current.properties[objectKey].name}</th>
export function LinkItem({
  item,
  
  close,
  children
}: {
  item: NavItem;
  link?: string;
  close: () => false | void;
  children?: React.ReactNode
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.link === segment;

  return (
    <Link
      onClick={close}
      href={item.link}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
        {
          'text-blue-400 hover:bg-blue-800': !isActive,
          'text-white': isActive,
          'text-align': 'center'
        },
      )}
    >
      {children ? children :item.name}
    </Link>
  );
}