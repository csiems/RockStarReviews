import Ember from 'ember';

export function reviewTitle(params) {
  console.log(params[0]);
  return params[0].substring(0, 100);
}

export default Ember.Helper.helper(reviewTitle);
