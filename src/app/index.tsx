import { View, Text, StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Index() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="rocket-outline" size={32} color={colors.blue} />
                <Text style={styles.headerTextBlue}>to</Text>
                <Text style={styles.headerTextPurple}>do</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: { },
    header: {
        flexDirection: 'row',
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTextBlue: {
        fontSize: 32,
        color: colors.blue,
    },
    headerTextPurple: {
        color: colors.purple,
        fontSize: 32,
    },
    input: {},
    status: {},
    taskList: {},
    text: {
        color: colors.dark.text,
    }
})
