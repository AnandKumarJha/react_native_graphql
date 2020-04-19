const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
   employee: store.collection('employee'),
   students:store.collection('students'),
};

// var mysql = require('mysql');

// var con = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: '',
//    database: 'employee'
// });

// con.connect((err) => {
//    if (err) throw err;
//    // id:args.id,
//    // name:args.name,
//    // gender:args.gender,
//    // dob:args.dob,
//    // specialisation:args.specialisation,
//    // email:args.email
//    // phone_num
//    // address
//    // profile_pic
// });

// exports.selectEmployees = () => {
//    //select
//    query = "Select * from employee_table";
//    con.query(query, function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//       var resultArray = Object.values(JSON.parse(JSON.stringify(result)))
//       console.log(resultArray);
//       return resultArray;
//    });
// }

// //insert
// exports.insertData = (name, gender, dob, specialisation, email, phone_num, address, profile_pic) => {
//    //test data
//    // var query = "Insert into employee_table values(0, 'Anand Kumar', 'M',"+
//    // "'Aug 8, 1991', 'Android Developer', 'jhakumaranand0@gmail.com', '9210363639',"+
//    // "'mahavir enclave', 'https://media-exp1.licdn.com/dms/image/C5603AQG3kk3J4KoF9Q/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=rk4eTK2okT4U0LNemOi959AXqZyIhxVarW-dyNhuWeQ')";

//    var query = "Insert into employee_table values(0, '" + name + "', '" + gender + "', '" +
//       dob + "', '" + specialisation + "', '" + email + "', '" + phone_num + "', '" + address + "', '" + profile_pic + "')";
//    con.query(query, (err, result) => {
//       if (err) throw err;
//       console.log(result);
//    })
// }

// //delete
// exports.deleteEmployee = (id) => {
//    query = "Delete from employee_table where id='" + id + "'";
//    con.query(query, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//    });
// }

// exports.updateEmployee = (id, name, gender, dob, specialisation, email,
//    phone_num, address, profile_pic) => {
//    //update
//    query = "Update employee_table set name='Anand Kumar Jha' where id=2";
//    con.query(query, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records updated: " + result.affectedRows);
//    });
// }