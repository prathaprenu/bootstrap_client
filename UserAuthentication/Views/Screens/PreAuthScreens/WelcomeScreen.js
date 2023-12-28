import React, { useContext, useState } from "react";
import { alert, Pressable, Text, View } from "react-native";
import Loader from "../../../Loader";
import Button from "../../../Button";
import Signup from "../Signup";
import styles from "../../../Themes/style";
import AuthContext from "../../../Context/AuthContext/AuthContext";
import { login } from "../../../Util/NetworkUtil";
import I18n from "../../../I18N/i18n";

const WelcomeScreen = () => {
    const { onAuthentication } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const loginApi = async() => {
        let values = {
            "email": ('santhosh03@gmail.com'),
            "password": ('santhosh03'),
        }
        try {
            setLoading(true);
            const data = await login(values);
            console.log(data);
            setEmail('');
            setPassword('');
            onAuthentication(`${data.tokenType} ${data.accessToken}`);

        }
        catch (error) {
            setLoading(false)
            if(error.status == 401) {
                alert('Please check your email or password');
                return;
            }
            if(error.status == 400) {
                alert('Go to signup');
                return;
            }
        }
    };

    return (
        <View>
            <Loader loading={loading} />
            <View style={styles.header}>
                <Text>Welcome Screen</Text>
                <Pressable onPress={loginApi}>
                    <Button name={I18n.t('button.login')}/>
                </Pressable>
                <Signup />
            </View>
        </View>
    )
};
export default WelcomeScreen;