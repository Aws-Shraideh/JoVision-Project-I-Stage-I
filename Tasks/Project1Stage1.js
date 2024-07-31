import  React, { useEffect,useState,useRef } from 'react';
import { StyleSheet,View,Text,Button, Alert, Pressable,Image, PermissionsAndroid, Platform,FlatList, RefreshControl} from 'react-native';
import {NavigationContainer,useFocusEffect } from '@react-navigation/native';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useCameraPermission,useCameraDevice,Camera} from 'react-native-vision-camera';
import RNFS from 'react-native-fs';
import * as Location from 'expo-location';
import { Accelerometer } from 'expo-sensors';


const Project1Stage1 = () => {
  
  useEffect(()=>{
    hasAndroidPermission()
  },[])

    const Tab = createBottomTabNavigator();
    const [picture, setPicture] = useState()
    const camera = useRef(null)
    

    const PhoneCamera = () => {
      const device = useCameraDevice('back');
      const { hasPermission, requestPermission } = useCameraPermission();
      const [isCameraReady, setIsCameraReady] = useState(false);
      const [isActive, setIsActive] = useState(true);
    
      const takeAPhoto = async () => {
        const photo = await camera.current?.takePhoto();
        setPicture(photo.path);
      };

      const keepPicture = async () =>
        {
          await CameraRoll.save(`file://${picture}`, {
          type: 'photo',
          album:'ProjectStage1'
          })
          .then(() => 
            {
            console.log('Photo stored successfully');
            setPicture(null);
            })
        .catch((error) => {
            console.error('Error storing photo: ', error);
        });
        }
        
        const deletePicture = () =>
        {
            RNFS.unlink(`file://${picture}`)
            .then(() => {
                console.log('Photo deleted successfully');
                setPicture(null);
            })
            .catch((error) => {
                console.error('Error deleting photo: ', error);
            });
        }
      const keepOrDiscard = () =>{
        Alert.alert('Alert ', 'Keep or disard the photo?', [
          {
            text: 'discard',
            onPress: () => deletePicture(),
            style: 'cancel',
          },
          {text: 'Keep', onPress: () => keepPicture()},
        ]);}
    
      const previewPhoto = () => 
      {
        keepOrDiscard();
        return (
          <>
            <Image style={StyleSheet.absoluteFill} source={{ uri: `file://${picture}` }} />
          </>
        );
      };
    
      useFocusEffect
      (
        React.useCallback(() => 
        {
          setIsActive(true);
          return () => setIsActive(false);
        }, [])
      );
    
      useEffect(() => {
        requestPermission();
      }, []);
    
      if (!hasPermission) return Alert.alert('Error', 'Permissions not granted!');
      if (device == null) return Alert.alert('Error', 'Device Not Found!');
      if (!isActive) return null;
    
      return (
        <View style={styles.view}>
          {picture ? (
            previewPhoto()
          ) : (
            <>
              <Camera
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={isCameraReady}
                photo={true}
                onInitialized={() => setIsCameraReady(true)}
              />
              <Pressable onPress={takeAPhoto} style={styles.press} />
            </>
          )}
        </View>
      );
    };
     
    const Sensors = () => {
      const [location, setLocation] = useState(null);
      const [altitude, setAltitude] = useState(null);
      const [latitude, setLatitude] = useState(null);
      const [longitude, setLongitude] = useState(null);
      const [speed, setSpeed] = useState(null);
      const [errorMsg, setErrorMsg] = useState(null);
      
      const [{x,y,z},setData] = useState({
        x:0,
        y:0,
        z:0,
      });

    useFocusEffect
    (
      React.useCallback(()=>
      {
        Accelerometer.setUpdateInterval(500)
        let sensorSub
    
        const accSubscribe = ()=>
        {
          sensorSub = Accelerometer.addListener(setData)
          console.log('Sensor')
        }

        Accelerometer.setUpdateInterval(500)
        accSubscribe();
          return()=> 
          {
            console.log('unsub Sens')
            sensorSub && sensorSub.remove()
          }
      },[])
    )

    useFocusEffect
    (
      React.useCallback(() => 
        {
          let subscription;
    
          (async () => 
            {
              let { status } = await Location.requestForegroundPermissionsAsync();
              if (status !== 'granted') 
                {
                  setErrorMsg('Permission to access location was denied');
                  return;
                }
    
              try 
              {
              subscription = await Location.watchPositionAsync
              (
                {
                  accuracy: Location.Accuracy.High,
                  timeInterval: 10000,
                },
                newLocation => 
                  {
                    console.log('update location!', newLocation.coords.latitude, newLocation.coords.longitude);
                    setLocation(newLocation);
                    setLatitude(newLocation.coords.latitude);
                    setAltitude(newLocation.coords.altitude);
                    setLongitude(newLocation.coords.longitude);
                    setSpeed(newLocation.coords.speed);
                  }
              );

              }  
                catch (error) 
                  {
                    console.error(error);
                    setErrorMsg('Error watching location');
                  }
            }
          )();
    
          return () => 
            {
              if (subscription) 
                {
                  console.log('loc unsub');
                  subscription.remove();
                }
            };
        }, [])
    );
    
    
      let locText = 'Waiting..';
      if (errorMsg) 
        {
          locText = errorMsg;
        }   
      else if (location) 
      {
        locText = `Altitude: ${altitude}. Longitude: ${longitude}. Latitude: ${latitude}. Speed: ${speed}`;
      }

      let ornText = 'Waiting..'
      if (errorMsg)
      {
        ornText = errorMsg;
      } 
      else if (x && y && z)
      {
        ornText = `X: ${x}. Y: ${y}. Z:${z}` 
      }
    
      return (
        <>
          <Text style={{color:'black'}}>{locText}</Text>
          <Text style={{color:'black'}}>{ornText}</Text>
        </>
      );
    };
    
    const Gallery = () => 
      {
        const [refreshing, setRefreshing] = useState(false);
        const [pictures, setPictures] = useState([]);
    
        const fetchPhotos = async () => 
          {
            const photos = await CameraRoll.getPhotos
            ({
              first:20,
              assetType: 'Photos',
              groupName: 'ProjectStage1',
            });
            setPictures(photos.edges.map(p => p.node.image.uri));
          };
    
        const onRefresh = React.useCallback(() => 
          {
            setRefreshing(true);
            fetchPhotos().then(() => setRefreshing(false));
          }, []);
    
      useFocusEffect
      (
        React.useCallback(()=>
        {
          fetchPhotos();
        }, [])
      );
    
      return (
        <FlatList
          data={pictures}
          renderItem={({ item }) => 
          (
            <Image
              source={{ uri: item }}
              style={{ width: 200, height: 250 }}
            />
          )}
          keyExtractor={item => item}
          refreshControl=
          {
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      );
    };
    
    const SlideShow = () =>
    {
      const [images, setImages] = useState([]);
      const [isPlaying, setIsPlaying] = useState(true);
      const flatListRef = useRef();
      let currentIndex = 0;
  
      useFocusEffect
      (
        React.useCallback(()=>
          {
            fetchPhotos();
          }, [])
      );
  
    useFocusEffect
    (
      React.useCallback(()=>
        {
          let interval;
          if (isPlaying && images.length > 0) 
            {
              interval = setInterval(() => 
                {
                  currentIndex = (currentIndex + 1) % images.length;
                  flatListRef.current.scrollToOffset
                  ({
                    animated: true,
                    offset: currentIndex * 250,
                  });
                }, 1000);
            }
          return () => clearInterval(interval);
        }, [isPlaying, images])
    );

      
  
    const fetchPhotos = async () => 
      {
        const photos = await CameraRoll.getPhotos
        ({
          first: 40,
          assetType: 'Photos',
          groupName: 'ProjectStage1',
        });
        setImages(photos.edges.map(p => p.node.image.uri));
      };
  
    const renderItem = ({ item }) => 
    (
      <Image style={{ width: 200, height: 250 }} source={{ uri: item }} />
    );
  
    return (
      <>
        <Button title={isPlaying ? "Stop" : "Start"} onPress={() => setIsPlaying(!isPlaying)} />
        <FlatList
          ref={flatListRef}
          data={images}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
      </>
    );
  };
    
    function MyTab()
    {  
        return(
        <Tab.Navigator>
          <Tab.Screen options = {{title:'Camera'}} name='PhoneCamera' component={PhoneCamera} />
          <Tab.Screen options = {{title:'Sensors'}} name='Sensors' component={Sensors} />
          <Tab.Screen options ={{title:'Gallery'}} name="Gallery" component={Gallery} />
          <Tab.Screen options ={{title:'SlideShow'}} name="SlideShow" component={SlideShow} />
        </Tab.Navigator>
        )
    }

      async function hasAndroidPermission() {
        const getCheckPermissionPromise = () => {
          if (Platform.Version >= 33) {
            return Promise.all([
              PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES),
              PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO),
              PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE),
            ]).then(
              ([hasReadMediaImagesPermission, hasReadMediaVideoPermission, hasWriteExternalStoragePermission]) =>
                hasReadMediaImagesPermission && hasReadMediaVideoPermission && hasWriteExternalStoragePermission,
            );
          } else {
            return Promise.all([
              PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE),
              PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE),
            ]).then(
              ([hasReadExternalStoragePermission, hasWriteExternalStoragePermission]) =>
                hasReadExternalStoragePermission && hasWriteExternalStoragePermission,
            );
          }
        };
      
        const hasPermission = await getCheckPermissionPromise();
        if (hasPermission) {
          return true;
        }
        const getRequestPermissionPromise = () => {
          if (Platform.Version >= 33) {
            return PermissionsAndroid.requestMultiple([
              PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
              PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            ]).then(
              (statuses) =>
                statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
                  PermissionsAndroid.RESULTS.GRANTED &&
                statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
                  PermissionsAndroid.RESULTS.GRANTED &&
                statuses[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] ===
                  PermissionsAndroid.RESULTS.GRANTED,
            );
          } else {
            return PermissionsAndroid.requestMultiple([
              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            ]).then(
              (statuses) =>
                statuses[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] ===
                  PermissionsAndroid.RESULTS.GRANTED &&
                statuses[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] ===
                  PermissionsAndroid.RESULTS.GRANTED,
            );
          }
        };
      
        return await getRequestPermissionPromise();
      }
          
      return (
        <NavigationContainer>
            <MyTab></MyTab>
        </NavigationContainer>
      );
    };
    styles = StyleSheet.create({
        view:
        {
            backgroundColor : 'white',
            alignContent : 'center',
            justifyContent : 'center',
            flex: 1,
        },
        press:
        {
            position : 'absolute',
            alignSelf : 'center',
            alignContent : 'center',
            bottom : 50,
            height : 50,
            width : 50,
            backgroundColor : 'rgba(255, 255, 255, 0.3)',
            borderRadius: 25.
        },
        discard:
        {
            position : 'absolute',
            alignSelf : 'center',
            right : 50,
            bottom : 50,
            height : 50,
            width : 50,
            backgroundColor : 'rgba(255, 100, 100, 0.7)',
            borderRadius: 25.
        },
        text:
        {
            fontSize:60,
            fontWeight:'bold',
            color:'black'
        },
        button:
        {
            width:100,
            height:40,
            margin:12,
            padding:12,
        }
    })
    
    export default Project1Stage1;