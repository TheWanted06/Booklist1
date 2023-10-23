import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>BookList</Text>
            <ScrollView
                contentContainerStyle={{
                flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
                style={styles.ScrollView}
            >
                <View style={styles.taskwrapper}>


                </View>

            </ScrollView>
            <TouchableOpacity style={styles.Button}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        padding: 20
      },
      ScrollView:{
        margin:40
      },
      tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
      },
      sectionTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        paddingTop: 40,
        paddingHorizontal: 20
      },
      items: {
        marginTop: 30,
      },
      addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
      },
      addText: {},
      Button:{
        flexDirection: 'row-reverse'
      }
})
