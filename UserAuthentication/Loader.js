import React from "react";
import { ActivityIndicator, Modal, View } from "react-native";
import styles from "./Themes/style";

const Loader = (props) => {
    const {loading, ...attributes} = props;

    return (
        <Modal
        transparent={true}
        animationType={'none'}
        visible={loading}
        onRequestClose={() => {
            console.log('close model');   
        }}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator
                    animating={true}
                    color="#000000"
                    size="large"
                    style={styles.activityIndicator}
                    />
                </View>
            </View>
        </Modal>
    )
};
export default Loader;