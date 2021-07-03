import React from 'react';
import { Link } from 'react-router-dom';

import '../../src/styles/components/RegistrationList.css';
import Gravatar from './Gravatar';
//import RegistrationCard from './RegistrationCard';

class RegistrationList extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.RegistrationCard.email}
        />

        <div>
          <strong>
            {this.props.RegistrationCard.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.RegistrationCard.twitter}
          <br />
          {this.props.RegistrationCard.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchBadges(RegistryList) {
  const [query, setQuery] = React.useState('');
  const [filteredRegistryList, setFilteredRegistryList] = React.useState(RegistryList);

  React.useMemo(() => {
    const result = RegistryList.filter(RegistrationCard => {
      return `${RegistrationCard.firstName} ${RegistrationCard.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredRegistryList(result);
  }, [RegistryList, query]);

  return { query, setQuery, filteredRegistryList };
}

function List (props) {
  const RegistryList = props.RegistryList;

  const { query, setQuery, filteredRegistryList } = useSearchBadges(RegistryList);

  if (filteredRegistryList.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>Registro no encontrado</h3>
        <Link className="btn btn-primary" to="/RegistryList/new">
          Crear nuevo registro!
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredRegistryList.map(RegistrationCard => {
          return (
            <li key={RegistrationCard.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/RegistryList/${RegistrationCard.id}`}
              >
                <List RegistrationCard={RegistrationCard} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RegistrationList;
