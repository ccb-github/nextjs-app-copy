'use client';
import { useApp } from '#/hooks/useApp';
import { setCookie } from 'nookies';
import React, { useEffect } from 'react';
//TODO any type
export default function MongodbCookieSender({ ChildComponent, pageProps, children }: {ChildComponent: React.FC, pageProps: any, children: React.ComponentElement<any, any>}) {
	const app = useApp();
	//@ts-ignore
	ChildComponent = children
	// Reset the user access token in cookies on a regular interval
	useEffect(() => {
	  const user = app?.currentUser;
	  if (user && user.accessToken) {
		setCookie(null, "accessToken", user.accessToken);
		// Refresh token before session expires
		const TWENTY_MIN_MS = 1200000;
		const resetAccessToken = setInterval(async () => {
		  await app?.currentUser?.refreshCustomData();
		  setCookie(null, "accessToken", user.accessToken ? user.accessToken : "NO_TOKEN_FOUND");
		}, TWENTY_MIN_MS);
		// Clear interval setting access token whenever component unmounts or
		// there's a change in user.
		return () => clearInterval(resetAccessToken);
	  }
	}, [app, app?.currentUser]);
	return (
	  <>
		<ChildComponent {...pageProps} app={app} />
	  </>
	);
}

