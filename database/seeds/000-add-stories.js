
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("stories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("stories").insert([
        {
          title: "A trip to Kiney Lake",
          date_trip: "12-5-2018",
          story:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
            date_posting: '16-5-2018'
        },
        {
          title: "The best locations in France",
          date_trip: "12-6-2018",
          story:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
            date_posting: '16-6-2018'
        },
        {
          title: "The best lake in the World Lake Brienz",
          date_trip: "12-7-2018",
          story:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
            date_posting: '16-7-2018'
        },
        {
          title: "A stary night in the canyon",
          date_trip: "12-8-2018",
          story:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
            date_posting: '16-8-2018'
        },
        {
          title: "A day at the horshoe-bend",
          date_trip: "12-9-2018",
          story:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
            date_posting: '16-9-2018'
        },
        {
          title: "Field trip in the Snow",
          date_trip: "12-10-2018",
          story:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
            date_posting: '16-10-2018'
        },
        {
          title: "The Black Beaches of Australia",
          date_trip: "12-11-2018",
          story:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
            date_posting: '16-11-2018'
        }
      ]);
    });
};
