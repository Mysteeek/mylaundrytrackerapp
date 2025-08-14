import { themeColors } from '@/utils/theme-utils';
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";
import "../globals.css";

export default function _Layout () {
    return (
        <Tabs screenOptions={{
                tabBarActiveTintColor: themeColors.orange
                }}

                >
            <Tabs.Screen
            name="Home"
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({ color}) => <Fontisto name="home" size={34} color="black" />
            }}/>

            <Tabs.Screen
            name="Track"
            options={{
                title: "Track",
                headerShown: false,
                tabBarIcon: ({ color}) => <MaterialIcons name="track-changes" size={34} color="black" />
            }}/>

          <Tabs.Screen
            name="More"
            options={{
                title: "More",
                headerShown: false,
                tabBarIcon: ({ color}) => <Fontisto name="more-v" size={34} color="black" />
            }}/>

            <Tabs.Screen
            name="status"
            options={{
                title: "Status",
                headerShown: false,
                tabBarIcon: ({ color}) => <Entypo name="lifebuoy" size={24} color="black" />
            }}/>
        </Tabs>
    );
}