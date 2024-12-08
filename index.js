
let registeredUsers = ['rita', 'sita', 'ramu', 'shamu', 'mona'];

function signup(userName) {
  if (registeredUsers.includes(userName)) {
    return 'User Already Registered, Please Login';
  } else {
    registeredUsers.push(userName);
    return 'Signup Successful, Please Login';
  }
}


// console.log(signup('sita'));   
// console.log(signup('john'));   
// console.log(signup('john'));   

