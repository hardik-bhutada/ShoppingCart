import * as firebase from 'firebase';

export class AuthenticationService
{
    signUpUser(email : string , password : string)
    {
        var value = "";
        firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error) {
            
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/weak-password') 
            {
                value = "error";
                alert('The password is too weak. SignUp Again !!');
                
            } 
            else  if (errorCode === 'auth/email-already-in-use') 
            {
                value = "error";
                alert('Email is Already in Use. SignUp Again !!');
                
            }
            else  if (errorCode === 'auth/invalid-email') 
            {
                value = "error";
                alert('Email is Invalid. SignUp Again !! ');
                
            }
            
        }).then(
           
        );
        return value;
    }

    signInUser(email : string , password : string) : string
    {
        let value : string = "";
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            (response) => {value = "success"}
        )
        .catch(function(error) 
        {
               var errorCode = error.code;
              var errorMessage = error.message;
               if (errorCode === 'auth/wrong-password') 
               {
                 alert('Wrong password.');
                 value =  "Wrong Password";
               } 
               else if(errorCode === "auth/user-not-found") 
               {
                  window.confirm('Not a User !! Please Sign Up to Continue');
               }
               console.log(error);
        }
            );

        return value;
    }
}