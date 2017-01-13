import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';

export default class JobsPage extends React.Component {
	render() {
		return(
			<DocumentTitle title={`Jobs`}>
        		<div className="container">
          			<div className="row">
            			<div className="col-xs-12">
              				<h3>Open Jobs</h3>
              				<hr />
            			</div>
          			</div>
          	</div>
      </DocumentTitle>	
 		);
	}
}