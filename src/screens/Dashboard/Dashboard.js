import React, {useEffect, useRef, useState} from 'react';
import 'react-native-gesture-handler';
import {
  Button,
  DrawerLayoutAndroid,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Fontisto';
import IconA from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import {Image_} from '../../components/Image_picker';
import screen, {images} from '../../constants/constants';
import {LineChart} from 'react-native-chart-kit';

const Dashboard = ({...props}) => {
  const Transaction=[
    {
    
    }
  ]
  const drawer = useRef(null);
  const [image, setImage] = React.useState({value: null, height: 0});
  let Yourbalance = Math.random() * 30;
  return (
    <LinearGradient
      colors={['purple', 'grey', '#602f9c']}
      style={styles.linearGradient}>
      <View style={{height: '40%', width: '100%',}}>
        <View
          style={{
            height: '25%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <IconF onPress={()=>{props?.navigation?.openDrawer()}} name="nav-icon-list-a" size={screen.width/17} color="white" />
          <View
            style={{
              height: '90.5%',
              width: '34%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: screen.width / 22,
                letterSpacing: 4,
                fontFamily:screen.fontfamily.rubik
              }}>
              Arfin
            </Text>
            <Image
              source={Image_ !== null ? Image_ : images.add_profile}
              resizeMode={'center'}
              style={{height: '100%', width: '49.5%', borderRadius: 20}}
            />
          </View>
        </View>
        <View
          style={{
            height: '70%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <LinearGradient
            style={{height: '90%', width: '96%',padding:10,borderRadius:10}}
            colors={['purple', 'grey', 'purple']}>
            <View style={{height: '30%', width: '100%',justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
              <Text
                style={{
                  fontSize: screen.width / 15,
                  color: 'white',
                  fontWeight:"bold",
                  letterSpacing:3,
                  textAlign:"center"
}}>
              Deposit
    <Icon name='add-circle' size={screen.width/17} color="white"/>
            
                </Text>
                <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: screen.width / 19,
                  color: 'white',
                }}>
                  ETH/{Yourbalance.toFixed(4)}
                </Text>
            </View>
            <View
              style={{
                height: '70%',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
                <View style={{height:"100%",width:"43%",justifyContent:"flex-end"}}>
                   <Text style={{fontSize:screen.width/24,color:"white",fontWeight:"bold"}}> Expense Chart</Text>
                      <IconA name='areachart' size={screen.width/6} color='white'/>
                </View>
              <LineChart
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                  ],
                  datasets: [
                    {
                      data: [
                        Math.random() * 30,
                        Math.random() * 30,
                        Math.random() * 30,
                        Math.random() * 30,
                        Math.random() * 30,
                        Yourbalance,
                      ],
                    },
                  ],
                }}
                width={screen.width / 2.03} // from react-native
                height={screen.height / 7}
                yAxisLabel="ETH"
                // yAxisSuffix="k"
                yAxisInterval={1} // optio0.1al, defaults to 1
                chartConfig={{
                  backgroundGradientFrom: 'purple',
                  backgroundGradientTo: 'pink',
                  decimalPlaces: 1, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,

                  propsForDots: {
                    r: '3',
                    strokeWidth: '2',
                    stroke: 'purple',
                  },
                }}
                bezier
                style={{
                  padding: 0,
                  margin: 0,
                  borderRadius:5,
                  left:screen.width/54
                }}
              />
            </View>
          </LinearGradient>
        </View>
      </View>
      <View style={{ height: '43%', width: '100%',justifyContent:"space-between",}}>
        <Text
          style={{
            fontSize: screen.width / 23,
            color: 'white',
            backgroundColor:"purple",
            fontFamily:screen.fontfamily.rubik,
            width:"50%",
            borderRadius:5,
            borderWidth:1,
            borderColor:"white",
            textAlign:"center"
          }}>
          Etherium stock market
        </Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={screen.width / 1.03} // from react-native
          height={screen.height / 3.5}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optio0.1al, defaults to 1
          chartConfig={{
            backgroundGradientFrom: 'purple',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

            propsForDots: {
              r: '7',
              strokeWidth: '3',
              stroke: 'purple',
            },
          }}
          bezier
          style={{
            padding: 0,
            margin: 0,
          }}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  InDrawer: {
    padding: 13,
    // backgroundColor: 'skyblue',
    alignItems: 'center',
    margin: 5,
  },
  linearGradient: {
    flex: 1,
    padding: 5,
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5
  },
});
export default Dashboard;
