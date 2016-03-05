import Ember from 'ember';
const {get, set} = Ember;

export default Ember.Component.extend({
  isEditing: false,

  classNames: 'edit',

  isAllowed: Ember.computed('model.firstObject.user.username','session.currentUser.username', function(){
    return get(this,'model.firstObject.user.username') === get(this,'session.currentUser.username');
  }),

  actions:{
    save(album){
      let sessionName = get(this,'session.currentUser.username');
      if(sessionName === album.get('user.username')){
         set(this, 'isEditing', false);
         this.sendAction('save',album);

      } else {
        alert('Sorry not authorized');
      }

    },

    edit(){
      set(this, 'isEditing', true);
    },

    delete(album){
      this.sendAction('delete', album);
      set(this, 'isEditing', false);
    },

    createReview(author, body, album){
      this.sendAction('createReview', author, body, album);
    }
  }
});
