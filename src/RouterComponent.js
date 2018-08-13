import React, { Component } from 'react';
import { StatusBar, Text, View, StyleSheet, PixelRatio } from 'react-native';
import {Router, Scene, Route, Actions, ActionConst } from 'react-native-router-flux';
import { EventRegister } from 'react-native-event-listeners';
import Home from './components/home/home';
import SchoolList from './components/home/schoollist';
import News from './components/news/news';
import Events from './components/events/events';
import Emails from './components/emails/emails';
import NewsLetters from './components/newsletters/newsletters';
import More from './components/more/more';
import YourSchool from './components/yourschools/yourschools';
import Contact from './components/yourschools/contact';
import Settings from './components/yourschools/setting';
import NewsCategories from './components/yourschools/newscategories';
import Albums from './components/albums/albums';
import FullImage from './components/albums/fullimage'
import AlbumsList from './components/albums/albumsList';
import UserLogin from './components/user/user-login';
import EmailDetails from './components/emails/emaildetails';
import EventDetails from './components/events/eventdetail';
import NewsDetails from './components/news/newsdetails';
import MoreDetails from './components/more/moredetails';
import NewsLettersDetails from './components/newsletters/newletterdetails';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import FontelloConfig from './config.json';
// import * as Database from '../../database';
import * as Database from './database';

 const Icon = createIconSetFromFontello(FontelloConfig);
// import Icon from 'react-native-vector-icons/FontAwesome';
 
 class TabIcon extends Component {
    render() {
        var color = this.props.focused ? '#363c41' : '#95acbc';
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
                <Icon style={{ color: color  }} name={this.props.iconName || "circle"} size={25} />
                {/* <Text style={{ color: color, fontSize: 12 }}>{this.props.title}</Text> */}
            </View>
        );
    }
}

class RouterComponent extends Component {

    constructor(props) {
        super(props);
        this.showTab = false;
        this.state = {
            isShowbarController: false
        };
        Database.fetchListFromDB('School', (flag, data) => {
            if (flag) {
                if (data.length > 0) {
                    this.showTab = true;
                    this.setState({ isShowbarController: true });
                }else{
                    this.showTab = false;
                    this.setState({ isShowbarController: false });
                }
            }
            else{
                this.showTab = false;
               this.setState({ isShowbarController: false });
            }
          });
   }
    componentWillMount() {
        this.listener = EventRegister.addEventListener('setScene', (flag) => {
           this.showTab = flag;
            this.setState({ isShowbarController: flag });
            // this.state = {
            //         isShowbarController: flag,
            //      };
             Actions.auth({type: 'reset'});    
            // Actions.postcodevc({ type: 'replace' });     
        });

        this.listenerTab = EventRegister.addEventListener('setTab', (flag) => {
            this.showTab = flag;
            this.setState({ isShowbarController: flag });
            // this.state = {
            //         isShowbarController: flag,
            //      };
            Actions.main({type: 'replace'});
            // Actions.refresh();    
            // Actions.postcodevc({ type: 'replace' });     
        });
    }

    render() {
           return (

            <Router key='roude'>   
             <Scene key='navigation'>            
                        <Scene type={ActionConst.RESET} >  
                       
                            <Scene title="User Login" hideNavBar key="userlogin" component={UserLogin} />
                         
                        </Scene>
                  </Scene>      

            </Router>
          

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        borderTopColor: 'darkgrey',
        borderTopWidth: 1 / PixelRatio.get(),
        backgroundColor: 'ghostwhite',
        opacity: 0.98
    },
    navigationBarStyle: {
        backgroundColor: 'red',
    },
    navigationBarTitleStyle: {
        color: 'white',
    },
});
export default RouterComponent;
