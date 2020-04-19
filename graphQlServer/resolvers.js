const db = require('./db')

const Mutation = {
    createEmployee: (root, args, context, info) => {
   // id:args.id,
   // name:args.name,
   // gender:args.gender,
   // dob:args.dob,
   // specialisation:args.specialisation,
   // email:args.email
   // phone_num
   // address
   // profile_pic
        // return db.insertData(args.name, args.gender, args.dob, args.specialisation,
        //     args.email, args.phone_num, args.address, args.profile_pic);

        return db.employee.create({name:args.name, gender:args.gender, dob:args.dob,
            specialisation:args.specialisation, email:args.email, phone_num:args.phone_num,
            address:args.address, profile_pic:args.profile_pic});
    //     0, 'Anand Kumar', 'M',"+ "'Aug 8, 1991', 'Android Developer', 'jhakumaranand0@gmail.com', '9210363639',"+
    // "'mahavir enclave', 'https://media-exp1.licdn.com/dms/image/C5603AQG3kk3J4KoF9Q/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=rk4eTK2okT4U0LNemOi959AXqZyIhxVarW-dyNhuWeQ')
    },
    deleteEmployee: (root, args, context, info) => {
        return db.employee.delete(args.id);
        // db.deleteEmployee(args.id);
    },
    updateEmployee: (root, args, context, info) => {
        return db.employee.update({id:args.id, name:args.name, gender:args.gender, dob:args.dob,
            specialisation:args.specialisation, email:args.email, phone_num:args.phone_num,
            address:args.address, profile_pic:args.profile_pic})
        // return db.updateEmployee(args.id, args.name, args.gender, args.dob, args.specialisation,
        //     args.email, args.phone_num, args.address, args.profile_pic);
    },

    createStudent:(root,args,context,info) => {
        return db.students.create({collegeId:args.collegeId,
        firstName:args.firstName,
        lastName:args.lastName})
     },
     deleteStudent: (root, args, context, info) => {
        return db.students.delete(args.id);
    },
    updateStudent: (root, args, context, info) => {
        return db.students.update({id:args.id, name:args.firstName, gender:args.lastName});
    },
}

const Query = {
    employees: () => db.employee.list(),
    students:() => db.students.list()   
}

module.exports = { Query, Mutation }