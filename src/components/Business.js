import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  LayoutAnimation,
  UIManager,
  Image,
  TextInput,
  ScrollView,
  Alert
} from "react-native";

import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { CardSection, Card, Button } from "./common";
import { BusinessFetch } from "../actions";

class Business extends Component {
componentWillMount() {

  const { uid } = this.props.business;

  this.props.BusinessFetch({ uid });
  console.log(this.props.initialPosition);

}
check(title) {

  if (this.props.em || this.props.emaillog) {
    if (title === 'write')
     return Actions.reviewForm({ business: this.props.business });
     if(title === 'see')
     return Actions.reviews({ business: this.props.business });
     if(title === 'map')
     return Actions.map({ Markers: [this.props.business] })
  }
  if (this.props.language === 'Arabic')
  {
  Alert.alert(
    'تنبيه',
    'يجب عليك التسجيل اولا',
    [
      {text: 'التسجيل', onPress: () => Actions.Auth() },
      {text: 'الغاء', style: 'cancel'}
    ],
    { cancelable: false }
  )
} else {
Alert.alert(
  'Alert',
  'you have to register first',
  [
    {text: 'Register', onPress: () => Actions.Auth() },
    {text: 'cancel', style: 'cancel'}
  ],
  { cancelable: false }
)}

}

  render() {

    const { buttonStyle, textStyle, BussinesImageStyle, ViewCardStyle, RatingStyle,
       DescriptionViewStyle, DescriptionTextStyle, ReviewViewStyle } = styles;
       console.log();
    const { category, categoryE, restaurant_name, restaurant_nameE, rateing_image, image, description, descriptionE, Contact_information, uid } = this.props;
console.log(descriptionE);
    if (this.props.language === 'Arabic'){
    return (
      <ScrollView>
        <Card>

          <View style={ViewCardStyle}>
            <Image
              style={BussinesImageStyle}
              source={{ uri:image  }} />
          </View>

          <View style={ViewCardStyle}>
            <Image
              style={RatingStyle}
              source={{uri:rateing_image}}
            />
          </View>

          <CardSection>
            <Text> الوصف: </Text>
          </CardSection>


          <CardSection>
                      <View style={DescriptionViewStyle}>
                        <Text style={DescriptionTextStyle}>
                          {description}
                        </Text>
                      </View>
                    </CardSection>

          <CardSection>
            <Text> معلومات جهة الاتصال: { Contact_information }</Text>
          </CardSection>

          <CardSection>
            <TouchableOpacity
              style={buttonStyle}
              onPress={() => this.check('map')}
              >
              <Text style={textStyle}> المتجر على الخريطة </Text>
            </TouchableOpacity>
          </CardSection>

          <CardSection>
            <TouchableOpacity
              style={buttonStyle}
              onPress={() => this.check('write')}
              >
              <Text style={textStyle}> اكتب مراجعه </Text>
            </TouchableOpacity>
          </CardSection>

          <CardSection>
            <TouchableOpacity
              style={buttonStyle}
              onPress={() => this.check('write')}
              >
              <Text style={textStyle}> اضف الى المفضلة</Text>
            </TouchableOpacity>
          </CardSection>

          <CardSection>
            <TouchableOpacity
              style={buttonStyle}
              onPress={() => this.check('see')}
              >
              <Text style={textStyle}> اراء المستخدمين اللتي تمت مراجعتها </Text>
            </TouchableOpacity>
          </CardSection>

          <CardSection>
            <TouchableOpacity
              style={buttonStyle}
              onPress={() => this.check('see')}
              >
              <Text style={textStyle}> اراء المستخدمين اللتي جاري مراجعتها </Text>
            </TouchableOpacity>
          </CardSection>
        </Card>
        <View style={{ marginBottom: 100 }} />

      </ScrollView>
    );
  }
  return (
    <ScrollView>
      <Card>

        <View style={ViewCardStyle}>
          <Image
            style={BussinesImageStyle}
            source={{ uri:image  }} />
        </View>

        <View style={ViewCardStyle}>
          <Image
            style={RatingStyle}
            source={{uri:rateing_image}}
          />
        </View>

        <CardSection style={{flexDirection: 'row'}}>
          <Text style={{alignItems: 'flex-start'}}>Description: </Text>
        </CardSection>


        <CardSection style={{flexDirection: 'row'}}>
                      <Text style={{ width: 250, alignItems: 'flex-start'}}>
                        {descriptionE}
                      </Text>
                  </CardSection>

        <CardSection style={{flexDirection: 'row'}}>
          <Text style={{alignItems: 'flex-start'}}>  Contact information: { Contact_information }</Text>
        </CardSection>

        <CardSection>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => Actions.map({ Markers: [this.props.business] })}
            >
            <Text style={textStyle}> View on map </Text>
          </TouchableOpacity>
        </CardSection>

        <CardSection>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => this.check('write')}
            >
            <Text style={textStyle}> write review  </Text>
          </TouchableOpacity>
        </CardSection>

        <CardSection>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => this.check('write')}
            >
            <Text style={textStyle}>  remove from favorite list  </Text>
          </TouchableOpacity>
        </CardSection>

        <CardSection>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => this.check('see')}
            >
            <Text style={textStyle}> Filtered reviews </Text>
          </TouchableOpacity>
        </CardSection>

        <CardSection>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => this.check('see')}
            >
            <Text style={textStyle}> non filtered reviews </Text>
          </TouchableOpacity>
        </CardSection>
      </Card>
      <View style={{ marginBottom: 100 }} />

    </ScrollView>
  );
  }
}

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  BussinesImageStyle: {
    resizeMode: 'contain',
    width: 300,
    height: 100
  },
  RatingStyle:{
    width: 150,
    height: 20,
    paddingLeft: 5
  },
  ViewCardStyle:{
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#e6f3ff",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "#ddd",
    postion: "relative"

  },
  DescriptionViewStyle:{
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5
  },
  DescriptionTextStyle:{
    width: 250,
    textAlign: 'right'
  },
  ReviewViewStyle:
  {
    marginTop: 10,
    marginBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
};
const MapStateTpProps = (state, props) => {
  const em = state.auth.email;
  const emaillog = state.auth.emaillog;
  const language = state.language.Language;

  const { category, restaurant_name, rateing_image, image, description, descriptionE, Contact_information, uid } = state.business;
const Marker = state.business;

  return { Marker, descriptionE, language, emaillog, category, restaurant_name, rateing_image, image, description, Contact_information, uid, em };
};


export default connect(MapStateTpProps, { BusinessFetch })(Business);
