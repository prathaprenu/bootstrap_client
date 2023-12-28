import React, { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import Loader from "../../Loader";
import Button from "../../Button";
import styles from "../../Themes/style";
import I18n from "../../I18N/i18n";

const Signup = () => {
    const [modelVisible, setModelVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <View>
            <Loader loading={loading} />
            <Modal
                animationType="slide"
                transparent={false}
                visible={modelVisible}
            >
                <View>
                    <View style={styles.header}>
                        <Text>signup Screen</Text>
                        <Button name={I18n.t('button.signup')}/>
                        <Text onPress={() => setModelVisible(false)} >Sign in</Text>
                    </View>
                </View>
            </Modal>
            <Pressable onPress={() => setModelVisible(true)}>
                <Text>signup</Text>
            </Pressable>
        </View>
    )
};
export default Signup;