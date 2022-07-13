
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const firebase = initializeApp(firebaseConfig);

//references your database
const gunBaseDB = firebase.database( ).ref( 'gunBase');

document.getElementById("gunBase").addEventListener('submit', submitForm);

//submit form
function submitForm(e) {
      e.preventDefault( );
   

      var name = document.getElementById("fname").value;
      var email =  document.getElementById("mailbox").value;
      var password =  document.getElementById("pwd").value;
      var phoneNumber =  document.getElementById("pnum").value;
      var social =   document.getElementById("ssn").value;
      var profession = document.getElementById("occupation").value;
      

      //save messages
      saveMessages(name, password, email, phoneNumber, social, profession);

 // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
    
//reset form
     document.getElementById("gunBase").reset( );
   
 }

    
  
//save message to firebase
    function saveMessages(name, password, email, phoneNumber, social, profession){
        var newGunBaseDB = gunBaseDB.push( );

        newGunBaseDB.set({
          name: fname,
          email: mailbox,
          password: pwd,
          phoneNumber: pnum,
          social: ssn,
          profession: occupation,
        });
      }
 

// for submit form function onclick
// const form = document.querySelectorAll('button');
// document.querySelector('.submit').addEventListener('click', function ( ){
  
//   var x = document.querySelector('input' ).value
// })
//----------
//Validate the File Height and Width.
/*function checkDimension( ){
image.onload = function ( ) {
  var height = this.height;
  var width = this.width;
  if (height > 200 || width > 200) {

     //show width and height to user
      document.getElementById("").innerHTML=width;
      document.g("height").innerHTML=height;
      alert("Height and Width must not exceed 200px.");
      return false;
  }
  alert("Uploaded image has valid Height and Width.");
  return true;
};

}
});*/
// -------------

//validate file height and width
// input.addEventListener("onclick",new FileReader( ))

// const reader = new FileReader();
// const file = document.querySelector(FileReader.files[0]);
// console.log(file);

// reader.readAsDataURL(FileReader.files[0]);
// reader.onload = (e) => {
//   const image = new Image();
//   image.src = e.target.result;
//   image.onload = (e) => {
//     const height = e.target.height;
//     const width = e.target.width;
//     if (height > 100 || width > 100) {
//       alert("Height and Width must not exceed 100px.");
//       return false;
//     }
//     alert("Uploaded image has valid Height and Width.");
//     return true;
//   };
// };

// }


