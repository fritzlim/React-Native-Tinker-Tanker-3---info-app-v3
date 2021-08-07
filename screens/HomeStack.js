import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { List, Card, Paragraph, Title } from 'react-native-paper';
import {createStackNavigator } from '@react-navigation/stack';

const globals = require('../data/globals.js').default;

const Stack = createStackNavigator();

// const dataArray = [
//  {
//    title: "What is this?",
//    content: "Exactly what the title says. A basket throwing competition!",
//  },
//  {
//    title: "Who is this by?",
//    content:
//      "The International Society of Basket Throwers (ISBT). We love throwing baskets.",
//  },
//  {
//    title: "Why is this?",
//    content: "Because baskets! Wheee!",
//  },
// ];

const styles = StyleSheet.create({
  title: {
    fontSize: 30, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  card: {
    marginTop: 20, 
    marginLeft: 15, 
    marginRight: 15,
  }
});

// let constants = [];
// constants['titleNumberOfLines'] = 5;

function HomeScreen() {
return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>
          Basket Throwing Tournament {new Date().getFullYear()}
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Welcome</Title>
            <Paragraph>Thank you for downloadiing this app.</Paragraph>
            <Paragraph></Paragraph>
            <Paragraph>Here, you'll find all kinds of information about our upcoming event. It'll be great!</Paragraph>
          </Card.Content>
          <Card.Cover style={{marginTop: 10, height: 200}} resizeMode="stretch" source={require('../images/fladis-basket-seagrass__0713073_pe729177_s5.png')} />
        </Card>

        <List.Section title="Frequently Asked Questions">
          <List.Accordion
            title={globals.dataArray[0].title}>
            <List.Item title={globals.dataArray[0].content} titleNumberOfLines={globals.constants['titleNumberOfLines']}/>
          </List.Accordion>
          <List.Accordion
            title={globals.dataArray[1].title}>
            <List.Item title={globals.dataArray[1].content} titleNumberOfLines={globals.constants['titleNumberOfLines']} />
          </List.Accordion>
          <List.Accordion
            title={globals.dataArray[2].title}>
            <List.Item title={globals.dataArray[2].content} titleNumberOfLines={globals.constants['titleNumberOfLines']} />
          </List.Accordion>
        </List.Section>

      </ScrollView>
    </SafeAreaView>
  );
}

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={HomeScreen} />
    </Stack.Navigator>
  )
}