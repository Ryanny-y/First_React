import PropTypes from 'prop-types';
import { useState } from 'react';

export default function UserDetails({user, setUsers}) {

  const [ isEditing, setIsEditing ] = useState(false);
  const [ username, setUsername ] = useState(user.username); 
  const [ email, setEmail ] = useState(user.email);

  function updateUser() {
    setUsers((currentUsers) => {
      return currentUsers.map(currentUser => {
        if(currentUser.id === user.id) return { ...currentUser, username, email};
        return currentUser;
      })
    })
    setIsEditing(false);
  }

  function deleteUser() {
    setUsers((currentUsers) => {
      return currentUsers.filter(currentUser => currentUser.id !== user.id);
    });
  }

  return(
    <div>
      <div>
        <p>ID: {user.id}</p>
        <p>Username: {isEditing ? 
        <input
        className='border border-black'
        name='username'
        id='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            console.log(e.key);
            updateUser();
          }
        }}
        />
        : 
        <span>{user.username}</span>}</p>

         
        <p>Email: {isEditing ? 
        <input
        className='border border-black'
        name='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            console.log(e.key);
            updateUser();
          }
        }}
        />
        : 
        <span>{user.email}</span>}</p>
      </div>
      <div>
        <button className='border p-2 border-black mr-3' onClick={() => setIsEditing((curState) => !curState)}>Edit</button>
        <button className='border p-2 border-black' onClick={() => deleteUser()}>Delete</button>
        {isEditing && <button className='border p-2 border-black' onClick={() => {
          updateUser();
        }}>Save</button>}
        
      </div>
    </div>
  )

}


UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
}