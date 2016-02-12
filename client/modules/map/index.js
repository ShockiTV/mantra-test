import methodStubs from './configs/method_stubs';
import actions from './actions';
import googleInit from './configs/init_google_api.js';

export default {
  actions,
  //load(context) {
  //  methodStubs(context);
  //}
  load(context) {
    googleInit(context);
  }
};
