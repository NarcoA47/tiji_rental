import React, { useState, useRef } from 'react';
import { StyleSheet, TextInput, View, Text, Alert } from 'react-native';
import axios from 'axios';
import { verifyPasswordResetCode } from '@/app/services/auth';


const BlockInput = ({ length, onComplete }) => {
    
    const [code, setCode] = useState(new Array(length).fill(''));
    const inputs = useRef([]);

    const handleChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text && index < length - 1) {
            inputs.current[index + 1].focus();
        }

        if (newCode.join('').length === length) {
            onComplete(newCode.join(''));
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    return (
        <View style={styles.container}>
            {code.map((value, index) => (
                <TextInput
                    key={index}
                    style={styles.input}
                    value={value}
                    onChangeText={(text) => handleChange(text, index)}
                    keyboardType="numeric"
                    maxLength={1}
                    ref={(input) => (inputs.current[index] = input)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                />
            ))}
        </View>
    );
};

export default function OtpInputFieldResetPassword() {
    const handleResetCode = async (code) => {
        console.log('Code entered:', code);
        try {
            const response = await verifyPasswordResetCode(code);
            console.log('Verification successful:', response);
            Alert.alert('Success', 'Code verified successfully!');
            // Perform any navigation or state updates here
        } catch (error) {
            console.error('Verification failed:', error);
            Alert.alert('Error', 'Invalid or expired code. Please try again.');
        }
    };

    return (
        <View style={styles.appContainer}>
            <Text style={styles.label}>Enter Verification Code:</Text>
            <BlockInput length={4} onComplete={handleResetCode} />
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 20,
    },
    input: {
        height: 50,
        width: 50,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 18,
    },
});
