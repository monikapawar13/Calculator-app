import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react'; 
import styles from './styles/main'

export default function App() {

  const [value, setValue] = useState("");

  function realizaCalculo(value){
    if(value.includes("%")){
      var first = parseFloat(value.split("%")[0]);
      var second = parseFloat(value.split("%")[1]);
      return first % second;
    }else if(value.includes("÷")){
      var first = parseFloat(value.split("÷")[0]);
      var second = parseFloat(value.split("÷")[1]);
      return first / second;
    }else if(value.includes("+")){
      var first = parseFloat(value.split("+")[0]);
      var second = parseFloat(value.split("+")[1]);
      return first + second;
    }else if(value.includes("-")){
      var first = parseFloat(value.split("-")[0]);
      var second = parseFloat(value.split("-")[1]);
      return first - second;
    }else if(value.includes("*")){
      var first = parseFloat(value.split("*")[0]);
      var second = parseFloat(value.split("*")[1]);
      return first * second;
    }
  }

  function incrementValue(element){
    var new_value = value;
    if(element === "AC"){
      new_value = "";
    }else if(element === "+/-"){
      if(value.charAt(0) === "-"){
        new_value = value.substring(1);
      }else{
        new_value = "-" + value;
      }
    }else if(element === "%" || element === "÷" || element === "+" || element === "-" || element === "*"){
      if(parseInt(value.charAt(value.length-1)).toString() != "NaN"){
        if(value.includes("%") || value.includes("÷") || value.includes("+") || value.includes("-") || value.includes("*")){
          if(value.charAt(0) === "-"){
            new_value += element;
          }else{
            new_value = realizaCalculo(value).toString();
          }
        }else{
          new_value += element;
        }
      }
    }else if(element === "="){
      new_value = realizaCalculo(value).toString();
    }else{
      new_value = value + element;
    }
    
    setValue(new_value);
  }

  return (
    <View style={styles.container}>

      <View style={styles.result}>

        <Text style={{color: "#FFFFFF", fontSize: 40}}>{ value }</Text>

      </View>

      <View style={styles.btnRow1}>

        <TouchableOpacity style={styles.btnGray} onPress={() => {incrementValue("AC")}}>
          <Text style={styles.textDark}>AC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnGray} onPress={() => {incrementValue("+/-")}}>
          <Text style={styles.textDark}>+/-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnGray} onPress={() => {incrementValue("%")}}>
          <Text style={styles.textDark}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnYellow} onPress={() => {incrementValue("÷")}}>
          <Text style={styles.textLight}>÷</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.btnRow2}>

      <TouchableOpacity style={styles.btnHardGray} onPress={() => {incrementValue("7")}}>
          <Text style={styles.textLight}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnHardGray} onPress={() => {incrementValue("8")}}>
          <Text style={styles.textLight}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnHardGray} onPress={() => {incrementValue("9")}}>
          <Text style={styles.textLight}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnYellow} onPress={() => {incrementValue("*")}}>
          <Text style={styles.textLight}>X</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.btnRow3}>

      <TouchableOpacity style={styles.btnHardGray} onPress={() => {incrementValue("4")}}>
          <Text style={styles.textLight}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnHardGray} onPress={() => {incrementValue("5")}}>
          <Text style={styles.textLight}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnHardGray} onPress={() => {incrementValue("6")}}>
          <Text style={styles.textLight}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnYellow} onPress={() => {incrementValue("-")}}>
          <Text style={styles.textLight}>-</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.btnRow4}>

      <TouchableOpacity style={styles.btnHardGray} onPress={() => {incrementValue("1")}}>
          <Text style={styles.textLight}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnHardGray} onPress={() => {incrementValue("2")}}>
          <Text style={styles.textLight}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnHardGray} onPress={() => {incrementValue("3")}}>
          <Text style={styles.textLight}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnYellow} onPress={() => {incrementValue("+")}}>
          <Text style={styles.textLight}>+</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.btnRow5}>

      <TouchableOpacity style={styles.btnGrayZero} onPress={() => {incrementValue("0")}}>
          <Text style={styles.textLight}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnHardGray} onPress={() => {incrementValue(".")}}>
          <Text style={styles.textLight}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnYellow} onPress={() => {incrementValue("=")}}>
          <Text style={styles.textLight}>=</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}
