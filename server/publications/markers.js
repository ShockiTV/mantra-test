import {Markers} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('markers.list', function () {
    const selector = {};
    const options = {
      //fields: {_id: 1, title: 1},
      //sort: {createdAt: -1},
      //limit: 10
    };
    console.log("providing markers");
    return Markers.find(selector, options);
  });
}
