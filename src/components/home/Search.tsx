import React from "react";
import { SearchList, Icon, Input } from "../../container/style";
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import RestaurantAction from './../../data/action'
import { connect } from 'react-redux'

const Searching = () => {
	const dispatch = useDispatch<Dispatch<RestaurantAction.TRestaurantReduce>>();;
	const searching = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type:'SEARCHING_NAME',
			payload:e.target.value
		})
	};
	return (
		<>
			<SearchList>
				<Input onChange={searching} />
				<Icon>search</Icon>
			</SearchList>
		</>
	);
};
export default connect()(Searching);
