'use client';
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

import Link from "next/link";
import { useApp } from "#/hooks/useApp";
import { SchemaName } from "#/types/schema";

//Hint text
function ObjectLink({style, href, name}: {style?: CSSProperties, href: string, name: string}){
	return(
		<Link style={{...style} } href={href}>{name}</Link>
	)
}
function DataCell(data: unknown){
	if(typeof data === "string")
		return data
	else if(typeof data === "number")
		return data
	else
		return JSON.stringify(data)
}

interface DataItemProps {
  dataItem: any
  index: number
  id: any
  deleteClick: (id: string) => any
  dataType: SchemaName
}
export default function DataItem({
  dataItem,
  index,
  id,
  deleteClick,
  dataType,
}: DataItemProps) {
  const valueBefore = useRef(Object.create({}))

  const [mode, setMode] = useState<'update' | 'submit'>('update')
  const mongoApp = useApp()

  useEffect(() => {
    console.log(Object.keys(dataItem))
  })

  function updateClick(e: Event) {
    const eTarget = e.target

    //@ts-ignore
    //await mongoCollection?.updateOne({_id: beforeData._id},afterData)

    //@ts-ignore
    $(eTarget.parentNode.parentNode)
      .find('td.value-cell')
      .each((_index: number, element) => {
        //$(element).addClass('table-active')
        valueBefore.current[element.id] = element.innerHTML
        // Object.defineProperty(
        //   valueBefore.current,
        //   element.id,{
        //     value: element.innerHTML,
        //     writable: false,
        //     enumerable: true,
        //   }
        // )
      })
    // console.log(`valueBefore: ${JSON.stringify(valueBefore)}`)
    setMode('submit')
    e.preventDefault()
  }

  async function submitClick(e: Event) {
    const eTarget = e.target
    let valueAfter = {}
    if (!eTarget || !eTarget.parentNode || !eTarget.parentNode.parentNode) {
      throw new Error("The target node or it's parent does not exist")
    }
    $(eTarget.parentNode.parentNode)
      .find('td.value-cell')
      .each((_index, element) => {
        //$(element).removeClass('table-active')
        Object.defineProperty(valueAfter, element.id, {
          value: element.innerHTML,
          writable: true,
          enumerable: true,
        })
      })
    console.log(`valueAfter: ${JSON.stringify(valueAfter)}`)

    // ajaxSearch(eTarget.href, {
    // 	before: JSON.stringify(valueBefore),
    // 	after: JSON.stringify(valueAfter)
    // }, alert)
    const mongoCollection = mongoApp?.currentUser
      ?.mongoClient('mongodb-atlas')
      .db('qrcodeTraceability')
      .collection('Enterprise')
    //@ts-ignore
    try {
      await mongoCollection?.updateOne(
        { _id: valueBefore.current._id },
        valueAfter,
      )
    } catch (error) {
      throw error
    }

    e.preventDefault()
  }

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      {Object.keys(dataItem).map((dataItemKey) => (
        <td
          className="value-cell"
          key={dataItemKey}
          id={dataItemKey}
          contentEditable={mode === 'submit'}
        >
          {DataCell(dataItem[dataItemKey])}
        </td>
      ))}
      <td>
        <button>Logout</button>
      </td>
      <td>
        {
          <ObjectLink
            name={'name'}
            href={'/admin/record/63881c5115ee0b67b0cf2ed9'}
          />
        }
      </td>
      <td>
        <a
          className={`${mode === 'update' ? 'update' : 'submit'}-link`}
          onClick={mode === 'update' ? updateClick : submitClick}
          href={`#`}
        >
          {mode}
        </a>
        <a
          className={`${mode === 'update' ? 'delete' : 'cancel'}-link`}
          href={`#`}
          onClick={() => deleteClick(dataItem._id)}
        >
          Delete
        </a>
      </td>
    </tr>
  )
}
