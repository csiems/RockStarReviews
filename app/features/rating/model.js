import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr(),
  user: DS.belongsTo('user'),
  album: DS.belongsTo('album')
});
