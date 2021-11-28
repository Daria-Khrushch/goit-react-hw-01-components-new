import Profile from './components/Profile';
import Statistics from './components/Statistics';
import profiles from './user.json';
import data from './data.json';

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
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
}
