import Ember from 'ember';
import cleanURI from '../clean/util';
import getOrCreateUser from '../get-or-create-user/util';

const {get, set } = Ember;

export default Ember.Route.extend({

  actions: {
    save(title, artist, studio, releaseYear, imageURL, body) {
      let user = null;
      let titleURL = cleanURI(title);
      let uid = get(this, 'session.uid');
      let date = new Date();
      let album = this.store.createRecord('album', {
        title: title,
        artist: artist,
        studio: studio,
        releaseYear: releaseYear,
        imageURL: imageURL,
        body: body,
        titleURL: titleURL,
        date: date
      });

      user = getOrCreateUser(uid, get(this, 'session.currentUser.username'),
                             get(this, 'session.currentUser.profileImageURL'),
                             this.store);
      user.then((userData) => {
        userData.get('albums').addObject(album);
        album.save().then(() => {
          return userData.save();
        });

      });

      set(this, 'title', '');
      set(this, 'artist', '');
      set(this, 'studio', '');
      set(this, 'releaseYear', '');
      set(this, 'imageURL', '');
      set(this, 'body', '');
      this.transitionTo('index');
    }
  }
});
