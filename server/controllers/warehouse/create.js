const joi = require("joi");
const Warehouse = require("../../models/Warehouse");

async function create(request, response, next) {
  try {
    // Validate request data
    await joi
      .object({
        name: joi.string().required(),
        zones: joi
          .array()
          .max(12)
          .min(12)
          .items(
            joi
              .object({
                zoneNumber: joi.number().required(),
                shelves: joi
                  .array()
                  .max(10)
                  .items(
                    joi.object({
                      name: joi.string().required(),
                    })
                  ),
              })
              .required()
          ),
      })
      .validateAsync(request.body);
  } catch (error) {
    return response.status(400).json({
      error: "ValidationError",
      message: error.message,
    });
  }

  try {
    const { name, zones } = request.body;

    // Verify warehouse name is unique
    const existingWarehouse = await Warehouse.findOne({ name });
    if (existingWarehouse) {
      return response.status(400).json({
        error: name,
        message: "A warehouse already exists with that name",
      });
    }

    // Create warehouse
    const newWarehouse = new Warehouse({ name, zones });
    await newWarehouse.save();

    response.status(201).json({
      message: "Succesfully created warehouse",
      data: newWarehouse,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).send();
  }
}

module.exports = create;
