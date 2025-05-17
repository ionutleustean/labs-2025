import express from 'express'
import bodyParser from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors()) // allow requests from Angular app
app.use(bodyParser.json()) // To parse JSON request bodies

let pizzas = [
  {
    id: 'pizza_0_0',
    imageUrl: '/pizzas/pizza_0_0.png',
    name: 'Margherita',
    description: 'Classic pizza with tomato sauce and mozzarella cheese.',
    price: 8.99,
    ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Basil'],
    hotness: 0
  },
  {
    id: 'pizza_0_1',
    imageUrl: '/pizzas/pizza_0_1.png',
    name: 'Pepperoni',
    description: 'Spicy pepperoni with mozzarella cheese and tomato sauce.',
    price: 9.99,
    ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Pepperoni'],
    hotness: 4
  },
  {
    id: 'pizza_0_2',
    imageUrl: '/pizzas/pizza_0_2.png',
    name: 'Vegetarian',
    description: 'Loaded with fresh vegetables and mozzarella cheese.',
    price: 10.49,
    ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Bell Peppers', 'Olives', 'Onions'],
    hotness: 0
  },
  {
    id: 'pizza_1_0',
    imageUrl: '/pizzas/pizza_1_0.png',
    name: 'BBQ Chicken',
    description: 'Grilled chicken with BBQ sauce and red onions.',
    price: 11.49,
    ingredients: ['BBQ Sauce', 'Mozzarella Cheese', 'Grilled Chicken', 'Red Onions'],
    hotness: 2
  },
  {
    id: 'pizza_1_1',
    imageUrl: '/pizzas/pizza_1_1.png',
    name: 'Hawaiian',
    description: 'Ham and pineapple on a classic pizza base.',
    price: 10.99,
    ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Ham', 'Pineapple'],
    hotness: 1
  },
  {
    id: 'pizza_1_2',
    imageUrl: '/pizzas/pizza_1_2.png',
    name: 'Meat Lovers',
    description: 'A carnivore\'s dream with various meats and cheese.',
    price: 12.99,
    ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Pepperoni', 'Sausage', 'Bacon'],
    hotness: 3
  },
  {
    id: 'pizza_2_0',
    imageUrl: '/pizzas/pizza_2_0.png',
    name: 'Buffalo Chicken',
    description: 'Spicy buffalo chicken with blue cheese dressing.',
    price: 11.99,
    ingredients: ['Buffalo Sauce', 'Mozzarella Cheese', 'Grilled Chicken', 'Blue Cheese'],
    hotness: 1
  },
  {
    id: 'pizza_2_1',
    imageUrl: '/pizzas/pizza_2_1.png',
    name: 'Four Cheese',
    description: 'A blend of four delicious cheeses on a crispy crust.',
    price: 10.99,
    ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Parmesan', 'Gorgonzola', 'Ricotta'],
    hotness: 0
  },
  {
    id: 'pizza_2_2',
    imageUrl: '/pizzas/pizza_2_2.png',
    name: 'Pesto Veggie',
    description: 'Fresh vegetables with pesto sauce and mozzarella cheese.',
    price: 10.49,
    ingredients: ['Pesto Sauce', 'Mozzarella Cheese', 'Zucchini', 'Spinach', 'Feta Cheese'],
    hotness: 0
  },
];

let stores = [
  {
    id: 's1',
    imageUrl: '/stores/store1.png',
    name: 'Unirii',
    description: 'Located in the Unirii Square, the heart of the city',
    address: 'Unirii Square, no 15'
  },
  {
    id: 's2',
    imageUrl: '/stores/store2.png',
    name: 'Traian',
    description: 'Located in Traian Square, a new hip location',
    address: 'Traian Square, no 29'
  },
  {
    id: 's3',
    imageUrl: '/stores/store3.png',
    name: 'Iulius',
    description: 'Located in the biggest shopping mall of the city',
    address: 'Iulius Town, ground floor'
  }
];

let customers = [
  {
    id: 'c1',
    firstName: 'Mihai',
    lastName: 'Vulpe',
    age: 31,
    city: 'Timisoara',
    country: 'Romania'
  },
  {
    id: 'c2',
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    city: 'London',
    country: 'United Kingdom'
  },
  {
    id: 'c3',
    firstName: 'Vivian',
    lastName: 'Wehrle',
    age: 29,
    city: 'Zurich',
    country: 'Switzerland'
  },
  {
    id: 'c4',
    firstName: 'Luis',
    lastName: 'Fernandez',
    age: 45,
    city: 'Lisbon',
    country: 'Portugal'
  },
  {
    id: 'c5',
    firstName: 'Jyoti',
    lastName: 'Verma',
    age: 30,
    city: 'Mumbai',
    country: 'India'
  },
  {
    id: 'c6',
    firstName: 'Giorgios',
    lastName: 'Marinakis',
    age: 55,
    city: 'Athens',
    country: 'Greece'
  },
];

app.get('/api/pizzas', (req, res) => {
  res.json(pizzas)
})

app.get('/api/stores', (req, res) => {
  res.json(stores)
})

app.get('/api/customers', (req, res) => {
  res.json(customers)
})

app.get('/api/stores/:id', (req, res) => {
  const id = req.params['id']
  const aStore = stores.find(item => item.id === id)
  res.json(aStore)
})

app.get('/api/customers/:id', (req, res) => {
  const id = req.params['id']
  const aCustomer = customers.find(item => item.id === id)
  res.json(aCustomer)
})

app.get('/api/auth', (req, res) => {
  res.json(false)
})

app.post('/api/pizzas', (req, res) => {
  const {id, imageUrl, name, description, price, ingredients, hotness} = req.body

  if (!name || !description) {
    return res.status(400).json({message: 'Name and description are required.'})
  }

  const tempPizzas = [...pizzas];
  const index = tempPizzas.findIndex(p => p.id === id)

  const newPizza = {id, imageUrl, name, description, price, ingredients, hotness}
  if (index !== -1) {
    tempPizzas[index] = newPizza
    pizzas = tempPizzas
  } else {
    pizzas = [...tempPizzas, newPizza]
  }

  // Send back the newly added pizza
  res.status(201).json(newPizza)
})

app.post('/api/customers', (req, res) => {
  const {id, firstName, lastName, age, city, country} = req.body

  if (!firstName || !lastName) {
    return res.status(400).json({message: 'First Name and Last Name are required.'})
  }

  const tempCustomers = [...customers];
  const index = tempCustomers.findIndex(p => p.id === id)

  const newCustomer = {id, firstName, lastName, age, city, country}
  if (index !== -1) {
    tempCustomers[index] = newCustomer
    customers = tempCustomers
  } else {
    return res.status(400).json({message: 'No customer found with this ID.'})
  }

  res.status(201).json(newCustomer)
})

app.delete('/api/pizzas/:id', (req, res) => {
  const id = req.params['id']
  pizzas = pizzas.filter(item => item.id !== id)
  // Send back the newly added pizza
  res.status(201).json("deleted successfully!")
})


app.listen(PORT, () => {
  console.log(`✅ Mock API running at http://localhost:${PORT}`)
})
