// import Header from './components/Header';
// import Footer from './components/Footer';
import Main from './components/Main';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />, // 공통 레이아웃
    children: [
      { path: "/", element: <Main/> },
      // { path: "/login", element: <LoginPage /> },
      // { path: "/detail/:id", element: <DetailPage /> },
      // { path: "/profile", element: <MyProfile /> },
    ],
  },
]);

function App() {

  return (<>
    <div>
      {/* <Header></Header> */}
      <RouterProvider router={router} /> {/* 라우터 제공 */}
      {/* <Main {...BodyProps}></Main> */}
      {/* <Footer></Footer> */}
    </div>
  </>);
}

export default App;
