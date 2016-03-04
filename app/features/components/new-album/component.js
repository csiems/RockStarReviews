import Ember from 'ember';

const {set} = Ember;

export default Ember.Component.extend({
  classNames: 'new',

  actions:{

    save(title, body){
      this.sendAction('save', title, artist, studio, releaseYear, imageURL, body);
      set(this,'title','');
      set(this,'artist','');
      set(this,'studio','');
      set(this,'releaseYear','');
      set(this,'imageURL','');
      set(this,'body','');
    }
    
  }
});
