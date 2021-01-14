import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button,Header,TextInput} from '../../components'

const SignIn = () => {
    return (
        <View>
            <Header/>
            <View>
                <TextInput/>
                <TextInput/>
                <Button/>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({})
