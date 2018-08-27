import { createStackNavigator } from 'react-navigation'
import Login from './components/login/login.component'
import SignUp from './components/signup/sign-up.component'
import Dashboard from './components/dashboard/dashboard.component'
import Truck from './components/truck/truck.component'
import Welcome from './components/welcome/welcome.component'
import Profile from './components/profile/profile.component'
import CustomizeItem from './components/customizeItem/customizeItem.component'
import ShoppingBag from './components/shoppingBag/shoppingBag.component'

const RootStack = createStackNavigator(
  {
    login: Login,
    signUp: SignUp,
    dashboard: Dashboard,
    truck: Truck,
    welcome: Welcome,
    profile: Profile,
    customizeItem: CustomizeItem,
    shoppingBag: ShoppingBag,
  },
  {
    initialRouteName: 'welcome',
    navigationOptions: {}
  }
)

export default RootStack