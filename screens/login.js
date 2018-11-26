import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Camera, Permissions } from 'expo';
import { FaceDetector } from 'expo';


export default class Login extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
          hasCameraPermission: null,
          count: 0,
          type: Camera.Constants.Type.front,
          camera: true,
          quiz: "",
          quizData: [],
          count: 1,
        };
    
        this.handleFacesDetected = this.handleFacesDetected.bind(this)
      }
      
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    // console.log("hyhyhy")
    
    }

    handleFacesDetected({ faces }) {
        // console.log('faces', faces)
        if (faces.length > 0) {
          // console.log('faces', faces)
    
          this.setState({ faces });
          this.setState({ camera: false, quiz: "face detected" });
    
    
        }
      }
navigate() { 
    const resetAction = StackActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Dashboard' }),

        ],
      });
      this.props.navigation.dispatch(resetAction);
}
static navigationOptions = {
    
    title: 'Quiz App',
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
    headerStyle:{
        backgroundColor:'green',
    },
};

    render() {
            const { hasCameraPermission, camera, quiz, quizData, count } = this.state;
            if (hasCameraPermission === null) {
                return <View />;
          
              } else if (hasCameraPermission === false) {
                return <Text>No access to camera</Text>;
              }
              else {
          
                return (
                    
                  <View style={{ flex: 1 }}>
                    {camera &&
                      <Camera style={{ flex: 1 }} type={this.state.type}
                        // ... other props
                        onFacesDetected={this.handleFacesDetected}
                        faceDetectorSettings={{
                          mode: FaceDetector.Constants.Mode.fast,
                          detectLandmarks: FaceDetector.Constants.Mode.none,
                          runClassifications: FaceDetector.Constants.Mode.none
                        }}
                      >
                        <View
                          style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                          }}>
                          <TouchableOpacity
                            style={{
                              flex: 0.1,
                              alignSelf: 'flex-end',
                              alignItems: 'center',
                            }}
                            onPress={() => {
                              this.setState({
                                type: this.state.type === Camera.Constants.Type.back
                                  ? Camera.Constants.Type.front
                                  : Camera.Constants.Type.back,
                              });
                            }}>
                            <Text
                              style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                              {' '}Flip{' '}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </Camera>
                    }
          
                    {
                      quiz === "face detected" &&
          
                      <View >
                              <Button
                                  onPress={() => this.navigate()}
                                  title="Start quiz"
                                  color="#841584"
                              />
                          </View>
                    }
          
                    
                  </View>
                );
              }
          
        }
    }
    
    
    // return (
    //     <View >
    //         <Button
    //             onPress={() => this.navigate()}
    //             title="dashboard"
    //             color="#841584"
    //         />
    //     </View>
    // );