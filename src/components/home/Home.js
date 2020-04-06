import React, { Component } from 'react'
import Papa from 'papaparse'
import HomeOverviewStats from './HomeOverviewStats'
import HomeAcquittedStats from './HomeAcquittedStats'
import HomeCommutedStats from './HomeCommutedStats'
import HomeConfirmedStats from './HomeConfirmedStats'
import HomeRemittedStats from './HomeRemittedStats'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            overViewDeath: null,
            overViewCommuted: null,
            overViewAcquitted: null,
            overViewRemitted: null,
            overViewConfirmed: null,
        }
    }
    componentDidMount(){
        const that = this
        var csvFile1= require('./../../data/DP Directory Information 2019 - Statistics Persons Sentenced to Death.csv')
        Papa.parse(csvFile1,{
            header: true,
            download: true,
            skipEmptyLines: true,
            // Here this is also available. So we can call our custom class method
            complete: (d) => {
                let overViewDeath = {}
                let data = d.data
                overViewDeath.total = data[data.length - 1]['Persons sentenced to death in 2019']
                overViewDeath['Total no. of judgments'] = data[data.length - 2]['Total no. of judgments'] 
                overViewDeath['Judgments available'] = data[data.length - 2]['Judgments available']
                overViewDeath['Judgments not available'] = data[data.length - 2]['Judgments not available']
                that.setState({overViewDeath: overViewDeath})
            }
        })
        var csvFile2= require('./../../data/DP Directory Information 2019 - Statistics Movements in HC and SC.csv')
        Papa.parse(csvFile2,{
            header: true,
            download: true,
            skipEmptyLines: true,
            // Here this is also available. So we can call our custom class method
            complete: (d) => {
                let data = d.data
                let overViewCommuted = {}
                let overViewAcquitted = {}
                let overViewConfirmed = {}
                let overViewRemitted = {}
                overViewCommuted = data[0]
                overViewAcquitted = data[1]
                overViewRemitted = data[2]
                overViewConfirmed = data[3]
                that.setState({overViewAcquitted, overViewCommuted, overViewConfirmed, overViewRemitted})
            }
        })
    }
    render() {
        let { overViewDeath, overViewAcquitted, overViewCommuted, overViewConfirmed, overViewRemitted } = this.state
        if(overViewDeath == null || overViewAcquitted == null)
            return <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        else
        return (
            <div>
                <div class="welcome">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="content pb-1">
                                    <p><b>Overview of Death sentences in 2019</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HomeOverviewStats overViewDeath={overViewDeath}/>
                <br /><br />
                <HomeCommutedStats overViewCommuted={overViewCommuted}/>
                <br /><br />
                <HomeAcquittedStats overViewAcquitted={overViewAcquitted}/>
                <br /><br />
                <HomeConfirmedStats overViewConfirmed={overViewConfirmed}/>
                <br /><br />
                <HomeRemittedStats overViewRemitted={overViewRemitted}/>
            </div>
        )
  }
}

export default Home
