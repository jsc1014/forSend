import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { images } from '../images';

const IconButton = ({ type }) => {
    return (
        <TouchableOpacity>
        <Image source={type} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconbutton: {
        margin: 10,
    },
});

export default IconButton;
