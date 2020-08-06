import { ADD_ARTICLE } from '../constants/action-types';

const forbiddenWords = ['spam', 'money'];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next){
    return function(action){
      // do something
      if (action.type === ADD_ARTICLE) {

        const foundword = forbiddenWords.filter(word => 
          action.payload.title.includes(word)
        );

        if (foundword.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
}
