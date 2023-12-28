import React, { useState, useEffect, useContext } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import Loader from "../../../Loader";
import Button from "../../../Button";
import styles from "../../../Themes/style";
import AuthContext from "../../../Context/AuthContext/AuthContext";
import I18n from "../../../I18N/i18n";
import { getCurrentUser } from "../../../Util/NetworkUtil";

const HomeScreen = () => {
    const { userSignout } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
        onPress();
    }, [])


    async function onPress() {
        try {
            setLoading(true);
            await getCurrentUser(userSignout);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    };


    const onLogout = () => {
        Alert.alert(I18n.t('alert.exit'), '', [
            {
                text: I18n.t('alert.cancel'),
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: I18n.t('alert.ok'), onPress: () => userSignout() },
        ]);
    }

    return (
        <View>
            <Loader loading={loading} />
            <View style={styles.header}>
                <Text>Home Screen</Text>
                <Pressable onPress={onLogout}>
                    <Button name={I18n.t('button.logout')} />
                </Pressable>

                <Pressable>
                    <Text>{I18n.t('button_text')}</Text>
                </Pressable>

            </View>
        </View>
    )
};
export default HomeScreen;