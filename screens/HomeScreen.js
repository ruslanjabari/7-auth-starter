import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { supabase } from '../supabase';


export default function HomeScreen({ navigation }) {
  const [user, setUser] = React.useState(null);

  const getUser = async () => {
    
  }


  const doesUserExist = (user) => {
    return false
  }
  const goToOtherScreen = () => navigation.navigate("Sign");

  return (
    <View>
      <Text>Only authed users should see this screen!!!</Text>
    </View>
  )
}