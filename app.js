
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/FruitDB", {useNewUrlParser:true });

const fruitSchema = new mongoose.Schema({
  name:String,
  rating:Number,
  review:String
});
const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
  name:"apple",
  rating:7,
  review:"pretty hard to eat"
});

const personSchema = new mongoose.Schema({
  name:String,
  age:Number,
});
const person= mongoose.model("person",personSchema);

const Person= new person({
  name:"sam",
  age:21
})
