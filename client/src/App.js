import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import PlanTrip from "./pages/PlanTrip";
import Wishlist from "./pages/Wishlist";
import AddHotel from "./pages/AddHotel";
import EditHotel from "./pages/EditHotel";
import SearchResult from "./pages/SearchResult";
import HotelInformation from "./pages/HotelInformation";
import { useSelector } from "react-redux";
import Wrapper from "./components/Wrapper";

export default function App() {
  const queryClient = new QueryClient();
  const user = useSelector((store) => store.user.currentUser);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Wrapper home="home">
                <Home />
              </Wrapper>
            }
          />

          <Route
            path="/order"
            element={
              !user ? (
                <Wrapper>
                  <Home />
                </Wrapper>
              ) : (
                <Wrapper>
                  <Order />
                </Wrapper>
              )
            }
          />

          <Route
            path="/profile"
            element={
              !user ? (
                <Wrapper>
                  <Home />
                </Wrapper>
              ) : (
                <Wrapper>
                  <Profile />
                </Wrapper>
              )
            }
          />

          <Route
            path="/wishlist"
            element={
              !user ? (
                <Wrapper>
                  <Home />
                </Wrapper>
              ) : (
                <Wrapper>
                  <Wishlist />
                </Wrapper>
              )
            }
          />

          <Route
            path="/search"
            element={
              <Wrapper>
                <SearchResult />
              </Wrapper>
            }
          />

          <Route
            path="/hotel-information/:id"
            element={
              <Wrapper>
                <HotelInformation />
              </Wrapper>
            }
          />

          {/* Later Functionalities: */}
          <Route path="/plan" element={<PlanTrip />} />
          <Route path="/add-hotel/" element={!user ? <Home /> : <AddHotel />} />
          <Route
            path="/edit-hotel/:id"
            element={!user ? <Home /> : <EditHotel />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
