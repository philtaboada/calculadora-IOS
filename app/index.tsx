import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatorApp = () => {


  const {
    formula,
    buildNumber,
    clean,
    toggleSign,
    deleteLast
  } = useCalculator()

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant='h1'>{formula}</ThemeText>
        <ThemeText variant='h2'>250</ThemeText>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton color={Colors.lightGray} onPress={clean} blackText label='C' />
        <CalculatorButton color={Colors.lightGray} onPress={toggleSign} blackText label='+/-' />
        <CalculatorButton color={Colors.lightGray} onPress={deleteLast} blackText label='del' />
        <CalculatorButton color={Colors.orange} onPress={()=> buildNumber('÷')}  label='÷' />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton color={Colors.darkGray} onPress={()=> buildNumber('7')} label='7' />
        <CalculatorButton color={Colors.darkGray} onPress={()=> buildNumber('8')} label='8' />
        <CalculatorButton color={Colors.darkGray} onPress={()=> buildNumber('9')} label='9' />
        <CalculatorButton color={Colors.orange} onPress={()=> buildNumber('x')}  label='X' />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton color={Colors.darkGray} onPress={()=> buildNumber('4')} label='4' />
        <CalculatorButton color={Colors.darkGray} onPress={()=> buildNumber('5')} label='5' />
        <CalculatorButton color={Colors.darkGray} onPress={()=> buildNumber('6')} label='6' />
        <CalculatorButton color={Colors.orange} onPress={()=> buildNumber('-')}  label='-' />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton color={Colors.darkGray} onPress={()=> buildNumber('1')} label='1' />
        <CalculatorButton color={Colors.darkGray} onPress={()=> buildNumber('2')} label='2' />
        <CalculatorButton color={Colors.darkGray} onPress={()=> buildNumber('3')} label='3' />
        <CalculatorButton color={Colors.orange} onPress={()=> buildNumber('=')}  label='=' />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton doubleSize color={Colors.darkGray} onPress={()=> buildNumber('0')} label='0' />
        <CalculatorButton color={Colors.darkGray} onPress={()=> buildNumber('.')} label='.' />
        <CalculatorButton color={Colors.orange} onPress={()=> buildNumber('=')}  label='=' />
      </View>
      

    </View>

  )
}

export default CalculatorApp