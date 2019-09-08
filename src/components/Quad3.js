import React from 'react';
import {Pie} from 'react-chartjs-2';

import Grid from '@material-ui/core/Grid'

const data1 = {
    labels: [
		'Autism',
		'Intellectual Disability',
        'Neurological Disorder',
        'Vision, Hearing, Speech or Other Sensory Impairments',
        'Mental Illness Associated Disability',
        'Developmental Delay',
        'Participants with Physical Disabilities',
        'Disability caused by Injury',
        'Down Syndrome'
	],
	datasets: [{
		data: [1575, 834, 439, 398, 374, 337, 248, 215, 133],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        '#FF6384',
		'#36A2EB',
        '#FFCE56',
        '#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
    }]
};

const data2 = {
    labels: [
		'Personal Carers',
		'Other',
        'Physiotherapists',
        'Occupational Therapists',
        'Speech Therapists and Audiologists',
        'Psychologists',
        'Others - Professional Services',
	],
	datasets: [{
		data: [1015, 350, 49, 35, 32, 15, 10],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        '#FF6384',
		'#36A2EB',
        '#FFCE56',
        '#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
    }]
};

export default function Quad3(props) {
    return (
      <div>
        <h2>Supply & Demand</h2>
        <Grid container spacing={3} style={{ padding: 20 }}>
            <Grid item xs={6}>Number of participants by type, by 2023 in Penrith and nearby suburbs</Grid>
            <Grid item xs={6}>Estimated NDIS workers in each occupation (full-time equivalent), by 2023</Grid>
            <Grid item xs={6}>
                <Pie data={data1} options={{legend: {display: false}}}/>
            </Grid>
            <Grid item xs={6}>
                <Pie data={data2} options={{legend: {display: false}}}/>
            </Grid>
            <Grid item xs={6}><b>Total: 4095</b></Grid>
            <Grid item xs={6}><b>Total: 1489</b></Grid>
        </Grid>
      </div>
    );
}