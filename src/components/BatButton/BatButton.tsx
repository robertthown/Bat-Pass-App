import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";

import * as Clipboard from 'expo-clipboard';


import { styles } from './BatButtonStyles';
import generatePass from '../../services/passwordService';

export function BatButton() {
    const [pass, setPass] = useState('')

    function handleGenerateButton(){
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }

  return (
    <>
        <BatTextInput pass={pass}/>

        <Pressable style={styles.button}
            onPress={handleGenerateButton}
        >
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>

        <Pressable style={styles.button}
            onPress={handleCopyButton}
        >
            <Text style={styles.text}>COPY</Text>
        </Pressable>
    </>
  );
}