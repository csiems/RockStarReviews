import Ember from 'ember';
import cleanURI from '../clean/util';
import getOrCreateUser from '../get-or-create-user/util';
const {get} = Ember;

export default Ember.Route.extend({
  model(param) {
    return this.store.query('album', {orderBy: 'titleURL', equalTo: param.titleURL });
  },
  actions:{

    delete(album){
      album.deleteRecord();
      album.save();
      this.transitionTo('index');
    },

    save(album){
      let titleURL = cleanURI(album.get('title'));
      album.set('titleURL', titleURL);
      album.save();
      this.transitionTo('index');
    },

    createReview(author, body, album){
      let user = null;
      let review = this.store.createRecord('review', {
        body: body
      });
      let uid = author.get('uid');
      user = getOrCreateUser(uid,
        get(this,'session.currentUser.username'),
        get(this,'session.currentUser.profileImageURL'),
        this.store);
      user.then((userData)=>{
        userData.get('reviews').addObject(review);
        album.get('reviews').addObject(review);
        return review.save().then(()=>{
                                   console.log('review saved succesfully');
                                   return album.save();
                                 })
                                 .catch((error)=>{
                                   console.log(`review:  ${error}`);
                                   review.rollbackAttributes();
                                 })
                                 .then(()=>{
                                   console.log('album saved successfuly');
                                   return userData.save();
                                 })
                                 .catch((error)=>{
                                   console.log(`album:  ${error}`);
                                   album.rollbackAttributes();
                                 })
                                 .then(()=>{
                                   console.log('user saved successfuly');
                                 })
                                 .catch((error)=>{
                                   console.log(`user:  ${error}`);
                                   user.rollbackAttributes();
                                 });

      });

    }
  }
});
