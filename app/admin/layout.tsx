import { AddressBar } from "#/ui/common/AddressBar";
import { AdminSideBar } from "#/ui/admin/AdminSideBar";

import { VercelLogo } from "#/ui/VercelLogo";
import './admin.css'
import AccountFooter from "#/ui/common/AccountFooter";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminSideBar/>

      <div className="lg:pl-72 h-full flex flex-col">
        
        <AddressBar className="flex-grow-0"/>
        

          <div
            id="app-root-container"
            className="rounded-lg p-2 shadow-lg shadow-black/20 
			           flex-grow h-4/5"
          >
            {children}
          </div>

          <div className="rounded-lg flex-grow-0" id="sign">
            <AccountFooter/>
          </div>
        </div>
      
    </>
  );
}
  function Byline() {
	return (
	  <div className="flex items-center justify-between space-x-4 p-3.5 lg:px-5 lg:py-3">
		<div className="flex items-center space-x-1.5">
		  <div className="text-sm text-gray-400">By</div>
		  <a href="https://vercel.com" title="Vercel">
			<div className="w-16 text-gray-100 hover:text-gray-50">
			  <VercelLogo />
			</div>
		  </a>
		</div>
  
		<div className="text-sm text-gray-400">
		  <a
			className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
			href="https://github.com/vercel/app-playground"
			target="_blank" rel="noreferrer"
		  >
			View code
		  </a>
		  {' or '}
		  <a
			className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
			href="https://vercel.com/templates/next.js/app-directory"
			target="_blank" rel="noreferrer"
		  >
			deploy your own
		  </a>
		</div>
	  </div>
	);
  }