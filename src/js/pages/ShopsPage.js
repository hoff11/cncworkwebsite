import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';

export default class ShopsPage extends React.Component {
	render() {
		return(
			<DocumentTitle title={`Shops with open work`}>
        		<div className="container">
          			<div className="row">
            			<div className="col-xs-12">
              				<h3>Shops</h3>
              				<hr />
            			</div>
          			</div>
          	</div>
      </DocumentTitle>	
 		);
	}
}