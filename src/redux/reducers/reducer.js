const initialState =  {
    posts: [],
    postLoader: true
  }

  const posts = (state = initialState, action) => {
    console.log(666666666, action.type)
    console.log(666611111, action.payload)
  
    switch (action.type) {
      case "Register":
    
        return  {...state , posts:action.payload};

        case "Login":
    
            return  {...state , posts:action.payload};

    }

   


}  