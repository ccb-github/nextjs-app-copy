'use client'

import { useApp } from '#/hooks/useApp'
import Image from 'next/image'

import React, { createContext, FormEvent, useEffect, useRef, useState } from 'react'
import * as Realm from 'realm-web'
import { useTranslation, i18n } from 'next-i18next'
const UserContext = createContext(null);

export default function LoginForm() {
  const email = useRef('')
  const password = useRef('')
  const [mode, setMode] = useState('Normal')
  const realmApp = useApp()
  const { t } = useTranslation()
  //const {t} = useTranslation("message")
  //const { userId, setUserId, data, setData } = useGlobalContext();
  useEffect(() => {
    //console.log(t("mess"))
    console.log(i18n?.language)
    fetch('https://randomuser.me/api')
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw res
      })
      .then((data) => {
        console.log(data)
      })
    // $('#admin-mode-switch').click(function () {
    // 	var isAdminMode = $(this).text() == 'Admin mode';
    // 	console.log(isAdminMode)
    // 	$(this).text(isAdminMode ? 'Normal mode' : 'Admin mode');
    // 	$(this).closest('form').attr('action', isAdminMode ? 'admin' : 'users');
    // })
  })
  const loginAsync = async (event: FormEvent) => {
   
    console.log({ email: email.current, password: password.current })
    //Create an email credential
    const credentials = Realm.Credentials.emailPassword(
      email.current,
      password.current,
    )
    // Authenticate the user
    try {
      realmApp.logIn(credentials).then( app => {
        console.log(app.isLoggedIn)
      })
      const user = realmApp?.currentUser
      
      console.log('User id', user?.id)
      if(user?.customData.role.match("Admin") === null) {
        throw new Error("This is not a admin account")
      } 
      //throw new Error("What's up, a random message");
    } catch (error) {
     
      //@ts-ignore
      alert(error?.message)
      throw error;
      
    }
  }

  return (
    <div id="login-form-container">
      <form
        id="login-form"
        className="form"
        action={mode === 'normal' ? './users' : './admin'}
        method="post"
      > 
        <Image
          style={{margin: "auto 0"}}
          src={require('../../public/favicon/favicon-32x32.png')}
          alt={'This is a test image'}
        />
        <h3 className="text-info text-center">{t("Login")}</h3>
        <div className="form-group">
          <label htmlFor="username" className="text-info p">
            Email
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
              (email.current = event.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="text-info p-3">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            minLength={6}
            onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
              (password.current = event.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="remember-me" className="text-info">
            <span>Remember me</span> 
            <span>
              <input id="remember-me" name="remember-me" type="checkbox" />
            </span>
          </label>
          <button
            type="submit"
            name="submit"
            className="btn btn-info btn-md bg-blue-300"
            value="submit"
            onClick={loginAsync}
          >Login</button>
        </div>
        <div id="register-link" className="even-flex-row">
          <a href="./register/enterprise" className="text-info">
            Register enterprise
          </a>
          <a
            href="#"
            className="form-mode-switch"
            onClick={() => setMode(mode === 'normal' ? 'admin' : 'normal')}
          >
            {`${mode === 'normal' ? 'Admin' : 'Normal'} mode`}
          </a>
          <a href="./register/regulatory" className="text-info">
            Register regulatory
          </a>
        </div>
      </form>
    </div>
  )
}
