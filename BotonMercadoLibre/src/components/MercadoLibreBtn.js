import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';

type Props = {
  children : any,
  style : {}, //Estilo boton
  containStyle : {}, //Estilo del contenedor
  color : string, //Color por default
  onPressColor : string, // Color al presionar
  onPress : () => any,
}
export default class MercadoLibreBtn extends Component<Props> {
  state = {
    isLoading : false,
  }
  render() {
    const { style, onPress, children, color, onPressColor, containStyle } = this.props;

    const colorBtn = color ? color : "#0247fe";
    const onPressColorBtn = onPressColor ? onPressColor : "green";
    const backgroundColor = !this.state.isLoading ? colorBtn : onPressColorBtn;

    const btnStyle = style ? style : styles.btnStyle;
    const viewStyle = containStyle ? containStyle : styles.defaultStyle;

    return (
      <TouchableOpacity style={[btnStyle, { backgroundColor }]} onPress={() => {
        this.setState({ isLoading: true });
        onPress();
      }}>
        { children || (
          <View style={viewStyle}>
            { !this.state.isLoading ?
            <Text style={styles.textStyle}>Comprar</Text>
            :
            <ActivityIndicator size="large" color="white"/>}
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
  defaultStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    width: '90%',
    height: 50,
    borderRadius: 5,
  },
});
