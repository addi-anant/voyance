import Search from "../components/Search";
import OurServices from "../components/OurServices";
import FeaturedProperties from "../components/FeaturedProperties";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clear } from "../redux/filterAndSearchSlice";

function Home() {
  const dispatch = useDispatch();

  /* Scrolling to top of page whenever page reloads: */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* Clearing the redux filter store whenever user get's back to homepage: */
  useEffect(() => {
    dispatch(clear());
  }, [dispatch]);

  return (
    <>
      <Search />
      <OurServices />
      <FeaturedProperties />
    </>
  );
}

export default Home;
