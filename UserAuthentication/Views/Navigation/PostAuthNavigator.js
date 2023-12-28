import React,{ useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert, Image, Pressable, View } from "react-native";
import styles from "../../Themes/style";
import HomeScreen from "../Screens/PostAuthScreens/HomeScreen";
import AuthContext from "../../Context/AuthContext/AuthContext";
import I18n from "../../I18N/i18n";


const PostAuthNavigator = () => {
    const { userSignout } = useContext(AuthContext);


    const onLogout = () => {
        Alert.alert(I18n.t('alert.exit'), '', [
            {
                text: I18n.t('alert.cancel'),
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: I18n.t('alert.ok'), onPress: () => userSignout()},
        ]);
    }

    
    const { Navigator, Screen } = createNativeStackNavigator();
    return (
        <Navigator initialRouteName="Home">
            <Screen 
                name={I18n.t('screen.home')}
                component={HomeScreen}
                options={{
                    headerRight: () =>
                    <View>
                        <Pressable onPress={onLogout}>
                            <Image style={styles.menuImage} source={require('/home/test/Bootstrap/UserAuthentication/Images/menu.png')} />
                        </Pressable>
                    </View>
                }}
            />
        </Navigator>
    )
};
export default PostAuthNavigator;