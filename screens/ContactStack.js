import React, {useState} from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { List, Title } from 'react-native-paper';
import {createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const contactsData = [
  {
    id: 1,
    name: "Charlie McCharles",
    title: "CEO",
    company: "Baskets International LLC",
    pic: "https://randomuser.me/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Desiree Dee",
    title: "CMO",
    company: "Busket Inc",
    pic: "https://randomuser.me/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "Adam ellis",
    title: "CTO",
    company: "Baskets of Biskits",
    pic: "https://randomuser.me/portraits/men/2.jpg",
  },
  {
    id:4,
    name: "Papaya Tan",
    title: "CMO",
    company: "Papayas Inc",
    pic: "https://randomuser.me/portraits/men/20.jpg",
  },
];

export default function ContactStack() {
  let [contactId, setContactId] = useState(null);

  function handleListItemPressV2(item, navigation){
    console.log(`id=${item.id}, name=${item.name}`);
    setContactId(item.id);
    // console.log({contactId}); // This gives an erroneous result because setContactId() may not have finished executing yet.
    navigation.navigate("Details");
  }
  
    function handleListItemPressV1(item){
    console.log(`name=${item.name}`);
    alert(item.name);
  }

  function ContactScreen({navigation}) {
    return(
      <View style={styles.container}>
        <Title style={styles.title}> Contacts </Title>
        <View style={styles.list}>
          {contactsData.map((item) => {
            return (
              <List.Item
                title={item.name}
                description={item.company, item.title}
                left={props =>
                  <Image {...props} style={styles.icon} source={{ uri: item.pic }} />}
                onPress={() => handleListItemPressV2(item, navigation)}
              />)
          })}
        </View>
      </View>
    );
  }

  function DetailsScreen({item}) {
    console.log({contactId});
    return(
      <View style={styles.container}>
        <Title style={styles.title}>Details</Title>
        <View style={styles.list}>
              <List.Item
                title={contactsData[contactId - 1].name}
                description={renderDetails(item)}
                left={props =>
                  <Image {...props} style={styles.icon} source={{ uri: contactsData[contactId - 1].pic }} />}
              />
        </View>
      </View>
    );
  }

  function renderDetails(){
    return(
      <View>
        <Text>Id: {contactsData[contactId - 1].id}</Text>
        <Text>Title: {contactsData[contactId - 1].title}</Text>
        <Text>Company: {contactsData[contactId - 1].company}</Text>
      </View>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts" component={ContactScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20, 
  },
  list: {
    marginTop: 20,
    marginLeft: 10, 
    marginRight: 10
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 50
  }
})