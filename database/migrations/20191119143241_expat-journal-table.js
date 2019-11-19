
exports.up = function(knex) {
  return knex.schema
  .createTable('stories', table => {
      table.increments()
      table.string('title', 150)
           .notNullable()
       table.string('date_trip')
            .notNullable();
       table.text('story')
            .notNullable()
       table.text('date_posting')
            .notNullable()
  })

  .createTable('locations', table => {
    table.increments()
    table.string('city')
         .notNullable()
    table.string('country')
         .notNullable()
  })

  .createTable('photos', table =>{
      table.increments()
      table.string('photo_url')
           .notNullable()
      table.string('description')
           .notNullable()
      table.integer('story_id')
           .notNullable()
           .unsigned()
           .references('id')
           .inTable('stories')
           .onDelete('CASCADE')
           .onUpdate('CASCADE')

  })

  .createTable('location_stories', table => {
      table.increments()
      table.integer('story_id')
           .unsigned()
           .notNullable()
           .references('id')
           .inTable('stories')
           .onDelete('CASCADE')
           .onUpdate('CASCADE')
     table
           .integer("location_id")
           .unsigned()
           .notNullable()
           .references("id")
           .inTable("locations")
           .onUpdate("CASCADE")
           .onDelete("CASCADE");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('location_stories')
                    .dropTableIfExists('photos')
                    .dropTableIfExists('locations')
                    .dropTableIfExists('stories')
};
