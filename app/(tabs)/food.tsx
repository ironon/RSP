// import Ionicons from '@expo/vector-icons/Ionicons';

// import { StyleSheet, Image, Platform } from 'react-native';
import { ScrollView, StyleSheet, Text } from 'react-native';
// import { Collapsible } from '@/components/Collapsible';
// import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// import { ScrollView } from 'react-native-gesture-handler';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

export default function FoodScreen() {
  return (
    <ScrollView >
      <ThemedView style={pageStyle.mainView}>
        <ThemedText type="title">Food</ThemedText>
        
        
       

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
    color: "black"
  }
});
