import { StyleSheet, Text, View } from 'react-native';

type Props = {
    title: string;
};

export function SkillChip({ title }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 999,
        backgroundColor: '#ECECEC',
    },

    text: {
        fontSize: 14,
        fontWeight: '500',
    },
});