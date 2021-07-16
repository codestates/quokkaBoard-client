import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const MyCompleteTask = ({ data }) => (
	<ResponsiveLine
		data={data}
		margin={{ top: 24, right: 24, bottom: 50, left: 24 }}
		xScale={{ type: 'point' }}
		yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
		yFormat=" >-.2f"
		axisTop={null}
		axisRight={null}
		axisBottom={{
			orient: 'bottom',
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'days',
			legendOffset: 36,
			legendPosition: 'middle',
		}}
		axisLeft={null}
		enableGridX={false}
		enableGridY={false}
		pointSize={10}
		pointColor={{ from: 'color', modifiers: [] }}
		pointBorderWidth={2}
		pointBorderColor={{ from: 'serieColor', modifiers: [] }}
		enablePointLabel={true}
		pointLabel="y"
		pointLabelYOffset={-12}
		areaOpacity={0.25}
		useMesh={true}
		legends={[]}
	/>
);

export default MyCompleteTask;
