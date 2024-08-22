import AddNew from "@/components/AddNew";
import Category from "@/components/Category";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import ReactList from "@/components/ReactsList";
import SearchBox from "@/components/SearchBox";
import SortBy from "@/components/SortBy";

export default function Deck() {
  return (
    <div>
      <Navbar />

      <div className="flex items-center">
        <Profile />
        <SearchBox />
      </div>

      <div className="flex items-center  justify-end">
        <SortBy />
        <Category />
      </div>
      <div className="flex justify-center ">
        <ReactList />
      </div>
      <div className="flex justify-center">
        <AddNew />
      </div>
    </div>
  );
}
