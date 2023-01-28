import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



const Profile = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
      <Text>Sucess fully  logged in!</Text>
      <StatusBar style="auto" />
    </View>

    );
}

export default ()=> {
    return (
        <NativeBaseProvider>
            <Profile/>
        </NativeBaseProvider>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});