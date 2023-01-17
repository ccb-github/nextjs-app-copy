'use client';

import { useGlobalContext } from '#/context/global';
import { useApp } from '#/hooks/useApp';
import { setCookie } from 'nookies';
import React, { useEffect, useRef, useState } from 'react';
import * as Realm from "realm-web";

export default function LoginForm() {
	const email = useRef("")
	const password = useRef("")
	const [ mode, setMode] = useState("Normal")
	const realmApp = useApp()
	const { userId, setUserId, data, setData } = useGlobalContext();
	useEffect(() => {
		setUserId("50")
		console.log(`Userid in loginform ${userId}`)
		// $('#admin-mode-switch').click(function () {
		// 	var isAdminMode = $(this).text() == 'Admin mode';
		// 	console.log(isAdminMode)
		// 	$(this).text(isAdminMode ? 'Normal mode' : 'Admin mode');
		// 	$(this).closest('form').attr('action', isAdminMode ? 'admin' : 'users');
		// })
	})
	async () => {
		// Create an anonymous credential
		const credentials = Realm.Credentials.emailPassword(email.current, password.current)
		// Authenticate the user
		try {
			await realmApp?.logIn(credentials)
		    const user = realmApp?.currentUser;
			console.log("Cookie effect")
			//Setting up cookie for graphql request
			if (user && user.accessToken) {
			  setCookie(null, "accessToken", user.accessToken);
			  // Refresh token before session expires 
			  const TWENTY_MIN_MS = 12000;
			  const resetAccessToken = setInterval(async () => {
			  await realmApp?.currentUser?.refreshCustomData();
			  console.log("Cookie reset")
			  setCookie(null, "accessToken", user.accessToken ? user.accessToken : "NO_TOKEN_FOUND");}, TWENTY_MIN_MS);
			  // Clear interval setting access token whenever component unmounts or
			  // there's a change in user.
			  return () => clearInterval(resetAccessToken);
			}
		} catch (error) {
			console.error(error)
		}
	}
	
	return (   
		<div id="login-form-container">
			<form id="login-form" className="form" action={mode === "normal" ? "./users": "./admin"} method="post">
				<h3 className="text-center text-info">Login</h3>
				<div className="form-group">
					<label htmlFor="username" className="text-info p">邮箱</label>
					<input type="text" name="username" id="username" className="form-control"/>
				</div>
				<div className="form-group">
					<label htmlFor="password" className="text-info p-3">密码</label>
					<input type="password" name="password" id="password" className="form-control" minLength={6}/>
				</div>
				<div className="form-group">
					<label htmlFor="remember-me" className="text-info"><span>Remember me</span> 
					  <span><input id="remember-me" name="remember-me" type="checkbox"/></span>
					</label>
					<input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
				</div>
				<div id="register-link" className="even-flex-row">
					<a href="./register/enterprise" className="text-info">Register enterprise</a>
					<a href="#" className="form-mode-switch">{`${mode === "normal" ? "Admin":"Normal"} mode`}</a>
					<a href="./register/regulatory" className="text-info">Register regulatory</a>
				</div>
			</form>
	    </div>
		
  )
}


