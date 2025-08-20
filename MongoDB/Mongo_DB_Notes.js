//collection created at the time of creation on way to create collection as well as creation
db.sample.insertMany({
  _id: 1,
  name: "John Doe",
  hobbies: ["Swimming", "Dancing"],
  scores: [3, 45],
  items: [
    { name: "Phone", price: 600 },
    { name: "Laptop", price: 1500 },
  ],
});

db.StudentData.insertMany([
  {
    studentId: "S001",
    name: "Alice Johnson",
    age: 20,
    gender: "Female",
    major: "Computer Science",
    enrolled: true,
    courses: ["CS101", "MATH202"],
    gpa: 3.8,
  },
  {
    studentId: "S002",
    name: "Bob Smith",
    age: 22,
    gender: "Male",
    major: "Electrical Engineering",
    enrolled: true,
    courses: ["EE101", "PHYS201"],
    gpa: 3.4,
  },
  {
    studentId: "S003",
    name: "Clara Zhang",
    age: 21,
    gender: "Female",
    major: "Biology",
    enrolled: false,
    courses: ["BIO101", "CHEM101"],
    gpa: 3.6,
  },
  {
    studentId: "S004",
    name: "David Lee",
    age: 23,
    gender: "Male",
    major: "Mechanical Engineering",
    enrolled: true,
    courses: ["ME101", "MATH202"],
    gpa: 3.2,
  },
  {
    studentId: "S005",
    name: "Eva Martinez",
    age: 20,
    gender: "Female",
    major: "Mathematics",
    enrolled: true,
    courses: ["MATH101", "CS101"],
    gpa: 3.9,
  },
]);

//12 digit id 4bytes timestamp 5byte randomvalue  3bytes incrementing counter

//db.ColectionName.find({},field:value1,field:value2)

//Condtitons in MONGODB
//$eq  $ne  $gt  $gte  $lt
db.StudentData.find({
  name: { $eq: "David Lee" },
});

db.StudentData.find({
  age: { $gte: 21 },
});

db.StudentData.find({
  major: { $in: ["Mechanical Engineering", "Biology"] },
});

//multiple conditions using logical operator
db.StudentData.find({
  $and: [
    {
      age: { $gte: 21 },
    },
    {
      name: { $eq: "David Lee" },
    },
  ],
});

db.StudentData.find({
  $and: [
    {
      age: { $gte: 21 },
    },
    {
      name: { $not: { $eq: "David Lee" } },
    },
  ],
});

//$exists
db.StudentData.find({
  age: { $exists: true },
});

//$type
db.StudentData.find({
  name: { $type: 8 }, //bool
});

db.StudentData.find({
  $and: [
    {
      name: { $exists: true, $type: "string", $eq: "David Lee" },
    },
  ],
});

db.StudentData.find({
  $and: [
    { gpa: { $exists: true } },
    { gpa: { $type: 1 } },
    { age: { $gte: 24 } },
  ],
});

db.DatesDemo.insertMany([
  {
    _id: 1001,
    info: "Date by using Date()",
    DOJ: Date(), // String format date and time
  },
]);

db.DatesDemo.insertMany([
  {
    _id: 1002,
    info: "Date by using new Date()",
    DOJ: new Date(), //Date as object
  },
]);

db.DatesDemo.insertMany([
  {
    _id: 1003,
    info: "Date by using  ISODate()",
    DOJ: new ISODate(), //Date as object
  },
]);

db.DatesDemo.insertMany([
  {
    _id: 1005,
    info: "Date by using  Date()",
    DOB: new Date("2004-12-14"), //Date as object
  },
]);

db.DatesDemo.find(
  { DOJ: { $type: "date" } },
  {
    Date_of_join: {
      $dateToString: {
        date: "$DOJ",
        format: "%d-%b-%Y %H-%M-%S",
        timezone: "Asia/Kolkata",
      },
    },
  }
);

db.StudentData.updateOne(
  {
    name: { $eq: "David Lee" },
  },
  {
    $set: { age: 30 },
  }
);

db.StudentData.updateOne(
  {
    name: { $in: ["Ansh", "David Lee"] },
  },
  {
    $set: { age: 40 },
  },
  { upsert: true }
);

db.StudentData.updateMany(
  {},
  {
    $rename: { name: "StuName", major: "stream" },
  }
);

db.StudentData.updateOne(
  {
    StuName: { $eq: "Aman" },
  },
  {
    $unset: { age: "" },
  }
);

db.StudentData.deleteOne({ StuName: { $eq: "Aman" } });

db.StudentData.updateMany(
  {
    StuName: { $in: ["David Lee", "Clara Zhang"] },
  },
  {
    $set: { bio: "This is about MongoDB Course" },
  }
);

db.StudentData.updateMany(
  {
    StuName: { $in: ["Eva Martinez", "Bob Smith"] },
  },
  {
    $set: { bio: "This is about MERN Course" },
  }
);

db.StudentData.updateMany(
  {
    StuName: { $in: ["Alice Johnson"] },
  },
  {
    $set: { bio: "This is about MERN Course" },
  }
);

db.StudentData.find({
  StuName: /viD/,
});

db.StudentData.find({
  StuName: /viD/i,
});

//start from C
db.StudentData.find({
  StuName: /^C/i,
});

db.StudentData.find({
  StuName: /lra$/i,
});

db.StudentData.find({
  StuName: /o.{1}$/i,
});

//Array Manipulation

db.sample.updateMany(
  {
    name: "John Doe",
  },
  {
    $addToSet: { scores: 54 },
  }
);

db.sample.updateMany(
  {
    name: "John Doe",
  },
  {
    $pull: { scores: 54 },
  }
);

db.sample.find({
  scores: { $all: [3, 45] },
});

db.sample.find({
  scores: { $elemMatch: { $gt: 49 } },
});

db.sample.updateOne(
  {
    name: "John Doe",
    hobbies: "Swimming",
  },
  { $set: { "hobbies.$": "Singing" } }
);

db.StudentData.find().limit(2);
db.StudentData.find().skip(2);

db.StudentData.find().sort({ age: 1, StuName: 1 });

db.StudentData.find().sort({ age: 1 }).skip(2).limit(1);

//Aggregation
db.StudentData.aggregate([
  {
    $project: { StuName: 1 },
  },
  {
    $match: { gender: "Female" },
  },
]);

db.StudentData.aggregate([
  {
    $group: { _id: "$age" },
  },
  {
    $sort: { _id: 1 },
  },
  {
    $sample: { size: 2 },
  },
]);

db.StudentData.aggregate([
  {
    $sortByCount: "$age",
  },
]);


/*Data Backup
1)In BSON:
   i)Backup:mongodump
   ii)Restore: mongorestore

2)In JSON/CSV:
   i)Backup:mongoexport
   ii)Restore:mongoimport


*/
