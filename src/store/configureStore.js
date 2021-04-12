import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'modules/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
function ConfigureStore(initialState) {
  const middleware = []
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  return store
}

export default ConfigureStore
