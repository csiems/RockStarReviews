import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    artist: DS.attr(),
    studio: DS.attr(),
    releaseYear: DS.attr(),
    imageURL: DS.attr(),
    body: DS.attr(),
    titleURL: DS.attr(),
    reviews: DS.hasMany('review', {async: true}),
    date: DS.attr()

});
