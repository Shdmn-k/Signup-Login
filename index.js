
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
function login(userName, password) {
  let registeredUsers = ['rita', 'sita', 'ramu', 'shamu', 'mona'];
  let correctPassword = 'Emp@123';

  if (registeredUsers.indexOf(userName) !== -1) {
    if (password === correctPassword) {
      return 'Login Successful...';
    } else {
      return 'Wrong Password...';
    }
  } else {
    return 'User Not Found, Please Signup';
  }
}

