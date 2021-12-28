import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons, Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import colors from "../../styles/colors";

export const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.avatar}>
                <View style={styles.onlineStatus}></View>
            </TouchableOpacity>
            <View style={styles.rightSide}>
                <TouchableOpacity style={styles.button}>
                    <MaterialIcons
                        name="notifications-none"
                        size={26}
                        color={colors.black}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <MaterialCommunityIcons
                        name="message-outline"
                        size={26}
                        color={colors.black}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Feather
                        name="search"
                        size={26}
                        color={colors.black}
                    />
                </TouchableOpacity>
            </View>
        </View>

    )
}