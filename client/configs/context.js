import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {GoogleMaps} from 'meteor/dburles:google-maps';

export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker,
    injectTapEventPlugin,
    GoogleMaps
  };
}
