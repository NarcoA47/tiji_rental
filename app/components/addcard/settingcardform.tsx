import React, { useState } from 'react';
import { Image,View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
// import { Input } from 'react-native-magnus';

export default function SettingCardForm() {

    const [text, onChangeText] = React.useState('');
    const [isChecked, setChecked] = useState(false);

    const [cardType, setCardType] = React.useState('VISA');
    const [nameOnCard, setNameOnCard] = React.useState('');
    const [cardNumber, setCardNumber] = React.useState('');
    const [expiryDate, setExpiryDate] = React.useState('');
    const [securityCode, setSecurityCode] = React.useState('');

    const handlePay = () => {
        // Validate inputs and handle payment logic here
        console.log('Payment details:', { cardType, nameOnCard, cardNumber, expiryDate, securityCode });
    };


  return (
    <View style={styles.container}>
        <View>
            {/* <Image style={styles.ImageController} source={require('../../../assets/images/methods/pay.png')}/> */}
        </View>
        
        <View style={styles.inputFormTwo}>
            <View >
                <TextInput
                style={styles.input}
                placeholder="Name On Card"
                value={nameOnCard}
                onChangeText={setNameOnCard}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Card Number"
                    keyboardType="numeric"
                    value={cardNumber}
                    onChangeText={setCardNumber}
                />
                <TextInput
                style={styles.input}
                placeholder="MM/YY"
                value={expiryDate}
                onChangeText={setExpiryDate}
                />
                <TextInput
                style={styles.input}
                placeholder="CVV"
                keyboardType="numeric"
                value={securityCode}
                onChangeText={setSecurityCode}
                />
            </View>
        </View>        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        top: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 18,
    },
    inputFormOne: {
        flexDirection: 'row',
        width: 100
    },
    inputText: {
        marginLeft: 12,
        marginBottom: 4,
        padding: 4,
        borderRadius: 4,
        fontSize: 18,
    },
    inputOne: {
        borderColor: '#00000044',
        borderWidth: 1,
        marginLeft: 14,
        marginRight: 10,
        marginTop: 4,
        marginBottom: 4,
        padding: 4,
        borderRadius: 4,
        width: 180,
        
    },
    
    inputFormTwo: {

    },
    input: {
        borderWidth: 1,
        marginLeft: 14,
        marginRight: 14,
        marginTop: 4,
        marginBottom: 4,
        padding: 4,
        borderRadius: 4,
    },

    checkboxManager: {
        flexDirection: 'row',
        marginTop: 8,
    },

    checkbox: {
        marginLeft: 14,
        marginTop: 2,
        marginRight: 4,
        width: 12,
        height: 12,
        borderColor: 'black',
    },
    ImageController: {
        width: 410,
        height: 80,
        margin: 12,
        padding: 10,
        
        
    },
    picker: {
        height: 50,
        marginBottom: 20,
    },
    checkBoxText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
})