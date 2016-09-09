import './HomePage.scss'

import React from 'react'

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import EditorModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {updateName,toUpper,toLower} from '../../actions/nameActions.js'
import {connect} from 'react-redux'
import {Paper, RaisedButton,FontIcon,FloatingActionButton,me}from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import HardwareSpeaker from 'material-ui/svg-icons/hardware/speaker';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

class NavBar extends React.Component {
    render()
    {
        const toolbarStyle = {
            'backgroundColor':'#3e86ca',
        };

        const toolbarTitleStyle = {
            'color':'white',
            padding: '0px 16px',
            position:'relative'
        };

        return (
            <Toolbar style={toolbarStyle}>
                <ToolbarGroup firstChild={true}>
                    <ToolbarTitle style={toolbarTitleStyle} text="Your parties"/>
                </ToolbarGroup>
                <ToolbarGroup>
                    <FontIcon className="muidocs-icon-custom-sort" />
                    <IconMenu
                        iconButtonElement={
                                        <IconButton touch={true}>
                                            <NavigationMenuIcon />
                                        </IconButton>
                                    }>
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Logout" />
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        )}
}

class PartyList extends React.Component {

    editParty(event){
                console.log("entrou")
            }

    render()
    {
        return (
            <List>
                <ListItem primaryText="Dummy party 1" secondaryText="21/12/2015" disabled leftIcon={<ActionGrade />} />
                <ListItem primaryText="Dummy party 2" secondaryText="18/12/2016" leftIcon={<HardwareSpeaker />} rightIcon={<EditorModeEditIcon />}  onClick={this.editParty.bind(this)}/>
            </List>
        )}
}

class AddParty extends React.Component {
    render()
    {
        return (
            <div className="plun-homepage-addparty">
                <IconMenu
                    iconButtonElement={
                <FloatingActionButton>
                    <ContentAdd />
                </FloatingActionButton>
            }
                    >
                    <MenuItem primaryText="New party" />

                    <MenuItem primaryText="Choose from templates" />
                </IconMenu>

            </div>
        )}
}

class HomePage extends React.Component{
    render(){
        return (
            <div className="homePage">
                <div className="plun-homepage">
                        <NavBar/>
                    <div className="plun-homepage-body">
                        <PartyList/>
                        <AddParty/>
                    </div>
                </div>
            </div>
        )
    }
}

HomePage = connect((state) => state)(HomePage);

module.exports=HomePage;