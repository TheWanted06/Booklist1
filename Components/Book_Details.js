import { StyleSheet, Text, View } from 'react-native';

export default function Book() {


    return (
      <View style={styles.container}>
  
        
        <Text>Does it work on save!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });