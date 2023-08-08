import LoginForm from '#/ui/login/LoginForm';
import MyString from "#/lib/stringFactory"

import { Boundary } from '#/ui/Boundary';


export default function Page() { 
  console.log("Root page")
  return (
    <div>
      <h1 className="text-xl font-medium text-gray-300">Welcome, log in first</h1>
      <LoginForm/>
        
      
    </div>
  );
}

