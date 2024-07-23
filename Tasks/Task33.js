import Video ,{VideoRef} from 'react-native-video';
import {Pressable, StyleSheet,View} from 'react-native'
import {useRef,useState} from 'react'

const Task33 = () => {
 const videoRef = useRef(null)
 const [pause, setPause] = useState(false)
 const image = ('https://reactnative.dev/img/tiny_logo.png')
 const video = ('https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4')

 const pauseVideo = () => 
    {
     setPause(pause? false : true)
    }

 return (
  <View style={styles.view}>
    <Pressable onPress={pauseVideo}>
        <Video 
            source={{uri : video }}
            style={styles.Video}
            ref={videoRef}
            poster ={image}
            posterResizeMode = {'contain'}
            paused = {pause}
        />
   </Pressable>
   </View>
 )
}

var styles = StyleSheet.create({
  view:
  {
    justifyContent: 'center',
    alignItems: 'center',
    flex : 1
  },
  Video: {
    height: 300,
    width: 300 * (3/2),
    alignContent: 'center',
    alignItems: 'center'
  },
});

export default Task33;