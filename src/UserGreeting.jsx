import PropTypes from 'prop-types';

function UserGreeting(props) {
    const welcomeMessage = <h1 className="welcome-message">Welcome {props.username}</h1>;


    const loginPrompt = <h1 className="login-prompt">You have to log in</h1>;
    
    return (props.isLoggedin ? welcomeMessage : loginPrompt)
}
UserGreeting.prototypes = {
    isLoggedin : PropTypes.bool,
    username : PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedin : false,
    username : "Guest"
}
export default UserGreeting;
