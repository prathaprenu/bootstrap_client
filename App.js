import React from "react";
import AuthState from "./UserAuthentication/Context/AuthContext/AuthState";
import AppNavigator from "./UserAuthentication/Views/Navigation/AppNavigator";


function App() {
    return (
        <AuthState>
            <AppNavigator />
        </AuthState>
    )
};
export default App;