import React from "react";
import { Text, View } from "react-native";
import styles from "./Themes/style";

const Button = ({name}) => {

    return (
        <View>
            <Text style={styles.Button}>{name}</Text>
        </View>
    )
}
export default Button;