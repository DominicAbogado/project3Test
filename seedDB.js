
[{
  "id": 1,
  "title": "Hydraulic Hijinks (SM-1)",
  "description": "Technological problem-solving skills to design, build and test a structure and mechanical system that performs a different types of mechanical systems",
  "offerings":
    [
      {
      "grade": 5,
      "topic": "Technological problem-solving skills to design, build and test a structure and mechanical system that performs a different types of mechanical systems",
      "curriculum": "Understanding Structures and Mechanisms: Forces Acting on Structures and Mechanisms",
      "connection": "Mechanical Engineering"
    },
    {
    "grade": 7,
    "topic": "Safety procedures for using tools and handling materials; physical models that investigate the effects of various forces on structures",
    "curriculum": "Understanding Structures and Mechanisms: Form and Function",
    "connection": "Mechanical Engineering"
    },
    {
      "grade": 8,
      "topic": "Technological problem-solving skills to investigate a system that performs a function; relationship between work, force and distance; mechanical advantage",
      "curriculum": "Understanding Structures and Mechanisms: Systems in Action",
      "connection": "Mechanical Engineering"
      }
  ]
},
{
  "id": 2,
  "title": "Colossal Superstructures (SM-2)",
  "description": "Students will design, build and test structures that can withstand applied loads.",
  "offerings":
  [
    {
      "grade": 3,
      "topic": "Technological problem-solving skills and knowledge to design and build a strong and stable structure that serves a purpose",
      "curriculum": "Understanding Structures and Mechanisms: Strong and Stable Structures",
      "connection": "Civil Engineering"
    },
    {
      "grade": 5,
      "topic": "Factors that impact the strength of a structure and its ability to support and resist loads; materials and construction techniques that add strength and stability to structures; vocabulary, including compression, tension, strength and stability; problemsolving skills in designing, building and testing a strong structure that serves a purpose",
      "curriculum": "Understanding Structures and Mechanisms: Forces Acting on Structures and Mechanisms",
      "connection":
        "Civil Engineering"
      
    },
    {
      "grade": 7,
      "topic": "Factors that determine the ability of a structure to support a load; problem-solving skills that determine the most ef cent way for a structure to support a given load",
      "curriculum":"Understanding Structures and Mechanisms: Form and Function",
      "connection":
        "Civil Engineering"
      
    }
  ]

},
{
  "id": 3,
  "title": "Indy 500 (SM-3)",
  "description": "Students will design, build and test a model racecar",
  "offerings":
  [
    {
      "grade": 4,
      "topic": "Investigations into rotary motion in one system or its components and how energy is transferred to another system or component in the same structure",
      "curriculum": "Understanding Structures and Mechanisms: Pulleys and Gears",
      "connection": "Mechanical Engineering"     
    },
    {
      "grade": 5,
      "topic": "Technological problem-solving skills to design, build and test a structure; external forces acting on a structure; design, build and test integrating principles of aerodynamics; evolution and change in systems",
      "curriculum": "Understanding Structures and Mechanisms: Forces Acting on Structures and Mechanisms",
      "connection": "Mechanical Engineering"
    },
    {
      "grade": 6,
      "topic": "Applications of the properties of air; different forces (thrust, drag, lift, weight); design, build and test integrating principles of aerodynamics",
      "curriculum": "Understanding Structures and Mechanisms: Flight",
      "connection":
        "Mechanical Engineering"
      
    }
  ]
},
{
  "id": 4,
  "title": "Forensic Fun (LS-3)",
  "description": "Students will use knowledge of chemical interactions to solve a mystery.",
  "offerings":[
    {
      "grade":5,
      "topic": "Assess the effects of social and environmental factors on human health, and propose ways in which individuals can reduce the harmful effects of these factors",
      "curriculum": "Understanding Life Systems: Relating Science and Technology to Society and the Environment",
      "connection": "Chemistry / Chemical Engineering"
    },
    {
      "grade": 6,
      "topic": "Following established safety procedures for outdoor activities and field work",
      "curriculum":"Understanding Life Systems: Developing Investigation and Communication Skills",
      "connection":"Chemistry / Chemical Engineering"
    },
    {
      "grade": 7,
      "topic":"Human activities and technologies that alter balances and interactions in the environment",
      "curriculum":"Understanding Life Systems: Interactions in the Environment",
      "connection": "Chemistry / Chemical Engineering"
    }
  ]
}
]

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
