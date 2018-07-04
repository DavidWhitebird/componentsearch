import React, { Component, Fragment} from 'react';
import { Header, Body, Footer} from './Layouts/index.js';
import Dave from './Layouts/Dave.js';


export default class extends Component {
	render() {
		return <Fragment>
            <Header />
			<Body />

		</Fragment>
	}
}