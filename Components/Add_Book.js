import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, Keyboard } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import SQLite from 'react-native-sqlite-storage'


const db = SQLite.openDatabase(
  {
    name:'MainDB',
    location: 'default',
  },
  () => {},
  error => {console.log(error)}
);

const Add_Book =() => {
  const [booktype, setBooktype] = useState(" ");

  const handledBook =() =>{
    setBooktype(booktype);
    console.log(booktype);
  }
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddBook = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS"
        +"Users "
        +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Title TEXT, "
      )
    })
  }

    return (
      <View style={styles.container}>
        <ScrollView>

          <Text>This is the Add book screen</Text>
          <TextInput style={styles.input} placeholder={'Title'}  />
          <TextInput style={styles.input} placeholder={'Author'}  />
          <TextInput style={styles.input} placeholder={'Number of Pages'}  />
          <View>

            {/*
            <RNPickerSelect
                placeholder={{label:"Select Book Type", value: null}}
                onValueChange={() => handledBook()}
                 items={[
                     { label: "Fiction", value: "Fiction" },
                     { label: "History", value: "History" },
                     { label: "Science-Fiction", value: "Science-Fiction" },
                     { label: "Bibliography", value: "Bibliography" },
                 ]}
             />
                */}

          </View>
          <Button style={styles.button} title="Add" onPress={() => handleAddBook()}>
          </Button>
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
    },
    button: {
      paddingVertical: 30,
      paddingHorizontal: 15,
      backgroundColor: '#E8EAED',
      Radius: 60,
      borderWidth: 1,
      width: 250,
      margin: 5,
      paddingTop: 30
    }
  });