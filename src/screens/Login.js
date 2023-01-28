import React from 'react';
import {  useRef,useState } from 'react';
import { View,Dimensions, Text, StyleSheet, TouchableOpacity,LayoutAnimation,Alert,ImageSourcePropType,TextInput,TextInputProps,  UIManager,} from 'react-native';
import { NativeBaseProvider,Input, Button, Icon, Box, Image, useStyledSystemPropsResolver, Center} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';
import { InputProps } from '@rneui/themed';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';



type LoginScreenProps = {};

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  
   let EmailInput = useRef<InputProps>(null);
   let PasswordInput = useRef<InputProps>(null);



const Login = () => {
    const navigation = useNavigation();
    LayoutAnimation.easeInEaseOut();
   const [isLoading, setLoading] = useState(false);
   const [emailInput, setEmail]= useState('');
   const [passwordInput, setPassword]=useState('');
   const [validPassword, setPasswordValid] = useState(true);
   const [validEmail, setEmailValid] = useState(true);
   
   const validatePassword = () => {
    const passwordCheck = PasswordInput.length >= 8;
    LayoutAnimation.easeInEaseOut();
    setPasswordValid(passwordCheck);
    //passwordCheck || PasswordInput.shake();
    //check here if password matches firebase password
    return passwordCheck;
  };

  const validateEmail = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailCheck = re.test(EmailInput);
    LayoutAnimation.easeInEaseOut();
    setEmailValid(emailCheck);
    //emailCheck || EmailInput.shake();
    //check here if email matches firebase 
    return emailCheck;
  };

    
    //Login button handler
    function LoginButtonHandler(){
        //console.log(passwordInput)
        LayoutAnimation.easeInEaseOut();
          
        //const usernameValid = validateUsername();
        const emailValid = validateEmail();
        const passwordValid = validatePassword();
        console.log(emailInput)
      
        if ( emailValid && passwordValid )
            {
            console.log(emailInput)
             setLoading(true);
            //  
          
        }

    }
    function EmailInputHandler(enteredText){
        setEmail(enteredText);
    }
    function PasswordInputHandler(enteredText){
        setPassword(enteredText);
    }

    

   
   



    return (
        <KeyboardAwareScrollView>
          <View >
         
         <View style={styles.Middle} >
             <Image   style={styles.img} alt='some value' source={require('../assets/images/logo.png')} />
             <Text style={styles.cname}>WorkNow</Text>
         </View>
        
         <View style={styles.buttonStyle}>
            <View style={styles.emailInput}>
                <Input
                     refInput={(input) => (emailInput = input)}
                      value={emailInput}
                      onChangeText={(text: string) => setEmail(text)}
                      returnKeyType="next"
                     errorMessage={validEmail ? '' : "This field can't be blank"}
                     onSubmitEditing={() => {
                     validateEmail();
                     //EmailInput.focus();
                     }}
                    InputLeftElement={
                        <Icon
                             as={<FontAwesome5 name="user-secret"/>}
                             size="sm"
                             m={2}
                             _light={{
                             color:'black',
                            }}
                             _dark={{
                             color:"gray.300"
                            }}
                        />
                
                    }
                    
                     variant = "outline"
                     placeholder = "Email"
                     _light={{
                     placeholderTextColor: "blueGray.400"
                    }}
                     _dark={{
                     placeholderTextColor: "blueGray.50"
                     }}
               />
             </View>
         </View>

         
         <View style={styles.buttonStyleX}>
             <View style={styles.emailInput}>
                 <Input
                    secureTextEntry={true}
                    refInput={(input) => (passwordInput = input)}
                    onChangeText={(text: string) => setPassword(text)}
                    returnKeyType="next"
                    value={passwordInput}
                  
                     returnKeyType="next"
                     errorMessage={
                        validPassword ? '' : 'Please enter at least 8 characters'
                         }
                    onSubmitEditing={() => {
                        validatePassword();
                        //PasswordInput.focus();
                        }}
                     InputLeftElement={
                         <Icon
                             as={<FontAwesome5 name="key"/>}
                             size="sm"
                             m={2}
                             _light={{
                                 color:"black"
                            }}
                            _dark={{
                                color:"gray.300"
                            }}
                         />
                     }
                     variant = "outline"
                     placeholder="password"
                     _light={{
                         placeholderTextColor:"blueGray.400"
                     }}
                     _dark={{
                                color:"blueGray.50"
                            }}

                 />

             </View>
         </View>
          
        <View style={styles.Middle}>
             <Button 
             style={styles.LoginButton}
             onPress={LoginButtonHandler}
            
            >
                LOGIN
             </Button>

         </View> 

         
        
         <View style={styles.text2}>
          <Text>New to WorkNow?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
              <Text style={styles.signupText}> Sign up</Text>
          </TouchableOpacity>
        </View> 
      
     {/* </LinearGradient>  */}
    </View> 
    </KeyboardAwareScrollView>
    )
}

export default ()=> {
    return (
        <NativeBaseProvider>
            <Login/>
        </NativeBaseProvider>
    )

}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    img:{
        marginTop:100,
        borderRadius: Math.round(100 / 2),
    },
    cname: {
        color: '#1779ba',
        fontSize: 55,
        fontWeight:'bold',
        // fontFamily: 'UbuntuLight',
        textAlign: 'center',
      },
    LoginText:{
        
        marginTop:100,
        fontSize:30,
        fontWeight:'bold',

    },
    Middle:{
        alignItems:'center',
        justifyContent:'center',

    },
    text2:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:5,

    },
    signupText:{
        color: '#1779ba',
        fontWeight:'bold',
    },
    emailInput:{
        marginTop:10,
        marginRight:5,

    },
    buttonStyle:{
        marginTop:30,
        marginLeft:15,
        marginRight:15,
        
    },
   
    buttonStyleX:{
        marginTop:12,
        marginLeft:15,
        marginRight:15,
    },
    LoginButton: {
        backgroundColor: '#1779ba',
        marginTop:20,
        marginBottom:20,
        width: 250,
        borderRadius: Math.round(45 / 2),
        height: 45,
    },
    buttonDesign:{
        backgroundColor:'#026efd',
    },
    lineStyle:{
        flexDirection:'row',
        marginTop:30,
        marginLeft:15,
        marginRight:15,
        alignItems:'center',

    },
    loginHereContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      alreadyAccountText: {
        fontSize: 12,
        color: 'white',
      },
      loginHereText: {
        color: '#FF9800',
        fontSize: 12,
      },
    boxStyle:{
        flexDirection:'row',
        marginTop:30,
        marginLeft:15,
        marginRight:15,
        justifyContent:'space-around'


    },
    error:{
      color: "red",
    },
    

    
})
