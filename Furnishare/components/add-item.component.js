import React from "react";
import {
  Button,
} from "@ui-kitten/components";
import { StyleSheet,  View,  Image } from 'react-native';
import { ButtonGroup } from "@ui-kitten/components";
import { Input } from "@ui-kitten/components";
import { Datepicker } from "@ui-kitten/components";
import { Icon } from "@ui-kitten/components";

const CalendarIcon = (props) => (
    <Icon {...props} name='calendar'/>
);

const ClothingIcon = (props) => {
    return (
      <Image
        {...props}
        source={require("../assets/shirt.png")}
        style={{
          ...props.style,
          tintColor: "inherit",
          height: props.style.height + 5,
          width: props.style.width + 5,
          marginHorizontal: props.style.marginHorizontal - 2,
        }}
      />
    );
  };

const FurnitureIcon = (props) => {
    return (
      <Image
        {...props}
        source={require("../assets/chair.png")}
        style={{
          ...props.style,
          tintColor: "inherit",
          height: props.style.height + 5,
          width: props.style.width + 5,
          marginHorizontal: props.style.marginHorizontal - 2,
        }}
      />
    );
};

const TechnologyIcon = (props) => {
    return (
      <Image
        {...props}
        source={require("../assets/laptop.png")}
        style={{
          ...props.style,
          tintColor: "inherit",
          height: props.style.height + 5,
          width: props.style.width + 5,
          marginHorizontal: props.style.marginHorizontal - 2,
        }}
      />
    );
};

const StarIcon = (props) => (
    <Icon {...props} name='star'/>
  );

const useInputState = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
  };

export const AddItemComponent = ({navigation, route}) => {
    const [date, setDate] = React.useState(new Date());
    const [color, setColor] = React.useState('Press any button');
    const multilineInputState = useInputState();
    console.log("route",route)
  return (
    <View style={styles.container}>
         <ButtonGroup style={styles.buttonGroup}>
            <Button  accessoryLeft={FurnitureIcon} onPress={() => setColor('Left button pressed')}>Furniture</Button>
            <Button accessoryLeft={ClothingIcon} onPress={() => setColor('Middle button pressed')}>Clothing</Button>
            <Button accessoryLeft={TechnologyIcon}  onPress={() => setColor('Right button pressed')}>Tech</Button>
         </ButtonGroup>

        <Button
            style={{
            position: "absolute",
            bottom: 50,
            borderRadius: 15,
            }}
            // onClick={()=>{AddDescriptionComponent}} 
        >
            Select
        </Button>
        <Image source={(require('../assets/add-item.png'))} style={styles.container}/>
        <Input
       
            multiline={true}
            textStyle={{ minHeight: 64 }}
           
            placeholder='item description'
            {...multilineInputState}
            
        />

     <Datepicker
        label='Label'
        caption='Caption'
        placeholder='Pick Date'
        date={date}
        onSelect={nextDate => setDate(nextDate)}
        accessoryRight={CalendarIcon}
      />


    <ButtonGroup  appearance='outline' status='success'>
      <Button accessoryLeft={StarIcon}/>
      <Button accessoryLeft={StarIcon}/>
      <Button accessoryLeft={StarIcon}/>
    </ButtonGroup>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'transparent',

    },
});