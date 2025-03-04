const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});


const { MongoClient, ServerApiVersion,ObjectId } = require("mongodb");
const uri = "mongodb+srv://sanskarpandey495:zerotwo02@cluster0.g7yymvk.mongodb.net/?retryWrites=true&w=majority";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      const bookCollection = client.db("bookInventory").collection("books")
      const useraCollection = client.db("bookInventory").collection("users")

      // app.post("/register",async(req,res) => {
      //   const {username,password}= req.body
      //   const user =await useraCollection.findOne({username})
      //   if(user) {
      //     res.status(400).send("User already exists!")
      // }
      // const result = await useraCollection.insertOne({username, password});
      // })

      app.post('/upload-book',async (req,res) => {
          const data = req.body
          const results = await bookCollection.insertOne(data)
        res.send(results)
        console.log(req.body)
      })
    
    
    app.get('/all-books', async (req, res) => {
      const books = bookCollection.find()
      const results = await books.toArray()
      res.send(results)
    })


    app.patch('/update-book/:id', async (req, res) => {
      const id = req.params.id
      const data = req.body
      const filter = { _id: new ObjectId(id) }
      const updateDoc = {
        $set:
        {
          ...data
        },
      }
      const options = { upsert: true }
      const results = await bookCollection.updateOne(filter, updateDoc, options)
      console.log(results)
      console.log(data)
      res.send(results)
    })

    app.delete('/delete-book/:id', async (req, res) => {
      const id = req.params.id
      const results = await bookCollection.deleteOne({ _id: new ObjectId(id) })
      res.send(results)
    })

    app.get('/filter-books/:category', async (req, res) => {
      const id = req.params.category;
      const books = bookCollection.find({ category:category })
      const results = await books.toArray();
      res.send(results)
    })

    app.get('/filter-books-id/:id', async (req, res) => {
      const id = req.params.id;
      const books = await bookCollection.findOne({ _id: new ObjectId(id) })
      console.log(books)
      res.send(books)
    })

    app.get('/single-book/:id', async (req, res) => {
      const id = req.params.id;
      const results = await bookCollection.findOne({ _id: new ObjectId(id)})
      res.send(results)
    })
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
//    await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
