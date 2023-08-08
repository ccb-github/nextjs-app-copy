
import type { NavItem } from '#/types/webContent';
import { AccountList } from '#/ui/admin/AccountList';
import { useContext } from 'react';


export default function Page() {
  let accounts: NavItem[] = [{ name:"",link:"/1", description: `To user 1`}]
  
  return (
    <div className="space-y-8 bg-gradient-to-bl">
      <h1 className="text-xl font-medium text-gray-300">Account list</h1>
      <div className="space-y-10">
        <AccountList/> 
      </div>
    </div>
  );
}
