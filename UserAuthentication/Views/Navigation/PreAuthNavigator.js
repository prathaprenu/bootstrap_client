import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../Screens/PreAuthScreens/WelcomeScreen";
import I18n from "../../I18N/i18n";

const PreAuthNavigator = () => {
    const { Navigator, Screen } = createNativeStackNavigator();

    
    return (
        <Navigator initialRouteName="Welcome">
            <Screen 
                name={I18n.t('screen.welcome')}
                component={WelcomeScreen}
            />
        </Navigator>
    )
};
export default PreAuthNavigator;