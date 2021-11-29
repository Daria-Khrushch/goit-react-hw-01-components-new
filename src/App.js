import Profile from './components/Profile/Profile.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import profiles from './data/user.json';
import data from './data/data.json';
import FriendList from './components/Friendlist/FriendList.jsx';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import TransactionHistory from './components/Transaction/TransactionHistory.jsx';

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
