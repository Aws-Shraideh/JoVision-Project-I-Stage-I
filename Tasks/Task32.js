import Video ,{VideoRef} from 'react-native-video';
import {StyleSheet,View} from 'react-native'
import {useRef} from 'react'

const Task32 = () => {
 const videoRef = useRef(null)
 const image = ('https://reactnative.dev/img/tiny_logo.png')
 const video = ('https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4')

 return (
  <View>
   <Video 
    source={{uri : video }}
    style={styles.Video}
    ref={videoRef}
    poster ={image}
    posterResizeMode = {'contain'}
   />
   </View>
 )
}

var styles = StyleSheet.create({
  Video: {
    width: '100%',
    height: '100%'
  },
});

export default Task32;
