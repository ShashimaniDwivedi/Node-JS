const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log('DB Connection Successful');
  });
//enviroment variables
// console.log(process.env);
//tourSchema is a structure that tells Mongoose how a "tour" should look.

//A new tour (testTour) is created with the specified name, rating, and price
/* const testTour = new Tour({
  name: 'The Forest Hike',
  rating: 4.7,
  price: 497,
});
//used to save data to database
//The testTour.save() function saves this new tour to the database. If it works, it logs the saved document (doc), otherwise, it catches and logs any error that happens during the process.

testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => console.log('Some error occurred'));
  */
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on ${port}`);
});
