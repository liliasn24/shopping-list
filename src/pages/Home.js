import React, { useState, useEffect } from 'react';
import { listeners } from '../../models/list';

export default function Home(props) {
	const [lists, setLists] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/Lists');
				const data = await response.json();
				setLists(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="HomePage">
			<ul>
				{lists.map(list => {
					return (
						<li key={list._id}>
							<h3>{list.store}</h3>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
