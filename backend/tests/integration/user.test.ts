import supertest from "supertest";

import app from "./../../src/app";
import { connectdb } from "../../src/database";

afterAll( async () => {
    const database = await connectdb();
    database.collection("userCollection").drop();
});

describe("POST /user", () => {
    it("tries to post with valid data", async () => {

    });
});
