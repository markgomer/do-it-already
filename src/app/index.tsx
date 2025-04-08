import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '@/constants/colors';
import { Input } from '@/components/input';

export default function Index() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="rocket-outline" size={32} color={colors.blue} />
                <Text

                    style={styles.headerTextBlue}>to</Text>
                <Text style={styles.headerTextPurple}>do</Text>
            </View>
            <View style={styles.newTaskContainer}>
                <Input
                    placeholder="Adicione uma nova tarefa"
                    autoCorrect={false}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
    },
    header: {
        backgroundColor: colors.gray[700],
        flexDirection: 'row',
        padding: 70,
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
    newTaskContainer: {
        padding: 12,
        marginTop: -30,
    },
})
