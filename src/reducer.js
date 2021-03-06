import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  CHANGE_THEME,
} from './actions'

const reducer = (state, action) => {
  // if(action.type === 'SET_LOADING') if or switch functionality doesn't change
  switch (action.type) {
    // variables set up in action.js to help not commit spelling errors
    case SET_LOADING:
      return { ...state, isLoading: true }
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      }
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      }
    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        page: 0,
      }
    // starting page is 0 here so, we have to set it like this even though this is not an array
    case HANDLE_PAGE:
      if (action.payload === 'inc') {
        let nextPage = state.page + 1
        if (nextPage > state.nbPages - 1) {
          nextPage = 0
        }
        return { ...state, page: nextPage }
      }
      if (action.payload === 'dec') {
        let prevPage = state.page - 1
        if (prevPage < 0) {
          prevPage = state.nbPages - 1
        }
        return { ...state, page: prevPage }
      }

    case CHANGE_THEME:
      return { ...state, darkTheme: !state.darkTheme }

    default:
      throw new Error(`no mathching "${action.type}" action type`)
  }
}
export default reducer
