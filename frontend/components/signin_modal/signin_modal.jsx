import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '50%',
    left                       : '50%',
    right                      : 'auto',
    bottom                     : 'auto',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '0px',
    outline                    : 'none',
    padding                    : '20px',
    marginRight                : '-50%',
    transform                  : 'translate(-50%, -50%)',
    width                      : '400px'
  }
};

class SigninModal extends React.Component {
  constructor(props) {
    super(props);
    this.state =
        {name: "", username: "", password: "", email: ""};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.props.toggleLoginModal();
    // this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.props.toggleLoginModal();
    // this.setState({modalIsOpen: false});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then(() => {
      if (this.props.errors.length === 0) ( this.closeModal());
    });
  }

  update(e, field) {
    return this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  guestLogin(e) {
    e.preventDefault();
    this.props.login(      {
            username: "guest1",
            password: "123456",
          }).then(() => {
      if (this.props.errors.length === 0) {this.closeModal();}
    });
  }

  render() {
    console.log(this.props.loginModalOpen);
    return (
      <span>

        <button onClick={this.openModal}>Sign In</button>
        <Modal
          isOpen={this.props.loginModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="signin"
          className="style-modal"
        >
          <div>Please sign in</div>
          <hr />
            <form className="session-form" onSubmit={e => this.handleSubmit(e)}>
              <br />
                <input type="text"
                  value={this.state.username}
                  onChange={(e) => this.update(e, 'username')}
                  className="modal-input"
                  placeholder="Username"
                />
                <input type="password"
                  value={this.state.password}
                  onChange={(e) => this.update(e, 'password')}
                  className="modal-input"
                  placeholder="Password"
                />
              <br />
              <input className="modal-button" type="submit" value="Sign In" />
              <button className="modal-button" onClick={(e) => this.guestLogin(e)}>Sign In as Guest</button>
            </form>
            <span className='session-errors'>{this.renderErrors()}</span>
        </Modal>
      </span>
    );
  }

}

export default SigninModal;
