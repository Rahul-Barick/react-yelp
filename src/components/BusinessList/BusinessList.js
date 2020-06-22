import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

/**
 * Class Business list
 */
class BusinessList extends React.Component {
  render() {
    const businessData = 
    this.props.business.map(business => <Business business={business} key={business.id} />);
    return (
      <div className="BusinessList">
        {businessData}
      </div>
    );
  }
}

export default BusinessList;
