import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const reviewUpdate = ({ prop, value }) => {
  return {
    type: 'REVIEW_TYPE',
    payload: { prop, value }
  };
};

export const WriteReview = ({ restaurant_name, restaurant_nameE, UserName, UserComment, rate, rateing_image, uid }) => {

 const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/Businesses/${uid}/Reviews`)
      .push({ UserName, UserComment, rate, rateing_image })
      .then(firebase.database().ref(`/Users/${currentUser.uid}/Reviews`)
        .push({ UserName, UserComment, rate, rateing_image, restaurant_name, restaurant_nameE })
        .then(() => {
        dispatch({ type: 'REVIEW_CREATE' });
      })
        );
  };
};


export const ReviewsFetch = ({ uid }) => {
  return (dispatch) => {
    firebase.database().ref(`/Businesses/${uid}/Reviews`)
      .on('value', snapshot => {
        dispatch({ type: 'REVIEWS_FETCH_SUCCESS', payload: snapshot.val() });
      });
  };
};

export const UserReviewsFetch = ({ uid }) => {
  return (dispatch) => {
    firebase.database().ref(`/Users/${uid}/Reviews`)
      .on('value', snapshot => {
        dispatch({ type: 'USER_REVIEWS_FETCH_SUCCESS', payload: snapshot.val() });
      });
  };
};
