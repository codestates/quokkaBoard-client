import React from 'react';

import { ResponsiveBar } from '@nivo/bar';

const TeamStatus = ({ data }) => (
	<ResponsiveBar
		data={data}
		keys={['ing', 'end']}
		indexBy="name"
		margin={{ top: 16, right: 100, bottom: 50, left: 50 }}
		padding={0.3}
		valueScale={{ type: 'linear' }}
		indexScale={{ type: 'band', round: true }}
		valueFormat={{ format: '', enabled: false }}
		colors={{ scheme: 'nivo' }}
		defs={[
			{
				id: 'dots',
				type: 'patternDots',
				background: 'inherit',
				color: '#38bcb2',
				size: 4,
				padding: 1,
				stagger: true,
			},
			{
				id: 'lines',
				type: 'patternLines',
				background: 'inherit',
				color: '#eed312',
				rotation: -45,
				lineWidth: 6,
				spacing: 10,
			},
		]}
		fill={[
			{
				match: {
					id: 'fries',
				},
				id: 'dots',
			},
			{
				match: {
					id: 'sandwich',
				},
				id: 'lines',
			},
		]}
		borderRadius={5}
		borderWidth={2}
		borderColor={{ from: 'color', modifiers: [['darker', '0.8']] }}
		axisTop={null}
		axisRight={null}
		axisBottom={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: '',
			legendPosition: 'middle',
			legendOffset: 32,
		}}
		axisLeft={null}
		enableGridY={false}
		labelSkipWidth={12}
		labelSkipHeight={12}
		labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
		legends={[
			{
				dataFrom: 'keys',
				anchor: 'bottom-right',
				direction: 'column',
				justify: false,
				translateX: 120,
				translateY: 0,
				itemsSpacing: 6,
				itemWidth: 100,
				itemHeight: 20,
				itemDirection: 'left-to-right',
				itemOpacity: 0.85,
				symbolSize: 20,
				effects: [
					{
						on: 'hover',
						style: {
							itemOpacity: 1,
						},
					},
				],
			},
		]}
	/>
);

export default TeamStatus;