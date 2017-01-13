import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';

export default class ProgrammersPage extends React.Component {
	render() {
		return(
			<DocumentTitle title={`ProgrammersLfw`}>
        		<div className="container">
          			<div className="row">
            			<div className="col-xs-12">
              				<h3>Programmers that are LFW</h3>
              				<hr />
            			</div>
          			</div>
          	</div>
      </DocumentTitle>	
 		);
	}
}