'use client';
import { useApp } from '#/hooks/useApp';
import { setCookie } from 'nookies';
import React, { useEffect } from 'react';
import * as Realm from 'realm-web';

//TODO any type
export function MongodbCookieSender() {
	//@ts-ignore
	
	// Reset the user access token in cookies on a regular interval
	const app = useApp()
	
	useEffect(() => {
		
	  // If no logged in user, log in
	  if (app && !app.currentUser) {
		const anonymousUser = Realm.Credentials.anonymous();
		app.logIn(anonymousUser);
		console.log({anonymousUser})
	  }
		  
	  const user = app?.currentUser;
	  console.log(`${user?.accessToken}`)
	  if (user && user.accessToken) {
		setCookie(null, "accessToken", user.accessToken);
		// Refresh token before session expires 
		const TWENTY_MIN_MS = 120000;
		const resetAccessToken = setInterval(async () => {
		  await app?.currentUser?.refreshCustomData();
		  console.log("Cookie reset")
		  setCookie(null, "accessToken", user.accessToken ? user.accessToken : "NO_TOKEN_FOUND");
		}, TWENTY_MIN_MS);
		// Clear interval setting access token whenever component unmounts or
		// there's a change in user.
		return () => clearInterval(resetAccessToken);
	  }
	}, [app, app?.currentUser]);
	return (
	  <div id="CookieWrapper">
		
	  </div>
	);
}

