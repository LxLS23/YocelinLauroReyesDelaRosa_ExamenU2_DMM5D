
import React from "react";
import { View, StyleSheet, Text, Image} from "react-native";

Profile = () => {

    return(
        <View style>
            <View style={{
            justifyContent:'space-between',
            flexDirection:'row',
            paddingHorizontal:20,
            alignItems:"center"
        }}>
            <Image source={require('../assets/Images/Jesse.png')} style= {styles.circulo1}></Image>
                <View style={{
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                <Text>Post</Text>
                <Text>9</Text>
                </View>
                <View style={{
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                <Text>Seguidores</Text>
                <Text>1370</Text>
                </View>
                <View style={{
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                <Text>Siguiendo</Text>
                <Text>150</Text>
        </View>
        </View >
                <View style={{
            justifyContent:'center',
            flexDirection:'row',
            paddingHorizontal:20,
            alignItems:"center",
            
        }}>
                <Image source={require('../assets/Images/gatopan.png')} style= {styles.circulo}></Image>
                <Image source={require('../assets/Images/Zayn_Malik.png')} style= {styles.circulo}></Image>
                <Image source={require('../assets/Images/gatopan.png')} style= {styles.circulo}></Image>
                </View>

                <View style={{
    justifyContent:'center',
    flexDirection:'row',
    paddingHorizontal:20,
    alignItems:"center"
}}>
    <Image style={styles.logo} source={require('../assets/Images/Jesse.png')}></Image>
    <Image style={styles.logo} source={require('../assets/Images/perro.png')}></Image>
    <Image style={styles.logo} source={require('../assets/Images/gatopan.png')}></Image>
</View>
<View style={{
    justifyContent:'center',
    flexDirection:'row',
    paddingHorizontal:20,
    alignItems:"center"
}}>
    <Image style={styles.logo} source={require('../assets/Images/halsey.png')}></Image>
<Image style={styles.logo} source={require('../assets/Images/THENBHD.png')}></Image>
<Image style={styles.logo} source={require('../assets/Images/arctic.png')}></Image>
    </View>
<View style={{
    justifyContent:'center',
    flexDirection:'row',
    paddingHorizontal:20,
    alignItems:"center"
}}>
    <Image style={styles.logo} source={require('../assets/Images/camila.png')}></Image>
    <Image style={styles.logo} source={require('../assets/Images/perro.png')}></Image>
    <Image style={styles.logo} source={require('../assets/Images/TheWee.png')}></Image>
</View>
        </View>
        
        
    );
}

export default Profile;

const styles = StyleSheet.create({
    circulo: {
      borderRadius: 100,
      backgroundColor: 'black',
      width: 75,
      height: 75,
      margin:15
    },
    logo:{
        width:150,
        height:150,
         
    },
    circulo1:{
        borderRadius: 100,
      backgroundColor: 'black',
      width: 140,
      height: 140
    }
});
