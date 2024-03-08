import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native-web'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';



export default function home() {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
      <StatusBar style="dark" />

      {/* piada e avatar */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
            <Text
                style={{fontSize: hp(4.5)}}
                className="font-bold tracking-wider text-neutral-700" // COR DO "COMEÇAR A "
            >
                PRONTO PARA
            </Text>
            <Text
                style={{fontSize: hp(4.5)}}
                className="font-bold tracking-wider text-rose-500" // deixar vermelho o "TREINAR"
            >
                TREINAR
            </Text>
        </View>
        <View className="flex justify-center items-center space-y-2">
            <Image source={require('../assets/images/avatar.png')}
            style={{height: hp(6), width: hp(6)}}
            className="rounded-full" 
            />
            <View className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
            style={{height: hp(5.5), width: hp(5.5)}}
            >
            <Ionicons name="notifications" size={hp(3)} color="gray" />
            </View>
        </View>
      </View>

      {/* images sliders*/}
      <View>
        <ImageSlider />
      </View>
    </SafeAreaView>
  )
}
