import React from 'react';
import { Line } from 'react-chartjs-2'

const yearsRaw = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010]
const indigenousRaw = [98, 101, 102, 101, 114, 130, 150, 185, 194, 191, 162]
const nonIndigenousRaw = [126, 129, 123, 122, 109, 120, 135, 153, 179, 174, 164]

const yearsForecast = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
const indigenousForecast = [98, 101, 102, 101, 114, 130, 150, 185, 194, 191, 162, 225.27, 236.84, 249.19, 262.57, 190.89, 197.88, 204.05, 208.97, 211.15090909, 212.71, 214.68363636, 219.47272727]
const nonIndigenousForecast = [126, 129, 123, 122, 109, 120, 135, 153, 179, 174, 164, 139.45454545, 140.67768595, 141.73929376, 143.44286592, 145.39221737, 148.70060077, 151.30974629, 152.7924505, 152.77358236, 150.38936258]

export default function Quad1(props) {

    let years = props.updated ? yearsForecast : yearsRaw
    let indigenous = props.updated ? indigenousForecast : indigenousRaw
    let nonIndigenous = props.updated ? nonIndigenousForecast : nonIndigenousRaw

    const data = {
        labels: years,
        datasets: [
            {
                label: 'Indigenous',
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
                pointRadius: 1,
                data: indigenous
            },
            {
                label: 'Non-Indigenous',
                fill: false,
                lineTension: 0,
                backgroundColor: '#ff6384',
                borderColor: '#ff6384',
                pointRadius: 1,
                data: nonIndigenous
            }
        ]
    }

    return (
        <div>
            <h2>Number of Youth in Detention By Indigenous Status (NSW)</h2>
            <Line data={data} />
            <p>Indigenous Australians represent 3.3% of Australia's population and make up roughly 50% of youth in detention.</p>
        </div>
    );
}