import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, } from 'react-native'



const loginScreen = () => {

    const navigation = useNavigation()

    return (
       <KeyboardAvoidingView style={styles.container}>

            <View style={styles.titleHeader}>
                <Text style={styles.welcome}>
                    WELCOME BACK
                </Text>
                <Text style={styles.title}>
                    DM FURNITURE LIMITED
                </Text>
            </View>

            <View style={styles.loginHeader}>
                <Text style={styles.loginText}>
                    LOGIN 
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput  placeholder='Email'
                // value={email}
                // onChangeText ={text => setEmail(text)}
                style={styles.input}/>

                <TextInput  placeholder='Password'
                // value={password}
                // onChangeText ={text => setPassword(text)}
                style={styles.input}
                secureTextEntry/>
                
              </View>


            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={()=> {navigation.navigate("Home")}}
                style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => navigation.navigate("Sign up")}
                style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}> New Account Creation</Text>
                </TouchableOpacity>
            </View>
       </KeyboardAvoidingView>
    )
}

export default loginScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00ffff"
    },

    inputContainer: {
        width: "80%",
        // height: "10%",
        
    },

    input: {
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 13,
        marginBottom: 10,
        borderRadius: 10,
    },

    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        backgroundColor: '#',
        width: "100%",
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 10,
    },

    buttonText: {
        color: '#2f4f4f',
        fontWeight: 'bold',
    },
    buttonOutline: {
        backgroundColor: "#fff",
        // borderColor: "#4ECDC4",
        // borderWidth: 2,
    },
    buttonOutlineText: {
        color: "#1a535c",
        fontWeight: 'bold',
    },

    loginHeader: {
        width: '100%',
        // height: '3%',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    loginText: {
        color: "#fff",
        // fontWeight: "bold",
        fontSize: 16,
    },

    welcome: { 
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    },
    welcome:{
        fontSize: 18,
        color: '#fff'
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 21,
    },
    titleHeader:{
        width: '100%',
        height: '5%',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 80,
    },
})
