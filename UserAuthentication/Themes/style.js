import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /*------- PostAuthNavigator -------*/
  menuImage: {
    width: 25,
    height: 25,
    top: 3,
  },

  /*-------- Loader --------*/

  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },


  /*-------- Button -----------*/
  Button: {
    width: 170,
    height: 40,
    borderRadius: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    padding: 5,
    fontWeight: '600',
    backgroundColor: 'red',
  },

  /*-------- All Screen -------*/
  header: {
    alignItems: 'center',
    marginTop: 250,
    rowGap: 20
  }
});
export default styles;