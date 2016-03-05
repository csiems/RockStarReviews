import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    createReview(author, body){
      let album = this.get('album');
      this.sendAction('store', author, body, album);
      this.setProperties({
          body: ''
      });
    }
  }
});
