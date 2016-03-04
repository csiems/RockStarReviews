import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  username: DS.attr('string'),
  avatar: DS.attr('string'),
  albums: DS.hasMany('album'),
  reviews: DS.hasMany('review'),
  ratings: DS.hasMany('rating')
});
