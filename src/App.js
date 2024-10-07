import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

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
    <div>
      <Header></Header>
      <RouterProvider router={router} /> {/* 라우터 제공 */}
      {/* <Main {...BodyProps}></Main> */}
      <Footer></Footer>
    </div>
  </>);
}

export default App;
