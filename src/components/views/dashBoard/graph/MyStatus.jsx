import { ResponsiveBar } from '@nivo/bar';

const MyResponsiveBar = ({ data /* see data tab */ }) => (
	<ResponsiveBar
		data={data}
		keys={['task', 'ing', 'end']}
		indexBy="board"
		margin={{ top: 16, right: 16, bottom: 50, left: 16 }}
		padding={0.35}
		valueScale={{ type: 'linear' }}
		indexScale={{ type: 'band', round: true }}
		valueFormat={{ format: ' >-', enabled: false }}
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
			tickSize: 3,
			tickPadding: 5,
			tickRotation: 0,
			legend: '',
			legendPosition: 'middle',
			legendOffset: 32,
		}}
		axisLeft={null}
		enableGridY={false}
		labelSkipWidth={1}
		labelSkipHeight={1}
		labelTextColor={{ from: 'color', modifiers: [['darker', '2']] }}
		legends={[]}
	/>
);

export default MyResponsiveBar;
