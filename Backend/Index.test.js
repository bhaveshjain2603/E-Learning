import request from 'supertest';
import app from './index.js';

describe("Authentication API Tests", () => {
 
  it("should log in a user with correct credentials", async () => {
    const res = await request(app).post("/user/login").send({
      email: "john@example.com",
      password: "password123",
    });

    expect(res.statusCode).toBe(200);
  });

  it("should not log in with incorrect credentials", async () => {
    const res = await request(app).post("/user/login").send({
      email: "john@example.com",
      password: "password12",
    });
    expect(res.statusCode).toBe(400);
  });
});
