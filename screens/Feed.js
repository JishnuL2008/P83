import React, { Component } from "react";
import {Text,View,StyleSheet,Image,FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import PostCard from "../PostCard";

export default class Feed extends Component {


    renderItem = ({ item: story }) => {
        return <PostCard post={post} />;
      };

      keyExtractor = (item, index) => index.toString();

render(){
    return(
        <View style={styles.container}>
          <SafeAreaView style={styles.androidSafeArea}/>
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
           <Image source={require("../assets/logo.jpg")} style={styles.iconImage}></Image>
           </View>
           <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}> Spectagram </Text>
           </View>
          </View>
          <View stylele={styles.cardContainer}>
            <FlatList 
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
            />
          </View>
        </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  androidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    //fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.85
  }
});