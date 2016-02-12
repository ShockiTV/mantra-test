import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {GoogleMaps} from 'meteor/dburles:google-maps';
//import Redux from 'redux';
//
//console.log("redux: ", Redux);
import {createStore} from 'redux';

const defaultState = { routeList: []};
const store = createStore((state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_ROUTE':
      return {
        ...state,
        routeList: [...state.routeList, action.newRoute ]
      };
    default:
      return state;
  }
});

export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker,
    injectTapEventPlugin,
    GoogleMaps,
    NavigationStore: store
  };
}
