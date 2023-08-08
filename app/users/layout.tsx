import { AddressBar } from "#/ui/common/AddressBar";
import { AdminSideBar } from "#/ui/admin/AdminSideBar";
import { VercelLogo } from "#/ui/VercelLogo";

export default function NormalUserRootLayout({
	children,
  }: {
	children: React.ReactNode;
  }) {
	return (
	  <>
		<AdminSideBar/>
  
		<div className="lg:pl-72">
		  <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
			<div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
			  {/* <div className="rounded-lg bg-black"> */}
			  <AddressBar />
			  {/* </div> */}
			</div>
  
			<div
			  id="app-root-container"
			  className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20"
			>
			  {children}
			</div>
  
			<div className="rounded-lg" id="sign">
			  <Byline />
			</div>
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