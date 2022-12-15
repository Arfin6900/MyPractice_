import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Button,
  Alert,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// You can import from local files

// or any pure javascript modules available in npm

export default function Ludo() {
  const [modal, setmodal] = React.useState({
    open: false,
    got_1: false,
    got_2: false,
    got_3: false,
    got_4: false,
  });
  const [num, setnum] = React.useState(0);
  const [index, setindex] = React.useState({
    player1: [5, 6, 3, 14],
    player2: [5, 6, 3, 14],
    player3: [5, 6, 3, 14],
    player4: [5, 6, 3, 14],
  });
  const [isopen, setisopen] = React.useState({
    open: [{player1: false}],
    open: [{player2: false}],
    open: [{player3: false}],
    open: [{player4: false}],
  });
  const boxesarr = [
    {
      id: index.player1[0],
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
      id: index.player2[0],
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
      id: index.player3[0],
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
      id: index.player4[0],
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




  React.useEffect(()=>{
    if (
      index.player1[0] !== 15 &&
      index.player1[0] <= 15 &&
      modal.got_1
    ) {
      setnum(Math.floor(Math.random() * 7));
      setindex({
        player1: [
          index.player1[0] + num,
          index.player1[1],
          index.player1[2],
          index.player1[3],
        ],
        player2: [index.player2],
        player3: [index.player3],
        player4: [index.player4],
      });
    } else {
      setindex({
        player1: [
          (index.player1[0] = 1),
          index.player1[1],
          index.player1[2],
          index.player1[3],
        ],
        player2: [index.player2],
        player3: [index.player3],
        player4: [index.player4],
      });
    }
    if (
      index.player1[0] !== 15 &&
      index.player1[0] <= 15 &&
      modal.got_2
    ) {
      setnum(Math.floor(Math.random() * 7));
      setindex({
        player1: [
          index.player1[0],
          index.player1[1] + num,
          index.player1[2],
          index.player1[3],
        ],
        player2: [index.player2],
        player3: [index.player3],
        player4: [index.player4],
      });
    } else {
      setindex({
        player1: [
          index.player1[0],
          (index.player1[1] = 1),
          index.player1[2],
          index.player1[3],
        ],
        player2: [index.player2],
        player3: [index.player3],
        player4: [index.player4],
      });
    }
    if (
      index.player1[0] !== 15 &&
      index.player1[0] <= 15 &&
      modal.got_3
    ) {
      setnum(Math.floor(Math.random() * 7));
      setindex({
        player1: [
          index.player1[0],
          index.player1[1],
          index.player1[2] + num,
          index.player1[3],
        ],
        player2: [index.player2],
        player3: [index.player3],
        player4: [index.player4],
      });
    } else {
      setindex({
        player1: [
          index.player1[0],
          index.player1[1],
          (index.player1[2] = 1),
          index.player1[3],
        ],
        player2: [index.player2],
        player3: [index.player3],
        player4: [index.player4],
      });
    }
    if (
      index.player1[0] !== 15 &&
      index.player1[0] <= 15 &&
      modal.got_4
    ) {
      setnum(Math.floor(Math.random() * 7));
      setindex({
        player1: [
          index.player1[0],
          index.player1[1],
          index.player1[2],
          index.player1[3] + num,
        ],
        player2: [index.player2],
        player3: [index.player3],
        player4: [index.player4],
      });
    } else {
      setindex({
        player1: [
          index.player1[0],
          index.player1[1],
          index.player1[2],
          (index.player1[3] = 0),
        ],
        player2: [index.player2],
        player3: [index.player3],
        player4: [index.player4],
      });
    }

    // if( index.player1[0] == 15){

    console.log('I am player 1', index.player1);
    console.log('I am player 2', index.player2);
    console.log('I am player 3', index.player3);
    console.log('I am player 4', index.player4);
  },[modal.open,modal.got_1,modal.got_2,modal.got_3,modal.got_4])
  return (
    <LinearGradient 
    colors={['purple', 'grey', 'black']}
    style={styles.container}>
      {/* <View
        style={{
          height: 390,
          width: 390,
          borderWidth: 2,
          flexWrap: 'wrap',
          justifyContent: "space-between",
          alignContent: 'center',
          // marginHorizontal:-30
          // alignItems:"flex-end"
          // flexDirection:"row"
          // flexBasis:1
          // flexGrow:
          // flexShrink:2
        }}>
        {Object.values(boxesarr).map(val => (
          // <>
          <View
            style={{
              borderWidth: 1,
              height: '40%',
              width: '40%',
              backgroundColor: val.color,
              // alignSelf: 'center',
              justifyContent:"center",
              alignItems:"center",
              marginHorizontal:40
              // flexWrap:"wrap"
              // transform:[{rotate:val.rotate}]
            }}>
          </View>

        ))}

      </View> */}
      <View
        style={{
          height: 390,
          width: 390,
          borderWidth: 2,
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
            height: 390,
            width: 390,
            flexWrap: 'wrap',
            // justifyContent: "space-between",
            alignContent: 'center',
            borderRadius:100
            // transform:[{rotate:"90deg"}]

            // position:"absolute"
            // marginHorizontal:-30
            // alignItems:"flex-end"
            // flexDirection:"row"
            // flexBasis:1
            // flexGrow:
            // flexShrink:2
          }}>
          {Object.values(boxesarr).map(val => (
            <>
              <LinearGradient
              colors={["purple","grey","black"]}
                style={{
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
                  // left:bhhhhhhhbhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhbhhhhhhhhhhhhhhhgbhhhhhhhhhhhhhhhhhbhhmj
                  // marginLeft:val.right,
                  // marginVertical:-
                  // flexWrap:"wrap"
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '34%',
                    backgroundColor: val.pathcolor,
                    alignSelf: val.alingment,
                    flexWrap: 'wrap',
                    transform: [{rotate: val.pathrotate}],
                  }}>
                  {val.player[0].places.map(val_2 => (
                    <LinearGradient
                    colors={(val_2.place > 8 && val_2.place < 15) ||
                        val_2.place == 3 ||
                        val_2.place == 16 ||
                        val_2.id == val.id ||
                        val_2.id == val.id2 ||
                        val_2.id == val.id3 ||
                        val_2.id == val.id4?[val.color,"grey", "black"]:['white',"white"]}
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
                          val_2.place > 8 &&
                          val_2.place < 15 &&
                          val_2.id !== val.id
                            ? // val_2.id !== val.id2
                              8
                            : 0,
                      }}>
                      <Text style={{color: 'black'}}>
                        {val_2.id == val.id
                          ? 1
                          : val_2.id == val.id2
                          ? 2
                          : val_2.id == val.id3
                          ? 3
                          : val_2.id == val.id4
                          ? 4
                          : null}
                      </Text>
                    </LinearGradient>
                  ))}
                </View>
                <LinearGradient
                colors={[val.color,"grey","black"]}
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
                      borderRadius: 10,
                    }}>
                    {turns.map(() => (
                      <View
                        style={{
                          width: '34%',
                          height: '34%',
                          borderWidth: 0.5,
                          backgroundColor: val.color,
                          borderRadius: 30,
                        }}></View>
                    ))}
                  </View>
                </LinearGradient>
              </LinearGradient>
            </>
          ))}
        </View>
        {/* <Text style={{color:"black",position:"absolute"}}>hello world</Text> */}
      </View>
      <TouchableOpacity
        onPress={() => {
          setmodal({
            open: true,
            got_1: false,
            got_2: false,
            got_3: false,
            got_4: false,
          });
          //  setturns(turns[0].player[0].got[0].turn+1)
          //  setturns(turns[0].pathcolor)
        
          // }else{
          //   setindex({
          //     player1: [++index.player1[0],index.player3[1],index.player3[2],index.player3[3]],
          //     player2: [index.player2],
          //     player3: [index.player3],
          //     player4: [index.player4],
          //   });
          // }
          // if (index.player1 !== boxesarr[0].player[0].places.length - 1) {
          //   setindex({
          //     player1: ++index.player1,
          //     player2: index.player2,
          //     player3: index.player3,
          //     player4: index.player4,
          //   });
          // } else {
          //   setindex({
          //     player1: 0,
          //     player2: index.player3,
          //     player3: index.player3,
          //     player4: index.player4,
          //   });
          //   Alert.alert('you are Winner');
          // }
        }}>
        <Text style={{color: 'black', fontSize: 30}}>Count yellow {num}</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => {
          //  setturns(turns[0].player[0].got[0].turn+1)
          //  setturns(turns[0].pathcolor)
          console.log(index.player1);
          if (index.player2 ==15) {
            setindex({
              player1: index.player1!==15?1 && ++index.player1:index.player1,
              player2: index.player2,
              player3: index.player3,
              player4: index.player4,
            });
          } else {
            setindex({
              player1: index.player1,
              player2: ++index.player2,
              player3: index.player3,
              player4: index.player4,
            });
          }
        }}>
        <Text style={{color: 'black', fontSize: 30}}>Count red</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //  setturns(turns[0].player[0].got[0].turn+1)
          //  setturns(turns[0].pathcolor)
          console.log(index.player1);


          if( index.player3 == 15){
            setindex({
              player1: index.player1,
              player2: index.player2,
              player3: index.player3,
              player4: index.player4!==15?1 && ++index.player4:index.player4,
            });
          }else{
            setindex({
              player1: index.player1,
              player2: index.player2,
              player3: ++index.player3,
              player4: index.player4,
            });
          }
          // if (index.player3 !== boxesarr[0].player[0].places.length - 1) {
          //   setindex({
          //     player1: index.player1,
          //     player2: index.player2,
          //     player3: ++index.player3,
          //     player4: index.player4,
          //   });
          // } else {
          //   setindex({
          //     player1: index.player1,
          //     player2: index.player2,
          //     player3: 0,
          //     player4: index.player4,
          //   });
          //   Alert.alert('you are Winner');
          // }
        }}>
        <Text style={{color: 'black', fontSize: 30}}>Count green</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //  setturns(turns[0].player[0].got[0].turn+1)
          //  setturns(turns[0].pathcolor)
          console.log(index.player1);
          if( index.player4 == 15){
            setindex({
              player1: index.player1,
              player2: index.player2,
              player3: index.player3!==15?1 && ++index.player3:index.player3,
              player4: index.player4,
            });
          }else{
            setindex({
              player1: index.player1,
              player2: index.player2,
              player3: ++index.player3,
              player4: index.player4,
            });
          }
        }}>
        <Text style={{color: 'black', fontSize: 30}}>Count blue</Text>
      </TouchableOpacity> */}

      {/* <View style={{width:"20%",height:"70%",position:"absolute"}}>
      {places.map(()=>(<View style={{borderWidth:1,height:20,width:20,flexWrap:"wrap"}}></View>))}</View> */}

      {/*    M   O   D   A   L     */}

      <Modal visible={modal.open}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderWidth: 1,
          }}>
          <TouchableOpacity
            onPress={() => {
              setmodal({
                open: false,
                got_1: true,
                got_2: false,
                got_3: false,
                got_4: false,
              });
              console.log(index.player1[0]);
            }}
            style={{
              height: 40,
              backgroundColor: 'white',
              width: 90,
              margin: 10,
            }}>
            <Text style={{color: 'black', fontSize: 20}}>got 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setmodal({
                open: false,
                got_1: false,
                got_2: true,
                got_3: false,
                got_4: false,
              });
              console.log(index.player1[1]);
            }}
            style={{
              height: 40,
              backgroundColor: 'white',
              width: 90,
              margin: 10,
            }}>
            <Text style={{color: 'black', fontSize: 20}}>got 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setmodal({
                open: false,
                got_1: false,
                got_2: false,
                got_3: true,
                got_4: false,
              });
              console.log(index.player1[2]);
            }}
            style={{
              height: 40,
              backgroundColor: 'white',
              width: 90,
              margin: 10,
            }}>
            <Text style={{color: 'black', fontSize: 20}}>got 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setmodal({
                open: false,
                got_1: false,
                got_2: false,
                got_3: false,
                got_4: true,
              });
              console.log(index.player1[3]);
            }}
            style={{
              height: 40,
              backgroundColor: 'white',
              width: 90,
              margin: 10,
            }}>
            <Text style={{color: 'black', fontSize: 20}}>got </Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
