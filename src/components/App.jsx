import user from "components/data/user.json";
import data from "components/data/data.json";
import friends from "components/data/friends.json";
import transactions from 'components/data/transactions.json';


import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList"
import {TransactionHistory} from "components/TransactionHistory/TransactionHistory"

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};

// console.log(user);
// console.log(statsInfo);
// console.log(statistics);