import storage from 'redux-persist/es/storage'
import apiMiddleware from './middleware';
import { applyMiddleware, createStore } from 'redux'
import { createFilter   } from 'redux-persist-transform-filter';
import { persistReducer, persistStore } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers'

export default (history) => {
  const persistedFilter = createFilter(
    'auth', ['access', 'refresh']);
  const reducer = persistReducer(
    {
      key: 'forum',
      storage: storage,
      whitelist: ['auth'],
      transforms: [persistedFilter]
    },
    rootReducer)
  const store = createStore(
    reducer, {},
    applyMiddleware(
      apiMiddleware, 
      routerMiddleware(history))
  )
  persistStore(store)
  return store
}

// import storage from 'redux-persist/es/storage'
// import { applyMiddleware, createStore, compose } from 'redux'
// import { createFilter   } from 'redux-persist-transform-filter'
// import { persistReducer, persistStore } from 'redux-persist'
// import { routerMiddleware } from 'react-router-redux'
// import rootReducer from './reducers'
// import apiMiddleware from './middleware';

// export default (history) => {
//     const persistedFilter = createFilter(
//         'auth', ['access', 'refresh'])

//     const reducer = persistReducer(
//     {
//         key: 'forum',
//         storage: storage,
//         whitelist: ['auth'],
//         transforms: [persistedFilter]
//     },
//     rootReducer)


//     const composeEnhancers = 
//         // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
//         compose;

//     // function configureStore() {
//         const store = createStore(
//             reducer, {}, composeEnhancers(
//                 applyMiddleware(
//                     apiMiddleware,
//                     routerMiddleware(history),
//                     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//                 )
//             )
//         )
//         persistStore(store)
//         return store
//     // }
// }
