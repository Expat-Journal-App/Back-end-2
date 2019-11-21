const db= require('../database/db-config')

module.exports = {
    getStories,
    getStoriesById,
    addStory, deleteStory
};


function getStories(){
    return db('location_stories as LS')
    .join('stories as S', 'LS.story_id', 'S.id')
    .join('locations as L', 'LS.location_id', 'L.id')
    .join("photos as P", "P.story_id", "S.id")
  
    .select('S.id','S.title', 'S.story', 'S.date_trip','S.date_posting','L.city', 'L.country', 'P.photo_url', 'P.description')

}


function getStoriesById(id) {
    return db("location_stories as LS")
      .join("stories as S", "LS.story_id", "S.id")
      .join("locations as L", "LS.location_id", "L.id")
      .join("photos as P", "P.story_id", "S.id")
      .select("S.id", "S.title","S.story","S.date_trip","L.city","L.country","P.photo_url","P.description")
      .where("S.id", id)
      .first();
}

function addPhoto(story, storyId) {
  return db("photos").insert({
    photo_url: story.photo_url,
    description: story.description,
    story_id: storyId
  });
}

function addLocation(story) {
  return db("locations").insert({
    city: story.city,
    country: story.country
  });
}

function addLocationStory(storyId, locationId) {
  return db("location_stories").insert({
    story_id: storyId,
    location_id: locationId
  });
}



function addStory(story) {
  return db("stories")
    .insert({
      title: story.title,
      story: story.story,
      date_trip: story.date_trip,
      date_posting: story.date_posting
    })
    .then(storyId => {
      const newPhoto = addPhoto(story, storyId[0]);
      const newLocation = addLocation(story);
      return Promise.all([newPhoto, newLocation])
        .then(data => {
          return addLocationStory(storyId[0], data[1][0])
            .then(() => {
              return getStoriesById(storyId[0]);
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    });
}


function deleteStory(id) {
  return db("stories")
    .where("id", id)
    .del();
}




//put, delete, edit 