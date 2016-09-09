import './Login.scss'
import React from 'react'
import {updateName,toUpper,toLower} from '../../actions/nameActions.js'
import {connect} from 'react-redux'
import {Paper, RaisedButton,FontIcon,Avatar}from 'material-ui';


class Login extends React.Component{


    onToUpperCase(){
        this.props.dispatch(toUpper(this.props.name))
    }

    onToLowerCase(){
        this.props.dispatch(toLower(this.props.name))

    }

    onChange(event){
        this.props.dispatch(updateName(event.target.value))
    }

    render(){
        return (
            <div className="plun-login">
                <Paper className="plun-paper" zDepth={5}>
{/*                        <img
                            src="http://i.imgur.com/d0Q1Xcx.png"
                            size={30}
                        />
                    <h3 className="plun-name">PLUN</h3>
                    <h4>Plan for fun</h4>*/}
                    <RaisedButton
                        backgroundColor="#3B5998"
                        labelColor="white"
                        className="facebook-button"
                        label="Login with facebook"
                        icon={<FontIcon className="muidocs-icon-custom-github" />}
                    />
                </Paper>
            </div>
        )

    }
}
Login.propTypes ={
    enableToUpper : React.PropTypes.bool,
    enableToLower : React.PropTypes.bool,
    helloMessage: React.PropTypes.string,
    question: React.PropTypes.string,
    name :  React.PropTypes.string
};
Login.defaultProps ={
    enableToUpper : true,
    enableToLower : true,
    helloMessage: 'Hello',
    question: 'Please tell me your name:'
};

Login = connect((state) => state)(Login);


export default Login;