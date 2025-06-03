import React from "react";
import BottomNav from "../components/shared/BottomNav";
import Greetings from "../components/home/Greetings";
import MiniCard from "../components/home/MiniCard";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import RecentOrders from "../components/home/RecentOrders";
import PopularDishes from "../components/home/PopularDishes";
const Home = () => {
  return (
    <section className="bg-[#2b2b2b] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left div */}
      <div className="flex-[3] bg-[#2b2b2b]">
        <Greetings></Greetings>
        <div className="flex items-center w-full gap-3 px-8 mt-8">
          <MiniCard
            title="Total Earnings"
            icon={<BsCashCoin />}
            number={512}
            footerNum={1.6}
          ></MiniCard>
          <MiniCard
            title="In Progress"
            icon={<GrInProgress />}
            number={16}
            footerNum={3.6}
          ></MiniCard>
        </div>

        <RecentOrders></RecentOrders>
      </div>

      {/* right div */}
      <div className="flex-[2] bg-[#2b2b2b] ">

        <PopularDishes></PopularDishes>
      </div>
      <BottomNav></BottomNav>
    </section>
  );
};

export default Home;
