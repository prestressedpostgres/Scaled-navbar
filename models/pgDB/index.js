const config = require('../../env/config.js').db.postGres;
const Pool = require('pg').Pool
const pool = new Pool({
    user: config.user,
    host: config.host,
    database: config.name,
    password: config.postGresPass,
    port: config.port
});


pool.connect(function (err) {
  if (err)
    console.log(err);
  else
    console.log(" PGDB Connected!");
});

//gets all restaurants from the database -- do not recommend using
const getRestaurants = (request, response) => {
  pool.query('SELECT * FROM restaurants ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//gets a restaurant by id
const getRestaurantById = (request, response) => {
  var id = request.params.id;
  pool.query(`SELECT * FROM restaurants WHERE id = '${id}'`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//creates a new restaurant. Only allows user to post if the id does not already exist
const createRestaurant = (request, response) => {
  pool.query(`INSERT INTO restaurants (id, name, city, state) VALUES (${request.body.id},\ 
    '${request.body.name}', '${request.body.city}', '${request.body.state}')`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Restaurant added with ID: ${request.body.id}`)
    })
}


//updates a restaurant using the restaurant's id
const updateRestaurant = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, city, state } = request.body

  pool.query(
    `UPDATE restaurants SET name = $1, city = $2, state = $3 WHERE id = ${id}`,
    [name, city, state],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Restaurant modified with ID: ${id}`)
    }
  )
}

//deletes a restaurant using the restaurant's id
const deleteRestaurant = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM restaurants WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Restaurant deleted with ID: ${id}`)
  })
}

module.exports = {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
}
