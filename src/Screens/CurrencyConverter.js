import React, { useEffect, useState } from 'react';
import { Text, View,StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-paper';

function CurrencyConverter() {

    const [amount, setAmount] = useState()
    const [fromcurrency, setFromCurrency] = useState()
    const [tocurrency, setToCurrency] = useState()
    const [convertedvalue, setConvertedvalue] = useState(0)

    function convertCurrencies(amount, from, to) {
    let result=0
    // alert(JSON.stringify(from)+JSON.stringify(to))
        if (from == "Euro" && to == "INR") {
            result = amount * 83.66
            setConvertedvalue(result)

        }
        else if(from =="USD"&& to=="INR"){
            result = amount * 74.55
            setConvertedvalue(result)
        }
        else if(from =="USD"&& to=="Euro"){
            result = amount * 0.89
            setConvertedvalue(result)
        }
        else if(from=="INR"&&to=="Euro"){
            result =amount*0.012
            setConvertedvalue(result)
        }
        else if(from =="INR" && to =="USD"){
            result =amount * 0.013
            setConvertedvalue(result)
        }
        else if(from=="Euro" && to=="USD"){
            result =amount * 1.12
            setConvertedvalue(result)
        }
      
    }

    return (
        <View style={styles.container}>
              <Text style={styles.displaytext}>Currency Converter</Text>
            <Text style={styles.displaytext}>Enter the Amount to convert the Currency</Text>
            <View style={{margin:'2%'}}>
            <TextInput
                placeholder='Enter Amount'
                onChangeText={amount => setAmount(amount)}
                defaultValue={amount}

            />
        </View>
            <Picker
                selectedValue={fromcurrency}
                onValueChange={(itemValue, itemIndex) =>
                    setFromCurrency(itemValue)
                }>
                <Picker.Item label="Select From" value="select" />
                <Picker.Item label="IND" value={"INR"} />
                <Picker.Item label="USA" value={"USD"} />
                <Picker.Item label="EURO" value={"Euro"} />
            </Picker>
            <Picker
                selectedValue={tocurrency}
                onValueChange={(itemValue, itemIndex) =>
                    setToCurrency(itemValue)
                }>
                <Picker.Item label="Select To" value="select" />
                <Picker.Item label="IND" value={"INR"} />
                <Picker.Item label="USA" value={"USD"} />
                <Picker.Item label="EURO" value={"Euro"} />
            </Picker>
            <View style={{ justifyContent:'center',alignContent:'center',alignItems:'center',marginTop:'2%' }}>
                <Button
                    title={"Convert"}
                    onPress={() => {
                        convertCurrencies(amount,fromcurrency,tocurrency)
                    }}
                    containerStyle={{width:'60%',}}
                />
            </View>
            <Text style={styles.convertedtext}>Converted values : {convertedvalue}</Text>

        </View>
    )

}
const styles=StyleSheet.create({
    convertedtext:{marginLeft:'2%',color:'purple',marginTop:'2%' ,fontSize:17,fontWeight:'bold',textAlign:'center'},
    container:{ marginTop: 20 ,padding:'3%'},
    displaytext:{marginLeft:'2%',color:'skyblue',marginTop:'2%' ,fontSize:17,fontWeight:'200',textAlign:'center'}
})
export default CurrencyConverter;