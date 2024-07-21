import { useState } from 'react'

export default function RegisterForm() {
  const [ username, setUsername] = useState('');
  const [ password, setPassword] = useState('');
  const [ displayName, setDisplayName] = useState('');

  const disabled = !username || !password || !displayName;

  return (
    <form action="">
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name='username' value={username} onChange={(e) => {
          setUsername(e.target.value)
          console.log(username)}} className='border border-black' />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" name='password' value={password} onChange={(e) => {
          setPassword(e.target.value)
          console.log(password)}} className='border border-black' />
      </div>
      <div>
        <label htmlFor="displayName">Display Name</label>
        <input type="text" name='displayName' value={displayName} onChange={(e) => {
          setDisplayName(e.target.value)
          console.log(displayName)}} className='border border-black' />
      </div>
        
      <div>
        <span>Username: { username}</span><br />
        <span>Username: { password}</span><br />
        <span>Username: { displayName}</span><br />
      </div>

      <button disabled={disabled} className={disabled ? 'p-3 border bg-black' : 'p-3 border border-black'}>Sign Up</button>
    </form>
  )

}