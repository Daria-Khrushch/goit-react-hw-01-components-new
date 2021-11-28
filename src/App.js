import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import profiles from './user.json';
import data from './data.json';
import FriendList from './components/Friendlist/FriendList';
import friends from './friends.json';
import transactions from './transactions.json';
import TransactionHistory from './components/Transaction/TransactionHistory';

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
