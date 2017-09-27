import React from 'react';

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
      </div>
    );
  }
}

export default UserProfile;
