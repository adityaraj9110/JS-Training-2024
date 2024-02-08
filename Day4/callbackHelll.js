// this is the examplle of callback

// this happen when there are multiple callbacks such that one callback's result is dependent on the previous callback
// like here is the 1st callback which generate the list of user and then 2nd callback get the user infomation of each user
// like profile picture 3rd callback is used to do somthing like change the profile picture or delete it

// Get the list of users
getUsers(function (users) {
  // Get the details for each user
  users.forEach(function (user) {
    getUserDetails(user, function (userDetails) {
      // Get the profile picture for each user
      getUserProfilePicture(userDetails, function (profilePicture) {
        // Do something with the profile picture
      });
    });
  });
});

// now this makes code more complex and harder for debugging
// to deal with this we need to use promise


getuser((user)=>{
    .then((user)=>{
        console.log(user)
    })
    .then((user)=>{
        console.log(user)
    })
    .catch((error)=>{
        console.log(error)
    })
})

// this is  promise but javascript has somthing more interesting to tackle this in synchronus style
// this is async/await

async function getuserProfilePicture(userId){
    const userList = await getUser(userId);
    // you get  all the user here
    const profilePice = await getUserProfilePicture(user);
    // here you get the profile picture 
    const changes = await changesInProfile(profilePicture);
}

// most simple way to write the asynchronus task . and the whole code structure of async await looks like synchronus