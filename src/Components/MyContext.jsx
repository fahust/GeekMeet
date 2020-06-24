
  import React from 'react';
  
  export const MyContext = React.createContext({
    user:'faust',
    changeContextValue: () => {return true},
  });
