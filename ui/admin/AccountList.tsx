'use client'

import { useApp } from '#/hooks/useApp'
import { ObjectID } from 'bson'
import { useEffect, useState } from 'react'

type Account = {
  _id: ObjectID
  _userId: string
  role: 'globalAdmin' | 'customer' | 'enterprise'
  email: string,

	emailVerified: boolean
}

//map the role value in database to the value on the web page
enum roleNameLabelMap {
  globalAdmin = 'Admin(global)',
  enterprise = 'Enterprise',
  customer = "Customer"
}

const roleList = ['globalAdmin', 'enterprise', 'customer']

console.log(roleNameLabelMap)

export function AccountList() {
  const mongoApp = useApp()
  const [accounts, setAccounts] = useState<Account[]>()
  useEffect(() => {
    if (mongoApp?.currentUser) {
      const mongo = mongoApp?.currentUser?.mongoClient('mongodb-atlas')
      const searchCollection = 'User'
      const accountsCollection = mongo
        .db('qrcodeTraceability')
        .collection(searchCollection)
      
      const { profile, providerType, deviceId } = mongoApp.currentUser

      accountsCollection
        .find({},{projection: {name: 1, role: 1, email: 1, emailVerified: 1}})
        .then((foundAccounts) => {
          console.log(foundAccounts.length)
          setAccounts((_currentDatas) => {
            return [...foundAccounts]
          })
        })
        .catch((error) => console.error(error))
    }
  }, [mongoApp, mongoApp?.currentUser])

  return (
    <table style={{maxHeight: 580}}>
      <thead>
      <tr>
        <th style={{ maxWidth: '8rem', overflowX: 'hidden' }}>User id</th>
        <th>email</th>
        <th>role</th>
        <th>Verified?</th>
      </tr>
      </thead>
      <tbody>
      {accounts?.map((account, index) => (
        <tr key={index}>
          <td>{account._userId}</td>
          <td>{account?.email || 'null'}</td>
          <td>
            <label htmlFor="role-select">Choose</label>
            <select id="role-select" defaultValue={account.role || "Set the role"}>
              {roleList.map((role) => (
                <option key={role} value={role}>
                  {roleNameLabelMap[role]}
                </option>
              ))}
            </select>
          </td>
          <td>
            {account.emailVerified}
          </td>
          <td>
            <a href='#' onClick={() => {console.log(account._userId)}}>Submit</a>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

