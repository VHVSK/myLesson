import { configureStore } from 'https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.9.5/+esm'
import reducer from './reducer.js'
// .js прописуємо розширення, так ми не використовуємо ні npm, ні webpack

export default configureStore({
  reducer: reducer,
})
