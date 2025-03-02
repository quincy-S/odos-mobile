import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home/Home';
import { View, StyleSheet } from 'react-native';
import Category from "./screens/Category/Category"
// import Stores from './screens/Stores/Stores';
import More from './screens/More/More';
import Market from './screens/Market/Market';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import CustomTabBar from './utils/CustomTabBar';
import StoresStack from './navigations/StoresStack';

const Tab = createBottomTabNavigator()

const screens = [
  {
    id:"1",
    name:"Home",
    component: Home,
    options: {
      title:"",
      tabBarLabel: "Home",
      tabBarIcon: ({color}) => <Ionicons name="home" size={25} color={color}/>
    }
  },
  {
    id:"2",
    name:"Category",
    component: Category,
    options: {
      title:"",
      tabBarLabel: "Category",
      tabBarIcon: ({color}) => <MaterialCommunityIcons name="view-grid-outline" size={25} color={color}/>
    }
  },
  {
    id:"3",
    name:"StoresStack",
    component: StoresStack,
    options: {
      title:"",
      tabBarLabel: "Store",
      tabBarIcon: ({color}) => <Octicons name="person" size={25} color={color}/>
    }
  },
  {
    id:"4",
    name:"Market",
    component: Market,
    options: {
      title:"",
      tabBarLabel: "Market",
      tabBarIcon: ({color}) => <SimpleLineIcons name="screen-desktop" size={25} color={color} />
    }
  },
  {
    id:"5",
    name:"More",
    component: More,
    options: {
      title:"",
      tabBarLabel: "More",
      tabBarIcon: ({color}) => <Feather name="more-horizontal" size={25} color={color}/>
    }
  }
]

const screenOptions = {
  tabBar: (props) => <CustomTabBar {...props} />,
  tabBarStyle: {
    // backgroundColor: '#D9D9D9', // Tab bar background color
    backgroundColor: '#D9D9D9', // Tab bar background color
    paddingTop:5,
    borderTopRightRadius:20,
    borderTopLeftRadius:20
    // borderTopLeftRadius:30
    // height: 60, // Adjust the height of the tab bar
    // borderTopWidth: 0, // Remove border
  },
  tabBarLabelStyle: {
    fontSize: 12, // Font size of tab labels
    // fontWeight: 'bold',
    // color: 'white', // Label color
  },
  // tabBarBackground: () => (
  //   <View style={{ backgroundColor: 'red', flex: 1 }} />
  // ),
  tabBarActiveTintColor: '#0c8ec9', // Active icon and label color
  tabBarInactiveTintColor: 'black', // Inactive icon and label color
  headerShown: false, // Hide the header if not needed
}

const App = () => {
  return (
    <View style={styles.container}>
        <NavigationContainer>
      <Tab.Navigator
      screenOptions={screenOptions}
       initialRouteName={screens[0]?.name}
       >
        {screens.map(el => 
          <Tab.Screen 
            key={el.id} 
            name={el.name} 
            component={el.component} 
            options={el.options}/>)}
      </Tab.Navigator>
    </NavigationContainer>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Change this to match your app's theme
  },
});


export default App
