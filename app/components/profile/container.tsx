import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-magnus';

export default function ProfileContainer() {
  return (
    <View style={styles.container}>
      <View style={styles.cardTwo}>
        <View style={styles.contentOne}>
          <Image
            style={styles.ImageControllerCardTwo}
            h={241}
            w={241}
            m={14}
            rounded="circle"
            source={{
              uri: "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.leadText}>Wa'ane Austin Mbale</Text>
            <Text style={styles.descriptionText}>@GhostCypher</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageControllerCardTwo: {
    margin: 40,
    alignSelf: 'center',
    top: 37,
  },
  contentOne: {
    margin: 80,
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  leadText: {
    color: '#FFFFFF',
    marginTop: 4,
    marginBottom: 6,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  descriptionText: {
    color: '#808080',
    marginBottom: 2,
    fontWeight: 'bold',
    fontSize: 14,
  },
  cardTwo: {
    //width: 240,
    //height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#ffffff',
    borderRadius: 5,
    //margin: 20,
  },
});
