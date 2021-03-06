import { combineReducers } from 'redux';
import BusinessesReducer from './BusinessesReducer';
import BusinessReducer from './BusinessReducer';
import AuthReducer from './AuthReducer';
import ReviewFormReducer from './ReviewFormReducer';
import ReviewsReducer from './ReviewsReducer';
import UserInfoReducer from './UserInfoReducer';
import LanguageReducer from './LanguageReducer';
import UserReviewReducer from './UserReviewReducer';
import FavReducer from './FavReducer';
import FavoriteFetchReducer from './FavoriteFetchReducer';
import BusinessFetchFav from './BusinessFetchFav';


export default combineReducers({
  auth: AuthReducer,
  businesses: BusinessesReducer,
  business: BusinessReducer,
  reviewForm: ReviewFormReducer,
  reviews: ReviewsReducer,
  userInfo: UserInfoReducer,
  language: LanguageReducer,
  userReview: UserReviewReducer,
  favorite: FavReducer,
  favoriteBusinesses: FavoriteFetchReducer,
  fetchfavbusiness: BusinessFetchFav
});
