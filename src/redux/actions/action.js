
export const register = (data) => {
    console.log(333333)
     return {
       type: "Register",
       payload:data
     };

  };


export const login = (email , password) => {
    console.log(333333)
     return {
       type: "Login",
       payload:{
           email:email,
           password:password
       }
     };

  };

