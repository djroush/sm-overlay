
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";

import Head from 'next/head'
import { Provider } from 'react-redux'
import App from '../src/components/App'
import { rootReducer } from '../src/redux/reducer/RootReducer'
import { defaultRootState } from '../src/redux/state/RootState'
import rootSaga from '../src/saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: defaultRootState
})
sagaMiddleware.run(rootSaga);

export default function Index() {
  return (
    <>
      <Head>
        <title>SM overlay generator</title>
      </Head>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  )
}
