import  React, { useEffect,useState,useRef } from 'react'
import { StyleSheet,View,Text,Button, Alert, Pressable,Image, PermissionsAndroid, Platform,FlatList, RefreshControl, TextInput,TouchableOpacity,Dimensions} from 'react-native'
import {NavigationContainer,useFocusEffect } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useCameraPermission,useCameraDevice,Camera} from 'react-native-vision-camera'
import RNFS, { DocumentDirectoryPath, readDir, readFile } from 'react-native-fs'
import * as Location from 'expo-location'
import { Accelerometer } from 'expo-sensors'
import Orientation from 'react-native-orientation-locker'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Video from 'react-native-video'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Project1Stage2 = () => {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator()
  const [picture, setPicture] = useState()
  const camera = useRef(null)
  const [camDir,setCamDir] = useState('back')
  const [photoMode,setPhotoMode] = useState(true)
  const [videoMode,setVideoMode] = useState(false)
  const {height,width} = Dimensions.get('window')
    
  const PhoneCamera = () => {
    const device = useCameraDevice(camDir)
    const { hasPermission, requestPermission } = useCameraPermission()
    const [isActive, setIsActive] = useState(true)
    const [isRecording, setisRecording] = useState(false)
  
    useEffect(() => 
      {
        const checkPermission = async () => 
          {
            try 
              {
                await requestPermission()
              } 
            catch (error) 
              {
                console.log('Permission request error:', error)
              }
          }
      checkPermission()
    }, [hasPermission])

  
    const switchCam = () => {
      setCamDir(camDir === 'back' ? 'front' : 'back')
    }
  
    const switchMode = () => {
      setPhotoMode(!photoMode)
      setVideoMode(!videoMode)
    }
  
    const takeAPhoto = async () => {
      const photo = await camera.current.takePhoto()
      setPicture(photo)
    }
  
    const takeAVideo = async () => {
      if (!isRecording) {
        camera.current.startRecording({
          onRecordingFinished: (video) => saveVideo(video),
          onRecordingError: (error) => console.error(error),
        })
        setisRecording(true);
      }
    }
  
    const stopVideo = async () => {
      await camera.current.stopRecording();
      setisRecording(false);
    }
  
    const saveVideo = async (video) => {
      try {
        if (video && video.path) {
          const currentDate = new Date()
          const ISODate = currentDate.toISOString().replace(/:/g, '-')
          const filePath = `${RNFS.DocumentDirectoryPath}/Aws_shraideh_${ISODate}.mp4`
          const videoData = await RNFS.readFile(video.path, 'base64')
          await RNFS.writeFile(filePath, videoData, 'base64')
          console.log('video saved')
          const fileInfo = await RNFS.stat(filePath)
          console.log('File info:', fileInfo)
        } else {
          console.log('video not found')
        }
      } catch (error) {
        console.log(error)
      }
    };
  
    const keepPicture = async () => {
      try {
        if (picture && picture.path) {
          const currentDate = new Date();
          const ISODate = currentDate.toISOString().replace(/:/g, '-')
          const filePath = `${RNFS.DocumentDirectoryPath}/Aws_shraideh_${ISODate}.jpg`
          const imageData = await RNFS.readFile(picture.path, 'base64')
          await RNFS.writeFile(filePath, imageData, 'base64')
          console.log('Photo stored successfully at:', filePath)
          const fileInfo = await RNFS.stat(filePath)
          console.log('File info:', fileInfo)
          setPicture(null)
        } else {
          console.error('No image data to save')
        }
      } catch (error) {
        console.error('Error storing photo:', error)
      }
    };
  
    const deletePicture = () => {
      RNFS.unlink(`file://${picture.path}`)
        .then(() => {
          console.log('Photo deleted successfully')
          setPicture(null)
        })
        .catch((error) => {
          console.error('Error deleting photo: ', error)
        });
    };
  
    const keepOrDiscard = () => {
      Alert.alert('Alert ', 'Keep or discard the photo?', [
        {
          text: 'discard',
          onPress: () => deletePicture(),
          style: 'cancel',
        },
        { text: 'Keep', onPress: () => keepPicture() },
      ]);
    };
  
    const previewPhoto = () => {
      keepOrDiscard();
      return (
        <>
          <Image style={StyleSheet.absoluteFill} source={{ uri: `file://${picture.path}` }} />
        </>
      );
    };
  
    useFocusEffect(
      React.useCallback(() => {
        setIsActive(true)
        return () => {
          setIsActive(false)
          console.log('cam deactivated')
        }
      }, [])
    )
  
    if(hasPermission){
    return (
      <View style={styles.view}>
        {picture ? (
          previewPhoto()
        ) : (
          <>
            {device && (
              <Camera
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={isActive}
                photo={photoMode}
                video={videoMode}
              />
            )}
            {photoMode && (
              <Pressable onPress={takeAPhoto} style={styles.press}>
                <Text style={{ fontSize: 13, position: 'absolute', bottom: 16, left: 8, color: 'white' }}>Photo</Text>
              </Pressable>
            )}
            {videoMode && !isRecording && (
              <Pressable onPress={takeAVideo} style={styles.press}>
                <Text style={{ fontSize: 13, position: 'absolute', bottom: 16, left: 8, color: 'white' }}>Video</Text>
              </Pressable>
            )}
            {videoMode && isRecording && (
              <Pressable onPress={stopVideo} style={styles.press}>
                <Text style={{ fontSize: 10, position: 'absolute', bottom: 19, left: 2, color: 'white' }}>Recording</Text>
              </Pressable>
            )}
            <Pressable onPress={switchCam} style={styles.camSwitch}>
              <Text style={{ fontSize: 10, position: 'absolute', bottom: 12, left: 2, color: 'white' }}>Camera</Text>
            </Pressable>
            <Pressable onPress={switchMode} style={styles.modeSwitch}>
              <Text style={{ fontSize: 10, position: 'absolute', bottom: 12, left: 7, color: 'white' }}>Mode</Text>
            </Pressable>
          </>
        )}
      </View>
    )}
  };
    
     
    const Sensors = () => {
      const [location, setLocation] = useState(null)
      const [altitude, setAltitude] = useState(null)
      const [latitude, setLatitude] = useState(null)
      const [longitude, setLongitude] = useState(null)
      const [speed, setSpeed] = useState(null)
      const [errorMsg, setErrorMsg] = useState(null)
      const [rotation, setRotation] = useState('0deg')
      const carPhoto = require('../Resources/car.jpg')
      const walkingPhoto = require('../Resources/walking.jpg')
      const sittingPhoto = require('../Resources/sitting.jpg')
      const phonePhoto = require('../Resources/phone.jpg')
      const [displayImage, setDisplayImage] = useState(sittingPhoto)
      const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 })
    
      useFocusEffect(
        React.useCallback(() => 
          {
            Accelerometer.setUpdateInterval(500)
            let sensorSub
    
            const accSubscribe = () => 
              {
                sensorSub = Accelerometer.addListener(setData)
                console.log('Sensor')
              }
            accSubscribe()

          return () => 
            {
              console.log('unsub Sens')
              sensorSub && sensorSub.remove()
            }
        }, [])
      )
    
      useFocusEffect(
        React.useCallback(() => {
          let subscription;
    
          (async () => 
          {
            try 
            {
              let { status } = await Location.requestForegroundPermissionsAsync()
              if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
                return
              }
    
              subscription = await Location.watchPositionAsync(
                {
                  accuracy: Location.Accuracy.BestForNavigation,
                  timeInterval: 10000,
                },
                newLocation => {
                  console.log('update location!', newLocation.coords.latitude, newLocation.coords.longitude);
                  setLocation(newLocation)
                  setLatitude(newLocation.coords.latitude)
                  setAltitude(newLocation.coords.altitude)
                  setLongitude(newLocation.coords.longitude)
                  setSpeed(newLocation.coords.speed)
                }
              );
            } 
            catch (error) 
            {
              console.error(error)
              setErrorMsg('Error watching location')
            }
          })()
    
          return () => {
            if (subscription) {
              console.log('loc unsub')
              subscription.remove()
            }
          }
        }, [])
      )
    
      let locText = 'Waiting..'
      if (errorMsg) 
        {
          locText = errorMsg;
        } 
        else if (location) 
          {
            locText = `Altitude: ${altitude}. Longitude: ${longitude}. Latitude: ${latitude}. Speed: ${speed}`
          }  
    
      let ornText = 'Waiting..'
      if (x !== null && y !== null && z !== null) 
        {
          ornText = `X: ${x}. Y: ${y}. Z: ${z}`
        }
    
      const checkSpeed = () => 
        {
          if (speed > 2) 
          {
            setDisplayImage(carPhoto)
          } 
          else if (speed < 1) 
          {
            setDisplayImage(sittingPhoto)
          } 
          else 
          {
            setDisplayImage(walkingPhoto)
          }
        }
    
      useFocusEffect(
        React.useCallback(() => 
        {
          checkSpeed();
        }, [speed])
      )

      // Best used for a real phone, doesn't work correctly on an emulator
    // const checkOrientaion = () =>
    // {
    //   if (orientation.toUpperCase() ==='PORTRAIT' && y > 0)
    //     {
    //       setRotation('0deg')
    //     }
    //   else if (orientation.toUpperCase()==='PORTRAIT')
    //     {
    //       setRotation('180deg')
    //     }
    //   else if (orientation.toUpperCase()==='LANDSCAPE-LEFT')
    //     {
    //       setRotation('-90deg')
    //     }
    //   else if (orientation.toUpperCase()==='LANDSCAPE-RIGHT')
    //     {
    //       setRotation('90deg')
    //     }
    // }

    // const [orientation, setOrientation] = useState('Portrait');

      //   useFocusEffect(React.useCallback(()=>{
      //     const updateOrientation = (orientation) => {
      //       setOrientation(orientation);
      //     }
      
      //     Orientation.addOrientationListener(updateOrientation);
      
      //     return () => {
      //       Orientation.removeOrientationListener(updateOrientation);
      //     }
      //   }, [x]))
    
      const checkOrientaion = () => 
        {
            if (y > 0.7) 
            {
              setRotation('0deg')
            } 
          else if (y < -0.7) 
            {
              setRotation('180deg')
            } 
          else if (x > 0.7) 
            {
              setRotation('-90deg')
            }
            else if (x < -0.7) 
            {
              setRotation('90deg')
            }
        }
    
      useFocusEffect(
        React.useCallback(() => 
          {
            checkOrientaion();
          }, [y])
      );
    
      return (
        <>
          <Text style={{ color: 'black' }}>{locText}</Text>
          <Image source={displayImage} style={styles.displayImage}></Image>
          <Text style={{ color: 'black' }}>{ornText}</Text>
          <Image source={phonePhoto} style={{ width: 50, height: 50, transform: [{ rotate: rotation }] }} />
        </>
      )
    }
    
    
    
    const Gallery = ({ navigation }) => {
      const [refreshing, setRefreshing] = useState(false)
      const [media, setMedia] = useState([])
      const [text, setText] = useState('')
      const [input, setInput] = useState(false)
      const [selectedMedia, setSelectedMedia] = useState(null)
    
      const fetchMedia = async () => {
        const files = await RNFS.readDir(`${RNFS.DocumentDirectoryPath}`)
        const mediaFiles = files.filter(file => file.path.toLowerCase().endsWith('.jpg') || file.path.toLowerCase().endsWith('.mp4'))
        setMedia(mediaFiles)
        mediaFiles.forEach(file => {
          console.log(`Path: ${file.path}, Name: ${file.name}, Size: ${file.size}, Last Modified: ${file.mtime}`)
        });
      }
    
      const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        fetchMedia().then(() => setRefreshing(false))
      }, [])
    
      const deleteMedia = (media) => {
        console.log(media.path)
        RNFS.unlink(`file://${media.path}`)
        console.log('deletion successful')
        fetchMedia()
      }
    
      const renameMedia = async () => {
        if (selectedMedia) {
          const mediaData = await RNFS.readFile(selectedMedia.path, 'base64')
          const newPath = selectedMedia.path.endsWith('.jpg')
            ? `${RNFS.DocumentDirectoryPath}/${text}.jpg`
            : `${RNFS.DocumentDirectoryPath}/${text}.mp4`
    
          await RNFS.writeFile(newPath, mediaData, 'base64')
          RNFS.unlink(selectedMedia.path)
          setInput(false)
          fetchMedia()
        }
      }
    
      const imageOptions = (media) => {
        Alert.alert('Alert', 'What do you want to do with the selected media?', [
          {
            text: 'Delete',
            onPress: () => deleteMedia(media),
            style: 'cancel',
          },
          {
            text: 'Rename',
            onPress: () => 
              {
                setSelectedMedia(media)
                setInput(true)
              }
          },
          {
            text: 'Fullscreen',
            onPress:() => {navigation.navigate('MediaViewer', {Base64:media.path})}
          }
        ])
      }
    
      useFocusEffect(
        React.useCallback(() => {
          fetchMedia();
        }, [])
      );
    
      return (
        <View style={{ flex: 1, alignItems:'center' }}>
          {input && (
            <View style={styles.renameContainer}>
              <TextInput
                style={{borderWidth:2,width:width}}
                onChangeText={(text) => setText(text)}
                onSubmitEditing={renameMedia}
                placeholder="Enter new name"
              />
            </View>
          )}
          <FlatList
            data={media}
            renderItem={({ item }) => (
              <Pressable onPress={() => imageOptions(item)}>
                <Image
                  source={{ uri: `file://${item.path}` }}
                  style={{ width: 350, height: 400 }}
                  onError={(e) => console.log("Image loading error:", e.nativeEvent.error)}
                />
              </Pressable>
            )}
            keyExtractor={(item) => item.name}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          />
        </View>
      );
    };
    
    const MediaViewer = ({ route }) => {
      const vidRef = useRef(null);
      const { Base64 } = route.params;
      const [pause, setPause] = useState(false);
      const [media,setMedia] = useState([]);
      const [selectedMedia,setSelectedMedia] = useState(Base64)
      const backwardPhoto = require('../Resources/backward.jpg')
      const forwardPhoto = require('../Resources/forward.jpg')
      const pausePhoto = require('../Resources/Pause.jpg')
      const playPhoto = require('../Resources/play.jpg')
      const leftPhoto = require('../Resources/arrowLeft.jpg')
      const rightPhoto = require('../Resources/arrowRight.jpg')
      
     

      useFocusEffect(
        React.useCallback(() => {
          const fetchMediaFiles = async () => {
            try {
              const files = await RNFS.readDir(`${RNFS.DocumentDirectoryPath}`);
              const mediaFiles = files.filter(file => file.path.toLowerCase().endsWith('.jpg') || file.path.toLowerCase().endsWith('.mp4'));
              setMedia(mediaFiles);
              console.log(mediaFiles);
              const index = mediaFiles.findIndex(file => file.path === `${Base64}`);
            } 
            catch (error) {
              console.error(error)
            }
          };
    
          fetchMediaFiles();
        }, [])
      );

      const seekFive = async () =>
        {
          const currentSeconds = await vidRef.current.getCurrentPosition()
          console.log(currentSeconds)
          vidRef.current.seek(currentSeconds+5)
        }

      const seekBackFive = async () =>
        {
          const currentSeconds = await vidRef.current.getCurrentPosition()
          let chosenTime 
          {currentSeconds-5 > 0 ? chosenTime = currentSeconds-5: chosenTime=0}
          vidRef.current.seek(chosenTime)
        }

      const previousMedia = () =>
        {
          const index = media.findIndex(file => file.path === `${selectedMedia}`);
          {index-1 > 0 ? setSelectedMedia(media[index-1].path): setSelectedMedia(media[media.length-1].path)}
        }

        const nextMedia = () =>
          {
            const index = media.findIndex(file => file.path === `${selectedMedia}`);
            {index+1 > media.length-1 ? setSelectedMedia(media[0].path): setSelectedMedia(media[index+1].path)}
          }
      
    
      return (
        <View style={{ flex: 1 }}>
          {selectedMedia.toLowerCase().endsWith('jpg') && (
            <>
            <Image
              style={{ flex: 1 }}
              resizeMode="contain"
              source={{ uri: 'file://' + selectedMedia }}
            />
            <Pressable 
            onPress={()=>previousMedia()} 
            style={{ position: 'absolute', top: height/2.2 , left:1 }}>
              <Image source={leftPhoto} style={{ width: 50, height: 50 }}/>
            </Pressable>

            <Pressable 
            onPress={()=>nextMedia()} 
            style={{ position: 'absolute', top: height/2.2 , right:1 }}>
              <Image source={rightPhoto} style={{ width: 50, height: 50 }}/>
            </Pressable>
            </>
          )}
          {selectedMedia.toLowerCase().endsWith('mp4') && (
            <View style={{ flex: 1 }}>
              <Video
                paused={pause}
                ref={vidRef}
                source={{ uri: `file://${selectedMedia}` }}
                style={{ flex: 1 }}
                resizeMode="contain"
              />
              <Pressable
                onPress={() => setPause(prevState => !prevState)}
                style={{ position: 'absolute', bottom: 120,left: width/2.4 }}
              >
                {pause ? (
                  <Image
                    source={playPhoto}
                    style={{ width: 70, height: 70 }}
                  />
                ) : (
                  <Image
                    source={pausePhoto}
                    style={{ width: 70, height: 70 }}/>
                )}
              </Pressable>

              <Pressable onPress={()=>seekFive()} style={{ position: 'absolute', bottom: 70,right:10 }} >
                <Image
                source={forwardPhoto}
                style={{ width: 70, height: 70 }}/>
              </Pressable>

              <Pressable onPress={()=>seekBackFive()} style={{ position: 'absolute', bottom: 70,left:10 }} >
                <Image
                source={backwardPhoto}
                style={{ width: 70, height: 70 }}/>
              </Pressable>

              <Pressable 
            onPress={()=>previousMedia()} 
            style={{ position: 'absolute', top: 350,left:1 }}>
              <Image source={leftPhoto} style={{ width: 50, height: 50 }}/>
            </Pressable>

            <Pressable 
            onPress={()=>nextMedia()} 
            style={{ position: 'absolute', top: 350,right:1 }}>
              <Image source={rightPhoto} style={{ width: 50, height: 50 }}/>
            </Pressable>

            </View>
          )}
        </View>
      );
    };
    
    
    function MyTab()
    {  
        return(
        <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'PhoneCamera') {
              iconName = focused ? 'camera' : 'camera-outline';
            } 
            else if (route.name === 'Sensors') {
              iconName = focused ? 'compass' : 'compass-outline';
            }
            else if (route.name==="Gallery")
              {
                iconName = focused ? 'images': 'images-outline'
              }

           
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        >
          <Tab.Screen options = {{title:'Camera'}} name='PhoneCamera' component={PhoneCamera} />
          <Tab.Screen options = {{title:'Sensors'}} name='Sensors' component={Sensors} />
          <Tab.Screen options ={{title:'Gallery'}} name="Gallery" component={Gallery} />
        </Tab.Navigator>
        )
    }
    function MyStack()
    {
      return(
        <Stack.Navigator>
          <Stack.Screen options={{title:'Main',headerShown:false}} name='Main' component={MyTab} />
          <Stack.Screen 
            options={({ navigation }) => 
              ({
                title: 'MediaViewer',
                headerLeft: () => 
                  (
                    <TouchableOpacity 
                      style={{ borderRadius: 12, margin: 5, backgroundColor: '#07e2ff', width: 40, height: 30, justifyContent: 'center', alignItems: 'center' }}
                      onPress={() => navigation.navigate('Gallery')}>
                      <Text>Back</Text>
                    </TouchableOpacity>
                 )
                }
              )} 
            name="MediaViewer" 
            component={MediaViewer} 
          />
        </Stack.Navigator>
      )
    }
          
      return (
        <NavigationContainer>
            <MyStack></MyStack>
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
        },
        camSwitch:
        {
            position : 'absolute',
            alignSelf : 'center',
            alignContent : 'center',
            bottom : 45,
            right :60,
            height : 40,
            width : 40,
            backgroundColor : 'rgba(10, 70, 10, 0.5)',
            borderRadius: 20.
        },
        modeSwitch:
        {
            position : 'absolute',
            alignSelf : 'center',
            alignContent : 'center',
            bottom : 45,
            left :60,
            height : 40,
            width : 40,
            backgroundColor : 'rgba(70, 10, 10, 0.5)',
            borderRadius: 20.
        },
        displayImage:
        {
          width: 50,
          height: 50,
        }
    })
    
    export default Project1Stage2;