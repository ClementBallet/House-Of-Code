import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.titleText}>
            Calculatrice
          </Text>
          {/* Container des boites */}
          <View  style={styles.parentBoxes} >
              {/* 1ere ligne */}
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText} onPress={this.onPressTitle}>
                      %
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      √
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      x²
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      1/x
                    </Text>
                  </View>
              </View>
              {/* End 1ere ligne */}
              {/* 2eme ligne */}
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      CE
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      C
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      &#8592;
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      /
                    </Text>
                  </View>
              </View>
              {/* End 2eme ligne */}
              {/* 3eme ligne */}
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      7
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      8
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      9
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      X
                    </Text>
                  </View>
              </View>
              {/* End 3eme ligne */}
              {/* 4eme ligne */}
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      4
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      5
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      6
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      -
                    </Text>
                  </View>
              </View>
              {/* End 4eme ligne */}
              {/* 5eme ligne */}
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      1
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      2
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      3
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      +
                    </Text>
                  </View>
              </View>
              {/* End 5eme ligne */}
              {/* 6eme ligne */}
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      +-
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      0
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      ,
                    </Text>
                  </View>
                  <View style={styles.boxes} >
                    <Text style={styles.titleText}>
                      =
                    </Text>
                  </View>
              </View>
              {/* End 6eme ligne */}
          </View>
          {/* End container des boites */}



      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titleText: {
    flex: 2,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
  parentBoxes: {
    flex: 8,
  },
  boxes: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    backgroundColor: 'whitesmoke',
  }
});

