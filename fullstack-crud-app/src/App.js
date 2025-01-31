import React from 'react';
import { Route , Routes} from 'react-router-dom';
import Header from './components/header/header';
import Dashboard from './components/dashboard/dashboard';
import PostUser from './components/postUser/postUser';
import UpdateUser from './components/updateUser/updateUser';
import Nomatch from './components/nomatch/nomatch';



const App = () => {
  return (
    <div>
      <Header></Header>
    <Routes>
      <Route path='/' element={<Dashboard></Dashboard>}></Route>
      <Route path='/user' element={<PostUser></PostUser>}></Route>
      <Route path='/user/:id' element={<UpdateUser></UpdateUser>}></Route>
      <Route path='*' element={<Nomatch></Nomatch>}></Route>
    </Routes>
    </div>
  )
}

export default App
