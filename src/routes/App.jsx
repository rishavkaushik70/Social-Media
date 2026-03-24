import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";
import PostListProvider from "../context/PostContext";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "../components/post/Loading";

function App() {
  const navigation = useNavigation();

  return (
    <PostListProvider>
      <div className="container-box">
        <Sidebar />
        <div className="content">
          <Header />
          {navigation.state === "loading" ? <Loading /> : <Outlet />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
