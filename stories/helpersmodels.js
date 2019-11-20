const db= require('../database/db-config')

module.exports = {
    getStories,
    getStoriesById
};


function getStories(){
    return db('location_stories as LS')
    .join('stories as S', 'LS.story_id', 'S.id')
    .join('locations as L', 'LS.location_id', 'L.id')
    .join("photos as P", "P.story_id", "S.id")
  
    .select('S.id','S.title', 'S.story', 'S.date_trip','L.city', 'L.country', 'P.photo_url', 'P.description')

}


function getStoriesById(id) {
    return db("location_stories as LS")
      .join("stories as S", "LS.story_id", "S.id")
      .join("locations as L", "LS.location_id", "L.id")
      .join("photos as P", "P.story_id", "S.id")
      .select(
        "S.id",
        "S.title",
        "S.story",
        "S.date_trip",
        "L.city",
        "L.country",
        "P.photo_url",
        "P.description"
      )
      .where("S.id", id)
      .first();
}

function updateStories(id, changes){

}

//put, delete, edit 