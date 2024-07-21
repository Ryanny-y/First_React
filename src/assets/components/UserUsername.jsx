import PropTypes from 'prop-types';

export default function UserUsername({username}) {

  return ( 
    <div id="user-username">
      <h1>Username: {username}</h1>
    </div>
  )
};

UserUsername.propTypes = {
  username: PropTypes.string.isRequired
}