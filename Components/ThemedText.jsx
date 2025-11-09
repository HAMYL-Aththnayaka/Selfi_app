import { Text, useColorScheme } from 'react-native';
import { Colors } from '../Constants/Colors.js';


const ThemedText =({style ,title=false.valueOf,...props})=>{

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme];

    const textColor = title ? theme.title:theme.text
    return(
        <Text
        style={[{
            color:textColor,
        },style]}
        {...props}
        ></Text>
    );
}
export default ThemedText