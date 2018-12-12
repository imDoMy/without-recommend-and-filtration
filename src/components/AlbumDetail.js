import React, {Component} from 'react';
import { Text, View, Image, Linking, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, SubCard } from './common';

class AlbumDetail extends Component {
  render(){
  const { category, categoryE, restaurant_name, restaurant_nameE, rateing_image, image } = this.props.business;
const business = this.props.business

  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    ratingStyle
  } = styles;
  if (this.props.language === 'Arabic'){
  return (
<View>
    <Card>
    <TouchableOpacity onPress={() => Actions.businessInner({ business })}>
      <CardSection justi={'center'}>
        <ImageBackground style={imageStyle} source={{ uri: image }}>
          <View style={styles.innerFrame}>
              <Text size={18} style={styles.Name}>
                {restaurant_name}
              </Text>
              <Text size={18} style={styles.Type}>
                {category}
              </Text>
          </View>
        </ImageBackground>
      </CardSection>

      <SubCard justi={'center'}>
          <Image style={ratingStyle} source={{ uri: rateing_image}}></Image>
      </SubCard>
      </TouchableOpacity>

    </Card>
    </View>

  );
}
return (
  <View>
      <Card>
      <TouchableOpacity onPress={() => Actions.businessInner({ business })}>
        <CardSection justi={'center'}>
          <ImageBackground style={imageStyle} source={{ uri: image }}>
            <View style={{flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0, 0, 0, .5)'}}>
                <Text size={18} style={{
                    color: '#fff',
                    opacity: 1,
                    fontSize: 24,
                    fontWeight: '500',
                    paddingLeft: 5
                }}>
                  { restaurant_nameE }
                </Text>
                <Text size={18} style={{
                    color: '#fff',
                    opacity: 1,
                    fontSize: 24,
                    fontWeight: '500',
                    paddingLeft: 5
                }}>
                  {categoryE}
                </Text>
            </View>
          </ImageBackground>
        </CardSection>

        <SubCard justi={'center'}>
            <Image style={ratingStyle} source={{ uri: rateing_image}}></Image>
        </SubCard>
        </TouchableOpacity>

      </Card>
      </View>
)
}
};

const styles = {

  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  innerFrame: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },

  universityImage: {
    width: 300,
    height: 250,
    borderRadius: 5,
  },

  Name: {
      color: '#fff',
      opacity: 1,
      fontSize: 24,
      fontWeight: '500',
      paddingRight: 5
  },
  Type: {
      color: '#fff',
      opacity: 1,
      fontSize: 24,
      fontWeight: '500',
      paddingRight: 5

  },

  universityMotto: {
        color: '#fff',
        opacity: .9,
        textAlign: 'center',
        backgroundColor: 'transparent'
  },

  headerTextStyle: {
        fontSize: 18
  },

  thumbnailStyle: {
        height: 50,
        width: 50
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

   paragraph: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf:'flex-end',
    bottom: -160,
    color: 'white',
    backgroundColor: 'transparent',
  },
  ratingStyle: {
    height: 30,
    width: 150,
    resizeMode: 'contain',
  },
  imageStyle: {
    height: 200,
    width: null,
    flex: 1,
    resizeMode: 'contain',
  }
};
const MapStateTpProps = state => {
const language = state.language.Language;
return ({ language });
};
export default connect(MapStateTpProps)(AlbumDetail);
