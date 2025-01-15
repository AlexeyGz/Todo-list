import React from "react";
import { StyleSheet, View, Text} from "react-native";

export default function Header(){
    return(
        <View style = {styles.main}>
            <Text style={styles.text}>Todo list</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        backgroundColor: "#e94421",
        padding:"20px",
    },
    text: {
        
        textAlign:"center",
        fontSize: "150%",
        color:"white",
        fontWeight:"800",
        display: "flex",
        marginLeft: "20%",
    },
})