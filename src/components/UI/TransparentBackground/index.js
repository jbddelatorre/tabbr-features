import React from 'react';

export default (props) => {
	const style = {
		bg: {
			background: `linear-gradient(
      		rgba(0, 0, 0, 0.4), 
      		rgba(0, 0, 0, 0.4)
    		), url(${props.bgimage})`,
			backgroundSize:'cover',
			minHeight:'60vh',
		},
	}
	return (
		<section className="py-4 px-2" style={style.bg}>
			{props.children}
		</section>
	)
};
