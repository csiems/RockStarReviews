import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    artist: DS.attr('string'),
    studio: DS.attr('string'),
    releaseYear: DS.attr('string'),
    imageURL: DS.attr('string'),
    body: DS.attr('string'),
    titleURL: DS.attr('string'),
    reviews: DS.hasMany('review' ),
    date: DS.attr('date')

});
