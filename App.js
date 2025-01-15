import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('RUB');
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        setExchangeRates(data.rates);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch exchange rates. Please try again later.');
      }
    };

    fetchExchangeRates();
  }, []);

  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      Alert.alert('Invalid Input', 'Please enter a valid number.');
      return;
    }

    if (!exchangeRates[toCurrency] || !exchangeRates[fromCurrency]) {
      Alert.alert('Error', 'Invalid currency selection.');
      return;
    }

    const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    const result = (parseFloat(amount) * rate).toFixed(2);
    setConvertedAmount(`${result} ${toCurrency}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Конвертер валют</Text>

      <TextInput
        style={styles.input}
        placeholder="Введите сумму"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TextInput
        style={styles.input}
        placeholder="Валюта, из которой переводим (например, USD)"
        value={fromCurrency}
        onChangeText={setFromCurrency}
      />

      <TextInput
        style={styles.input}
        placeholder="Валюта, в которую переводим (например, RUB)"
        value={toCurrency}
        onChangeText={setToCurrency}
      />

      <Button title="Перевести" onPress={handleConvert} />

      {convertedAmount ? (
        <Text style={styles.result}>Итого: {convertedAmount}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CurrencyConverter;
