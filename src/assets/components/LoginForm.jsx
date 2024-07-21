import { useState } from "react"

export default function LoginForm() {
  const [inputVal, setInputVal] = useState('');

  return (
    <form onSubmit={(e) => {
      
      e.preventDefault();
      const formData = new FormData(e.target);
      const username = formData.get('username');
      const password = formData.get('password');
      }}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" onChange={(e) => console.log(e.target.value)} name="username" className="border border-black ml-2 mb-4"/>
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" onChange={(e) => console.log(e.target.value)} className="border border-black ml-2"/>
      <br />
      
      <button>Login</button>
    </form>
  )
}