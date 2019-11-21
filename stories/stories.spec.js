const request = require('supertest');
const server = require('../api/server');
const stories = require('./helpersmodels');
const db = require('../database/db-config');


describe("stories endpoint", () => {
    test("with supertest syntax", () => {
        return request(server)
            .get("/api/stories")
            .expect("Content-Type", /json/);
    });
  });

  



