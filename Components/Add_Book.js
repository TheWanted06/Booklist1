import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


const Add_Book =() => {
  const [booktype, setBooktype] = useState(" ");

  const handledBook =() =>{
    setBooktype(booktype);
    console.log(booktype);
  }


    return (
      <View style={styles.container}>
        <ScrollView>

          <Text>This is the Add book screen</Text>
          <TextInput style={styles.input} placeholder={'Title'}  />
          <TextInput style={styles.input} placeholder={'Author'}  />
          <TextInput style={styles.input} placeholder={'Title'}  />
          <View>
            <RNPickerSelect
                placeholder={{label:"Select Book Type", value: null}}
                onValueChange={() => handledBook()}
                 items={[
                     { label: "JavaScript", value: "JavaScript" },
                     { label: "TypeScript", value: "TypeScript" },
                     { label: "Python", value: "Python" },
                     { label: "Java", value: "Java" },
                     { label: "C++", value: "C++" },
                     { label: "C", value: "C" },
                 ]}
             />
          </View>

        </ScrollView>
      </View>
    );
  }
  export default Add_Book

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
      margin: 5
    }
  });