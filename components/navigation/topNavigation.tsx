import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Slider from '@/app/components/home/slider';
import Container from '@/app/components/productview/container';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Changer from '@/app/components/home/changer';
import { Search } from '../button';
import DatePicker from '@/app/components/home/datepicker';
import { useNavigation } from 'expo-router';
// import { useDispatch, useSelector } from 'react-redux';
import ProfileContainer from '@/app/components/profile/container';
import EditProfileContainer from '@/app/components/profile/edit';
import { ACCESS_TOKEN, getToken, USER_TOKEN } from '@/app/services/apiTokens';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Naviagtion() {
    // Create a function the give async back function based on the screen presented
  const navigation = useNavigation();
  

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleGoBack}>
      <View style={styles.conatiner}>
        <Ionicons style={styles.icon} name="chevron-back-circle" size={50} color="#0034BF" />
      </View>
    </TouchableOpacity>
  )
}
export function WhiteNaviagtion() {
  const navigation = useNavigation()
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    // Create a function the give async back function based on the screen presented
    <TouchableOpacity onPress={handleGoBack}>
      <View style={styles.conatiner}>
        <View style={styles.row}>
          <Ionicons style={styles.icon} name="chevron-back-circle" size={50} color="#FFFFFF" />
          <Text style={styles.title}>Add Card</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export function HistoryNaviagtion() {
  const navigation = useNavigation()
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    // Create a function the give async back function based on the screen presented
    <TouchableOpacity onPress={handleGoBack}>
      <View style={styles.conatiner}>
        <View style={styles.row}>
          <Ionicons style={styles.icon} name="chevron-back-circle" size={50} color="#FFFFFF" />
          <Text style={styles.title}>History</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export function Close({onClose}){
  return(
    <TouchableOpacity  onPress={onClose}>
      <View style={styles.Closeconatiner}>
          <Ionicons style={styles.closeicon} name="close" size={40} color="#0034BF" />
      </View>
    </TouchableOpacity>
  )
}

export function PayNaviagtion() {
  const navigation = useNavigation()
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    // Create a function the give async back function based on the screen presented
    <TouchableOpacity onPress={handleGoBack}>
      
      <View style={styles.parentContainer}>
          <Ionicons style={styles.icon} name="chevron-back-circle" size={50} color="#0034BF" />
      </View>
    </TouchableOpacity>
  )
}

export function MainNavigation() {
  const navigation = useNavigation();
  const [username, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const token = await AsyncStorage.getItem('USER_TOKEN');
        if (token) {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.user_id;

          if (userId) {
            const response = await axios.get(`https://tiji-dev.herokuapp.com/api/v1/users/${userId}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            const userData = response.data;
            setUserName(userData.username || '');
          } else {
            console.error('User ID not found in token');
          }
        } else {
          console.error('No token found');
        }
      } catch (error) {
        console.error('Failed to fetch username', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.adjucentContainer}>
        <View>
          <Text style={styles.text}>TIJI</Text>
          <Text style={styles.subText}>Chintu RD, 6039</Text>
        </View>
        <View>
          <EvilIcons
            name="user"
            size={40}
            onPress={() => {
              if (username) {
                navigation.navigate('Profile');
              } else {
                navigation.navigate('Login');
              }
            }}
            color="white"
          />
          <Text style={styles.subText}>{username || 'Login'}</Text>
        </View>
      </View>
      <Slider />
    </View>
  );
}

export function MainBusHomeNavigation() {
  const navigation = useNavigation()
  return (
    <View style={styles.BusContainer}>
      <View style={styles.adjucentContainer}>
        <View>
          <Text style={styles.text}>TIJI</Text>
          <Text style={styles.subText}>Chintu RD, 6039</Text>
        </View>
        <View>
        <EvilIcons name="user" size={40} onPress={() => navigation.navigate('Profile')}  color="white" />
        <Text style={styles.subText}>Login</Text>
        </View>
      </View>
      <Changer/>
      <DatePicker/>
      <Search/>
    </View>
  )
}
export function MainPayNavigation() {
  const navigation = useNavigation()

  return (
    <View style={styles.payContainer}>
      <View style={styles.adjucentContainer}>
        <View>
          <Text style={styles.text}>TIJI</Text>
          <Text style={styles.subText}>Chintu RD, 6039</Text>
        </View>
        <View>
        <EvilIcons name="user" onPress={() => navigation.navigate('Profile')} size={40} color="white" />
        <Text style={styles.subText}>Login</Text>
        </View>
      </View>
    </View>
  )
}


export function HeaderMainNavigation() {

  const navigation = useNavigation()

  const [username, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const token = await AsyncStorage.getItem('USER_TOKEN');
        if (token) {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.user_id;

          if (userId) {
            const response = await axios.get(`https://tiji-dev.herokuapp.com/api/v1/users/${userId}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            const userData = response.data;
            setUserName(userData.username || '');
          } else {
            console.error('User ID not found in token');
          }
        } else {
          console.error('No token found');
        }
      } catch (error) {
        console.error('Failed to fetch username', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <View style={styles.productConatiner}>
      <View style={styles.adjucentContainer}>
        <View>
          <Text style={styles.text}>TIJI</Text>
          <Text style={styles.subText}>Chintu RD, 6039</Text>
        </View>
        <View>
          <EvilIcons
            name="user"
            size={40}
            onPress={() => {
              if (username) {
                navigation.navigate('Profile');
              } else {
                navigation.navigate('Login');
              }
            }}
            color="white"
          />
          <Text style={styles.subText}>{username || 'Login'}</Text>
        </View>
      </View>
      <Container/>
    </View>
  )
}
export function ProfileMainNavigation() {

  
  return (
    <View style={styles.profileConatiner}>
      <View style={styles.adjucentContainer}>
        
      </View>
      <ProfileContainer/>
    </View>
  )
}
export function HeaderSettingMainNavigation() {
  return (
    <View style={styles.SettingConatiner}>
      
      <WhiteNaviagtion/>
      <View style={styles.adjucentContainer}>
      </View>
    </View>
  )
}
export function HistorySettingMainNavigation() {
  return (
    <View style={styles.SettingConatiner}>
      
      <HistoryNaviagtion/>
      <View style={styles.adjucentContainer}>
      </View>
    </View>
  )
}
export function EditProfileMainNavigation() {
  return (
    <View style={styles.profileConatiner}>
      <View style={styles.adjucentContainer}>
        
      </View>
      <EditProfileContainer/>
    </View>
  )
}

export function ReturnNavigation() {

  const navigation = useNavigation()

  return (
    // Create a function the give async back function based on the screen presented
    <TouchableOpacity onPress={() => navigation.navigate('ProductView')}>
      <View style={styles.conatiner}>
          <Ionicons style={styles.icon} name="chevron-back-circle" size={50} color="#0034BF" />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  parentContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',  // Align children to the right
    alignItems: 'center',  
    margin: 12,      // Align children vertically centered
  },
  
  conatiner:{
    flexDirection: 'row',
    justifyContent: 'space-between',  
    alignItems: 'center',
    margin: 12,
  },
  Closeconatiner:{
    flexDirection: 'row',
    justifyContent: 'flex-end',  
    alignItems: 'center',
  },
  icon: {
    marginTop: 12,
    paddingTop: 50,
  },
  closeicon: {
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 18,
    top: 56, 
    textAlign: 'center',
    paddingLeft: 75,
    color: 'white'
  },
  mainContainer: { 
    // marginTop: 40,
    paddingBottom: 10,
    paddingTop: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#0034BF',
    height: 380,
  },
  payContainer: { 
    marginTop: 40,
    // top: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#0034BF',
    height: 160,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    top: 35,
  },
  BusContainer: { 
    // marginTop: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#0034BF',
    height: 447,
    paddingTop: 60
  },

  adjucentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    margin: 9,
  },

  text: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    margin: 10,
  },

  subText: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 6,
  },

  productConatiner: {
    marginTop: 20,
    paddingBottom: 110,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#0034BF',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    height: 488,
  },
  profileConatiner: {
    paddingBottom: 110,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#0034BF',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    height: 488,
  },
  SettingConatiner: {
    paddingBottom: 90,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#0034BF',
    height: 240,
  },

})
