import { View, Text, StyleSheet } from "react-native";

type StatItemProps = {
    value: string;
    label: string;
};

  
export function StatItem({ value, label }: StatItemProps) {
    return (
      <View style={styles.statItem}>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statLabel}>{label}</Text>
      </View>
    );
}


const styles = StyleSheet.create({
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statValue: {
        fontSize: 18,
        fontWeight: '700',
    },
    statLabel: {
        marginTop: 4,
        fontSize: 12,
        color: '#777777',
    },
})