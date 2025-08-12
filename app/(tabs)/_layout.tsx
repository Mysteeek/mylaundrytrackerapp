import { themeColors } from '@/utils/theme-utils';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";

export default function _Layout () {
    return (
        <Tabs screenOptions={{
                tabBarActiveTintColor: themeColors.orange}}
                >
            <Tabs.Screen
            name="Home"
            options={{
                title: "home",
                headerShown: false,
                tabBarIcon: ({ color}) => <Fontisto name="home" size={34} color={color} />
            }}/>

            <Tabs.Screen
            name="Track"
            options={{
                headerShown: false,
                tabBarIcon: ({ color}) => <MaterialIcons name="track-changes" size={34} color={color} />
            }}/>

          <Tabs.Screen
            name="More"
            options={{
                headerShown: false,
                tabBarIcon: ({ color}) => <Fontisto name="more-v" size={34} color={color} />
            }}/>
        </Tabs>
    );
}