import { combineReducers } from 'redux';

import robotReducer from '../containers/RobotPage/robotReducer';
import { getHomePageListReducer, relatedCurrentChatReducer } from '../containers/HomePageList/homePageListReducer';
import { initAppReducer } from './reducers/initAppReducer';
import { inviteReducer } from './reducers/inviteReducer';
import { fetchAllGroupChatsReducer } from '../containers/GroupChatPage/groupChatReducer';
import { fetchAllPrivateChatsReducer } from '../containers/PrivateChatPage/privateChatReducer';

export default combineReducers({
  robotState: robotReducer,
  homePageListState: getHomePageListReducer,
  allGroupChatsState: fetchAllGroupChatsReducer,
  allPrivateChatsState: fetchAllPrivateChatsReducer,
  relatedCurrentChat: relatedCurrentChatReducer,
  initAppState: initAppReducer,
  inviteState: inviteReducer,
});
