import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

import { Ionicons } from '@expo/vector-icons';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      quiz: "Quiz startted",
      quizData: [],
      count: 1,
    };

  }

  async componentDidMount() {
   
    const { quizData } = this.state
    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
      .then((resp) => resp.json())
      .then(quizData => {
        // console.log(data)
        // quizData.push(quizData.results)
        this.setState({ quizData: quizData.results });
        console.log(this.state.quizData,"yeeeeeeeeeeeeeeeeeeeeeeee")

      });

    }

    nextQuestion = () => {
      const { count } = this.state
      if(count === 9){
        this.setState({quiz : "result" })
      }else{
        this.setState({ count: count + 1 })
        
      } 
     }

  render() {
    const { quizData, count,quiz } = this.state;

    return (
      <View >
         {quiz === "Quiz startted" && 
                //  this.state.quizData && this.state.length &&
                quizData.map((item, index) => {
                  if (index === count) {
                    return (
                      <View>
                        <Text>Q:{item.question}</Text>

                        <Text>1){item.correct_answer}</Text>

                        {
                          item.incorrect_answers.map((item, index) => {
                            return <Text>{index +2}) {item}</Text>
                          })
                        }
                         <Button
                onPress={this.nextQuestion}
                title="Next"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
                      </View>
                    )
                  }
                })
               
              }
              {quiz === "result" &&
<View><Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'red' }}>
                    {' '}Flip{' '}
                  </Text></View>}
      
      </View>
    );
  }
}
