import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import profiles from '../../data/user.json';
import data from '../../data/data.json';
import FriendList from '../FriendList/FriendList';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';

export default function App() {
  return (
    <div>
      {profiles.map(profile => (
        <Profile
          key={profile.username}
          avatar={profile.avatar}
          username={profile.username}
          tag={profile.tag}
          location={profile.location}
          stats={profile.stats}
        />
      ))}
      <Statistics key={data.id} title="Upload stats" stats={data} />
      <Statistics key={data.id} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
