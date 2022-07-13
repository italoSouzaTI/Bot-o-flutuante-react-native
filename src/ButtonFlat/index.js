import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

// import { Container } from './styles';

const ButtonFlat = ({ children }) => {
    const [animation, setAnimation] = useState(new Animated.Value(0));
    const [open, setOpen] = useState(false);
    console.log(open)
    function toogleMenu () {
        const toValue = open ? false : true;
        Animated.spring(animation, {
            toValue,
            friction: 6,
            useNativeDriver: true,
        }).start();

        setOpen(!open);
    }

    const rotation = {
        transform: [
            {
                rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "45deg"]
                })
            }
        ]
    }
    const help = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -80]
                })
            }
        ]
    }

    const help2 = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -150]
                })
            }
        ]
    }

    return (
        <View style={[styles.container]}>
            <TouchableOpacity style={[styles.btn, styles.btnFilho, help2]}>
                <AntDesign name='plus' color="white" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.btnFilho, help]}>
                <Entypo name='help' color="white" size={24} />
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={toogleMenu}
                style={[styles.btn, styles.btnPai, rotation]}
            >
                <AntDesign name='plus' color="white" size={24} />
            </TouchableOpacity>
        </View>
    );
}

export default ButtonFlat;

const styles = StyleSheet.create({
    container: {
        zIndex: 99,
        position: 'absolute',
        bottom: 10,
        right: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    btn: {
        width: 60,
        height: 60,
        borderRadius: 100,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnPai: {
        backgroundColor: '#7C4390',
    },
    btnFilho: {
        right: 5,
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
});