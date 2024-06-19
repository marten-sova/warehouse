const Warehouse = require('../../models/Warehouse')

async function list(request, response, next) {
  try {
    const warehouses = await Warehouse.find({})

    response.status(201).json({
      message: 'Succesfully retrieved list of all warehouses',
      data: warehouses,
    })
  } catch (error) {
    console.error(error)
    return response.status(500).send()
  }
}

module.exports = list