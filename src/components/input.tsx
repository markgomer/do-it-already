import { StyleSheet, TextInput } from 'react-native';

import { colors } from '@/constants/colors';

export function Input({ ...rest }) {
    return (
        <TextInput
            style={styles.container}
            placeholderTextColor={colors.gray[300]}
            {...rest}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        height: 54,
        backgroundColor: colors.gray[500],
        fontSize: 16,
        color: colors.gray[100],
        borderRadius: 4,
    },
})
