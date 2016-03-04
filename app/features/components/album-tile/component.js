import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    updateRating(params) {
      const { item: album, rating } = params;
      album.set('rating', rating);
      return album.save();
    }
  }

});
