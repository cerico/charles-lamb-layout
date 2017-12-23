const initialState = [{
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
  number: 7
},{
  name: "Football",
  page:  '/rocogo',
  description: "Football Mapping",
  color:  "rgb(246, 235, 213)",
  cols:  "2",
  direction:  'column',
  background:  '#22314b',
  url:  "http://malham.io",
  logo: 'http://malham.io/static/206c8e0ff48823e13b036fd90c5abdd8.png',
  textOne: "React",
  textTwo: "D3",
  textThree: "Docker",
  textFour: "NodeJS",
  textFive: "Redux",
  number: 7
},{
  name: "Diagnostics",
  page:  '/rocogo',
  description: "Diagnotics Tool",
  color:  "rgb(246, 235, 213)",
  cols:  "2",
  direction:  'column',
  background:  'rgb(64, 116, 69)',
  url:  "http://diagnostics.malham.io",
  // logo: 'http://malham.io/static/206c8e0ff48823e13b036fd90c5abdd8.png',
  textOne: "React",
  textTwo: "Redux",
  textThree: "Rails",
  mini: false,
  number: 14
},{
  name: "Musico",
  page:  '/rocogo',
  description: "A music player",
  color:  "rgb(246, 235, 213)",
  cols:  "2",
  direction:  'row',
  background:  'rgb(79, 92, 191)',
  url:  "http://musico.malham.io",
  logo: 'http://malham.io/static/206c8e0ff48823e13b036fd90c5abdd8.png',
  textOne: "React",
  textTwo: "Redux",
  number: 12
},{
  name: "Homepage",
  page:  '/rocogo',
  description: "Homepage",
  color:  "rgb(246, 235, 213)",
  cols:  3,
  direction:  'column',
  background:  'rgb(176, 100, 45)',
  url:  "http://malham.io",
  logo: 'http://malham.io/static/206c8e0ff48823e13b036fd90c5abdd8.png',
  textOne: "React",
  textTwo: "Redux",
  textThree: "D3",
  number: 4
},{
  name: "Spare",
  page:  '/rocogo',
  description: "hartlepool 2 sheffield united 4",
  color:  "#222",
  cols:  3,
  direction:  'column',
  background:  'rgb(230, 185, 185)',
  url:  "http://www.google.com",
  textOne: "React",
  textTwo: "Redux",
  textThree: "Rails",
  textFour: "Docker",
  textFive: "D3",
  number: 10
}]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS':
      return action.products;
    default:
      return state;
  }
}