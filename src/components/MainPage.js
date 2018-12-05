import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  LayoutAnimation,
  UIManager,
  Image,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card, Button, Section } from './common';
import { arabicLanguage, englishLanguage } from '../actions';


class MainPage extends Component {
Lang(){
  if (this.props.language === 'Arabic') {
    return (
      <View>
      <Card style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

      <CardSection>
      <TouchableOpacity onPress={() => this.props.arabicLanguage()}>
      <Text> العربية </Text>
         </TouchableOpacity>
      </CardSection>

      <CardSection>
      <TouchableOpacity onPress={() => this.props.englishLanguage()}>
      <Text> English </Text>
         </TouchableOpacity>
      </CardSection>

      </Card>

      <Card>
        <CardSection>
          <TouchableOpacity onPress={() => Actions.Register()}>
          <Text>  إنشاء حساب </Text>
             </TouchableOpacity>
          </CardSection>

        <CardSection>
          <TouchableOpacity onPress={() => Actions.Login()}>
          <Text> تسجيل الدخول </Text>
          </TouchableOpacity>
        </CardSection>

        <CardSection>
          <TouchableOpacity onPress={() => Actions.Main()}>
          <Text>المتاجر </Text>
          </TouchableOpacity>
        </CardSection>
      </Card>
      </View>
    );
  }
  return (
    <View>
    <Card style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

    <CardSection>
    <TouchableOpacity onPress={() => this.props.arabicLanguage()}>
    <Text> العربية </Text>
       </TouchableOpacity>
    </CardSection>

    <CardSection>
    <TouchableOpacity onPress={() => this.props.englishLanguage()}>
    <Text> English </Text>
       </TouchableOpacity>
    </CardSection>

    </Card>

    <Card>
      <CardSection style={{ justifyContent: 'flex-end' }} >
        <TouchableOpacity onPress={() => Actions.Register()}>
        <Text>  Register </Text>
           </TouchableOpacity>
        </CardSection>

      <CardSection style={{ justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={() => Actions.Login()}>
        <Text> Login </Text>
        </TouchableOpacity>
      </CardSection>

      <CardSection style={{ justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={() => Actions.Main()}>
        <Text> Business </Text>
        </TouchableOpacity>
      </CardSection>
    </Card>
    </View>
  );
}
  render() {
    return (
      this.Lang()
    );
    }
  }
  const MapStateTpProps = state => {
const language = state.language.Language;
return ({ language });
  };
export default connect(MapStateTpProps, { arabicLanguage, englishLanguage })(MainPage);
