import React, { Component } from 'react';

import { Item, Input, Button, Dropdown, Label } from 'semantic-ui-react'

export class AddService extends Component {

	constructor (props) {
		super(props)
		this.state = { type: 'agent', serviceEndpoint: 'http://localhost/', example: '' };
	}

	onClickAdd() {
		var service = {
			'type': this.state.type,
			'serviceEndpoint': this.state.serviceEndpoint
		};
		this.props.onAddService(service);
	}

	onChangeType(e) {
		this.setState({ type: e.target.value });
	}

	onChangeServiceEndpoint(e) {
		this.setState({ serviceEndpoint: e.target.value });
	}

	onChangeExample(e, data) {
		this.setState({ type: data.value });
		this.setState({ example: '' });
	}

	render() {
		const examples = ['xdi', 'agent', 'hub'].map((example) => ({ text: example, value: example }));
		return (
			<table className="add-service">
				<tr>
					<td>
						<Button primary onClick={this.onClickAdd.bind(this)}>Add</Button>
						<Dropdown placeholder='type' selection options={examples} value={this.state.example} onChange={this.onChangeExample.bind(this)} />
						<Input value={this.state.type} onChange={this.onChangeType.bind(this)} />
						<Input label='url' value={this.state.serviceEndpoint} onChange={this.onChangeServiceEndpoint.bind(this)} />
					</td>
				</tr>
			</table>
		);
	}
}

export default AddService;
