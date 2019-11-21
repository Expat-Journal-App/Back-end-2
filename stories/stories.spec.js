const request = require('supertest');
const server = require('../api/server');


describe("stories endpoint", () => {
    test("with supertest syntax", () => {
        return request(server)
            .get("/api/stories")
            .expect("Content-Type", /json/);
    });
  });