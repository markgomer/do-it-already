import { View, Text, StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';

export default function Index() {

    return (
        <View style={styles.container}>
            {/* Remove */}
            <Text style={styles.text}>
                Functionou
            </Text>

            <View style={styles.header}>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        color: colors.dark.text,
    }
})
