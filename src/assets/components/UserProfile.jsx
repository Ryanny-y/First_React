import UserUsername from "./UserUsername";
import PropTypes from 'prop-types';

export default function UserProfile({age, isLoggedIn, favoriteFoods}) {

  return ( 
    <div id="user-profile">
      <UserUsername username="Ryanny"></UserUsername>
      <p>Age: {age}</p>
      {String(isLoggedIn)}
      <ul>
        {favoriteFoods.map((food, i) => {
          return <li key={food.id}>{i + 1}: {food.name}</li>
        })}
      </ul>
    </div>
  )
};

UserProfile.propTypes = {
  age: PropTypes.number.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  favoriteFoods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
}