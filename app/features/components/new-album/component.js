import Ember from 'ember';

const {set, get} = Ember;

export default Ember.Component.extend({
  classNames: 'new',

  actions:{

    saveAlbum(title, artist, studio, releaseYear, imageURL, body){
      this.sendAction('saveAlbum', title, artist, studio, releaseYear, imageURL, body);
      set(this,'title','');
      set(this,'artist','');
      set(this,'studio','');
      set(this,'releaseYear','');
      set(this,'imageURL','');
      set(this,'body','');
    }

  }
});
