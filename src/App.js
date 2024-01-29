import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UniversityList from './component/UniversityList';
import './App.css'; // Import your CSS file

function App() {
  const countries = [
    'United+States',
    'Austria',
    'Belgium',
    'Bulgaria',
    'Croatia',
    'Republic+of+Cyprus',
    'Czech+Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'Hungary',
    'Ireland',
    'Italy',
    'Latvia',
    'Lithuania',
    'Luxembourg',
    'Malta',
    'Netherlands',
    'Poland',
    'Portugal',
    'Romania',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden'
  ];

  return (
    <Router>
      <div className="app-container">
        <header>
        <h1 className="header-text">Choose a Country</h1>
        </header>

        <nav>
          <ul className="country-list">
            {countries.map((country) => (
              <li key={country}>
                <Link to={`/universities/${country}`}>
                  {country.replace('+', ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <main>
          <Route path="/universities/:country" component={UniversityList} />
        </main>
      </div>
    </Router>
  );
}

export default App;
