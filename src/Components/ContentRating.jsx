

import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
    constructor() {
        super();
        this.state = {
          likes: 0,
          dislikes: 0,
          handleLike:() => {
            this.setState((prevState) => ({
              likes: prevState.likes + 1
            }));
          },
    
          handleDislike:() => {
            this.setState((prevState) => ({
              dislikes: prevState.dislikes + 1
            }));
          }
      }
        }
  render() {
    return (
        <div className='content-rating'>
        <p>
          <strong>Conservative Party of Canada – Policy Overview</strong><br />
          The Conservative Party of Canada is a center-right political party that traditionally advocates for fiscal responsibility, individual freedoms, smaller government, and strong national security.
          Here’s a breakdown of its major policy areas:<br /><br />

          <strong>Economic Policy</strong><br />
          - Lower taxes: Focus on reducing personal income taxes, corporate taxes, and eliminating carbon taxes.<br />
          - Balanced budgets: Strong emphasis on reducing deficits and government debt through spending restraint.<br />
          - Support for small businesses: Measures to reduce red tape and encourage entrepreneurship.<br /><br />

          <strong>Environment</strong><br />
          - Opposition to carbon tax: Instead, they often propose incentives for clean technology and innovation.<br />
          - Support for resource development: Promote oil, gas, and mining sectors with an emphasis on pipelines and energy independence.<br />
          - Conservation projects: Support for practical environmental initiatives like tree planting and clean water initiatives.<br /><br />

          <strong>Social Policy</strong><br />
          - Parental rights: Support for parental choice in education and child care.<br />
          - Criminal justice: Tough-on-crime approach including stronger sentencing and increased support for law enforcement.<br />
          - Freedom of speech: Advocate for protecting free expression, especially on university campuses and online.<br /><br />

          <strong>Immigration and Foreign Policy</strong><br />
          - Secure borders: Support for lawful immigration processes and stronger enforcement against illegal entry.<br />
          - Economic immigration: Preference for skilled immigrants who can contribute to Canada’s economy.<br />
          - Strong national defense: Investments in the Canadian Armed Forces and NATO commitments.<br />
          - Support for Israel and Western alliances: A foreign policy focused on democratic partnerships and security cooperation.<br /><br />

          <strong>Health and Social Programs</strong><br />
          - Support for public health care: But advocate for efficiency, innovation, and more private delivery within the public system.<br />
          - Mental health and addiction: Increased funding for mental health services and recovery-based approaches to addiction.<br /><br />

          <strong>Infrastructure and Housing</strong><br />
          - More homes, less red tape: Accelerate housing construction by reducing federal regulations.<br />
          - Support for major infrastructure: Including highways, transit, and pipelines that support economic growth.<br /><br />

          <strong>Education</strong><br />
          - Respect for provincial jurisdiction: Education is primarily a provincial responsibility, but they support policies that improve outcomes and choice.<br />
          - STEM and trades support: Promote education that aligns with labour market needs like skilled trades and technology.<br />
        </p>
        <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
</button>
        </div>
    </div>
    );
  }
}

export default ContentRating;
