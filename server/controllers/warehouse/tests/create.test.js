// create.test.js
const create = require("../create");
const Warehouse = require("server/models/Warehouse.js");
const httpMocks = require("node-mocks-http");

jest.mock("server/models/Warehouse.js", () => ({
  findOne: jest.fn(),
  save: jest.fn(),
}));

describe("create warehouse controller", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mocks before each test
  });

  it("should return validation error if data is invalid", async () => {
    const request = httpMocks.createRequest({
      method: "POST",
      url: "/warehouse/create",
      body: { name: "", zones: [] },
    });
    const response = httpMocks.createResponse();

    await create(request, response);

    expect(response.statusCode).toBe(400);
    expect(response._getJSONData().error).toMatch(/ValidationError/i);
  });

  it("should return error if warehouse name is not unique", async () => {
    Warehouse.findOne.mockResolvedValueOnce({ name: "Test Warehouse" });

    const request = httpMocks.createRequest({
      method: "POST",
      url: "/warehouse/create",
      body: {
        name: "Test Warehouse",
        zones: new Array(12).fill({ zoneNumber: 1, shelves: [] }),
      },
    });
    const response = httpMocks.createResponse();

    await create(request, response);

    expect(response.statusCode).toBe(400);
    expect(response._getJSONData().message).toMatch(
      /A warehouse already exists/i
    );
  });
  //TODO: Fix this test. It's failing because of the way the Warehouse model is being mocked. May need to try a different framework for testing the back end as Jest is having a lot of issues with Mongoose.
  // it("should create a new warehouse successfully", async () => {
  //   Warehouse.findOne.mockResolvedValueOnce({ name: "Test Warehouse" });
  //   // const saveMock = jest.fn().mockResolvedValueOnce({});
  //   // Warehouse.mockImplementation(() => {
  //   //   return { save: saveMock };
  //   // });

  //   const request = httpMocks.createRequest({
  //     method: "POST",
  //     url: "/warehouse/create",
  //     body: {
  //       name: "Test Warehouse",
  //       zones: new Array(12).fill({
  //         zoneNumber: 1,
  //         shelves: [],
  //       }),
  //     },
  //   });
  //   const response = httpMocks.createResponse();

  //   await create(request, response);

  //   expect(response.statusCode).toBe(201);
  //   expect(response._getJSONData().message).toBe(
  //     "Successfully created warehouse"
  //   );
  // });
});
