
import { AdminMainPanel } from "#/ui/admin/AdminMainPanel";
import Footer from "#/ui/example/Footer";


export default function Page() {
	
	return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Actions</h1>

      {'user' ? '' : <h1>No user you should not</h1>}
      {/*
			  <div className="space-y-10 text-white">
		   {adminActions.map((section) => {
			  return (
			  <div key={section.name} className="space-y-5">
				<div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
				  {section.name}
				</div>
  
				<div className="grid grid-cols-1 gap-5 lg:grid-cols-2"> 
			*/}

      <AdminMainPanel />
	  
    </div>
  )
  }