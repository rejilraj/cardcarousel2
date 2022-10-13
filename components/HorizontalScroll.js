
import {
  Animated,
  ScrollView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useRef } from 'react';
import data from "../data";




function HorizontalScroll  ({ navigation })  {
  const scrollX = useRef(new Animated.Value(0)).current;

  let { width: windowWidth, height: windowHeight } = useWindowDimensions();
  windowHeight = windowHeight - 300;

  return (
    <View
      style={{
        marginTop: 20,
        margin: 10,
      }}
    >
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        scrollEventThrottle={5}
        snapToAlignment={"center"}
        decelerationRate="fast"
        scrollEnabled={true}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {data.dummyData.map((dummyData, index) => (
          <Pressable
            onPress={() => {
              navigation.navigate("DetailScreen", {
                head: dummyData.title,
                body: dummyData.color,
              });
            }}
            style={{
              height: 220,
              width: 349,
              marginHorizontal: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Animated.View
              key={index}
              style={{
                backgroundColor: dummyData.color,
                flex: 1,
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
                height: 180,
                width: 350,
                marginHorizontal: 10,
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  padding: 15,
                  color: "white",
                  textAlign: "center",
                }}
                key={index.id}
              >
                {dummyData.title}
              </Text>
            </Animated.View>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.indicatorContainer}>
        {data.dummyData.map((dummyData, index) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (index - 1),
              windowWidth * index,
              windowWidth * (index + 1),
            ],
            outputRange: [8, 16, 8],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index}
              style={[styles.normalDots, { width }]}
            ></Animated.View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  indicatorContainer:{
    flexDirection : "row",
    justifyContent : "center",
    alignItems : "center",
  },
  normalDots:{
    width: 8,
    height:8,
    borderRadius:4,
    backgroundColor:"grey",
    marginHorizontal: 3,
    marginTop: 15,
    
  }
})

  export default HorizontalScroll;