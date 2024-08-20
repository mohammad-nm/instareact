import Category from "@/components/Category";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
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
      <div className="flex items-center">
        <SortBy />
        <Category />
      </div>
    </div>
  );
}
