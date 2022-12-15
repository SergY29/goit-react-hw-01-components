// import user from "./data/user.json";
import user from "components/data/user.json";
import data from "components/data/data.json";


import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";

export const App = () => {
  return (
    <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </>
  );
};

// console.log(user);
// console.log(statsInfo);
// console.log(statistics);