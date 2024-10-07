import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styled from 'styled-components'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const Position = styled.div `position: relative; height: 100vh;`;

const BodyProps = {
  name: "박준수",
  location: "용인시",
  favorList: [
    {name : "HTML", gender : '남자',id : 0},
    {name : "JS", gender : '여자',id : 1}, 
  ],
};

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />, // 공통 레이아웃
    children: [
      { path: "/", element: <Main {...BodyProps}/> },
      // { path: "/login", element: <LoginPage /> },
      // { path: "/detail/:id", element: <DetailPage /> },
      // { path: "/profile", element: <MyProfile /> },
    ],
  },
]);

function App() {


  return (<>
    <Position>
      <Header></Header>
      <RouterProvider router={router} /> {/* 라우터 제공 */}
      {/* <Main {...BodyProps}></Main> */}
      <Footer></Footer>
    </Position>
  </>);
}

export default App;
