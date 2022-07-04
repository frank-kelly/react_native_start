import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    var myName='Frank';
    return <View>
        <Text style={styles.textStyle}>
        Getting Started with React Native
        </Text>
        <Text style={styles.textStyle1}>
        My Name is {myName}!
        </Text>
    </View>;
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    },
    textStyle1:{
        fontSize: 20
    },
});

export default ComponentsScreen;