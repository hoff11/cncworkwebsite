import React from 'react';
import DocumentTitle from 'react-document-title';

export default class RegisterOptionsPage extends React.Component {
	render() {
		return(
			<DocumentTitle title={`Shops with open work`}>
        		<div className="container">
          			<div className="row text-center">
            			<div className="col-xs-12">
              				<h3>Shops</h3>
              				<hr />
            			</div>
          			</div>
          			<div className="row text-center">
          				<div className="col-md-6">
          					<h3> Are you a job owner that needs to get a program made? </h3>
          					<br />
          					<a class="btn btn-default" Link to="/register" role="button">Lets Go</a>
          				</div>
          				<div className="col-md-6">
          					<h3> Are you looking to find some CNC work? </h3>
          					<br />
          					<a class="btn btn-default" Link to="/register" role="button">Get to Work!</a>
          				</div>
          			</div>
          	</div>
      </DocumentTitle>	
 		);
	}
}