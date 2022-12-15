import React, {useEffect, useRef, useState} from 'react';
import 'react-native-gesture-handler';
import {
  Button,
  DrawerLayoutAndroid,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Fontisto';
import IconA from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {Image_} from '../../components/Image_picker';
import screen, {images} from '../../constants/constants';
import {LineChart} from 'react-native-chart-kit';

const Dashboard = ({...props}) => {
  const Transaction = [
    {
      id: 0,
      arrow: 'right',
      ETH: 3.0002313,
      date: '12 / 1 / 2020',
      to: 'ipo1-askj-19-28201-983-jjj-ds8-9as-u9ads',
      from: 'z9-8-x9-qws-9b-3qk-jj-98cx-uz-09-i9z-x-cz',
    },
    {
      id: 1,
      arrow: 'left',
      ETH: 20.0002313,
      date: '12 / 9 / 2020',
      to: 'ipo1-askj-19-28201-983-jjj-ds8-9as-u9ads',
      from: 'z9-8-x9-qws-9b-3qk-jj-98cx-uz-09-i9z-x-cz',
    },

    {
      id: 2,
      arrow: 'right',
      ETH: 2.0002313,
      date: '12 / 3 / 2020',
      to: 'ipo1-askj-19-28201-983-jjj-ds8-9as-u9ads',
      from: 'z9-8-x9-qws-9b-3qk-jj-98cx-uz-09-i9z-x-cz',
    },
    {
      id: 3,
      arrow: 'right',
      ETH: 1.0002313,
      date: ' 12 / 12 / 2020',
      to: 'ipo1-askj-19-28201-983-jjj-ds8-9as-u9ads',
      from: 'z9-8-x9-qws-9b-3qk-jj-98cx-uz-09-i9z-x-cz',
    },
    {
      id: 4,
      arrow: 'left',
      ETH: 5.0002313,
      date: '12 / 4/ 2020',
      to: 'ipo1-askj-19-28201-983-jjj-ds8-9as-u9ads',
      from: 'z9-8-x9-qws-9b-3qk-jj-98cx-uz-09-i9z-x-cz',
    },
    {
      id: 5,
      arrow: 'right',
      ETH: 1.0002313,
      date: ' 12 / 2 / 2020',
      to: 'ipo1-askj-19-28201-983-jjj-ds8-9as-u9ads',
      from: 'z9-8-x9-qws-9b-3qk-jj-98cx-uz-09-i9z-x-cz',
    },
    {
      id: 6,
      arrow: 'right',
      ETH: 10.0002313,
      date: '12 / 1 / 2020',
      to: 'ipo1-askj-19-28201-983-jjj-ds8-9as-u9ads',
      from: 'z9-8-x9-qws-9b-3qk-jj-98cx-uz-09-i9z-x-cz',
    },
  ];
  const drawer = useRef(null);
  const [image, setImage] = React.useState({value: null, height: 0});
  const [isheading, setishading] = useState('');
  let Yourbalance = Math.random() * 30;
  return (
    <LinearGradient
      colors={['purple', 'grey', '#602f9c']}
      style={styles.linearGradient}>
      <View style={{height: '40%', width: '100%'}}>
        <View
          style={{
            height: '25%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <IconF
            onPress={() => {
              props?.navigation?.openDrawer();
            }}
            name="nav-icon-list-a"
            size={screen.width / 17}
            color="white"
          />
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
                fontFamily: screen.fontfamily.rubik,
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
            style={{height: '90%', width: '96%', padding: 10, borderRadius: 10}}
            colors={['purple', 'grey', 'purple']}>
            <View
              style={{
                height: '30%',
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: screen.width / 15,
                  color: 'white',
                  fontWeight: 'bold',
                  letterSpacing: 3,
                  textAlign: 'center',
                }}>
                Deposit
                <Icon
                  name="add-circle"
                  size={screen.width / 17}
                  color="white"
                />
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
              <View
                style={{
                  height: '100%',
                  width: '43%',
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    fontSize: screen.width / 24,
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  {' '}
                  Expense Chart
                </Text>
                <IconA name="areachart" size={screen.width / 6} color="white" />
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
                  borderRadius: 5,
                  left: screen.width / 54,
                }}
              />
            </View>
          </LinearGradient>
        </View>
      </View>
     {isheading!==""? <View style={{height: 50,  justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: screen.width / 23,
            color: 'white',
            fontFamily: screen.fontfamily.rubik,
            width: '60%',
            borderRadius: 5,
            borderWidth: isheading !== '' ? 1 : 0,
            borderColor: 'purple',
            textAlign: 'center',
            borderStyle: 'dashed',
          }}>
          {isheading}
        </Text>
      </View>
      :null}
      <View
        style={{
          height: isheading==""?"60%":'52.5%',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <FlatList
          onScroll={event => {
            console.log(
              'event.nativeEvent.contentOffset.y',
              event.nativeEvent.contentOffset.y,
            );
            if (
              event.nativeEvent.contentOffset.y > 30 &&
              event.nativeEvent.contentOffset.y < 329
            ) {
              setishading('Etherium stock market');
            } else if (event.nativeEvent.contentOffset.y > 329) {
              setishading('Recent Transactions');
            } else if(event.nativeEvent.contentOffset.y <10){
              setishading('');
            }
          }}
          style={{height: screen.height / 2, width: '100%'}}
          ListHeaderComponent={
            <>
              <View
                style={{
                  height: screen.height / 2.5,
                  justifyContent: 'space-around',
                }}>
                <Text
                  style={{
                    fontSize: screen.width / 23,
                    color: 'white',
                    fontFamily: screen.fontfamily.rubik,
                    width: '60%',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: 'purple',
                    textAlign: 'center',
                    borderStyle: 'dashed',
                  }}>
                  Etherium stock market
                </Text>
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
                    labelColor: (opacity = 1) =>
                      `rgba(255, 255, 255, ${opacity})`,

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
                <Text
                  style={{
                    fontSize: screen.width / 23,
                    color: 'white',
                    fontFamily: screen.fontfamily.rubik,
                    width: '60%',
                    borderRadius: 5,
                    borderColor: 'white',
                    textAlign: 'center',
                    borderStyle: 'dotted',
                    position: 'relative',
                  }}>
                  Recent Transactions
                </Text>
              </View>
            </>
          }
          ListFooterComponent={<View style={{height: 0}}></View>}
          data={Transaction}
          keyExtractor={item => {
            item.id;
          }}
          renderItem={({item}) => (
            <LinearGradient
              colors={['lightgrey', item.arrow == 'right' ? 'red' : 'green']}
              key={item.id}
              style={{
                height: screen.height / 9,
                justifyContent: 'space-around',
                margin: 10,
                borderRadius:20
              }}>
              <View
                style={{
                  height: '40%',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Text
                  style={{
                    fontFamily: screen.fontfamily.mouse,
                    color: "black",
                    fontSize: screen.width / 24,
                    maxWidth: 130,
                    opacity:0.7
                  }}>
                  {item.from}
                </Text>
                <Icon
                  name={
                    item.arrow == 'right'
                      ? 'arrow-forward-circle-sharp'
                      : 'arrow-back-circle'
                  }
                  color={item.arrow == 'right' ? 'red' : 'green'}
                  size={40}
                />
                <Text
                  style={{
                    fontFamily: screen.fontfamily.mouse,
                    color: 'white',
                    fontSize: screen.width / 24,
                    maxWidth: 130,
                    color:"black",
                    opacity:0.7
                  }}>
                  {item.to}
                </Text>
              </View>
              <View
                style={{
                  height: '40%',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    width: 90,
                    fontFamily: screen.fontfamily.mouse,
                    fontSize: screen.width / 13,
                  }}>
                  {item.arrow == 'right' ? 'Sent' : 'Recived'}
                </Text>
                <Text
                  style={{
                    fontFamily: screen.fontfamily.mouse,
                    fontSize: screen.width / 20,
                    color: 'white',
                  }}>
                  ETH/{item.ETH}
                </Text>
                <Text style={{color: 'white',fontFamily:screen.fontfamily.mouse,fontSize:screen.width/20}}>{item.date}</Text>
              </View>
            </LinearGradient>
          )}
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
