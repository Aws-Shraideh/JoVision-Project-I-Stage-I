import  React, { useEffect,useState,useRef } from 'react';
import { StyleSheet,View,Text,Button, Alert, Pressable,Image, PermissionsAndroid, Platform,FlatList, RefreshControl, TextInput,TouchableOpacity} from 'react-native';
import {NavigationContainer,useFocusEffect } from '@react-navigation/native';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useCameraPermission,useCameraDevice,Camera} from 'react-native-vision-camera';
import RNFS, { DocumentDirectoryPath, readDir, readFile } from 'react-native-fs';
import * as Location from 'expo-location';
import { Accelerometer } from 'expo-sensors';
import Orientation from 'react-native-orientation-locker';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Video from 'react-native-video';


const Task = ()=>
    {

const deleteAllFiles = async () => {
  try {
    const files = await RNFS.readDir(RNFS.DocumentDirectoryPath);
    for (const file of files) {
      await RNFS.unlink(file.path);
    }
    console.log('All files deleted successfully');
  } catch (error) {
    console.error('Error deleting files: ', error);
  }
};
deleteAllFiles();


    }

export default Task