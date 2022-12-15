// import user from "./data/user.json";
import user from "components/data/user.json";
import statistics from "components/data/statistics.json";


import { Profile } from "components/Profile/Profile";
import { StatisticsList } from "components/StatisticsList/StatisticsList";

export const App = () => {
  return (
    <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
    <StatisticsList title="Upload stats" items={statistics} />
    </div>
  );
};

// console.log(user);
// console.log(statsInfo);
// console.log(statistics);