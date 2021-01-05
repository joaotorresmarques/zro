import React from 'react';
import { TouchableWithoutFeedback} from 'react-native';
import {Button} from './styled'
export default function ChatButton(){
    return (
        <TouchableWithoutFeedback>
            <Button title="oi"/>
        </TouchableWithoutFeedback>
    )
}