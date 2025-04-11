import {
    View,
    StyleSheet,
    Pressable,
    PressableProps
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";

type Props = PressableProps & {
    icon: keyof typeof MaterialIcons.glyphMap,
}

export function AddButton({ icon, ...rest }: Props) {
    const bg_color = (icon == "add-circle-outline" ? colors.blue : colors.danger)

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                {... rest}
            >
                <MaterialIcons
                    name="add-circle-outline"
                    size={36}
                    color={colors.dark.text}
                />
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 54,
        width: 54,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
    }
})
