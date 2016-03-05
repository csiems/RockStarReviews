import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  user: DS.belongsTo('user', {async: true}),
  album: DS.belongsTo('album', {async: true}),
  rating: DS.attr()
});
