import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const BusinessesFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/Businesses')
      .on('value', snapshot => {
        dispatch({ type: 'BUSINESSES_FETCH_SUCCESS', payload: snapshot.val() });
      });
  };
};

export const BusinessFetch = ({ uid }) => {
  return (dispatch) => {
    firebase.database().ref(`/Businesses/${uid}`)
      .on('value', snapshot => {
        dispatch({ type: 'BUSINESS_FETCH_SUCCESS', payload: snapshot.val() });
      });
  };
};

export const BusinessFetchFav = ({ uid }) => {
  return (dispatch) => {
    firebase.database().ref(`/Businesses/${uid}`)
      .on('value', snapshot => {
        dispatch({ type: 'BUSINESSFAV_FETCH_SUCCESS', payload: snapshot.val() });
      });
  };
};

export const BusinessUpdate = ({ uid, total_rates, number_of_rates, rateing_image }) => {
  return () => {
    firebase.database().ref(`/Businesses/${uid}`)
      .update({ total_rates, number_of_rates, rateing_image })
      .then(() => {
        Actions.pop();
      });
  };
};

export const AddBusinessToFav = ({ uid, category, restaurant_name, restaurant_nameE, rateing_image, image, description, descriptionE, Contact_information, categoryE, longitude, latitude }) => {

 const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: 'ADDING' });

    firebase.database().ref(`/Users/${currentUser.uid}/Favorite`)
      .push({ uid, category, restaurant_name, restaurant_nameE, rateing_image, image, description, descriptionE, Contact_information, categoryE, longitude, latitude })
      .then(() => {
      dispatch({ type: 'ADD_FAV' });
    });
  };
};

export const RemoveBusinessfromFav = ({ uid }) => {


 const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: 'ADDING' });
    firebase.database().ref(`/Users/${currentUser.uid}/Favorite/${uid}`)
      .remove()
      .then(() => {
      dispatch({ type: 'REMOVE_FAV' });
    });
  };
};

export const FavoriteBusinessesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/Users/${currentUser.uid}/Favorite`)
      .on('value', snapshot => {
        dispatch({ type: 'FAVORITE_BUSINESSES_FETCH_SUCCESS', payload: snapshot.val() });
      });
  };
};
