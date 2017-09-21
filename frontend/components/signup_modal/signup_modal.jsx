import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state =
        {name: "", username: "", password: "", email: "", modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    delete user.modalIsOpen;
    this.props.signup(user);
  }

  update(e, field) {
    return this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <span>
        <button onClick={this.openModal}>Sign Up</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>SIGN ME UP FOR THIS</div>

            <form onSubmit={e => this.handleSubmit(e)}>
              <br />
              <label>Name:
                <input type="text"
                  value={this.state.name}
                  onChange={(e) => this.update(e, 'name')}
                  className="login-input"
                  />
              </label>
              <br />
              <label>Email:
                <input type="text"
                  value={this.state.email}
                  onChange={(e) => this.update(e, 'email')}
                  className="login-input"
                  />
              </label>
              <br />
              <label>Username:
                <input type="text"
                  value={this.state.username}
                  onChange={(e) => this.update(e, 'username')}
                  className="login-input"
                />
              </label>
              <br />
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={(e) => this.update(e, 'password')}
                  className="login-input"
                />
              </label>
              <br />
              <input type="submit" value="Submit" />
            </form>

          <button onClick={this.closeModal}>close</button>
        </Modal>
      </span>
    );
  }

}

export default SignupModal;
