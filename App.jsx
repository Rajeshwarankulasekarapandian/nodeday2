import React from 'react';
import UserCard from './UserCard';


function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>User Directory</h1>
        <p>Rendering Child Component 5 times with different data using Props</p>
      </header>

      <div className="card-grid">
        {/* Person 1 */}
        <UserCard
          name="yogesh"
          city="Chennai"
          age={26}
          email="yogesh@gmail,.com"
          phone="+91 9944068900"
        />

        {/* Person 2 */}
        <UserCard
          name="Rajesh"
          city="MAdurai"
          age={23}
          email="Rajesh@gmail.com"
          phone="+91 9944068900"
        />

        {/* Person 3 */}
        <UserCard
          name="Vignesh"
          city="Bangalore"
          age={29}
          email="vignesh@gmail.com"
          phone="+91 9944068900"
        />

        {/* Person 4 */}
        <UserCard
          name="Magesh"
          city="Chennai"
          age={24}
          email="magesh@gmail.com"
          phone="+91 9944068900"
        />

        {/* Person 5 */}
        <UserCard
          name="ganesh"
          city="Coimbatore"
          age={31}
          email="GAnesh@gmail.com"
          phone="+91 9944068900"
        />
      </div>
    </div>
  );
}

export default App;