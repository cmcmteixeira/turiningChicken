import './HomePage.scss'

import React from 'react'

import IconMenu from 'material-ui/IconMenu';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more'
import NavigationExpandLess from 'material-ui/svg-icons/navigation/expand-less'
import FlatButton from 'material-ui/FlatButton';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import EditorModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {updateName,toUpper,toLower} from '../../actions/nameActions.js'
import {connect} from 'react-redux'
import {Paper, RaisedButton,FontIcon,FloatingActionButton,Title,me}from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Drawer from 'material-ui/Drawer';

import {Tabs, Tab} from 'material-ui/Tabs';
import SocialPeopleIcon from 'material-ui/svg-icons/social/people';
import ToggleCheckBoxIcon from 'material-ui/svg-icons/toggle/check-box';
import MapsAddLocationIcon from 'material-ui/svg-icons/maps/add-location';
import ActionAccountBalanceWalletIcon from 'material-ui/svg-icons/action/account-balance-wallet';
import ActionLightBulbOutlineIcon from 'material-ui/svg-icons/action/lightbulb-outline';

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
            fontSize: '22px',
            position:'relative'
        };

        return (
            <Toolbar style={toolbarStyle}>
                <ToolbarGroup firstChild={true}>
                    <ToolbarTitle style={toolbarTitleStyle} text="Plun"/>
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
                console.log("-")
            }

    render()
    {
        return (
            <div>
                <AppBar
                    title={<span style={{'fontSize':'14px','color':'#757575'}}>Select party or create a new one!</span>}
                    iconElementLeft={<IconButton >{<ActionLightBulbOutlineIcon style="{{'color':'#757575!important'}}"/>}</IconButton>}
                    className = "plun-homepage-message"
                    />
                <Tabs>
                    <Tab icon={<SocialPeopleIcon/>} />
                    <Tab icon={<ToggleCheckBoxIcon/>} />
                    <Tab icon={<MapsAddLocationIcon/>} />
                    <Tab icon={<ActionAccountBalanceWalletIcon/>} />
                </Tabs>
                </div>
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

    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    render(){
        return (
            <div className="homePage">
                <div className="plun-homepage">
                    <div className="plun-homepage-navbar">
                        <NavBar />
                        </div>

                    <div className="plun-homepage-drawer">

                        <Drawer open={this.state.open} >
                            <AppBar
                                title={<span style={{'fontSize':'18px'}}>Upcoming</span>}
                                className="plun-homepage-upcoming"
                                iconElementLeft={<IconButton>{<NavigationExpandMore />}</IconButton>}
                                />
                            <List>
                                <ListItem primaryText="Dummy party 1" secondaryText="18/12/2016" leftIcon={<HardwareSpeaker />} rightIcon={<EditorModeEditIcon />}  />
                            </List>
                            <AppBar
                                title={<span style={{'fontSize':'18px'}}>Past</span>}
                                className="plun-homepage-past"
                                iconElementLeft={<IconButton>{<NavigationExpandMore />}</IconButton>}
                                />
                        <List>
                            <ListItem primaryText="Dummy party 2" secondaryText="21/12/2015" disabled leftIcon={<ActionGrade />} />
                            <ListItem primaryText="Dummy party 3" secondaryText="21/02/2016" disabled leftIcon={<ActionGrade />} />
                        </List>

                        </Drawer>
                    </div>

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