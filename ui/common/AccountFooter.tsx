"use client"
import { useApp } from "#/hooks/useApp";
import { useEffect } from "react";

export default function AccountFooter() {
    const realmApp = useApp()
   
    useEffect( () => {
      if(realmApp.currentUser === null){
        throw new Error("You should login use this AccountFooter")
      }
    })
	return (
	  <div className="flex items-center justify-between space-x-4 p-3.5 lg:px-5 lg:py-3">
		
  
		<div className="text-sm text-gray-400">
		  <a
			className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
			href="https://github.com/vercel/app-playground"
			target="_blank" rel="noreferrer"
		  >
			{realmApp.currentUser?.customData.name || "Name not set"}
		  </a>
		  {'   '}
          <p className="font-extrabold inline-block pr-2">Role</p>
		  <a
			className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
			href="https://vercel.com/templates/next.js/app-directory"
			target="_blank" rel="noreferrer"
		  >
			{realmApp.currentUser?.customData.role || "Role not set"}
		  </a>
		</div>
	  </div>
	);
  }