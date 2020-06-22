import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

/**
 * Class Business list
 */
class BusinessList extends React.Component {
  render() {
    const { business } = this.props;
    const businessData = business.map(item => <Business business={item} key={item.id} />);
    return (
      <div className="BusinessList">
        {businessData}
      </div>
    );
  }
}

BusinessList.defaultProps = {
  business: [],
};

export default BusinessList;
