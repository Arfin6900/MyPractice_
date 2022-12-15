import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
  Image,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-vector-icons/Ionicons';
import screen, {assets} from '../../../../constants/constants';
// You can import from local files

// or any pure javascript modules available in npm

export default function Ludo_UI() {
  const [modal, setmodal] = React.useState({open: false, Main_Id: 0});
  const [num, setnum] = React.useState(0);
  console.log("num",num)
  const color =
    modal?.Main_Id == 0
      ? 'yellow'
      : modal?.Main_Id == 1
      ? 'red'
      : modal.Main_Id == 2
      ? 'green'
      : modal.Main_Id == 3
      ? 'blue'
      : '';
  const [index, setindex] = React.useState({
    player1: [0, 0, 0, 0],
    player2: [0, 0, 0, 0],
    player3: [0, 0, 0, 0],
    player4: [0, 0, 0, 0],
  });
  const [isopen, setisopen] = React.useState({
    open: [{player1: false}],
    open: [{player2: false}],
    open: [{player3: false}],
    open: [{player4: false}],
  });
  const boxesarr = [
    {
      id: {id: index.player1[0], on: false},
      id2: index.player1[1],
      id3: index.player1[2],
      id4: index.player1[3],
      Main_Id: 0,
      color: 'yellow',
      justifyContent: 'flex-end',
      player: [
        {
          places: [
            {
              id: 7,
              place: 1,
            },
            {
              id: 6,
              place: 2,
            },
            {
              id: 5,
              place: 3,
            },
            {
              id: 4,
              place: 4,
            },
            {
              id: 3,
              place: 5,
            },
            {
              id: 2,
              place: 6,
            },
            {
              id: 1,
              place: 7,
            },
            {
              id: 8,
              place: 8,
            },
            {
              id: 16,
              place: 9,
            },
            {
              id: 17,
              place: 10,
            },
            {
              id: 18,
              place: 11,
            },
            {id: 19, place: 12},
            {id: 20, place: 13},
            {id: 21, place: 14},
            {id: 9, place: 15},
            {id: 10, place: 16},
            {id: 11, place: 17},
            {id: 12, place: 18},
            {id: 13, place: 19},
            {id: 14, place: 20},
            {id: 15, place: 21},
          ],
          got: [{got: 1, turn: 0}],
        },
      ],
      rotate: '180deg',
      top: 0,
      right: Dimensions.get('screen').width / 10.4,
      alingment: 'flex-end',
      pathcolor: 'white',
      pathrotate: '180deg',
    },
    {
      id: {id: index.player2[0], on: false},
      id2: index.player2[1],
      id3: index.player2[2],
      id4: index.player2[3],
      Main_Id: 1,
      color: 'red',
      player: [
        {
          places: [
            {
              id: 7,
              place: 1,
            },
            {
              id: 6,
              place: 2,
            },
            {
              id: 5,
              place: 3,
            },
            {
              id: 4,
              place: 4,
            },
            {
              id: 3,
              place: 5,
            },
            {
              id: 2,
              place: 6,
            },
            {
              id: 1,
              place: 7,
            },
            {
              id: 8,
              place: 8,
            },
            {
              id: 16,
              place: 9,
            },
            {
              id: 17,
              place: 10,
            },
            {
              id: 18,
              place: 11,
            },
            {id: 19, place: 12},
            {id: 20, place: 13},
            {id: 21, place: 14},
            {id: 9, place: 15},
            {id: 10, place: 16},
            {id: 11, place: 17},
            {id: 12, place: 18},
            {id: 13, place: 19},
            {id: 14, place: 20},
            {id: 15, place: 21},
          ],
          got: [{got: 1, turn: 0}],
        },
      ],
      justifyContent: 'flex-end',
      rotate: '90deg',
      top: Dimensions.get('screen').width / 11.1,
      right: 0,
      alingment: 'flex-start',
      pathcolor: 'white',
      pathrotate: '180deg',
    },
    {
      id: {id: index.player3[0], on: false},
      id2: index.player3[1],
      id3: index.player3[2],
      id4: index.player3[3],
      Main_Id: 2,
      color: 'green',
      player: [
        {
          places: [
            {
              id: 7,
              place: 1,
            },
            {
              id: 6,
              place: 2,
            },
            {
              id: 5,
              place: 3,
            },
            {
              id: 4,
              place: 4,
            },
            {
              id: 3,
              place: 5,
            },
            {
              id: 2,
              place: 6,
            },
            {
              id: 1,
              place: 7,
            },
            {
              id: 8,
              place: 8,
            },
            {
              id: 16,
              place: 9,
            },
            {
              id: 17,
              place: 10,
            },
            {
              id: 18,
              place: 11,
            },
            {id: 19, place: 12},
            {id: 20, place: 13},
            {id: 21, place: 14},
            {id: 9, place: 15},
            {id: 10, place: 16},
            {id: 11, place: 17},
            {id: 12, place: 18},
            {id: 13, place: 19},
            {id: 14, place: 20},
            {id: 15, place: 21},
          ],
          got: [{got: 1, turn: 0}],
        },
      ],
      rotate: '-90deg',
      top: Dimensions.get('screen').width / 11.1,
      right: -Dimensions.get('screen').width / 10.1,
      alingment: 'flex-end',
      pathcolor: 'white',
      pathrotate: '180deg',
    },
    {
      id: {id: index.player4[0], on: false},
      id2: index.player4[1],
      id3: index.player4[2],
      id4: index.player4[3],
      Main_Id: 3,
      color: 'blue',
      player: [
        {
          places: [
            {
              id: 7,
              place: 1,
            },
            {
              id: 6,
              place: 2,
            },
            {
              id: 5,
              place: 3,
            },
            {
              id: 4,
              place: 4,
            },
            {
              id: 3,
              place: 5,
            },
            {
              id: 2,
              place: 6,
            },
            {
              id: 1,
              place: 7,
            },
            {
              id: 8,
              place: 8,
            },
            {
              id: 16,
              place: 9,
            },
            {
              id: 17,
              place: 10,
            },
            {
              id: 18,
              place: 11,
            },
            {id: 19, place: 12},
            {id: 20, place: 13},
            {id: 21, place: 14},
            {id: 9, place: 15},
            {id: 10, place: 16},
            {id: 11, place: 17},
            {id: 12, place: 18},
            {id: 13, place: 19},
            {id: 14, place: 20},
            {id: 15, place: 21},
          ],
          got: [{got: 1, turn: 0}],
          // got: 'got_1',
        },
      ],
      justifyContent: 'flex-start',
      rotate: '0deg',
      top: Dimensions.get('screen').width / 5.41,
      right: -Dimensions.get('screen').width / 5.2,
      alingment: 'flex-start',
      pathcolor: 'white',
      pathrotate: '180deg',
    },
  ];

  const places = [
    {
      id: 1,
      place: 1,
    },
    {
      id: 1,
      place: 2,
    },
    {
      id: 1,
      place: 3,
    },
    {
      id: 1,
      place: 4,
    },
    {
      id: 1,
      place: 5,
    },
    {
      id: 1,
      place: 6,
    },
    {
      id: 1,
      place: 7,
    },
    {
      id: 1,
      place: 8,
    },
    {
      id: 1,
      place: 9,
    },
    {
      id: 1,
      place: 10,
    },
    {
      id: 1,
      place: 11,
    },
    {id: 1, place: 12},
    {id: 1, place: 13},
    {id: 1, place: 14},
    {id: 1, place: 15},
    {id: 1, place: 16},
    {id: 1, place: 17},
    {id: 1, place: 18},
    {id: 1, place: 19},
    {id: 1, place: 20},
    {id: 1, place: 21},
  ];
  const player = [
    {
      places: [
        {
          id: 1,
          place: 1,
        },
        {
          id: 1,
          place: 2,
        },
        {
          id: 1,
          place: 3,
        },
        {
          id: 1,
          place: 4,
        },
        {
          id: 1,
          place: 5,
        },
        {
          id: 1,
          place: 6,
        },
        {id: 1, place: 7},
        {id: 1, place: 8},
        {id: 1, place: 9},
        {id: 1, place: 10},
        {id: 1, place: 11},
        {id: 1, place: 12},
        {id: 1, place: 13},
        {id: 1, place: 14},
        {id: 1, place: 15},
        {id: 1, place: 16},
        {id: 1, place: 17},
        {id: 1, place: 18},
        {id: 1, place: 19},
        {id: 1, place: 20},
        {id: 1, place: 21},
      ],
      got: [{got: 1, turn: 0}],
      // got: 'got_1',
    },
    {
      places: [
        {
          id: 1,
          place: 1,
        },
        {
          id: 1,
          place: 2,
        },
        {
          id: 1,
          place: 3,
        },
        {
          id: 1,
          place: 4,
        },
        {
          id: 1,
          place: 5,
        },
        {
          id: 1,
          place: 6,
        },
        {id: 1, place: 7},
        {id: 1, place: 8},
        {id: 1, place: 9},
        {id: 1, place: 10},
        {id: 1, place: 11},
        {id: 1, place: 12},
        {id: 1, place: 13},
        {id: 1, place: 14},
        {id: 1, place: 15},
        {id: 1, place: 16},
        {id: 1, place: 17},
        {id: 1, place: 18},
        {id: 1, place: 19},
        {id: 1, place: 20},
        {id: 1, place: 21},
      ],
      got: [{got: 1, turn: 0}],
      // got: 'got_1',
    },
    {
      places: [
        {
          id: 1,
          place: 1,
        },
        {
          id: 1,
          place: 2,
        },
        {
          id: 1,
          place: 3,
        },
        {
          id: 1,
          place: 4,
        },
        {
          id: 1,
          place: 5,
        },
        {
          id: 1,
          place: 6,
        },
        {id: 1, place: 7},
        {id: 1, place: 8},
        {id: 1, place: 9},
        {id: 1, place: 10},
        {id: 1, place: 11},
        {id: 1, place: 12},
        {id: 1, place: 13},
        {id: 1, place: 14},
        {id: 1, place: 15},
        {id: 1, place: 16},
        {id: 1, place: 17},
        {id: 1, place: 18},
        {id: 1, place: 19},
        {id: 1, place: 20},
        {id: 1, place: 21},
      ],
      got: [{got: 1, turn: 0}],
      // got: 'got_1',
    },
    {
      places: [
        {
          id: 1,
          place: 1,
        },
        {
          id: 1,
          place: 2,
        },
        {
          id: 1,
          place: 3,
        },
        {
          id: 1,
          place: 4,
        },
        {
          id: 1,
          place: 5,
        },
        {
          id: 1,
          place: 6,
        },
        {id: 1, place: 7},
        {id: 1, place: 8},
        {id: 1, place: 9},
        {id: 1, place: 10},
        {id: 1, place: 11},
        {id: 1, place: 12},
        {id: 1, place: 13},
        {id: 1, place: 14},
        {id: 1, place: 15},
        {id: 1, place: 16},
        {id: 1, place: 17},
        {id: 1, place: 18},
        {id: 1, place: 19},
        {id: 1, place: 20},
        {id: 1, place: 21},
      ],
      got: [{got: 1, turn: 0}],
      // got: 'got_1',
    },
  ];
  const [turns, setturns] = React.useState(boxesarr);

  // React.useEffect(()=>{
  //   for (let index = 0; index < boxesarr.length; index++) {
  //     setturns(boxesarr[index])
  //   }
  // },[])
  console.log('I am ID of ' + boxesarr[0].Main_Id, boxesarr[3].id);

  return (
    <LinearGradient colors={[color,"white",color]} style={styles.container}>
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            flexDirection: 'row',
            borderWidth: color == 'yellow' ? 6 : 1,
          }}
          onPress={() => {
            setmodal({open: false, Main_Id: 0});
          }}>
          <Text style={{color: 'black', fontSize: 30}}> yellow</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            borderWidth: color == 'green' ? 6 : 1,
          }}
          onPress={() => {
            setmodal({open: false, Main_Id: 2});
          }}>
          <Text style={{color: 'white', fontSize: 30}}> green </Text>
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          height: Dimensions.get('screen').width / 1.1,
          width: Dimensions.get('screen').width / 1.1,
          // borderWidth: 2,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          // alignContent: 'center',
          // transform:[{rotate:"45deg"}]

          // position:"absolute"
          // marginHorizontal:-30
          // alignItems:"flex-end"
          // flexDirection:"row"
          // flexBasis:1
          // flexGrow:
          // flexShrink:2
        }}>
        <View
          style={{
            height: Dimensions.get('screen').width / 1.1,
            width: Dimensions.get('screen').width / 1.08,
            // borderWidth: 2,
            flexWrap: 'wrap',
            // justifyContent: "space-between",
            alignContent: 'center',
            borderRadius: 40,
            // transform:[{rotate:"90deg"}]

            // position:"absolute"
            // marginHorizontal:-30
            // alignItems:"flex-end"
            // flexDirection:"row"
            // flexBasis:1
            // flexGrow:
            // flexShrink:2
          }}>
          {Object.values(boxesarr).map(val => {
            console.log('B   o   x   e   s           a   r   r   ', val.player);
            return (
              <>
                <View
                  style={{
                    borderWidth: 3,
                    height: '40%',
                    width: '60%',
                    backgroundColor: val.color,
                    // alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: [{rotate: val.rotate}],
                    top: val.top,
                    marginStart: val.right,
                    flexDirection: 'row',
                    shadowOpacity: 3,
                    shadowColor: 'black',
                    shadowOpacity: 0.26,
                    shadowOffset: {width: 4, height: 2},
                    shadowRadius: 10,
                    elevation: 5,
                    //  borderTopStartRadius:60
                    // backgroundColor: 'white',
                    // left:
                    // marginLeft:val.right,
                    // marginVertical:-
                    // flexWrap:"wrap"
                  }}>
                  <View
                    style={{
                      height: '100%',
                      width: '34%',
                      // borderWidth: 2,
                      backgroundColor: val.pathcolor,
                      alignSelf: val.alingment,
                      flexWrap: 'wrap',
                      transform: [{rotate: val.pathrotate}],
                    }}>
                    {val.player[0].places.map(val_2 => {
                      return (
                        <View
                          style={{
                            borderWidth: 1,
                            height: '14.2%',
                            width: '33%',
                            backgroundColor:
                              (val_2.place > 8 && val_2.place < 15) ||
                              val_2.place == 3 ||
                              val_2.place == 16 ||
                              val_2.id == val.id ||
                              val_2.id == val.id2 ||
                              val_2.id == val.id3 ||
                              val_2.id == val.id4
                                ? // val_2.id==val.id
                                  val.color
                                : 'white',
                            borderRadius:
                              (val_2.place > 8 &&
                                val_2.place < 15 &&
                                val_2.id !== val.id) ||
                              val_2.id == val.id ||
                              val_2.id == val.id2 ||
                              val_2.id == val.id3 ||
                              val_2.id == val.id4
                                ? // val_2.id !== val.id2
                                  8
                                : 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          {val_2.id == val.id ||
                          val_2.id == val.id2 ||
                          val_2.id == val.id3 ||
                          val_2.id == val.id4 ? (
                            <TouchableOpacity
                              onPress={() => {
                                setmodal({open: true, Main_Id: val.Main_Id});
                              }}
                              style={{
                                backgroundColor: 'black',
                                height: '80%',
                                width: '80%',
                                borderWidth: 1,
                                borderColor: 'white',
                                borderRadius: 4,
                                alignItems: 'center',
                                justifyContent:"center"
                              }}>
                              <Text
                                style={{
                                  color: 'white',
                                  fontWeight: 'bold',
                                  fontSize: 12,
                                  alignSelf: 'center',
                                  textAlign:"center"
                                }}>
                                {val_2.id == val.id
                                  ? 0
                                  : val_2.id == val.id2
                                  ? 1
                                  : val_2.id == val.id3
                                  ? 2
                                  : val_2.id == val.id4
                                  ? 3
                                  : null}
                              </Text>
                            </TouchableOpacity>
                          ) : null}
                          {/* <Text style={{color: 'black'}}>{val_2.id}</Text> */}
                        </View>
                      );
                    })}
                  </View>
                  <LinearGradient
                  colors={["purple","grey","black"]}
                    style={{
                      height: '100%',
                      width: '67%',
                      borderWidth: 2,
                      backgroundColor: val.color,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 40,

                      // flexWrap:"wrap"
                      // alignSelf: val.alingment,
                      // flexWrap: 'wrap',
                      // transform: [{rotate: val.pathrotate}],
                    }}>
                    <View
                      style={{
                        height: '60%',
                        width: '60%',
                        borderWidth: 1,
                        flexWrap: 'wrap',
                        backgroundColor: 'white',
                        alignItems: 'center',
                        alignContent: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                      }}>
                      {boxesarr.map(() => (
                        <Pressable
                        android_ripple={{color:"grey"}}
                          style={{
                            width: '34%',
                            height: '34%',
                            borderWidth: 1,
                            backgroundColor: val.color,
                            borderRadius: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          onPress={
                            num == 6
                              ? () => {
                                  setmodal({
                                    open: true,
                                    Main_Id: val.Main_Id,
                                  });
                                }
                              : null
                          }>
                          <LinearGradient
                          colors={["purple","grey","black"]}
                           
                            style={{
                              backgroundColor: 'black',
                              height: '80%',
                              width: '80%',
                              borderWidth: 1,
                              borderColor: 'white',
                              borderRadius: 10,
                              alignItems: 'center',
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 12,
                                alignSelf: 'center',
                              }}>
                              {val.Main_Id}
                            </Text>
                          </LinearGradient>
                        </Pressable>
                      ))}
                    </View>
                  </LinearGradient>
                </View>
              </>
            );
          })}
        </View>
        {/* <Text style={{color:"black",position:"absolute"}}>hello world</Text> */}
      </View>
      <View
        style={{
          height: screen.width/5.4,
          width:screen.width/5.4,
          // borderWidth: 1,
          position: 'absolute',
          alignSelf: 'center',
          // flexWrap: 'wrap',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: color,
          left: Dimensions.get('screen').width / 2.4,
        }}>
        <Pressable
          onPress={() => {
            // setTimeout(() => {
            setnum(Math.floor(Math.random() * 7));

            // }, 500);

            if (num !== 6) {
              setmodal({
                open: false,
                Main_Id:
                  modal.Main_Id < 3 ? modal.Main_Id + 1 : (modal.Main_Id = 0),
              });
            }else{
                setmodal({
                    open: true,
                    Main_Id:
                      modal.Main_Id,
                  });
            }
            // }
          }}
          android_ripple={{color: color}}
          style={{
            height: '80%',
            width: '80%',
            // borderWidth: 1,
            position: 'absolute',
            alignSelf: 'center',
            // flexWrap: 'wrap',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          {/* <Icon /> */}
          <Image
            source={assets[num ==0?num:num - 1]}
            style={{height: '100%', width: '100%'}}
          />
        </Pressable>
      </View>

      {/*    M   O   D   A   L     */}

      <Modal
        visible={modal.open}
        transparent
        onRequestClose={() => {
          setmodal({open: false, Main_Id: 0});
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderWidth: 1,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: '30%',
              width: '60%',
              borderWidth: 2,
              borderRadius: 30,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            {boxesarr.map(val => (
              <View
                style={{
                  height: '15%',
                  width: '70%',
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: 'center',
                  // backgroundColor: 'rgba(0,0,0,0.5)',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 30}}>
                  Got_{val.Main_Id}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    // alert(val.Main_Id + 1);
                    let player = `player${val.Main_Id + 1}`;
                    if (
                      index.player1[val.Main_Id] !== 15 &&
                      index.player1[val.Main_Id] <= 15 &&
                      modal.Main_Id == 0
                    ) {
                      setnum(Math.floor(Math.random() * 7));
                      setindex({
                        player1: [
                          val.Main_Id == 0
                            ? index.player1[val.Main_Id] + num
                            : index.player1[0],
                          val.Main_Id == 1
                            ? index.player1[val.Main_Id] + num
                            : index.player1[1],
                          val.Main_Id == 2
                            ? index.player1[val.Main_Id] + num
                            : index.player1[2],
                          val.Main_Id == 3
                            ? index.player1[val.Main_Id] + num
                            : index.player1[3],
                        ],
                        player2: [...index.player2],
                        player3: [...index.player3],
                        player4: [...index.player4],
                      });
                      setmodal({open: false, Main_Id: modal.Main_Id});
                    } else if (
                      index.player2[val.Main_Id] !== 15 &&
                      index.player2[val.Main_Id] <= 15 &&
                      modal.Main_Id == 1
                    ) {
                      setnum(Math.floor(Math.random() * 7));
                      setindex({
                        player2: [
                          val.Main_Id == 0
                            ? index.player2[val.Main_Id] + num
                            : index.player2[0],
                          val.Main_Id == 1
                            ? index.player2[val.Main_Id] + num
                            : index.player2[1],
                          val.Main_Id == 2
                            ? index.player2[val.Main_Id] + num
                            : index.player2[2],
                          val.Main_Id == 3
                            ? index.player2[val.Main_Id] + num
                            : index.player2[3],
                        ],
                        player1: [...index.player1],
                        player3: [...index.player3],
                        player4: [...index.player4],
                      });
                      setmodal({open: false, Main_Id: modal.Main_Id});
                    } else if (
                      index.player3[val.Main_Id] !== 15 &&
                      index.player3[val.Main_Id] <= 15 &&
                      modal.Main_Id == 2
                    ) {
                      setnum(Math.floor(Math.random() * 7));
                      setindex({
                        player3: [
                          val.Main_Id == 0
                            ? index.player3[val.Main_Id] + num
                            : index.player3[0],
                          val.Main_Id == 1
                            ? index.player3[val.Main_Id] + num
                            : index.player3[1],
                          val.Main_Id == 2
                            ? index.player3[val.Main_Id] + num
                            : index.player3[2],
                          val.Main_Id == 3
                            ? index.player3[val.Main_Id] + num
                            : index.player3[3],
                        ],
                        player2: [...index.player2],
                        player1: [...index.player1],
                        player4: [...index.player4],
                      });
                      setmodal({open: false, Main_Id: modal.Main_Id});
                    } else if (
                      index.player4[val.Main_Id] !== 15 &&
                      index.player4[val.Main_Id] <= 15 &&
                      modal.Main_Id == 3
                    ) {
                      setnum(Math.floor(Math.random() * 7));
                      setindex({
                        player4: [
                          val.Main_Id == 0
                            ? index.player4[val.Main_Id] + num
                            : index.player4[0],
                          val.Main_Id == 1
                            ? index.player4[val.Main_Id] + num
                            : index.player4[1],
                          val.Main_Id == 2
                            ? index.player4[val.Main_Id] + num
                            : index.player4[2],
                          val.Main_Id == 3
                            ? index.player4[val.Main_Id] + num
                            : index.player4[3],
                        ],
                        player2: [...index.player2],
                        player1: [...index.player1],
                        player3: [...index.player3],
                      });
                      setmodal({open: false, Main_Id: modal.Main_Id});
                    } else {
                      if (modal.Main_Id == 0) {
                        setindex({
                          player1: [
                            val.Main_Id == 0
                              ? (index.player1[0] = 0)
                              : index.player1[0],
                            val.Main_Id == 1
                              ? (index.player1[1] = 0)
                              : index.player1[1],
                            val.Main_Id == 2
                              ? (index.player1[2] = 0)
                              : index.player1[2],
                            val.Main_Id == 3
                              ? (index.player1[3] = 0)
                              : index.player1[3],
                          ],
                          player2: [...index.player2],
                          player4: [...index.player4],
                          player3: [...index.player3],
                        });
                      } else if (modal.Main_Id == 1) {
                        setindex({
                          player2: [
                            val.Main_Id == 0
                              ? (index.player2[0] = 0)
                              : index.player2[0],
                            val.Main_Id == 1
                              ? (index.player2[1] = 0)
                              : index.player2[1],
                            val.Main_Id == 2
                              ? (index.player2[2] = 0)
                              : index.player2[2],
                            val.Main_Id == 3
                              ? (index.player2[3] = 0)
                              : index.player2[3],
                          ],
                          player1: [...index.player1],
                          player4: [...index.player4],
                          player3: [...index.player3],
                        });
                      } else if (modal.Main_Id == 2) {
                        setindex({
                          player3: [
                            val.Main_Id == 0
                              ? (index.player3[0] = 0)
                              : index.player3[0],
                            val.Main_Id == 1
                              ? (index.player3[1] = 0)
                              : index.player3[1],
                            val.Main_Id == 2
                              ? (index.player3[2] = 0)
                              : index.player3[2],
                            val.Main_Id == 3
                              ? (index.player3[3] = 0)
                              : index.player3[3],
                          ],
                          player1: [...index.player1],
                          player4: [...index.player4],
                          player2: [...index.player2],
                        });
                      } else if (modal.Main_Id == 3) {
                        setindex({
                          player4: [
                            val.Main_Id == 0
                              ? (index.player4[0] = 0)
                              : index.player4[0],
                            val.Main_Id == 1
                              ? (index.player4[1] = 0)
                              : index.player4[1],
                            val.Main_Id == 2
                              ? (index.player4[2] = 0)
                              : index.player4[2],
                            val.Main_Id == 3
                              ? (index.player4[3] = 0)
                              : index.player4[3],
                          ],
                          player1: [...index.player1],
                          player2: [...index.player2],
                          player3: [...index.player3],
                        });
                      }
                    }
                  }}
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 10,
                    backgroundColor:
                      modal.Main_Id == 0
                        ? 'yellow'
                        : modal.Main_Id == 1
                        ? 'red'
                        : modal.Main_Id == 2
                        ? 'green'
                        : modal.Main_Id == 3
                        ? 'blue'
                        : 'purple',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: modal.Main_Id !== 0 ? 'white' : 'black',
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    {num}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </Modal>
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            borderWidth: color == 'red' ? 6 : 1,
            borderColor: 'black',
          }}
          onPress={() => {
            setmodal({open: false, Main_Id: 1});
          }}>
          <Text style={{color: 'white', fontSize: 30}}>red </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            borderWidth: color == 'blue' ? 6 : 1,
          }}
          onPress={() => {
            setmodal({open: false, Main_Id: 3});
          }}>
          <Text style={{color: 'white', fontSize: 30}}>blue</Text>
        </TouchableOpacity>
      </View> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
