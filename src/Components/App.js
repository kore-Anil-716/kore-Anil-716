import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pagination from './Pagination';
import ListOfCarItems from './ListOfCarItems';
import Navbar from './Navbar';
import './App.css';

const car___list=[
  {
    url:'https://media.zigcdn.com/media/model/2023/May/db-12_600x400.jpg',
    name:'Aston Martin DB12',
    price:'$449'
},
{
  url:'https://static.wixstatic.com/media/347dd2_888edcd8921842aabab3865d73cf0721~mv2.jpg/v1/fill/w_680,h_450,al_c,q_80,enc_auto/347dd2_888edcd8921842aabab3865d73cf0721~mv2.jpg',
  name:'BMW iX1',
  price:'$650'
},
{
  url:'https://media.caradvice.com.au/image/private/w_2000,ar_16:9,c_lfill,f_auto,g_auto:car,q_auto/t_wm_nw/dbaccelwgj72n9hy0n0y.jpg',
  name:'BMW i4',
  price:'$725'
},
{
  url:'https://st1.latestly.com/wp-content/uploads/2021/03/25-3.jpg',
  name:'Kia EV6',
  price:'$605'

},
{
  url:'https://th.bing.com/th/id/OIP.s9YNfwogsqp7HuhEb4-YIQHaE7?pid=ImgDet&rs=1',
  name:'Mercedes-Benz EQE',
  price:'$239'

},
{
  url:'https://img-ik.cars.co.za/images/2017/11/Toyota-Hilux-FL/tr:n-news_1200x/Toyota-hilux-Revo-facelift-double-cab-front-three-quarters.jpg',
  name:'Toyota Hilux',
  price:'$315'
}
]



const App = () => {
  
  return (
    <div>
      <Navbar />
      <ListOfCarItems />
           {/* <Routes> */}
           {/* <Route path="/page/:page" component={CarList} /> */}
           {/* <Route path="/" component={CarList} /> */}
           {/* </Routes> */}
         {/* </Switch> */}
       {/* </Router> */}
    </div>
  );
};

export default App;
















// import React from 'react'
// import './App.css';
// // import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Intern from './Components/Car_card';

// function App() {
//   return (
//     <div className="App">
//       <Intern />
//     </div>
//   );
// }

// export default App;
