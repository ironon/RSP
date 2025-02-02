// import Ionicons from '@expo/vector-icons/Ionicons';

// import { StyleSheet, Image, Platform } from 'react-native';
import { ScrollView, StyleSheet, Text } from 'react-native';
// import { Collapsible } from '@/components/Collapsible';
// import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'react-native';
import mewhen from '@/assets/images/mewhen.jpg';
// import { ScrollView } from 'react-native-gesture-handler';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

export default function IndexScreen() {
  return (
    <ScrollView >
      <ThemedView style={pageStyle.mainView}>
        <ThemedText type="title">Home</ThemedText>
        
        <ThemedText>me when react native finally works 🤯</ThemedText>
        <Image source={mewhen} style={pageStyle.image}></Image>
        <ThemedText>ahahha</ThemedText>
       

      </ThemedView>

    </ScrollView>
  );
}

const pageStyle = StyleSheet.create({
  mainView: {
    flex: 1,
    // backgroundColor: '#fff',
    display: 'flex',
    padding: 20,
    paddingTop: 70,
    color: "white"
  },
  image: {
    width: '100%',
    // height: /00,
  }
});
