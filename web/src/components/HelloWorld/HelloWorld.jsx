import './HelloWorld.scss'

import React from 'react'
import {updateName,toUpper,toLower} from '../../actions/nameActions.js'
import {connect} from 'react-redux'
import {Paper, RaisedButton,FontIcon,me}from 'material-ui';


class HelloWorld extends React.Component{


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
            <div className="helloWorld">
                <div className="plun-login">
                    <Paper className="plun-paper" zDepth={1}>
                        <me>PLUN</me>
                        <RaisedButton
                            className="facebook-button"
                            label="Login with facebook"
                            icon={<FontIcon className="muidocs-icon-custom-github" />}
                        />
                    </Paper>
                </div>
            </div>
        )
    }
}
HelloWorld.propTypes ={
    enableToUpper : React.PropTypes.bool,
    enableToLower : React.PropTypes.bool,
    helloMessage: React.PropTypes.string,
    question: React.PropTypes.string,
    name :  React.PropTypes.string
};
HelloWorld.defaultProps ={
    enableToUpper : true,
    enableToLower : true,
    helloMessage: 'Hello',
    question: 'Please tell me your name:'
};

HelloWorld = connect((state) => state)(HelloWorld);


module.exports=HelloWorld;