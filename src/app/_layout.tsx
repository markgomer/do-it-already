import { Stack } from "expo-router"

import { colors } from "@/constants/colors"

export default function Layout() {
    const BG_COLOR = colors.dark.background
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: BG_COLOR
                }
            }}
        />
    )
}


