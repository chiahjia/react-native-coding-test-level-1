import React from 'react';
import { Button, StyleSheet, Text, SafeAreaView, TextInput } from 'react-native';

const ContactForm = () => {

    const [nameText, onChangeNameText] = React.useState("");
    const [emailText, onChangeEmailText] = React.useState("");
    const [dateText, onChangeDateText] = React.useState("");

    const checkTextInput = () =>{
        // check for name validity
        if (nameText.length == 0 ) {
            alert("Name must not be empty!");
            return;
        }

        if (nameText.length > 50) {
            alert("Name length must be less than 50 characters");
            return;
        }

        if (nameText.search(/^[a-zA-Z\s]+$/)) {
            alert("name must only contains alphabets");
            return;
        }

        if (emailText.search(/^\S+@\S+.com$/)) {
            alert("invalid email address");
            return;
        }

        const date = new Date(dateText);
        console.log(date);
        if(isNaN(date) || !date instanceof Date || date > new Date()){
            alert("invalid date");
            return;
        }

        alert("name:\t" + nameText + "\nemail:\t" + emailText + "\nbirthdate:\t" + dateText);

    };

    return (
        <SafeAreaView >
            <Text style = {styles.fieldTitle}>
                Name
            </Text>

            <TextInput
                style = {styles.input}
                placeholder = "Insert your name here"
                onChangeText = {onChangeNameText}
                maxLength = {50}
                value= {nameText}
            />

            <Text style = {styles.fieldTitle}>
                Email Address
            </Text>

            <TextInput
                style = {styles.input}
                placeholder = "Insert your email here"
                onChangeText = {onChangeEmailText}
                value= {emailText}
            />

            <Text style = {styles.fieldTitle}>
                Insert your birthdate (YYYY/MM/DD)
            </Text>

            <TextInput
                style = {styles.input}
                placeholder = "Insert your birthdate here YYYY/MM/DD"
                onChangeText = {onChangeDateText}
                keyboardType = "numbers-and-punctuation"
                value= {dateText}
            />

            <Button
                title="Submit"
                onPress={checkTextInput}
            />
        </SafeAreaView>
        
        
    );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 10,
      marginBottom: 50,
      borderWidth: 1,
      padding: 10
    },
    fieldTitle:{
        textAlign: 'center'
    },
  });

export default ContactForm;