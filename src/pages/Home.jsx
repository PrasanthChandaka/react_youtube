import Feed from "../components/Feed/Feed";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex h-[100vh-112px] w-full overflow-hidden">
      <Sidebar />
      <Feed />
    </div>
  );
};

export default Home;
