import React from 'react';
import UserReservationIndexContainer from '../reservation/user_reservations_index_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    if (!this.props.user) return null;
    console.log(this.props.user);
    let user = this.props.user;

    return (
      <div className='centerize'>
        <div className='user-profile'>
          <div className='banner-detail' >
            <span className='restaurant-profile-position'>
              <img className='user-profile-image'
                src={user.profile_image} ></img>
              <h2>{user.name}</h2>

            </span>
          </div>
        </div>

        <UserReservationIndexContainer user={user} />
      </div>
    );
  }
}

export default UserProfile;
