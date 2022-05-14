import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';

import BarChart from './charts/BarChart';
import PieChart from './charts/PieChart';


export default class Overall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:8080/homeFinance/byDate"
        axios.get(url)
            .then(res => {
                console.log(res.data)
                this.setState({
                    data: res.data
                })

            })
    }


    render() {
        return (
            <Grid container spacing={3}>
                {/* Bar Chart */}
                <Grid item xs={8} >
                <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}>
                <BarChart data={this.state.data}/>
                </Paper>
            </Grid>
            {/* Pie Chart */}
            <Grid item xs={4} >
                <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}>
                <PieChart />
                </Paper>
            </Grid>
          </Grid>

        )
    }
}