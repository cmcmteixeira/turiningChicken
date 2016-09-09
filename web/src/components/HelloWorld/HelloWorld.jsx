import './HelloWorld.scss'

import React from 'react'
import {updateName,toUpper,toLower} from '../../actions/nameActions.js'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

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
        var saudation;
        if (this.props.name){
            saudation = <div>{this.props.helloMessage} {this.props.name}</div>
        }
        return (
            <div className="helloWorld">
                <div className="login">
                    <RaisedButton
                        label="Github Link"
                        href="https://github.com/callemall/material-ui"
                        secondary={true}
                        style={{}}
                    />

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
    name :  React.PropTypes.string.isRequired
};
HelloWorld.defaultProps ={
    enableToUpper : true,
    enableToLower : true,
    helloMessage: 'Hello',
    question: 'Please tell me your name:'
};

HelloWorld = connect((state) => state)(HelloWorld);


module.exports=HelloWorld;