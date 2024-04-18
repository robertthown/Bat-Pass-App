import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      flexDirection:'column',
      borderColor: '#E5BF3C',
      borderWidth: 2,
      justifyContent:'center',
      alignSelf:'center',
      marginBottom: 60,
      paddingTop: 20,
      paddingBottom: 10,
      backgroundColor:'#4D4D4D'
    },
    inputContainer:{
      width:'80%',
      alignItems:'center',
      flexDirection:'column',
    }
  });

  export default styles;