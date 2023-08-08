import { useApp } from "#/hooks/useApp";
import app from "next/app";
import { useRef } from "react";
import Button from "../Button";
import Image from "next/image";
export default function RegisterScreen() {
	const email = useRef("");
	const password = useRef("");
	const repeatPassword = useRef("");
	const app = useApp()
	//@ts-ignore
	const registerWithEmailAndPassword = async (event) => {
	  if(email.current === "" || password.current === "" || repeatPassword.current === ""){
			alert("Please fill all the field")
			return 
	  }
  
	  if(password.current != repeatPassword.current) {
			console.log(password.current, repeatPassword)
			alert("Two password.current mismatch")
			return 
	  }
  
	  try {
			console.log("Register begin")
			await app.emailPasswordAuth.registerUser({ email: email.current, password: password.current });
			const emailPasswordCred = Realm.Credentials.emailPassword(email.current, password.current)
			const loginUser = await app.logIn(emailPasswordCred)
			console.log(`Login with user ${loginUser.id}`)
	  } catch (error) {
			event.preventDefault()
			//@ts-ignore
			alert(error?.message)
			console.error(error)      
	  }
	  
	  //navigation.navigate("Tab") 
  
	}
  
	const switchToLogin = () => {
	  //navigation.navigate("Login")
	}
  
	return (
    <div id="login-form-container">
      <Image
        
        src={require('../../public/favicon/favicon-32x32.png')}
        alt={'This is a test image'}
      />

      <button>
        <p style={styles.forgetBtn}>Forgot password.current?</p>
      </button>

      <button style={styles.signupBtn} onClick={registerWithEmailAndPassword}>
        <p>注册</p>
      </button>

      <button onClick={switchToLogin}>登录</button>
    </div>
  )
  }

	const styles = {
		forgetBtn: {

		},
		signupBtn: {

		}
	}