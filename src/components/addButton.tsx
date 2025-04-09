import { View, Button, TouchableOpacityProps, StyleSheet } from "react-native";

type Props = TouchableOpacityProps & {
    title: string
}

export function AddButton({ title, ... rest }: Props) {
    return (
        <View style={styles.container}>
            <Button
                title={title}
                {...rest}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
