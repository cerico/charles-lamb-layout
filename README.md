#Hello Cards

![screenshot](https://s3.eu-west-2.amazonaws.com/io1937/screenshots/hello-cards.jpeg)

## TLDR / What is it?

Portfolio Component Cards predesigned

## How Do I use it?

### Install

```
➜  yesmate git:(dev) npm i hello-cards
```

### Import

Import into your react component

```
import Card from 'hello-cards';
```

### Include

Include in your react component

```
<Card product={product}/>
```

### Object

The card takes an object, here is an example object

```
const product = {
  name: "Roco Go",
  page:  '/rocogo',
  description: "Dispatching Tool",
  color:  "rgb(246, 235, 213)",
  cols:  3,
  direction:  'column',
  background:  '#222',
  url:  "http://www.rocopartners.com",
  logo: 'http://malham.io/roco-wide.png',
  textOne: "React",
  textTwo: "Redux",
  textThree: "Rails",
  textFour: "Docker",
  textFive: "Heroku",
  number: 7,
  mini:false
}
```

Any of the properties here can be edited, eg, column and row provide different views, the number shows if there is no logo. mini:true shows a smaller sized card

### Example

To see an example project in an action, clone this repo, cd into example, run npm install and npm run dev. The example project has and array of product objects, and can also be viewed at http://hello-cards-example.malham.io

```
➜  /tmp git clone https://github.com/cerico/hello-cards.git
➜  /tmp cd hello-cards
➜  hello-cards git:(master) cd example
➜  example git:(master) npm install
➜  example git:(master) npm run dev
```

Browse to http://localhost:3404

There is also a Makefile for easier use, you can run all examples from top level, using this

```
➜  hello-cards git:(master) make setup
➜  hello-cards git:(master) make go
```
