import React from 'react';
import { ResponsiveSunburst } from '@nivo/sunburst';

const ProjectStatus = ({ data }) => {
	return (
		<ResponsiveSunburst
			data={data}
			margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
			id="name"
			value="loc"
			cornerRadius={7}
			borderColor={{ theme: 'background' }}
			colors={{ scheme: 'nivo' }}
			childColor={{ from: 'color', modifiers: [['brighter', '0.4']] }}
			enableArcLabels={true}
			arcLabel="id"
			arcLabelsSkipAngle={5}
			arcLabelsTextColor={{ from: 'color', modifiers: [['darker', '10']] }}
		/>
	);
};

export default ProjectStatus;
