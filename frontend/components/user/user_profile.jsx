import React from 'react';
import UserReservationIndex from '../reservation/user_reservations_index';

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
      <div>
        {user.name}
        Yo user profile

        <UserReservationIndex user={user} />
      </div>
    );
  }
}

export default UserProfile;
