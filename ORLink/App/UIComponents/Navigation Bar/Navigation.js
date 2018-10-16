// Bottom Navigation Bar of the Application.
// Generic window with application wide 
// reusability.

// Importing dependencies.
import React from 'react'

// Importing Navigation Component
import { TabNavigator, TabBarBottom } from 'react-navigation'


// Importing Tabar Navigation Screens
import Home from '../../Screens/Home/Home'
import Profile from '../../Screens/Profile/Profile'
import Training from '../../Screens/Training'
import Team from '../../Screens/Team'
import Procedure from '../../Screens/Procedure/Procedure'

// Importing custom components
import Item from './Sub Components/Item'

// Exporting Component
export default Navigation = TabNavigator(
    {
        Home: { screen: Home },
        Procedure: { screen: Procedure },
        Team: { screen: Team },
        Training: { screen: Training },
        Profile: { screen: Profile }
    },
    {
        navigationOptions: ({ navigation }) =>
            ({
                tabBarIcon: ({ focused, tintColor }) => {
                    // Getting the current navigation state props.
                    const { routeName } = navigation.state

                    let IconItems =
                    {
                        "Home": <Item iconName="md-home" type={0} title="Home" color={tintColor} />,
                        "Procedure": <Item iconName="book-bookmark" type={1} title="Procedure" color={tintColor} />,
                        "Team": <Item iconName="users" type={2} title="Team" color={tintColor} />,
                        "Training": <Item iconName="play-video" type={1} title="Training" color={tintColor} />,
                        "Profile": <Item iconName="user" type={2} title="Profile" color={tintColor} />
                    }

                    return IconItems[routeName]

                },
            }),
        order: ["Home","Procedure","Team","Training","Profile"],
        tabBarComponent: TabBarBottom,
        tabBarPosition: "bottom",
        tabBarOptions:
        {
            activeTintColor: "#4a90e2",
            inactiveTintColor: "#a6a6a6",
            showLabel:false
        },
    
        animationEnabled: true,
        swipeEnabled: true
    }
)