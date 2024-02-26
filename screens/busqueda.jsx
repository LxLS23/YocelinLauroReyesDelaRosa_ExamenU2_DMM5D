import React from "react";
import { TextInput, View, StyleSheet, Image } from "react-native";

Busqueda = () => {
    return (
        <View style={styles.contenedor}>
            
<View >
<View style={{
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:20,
    alignItems:"center"
}}>
    
    <TextInput></TextInput>
</View>
<View style={{
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:20,
    alignItems:"center"
}}>
    <Image style={styles.logo} source={require('../assets/Images/Jesse.png')}></Image>
    <Image style={styles.logo} source={require('../assets/Images/perro.png')}></Image>
    <Image style={styles.logo} source={require('../assets/Images/gatopan.png')}></Image>
</View>
<View style={{
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:20,
    alignItems:"center"
}}>
    <Image style={styles.logo} source={require('../assets/Images/halsey.png')}></Image>
<Image style={styles.logo} source={require('../assets/Images/THENBHD.png')}></Image>
<Image style={styles.logo} source={require('../assets/Images/arctic.png')}></Image>
    </View>
<View style={{
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:20,
    alignItems:"center"
}}>
    <Image style={styles.logo} source={require('../assets/Images/camila.png')}></Image>
    <Image style={styles.logo} source={require('../assets/Images/perro.png')}></Image>
    <Image style={styles.logo} source={require('../assets/Images/TheWee.png')}></Image>
</View>
</View>
 
</View>
)
}

const styles = StyleSheet.create({
contenedor:{
backgroundColor:'#F2F2F2',
flex:1,
alignItems:'center',
justifyContent:'center',
flexDirection:'colum'
},    
logo:{
width:50,
height:50,
 
}
})
export default Busqueda;