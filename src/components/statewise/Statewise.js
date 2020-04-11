import React, { Component } from 'react'
import Papa from 'papaparse'
import "leaflet/dist/leaflet.css";
import StatewiseCaseList from './StatewiseCaseList'
import StatewiseMap from './StatewiseMap'
import StatewiseStats from './StatewiseStats'
import { stateCoordinates } from '../../utils/stateCoordinates'
import StatewiseHeader from './StatewiseHeader';

class Statewise extends Component {
    constructor(){
        super()
        this.state = {
            statewiseData: null,
            currentState:null,
            caseList: null,
            natureOfOffenceFilter: 'All',
            judgementFilter: 'All',
            natureOfOffenceList:null
        }
        this.setCurrentState = this.setCurrentState.bind(this)
        this.processData = this.processData.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount(){
        var csvFile= require('./../../data/DP Directory Information 2019-1.csv')
        Papa.parse(csvFile,{
            header: true,
            download: true,
            skipEmptyLines: true,
            // Here this is also available. So we can call our custom class method
            complete: (d) => {
                let data = d.data
                this.setState({data: data}, () => {
                    this.processData()
                })
            }
        })
    }

    processData() {
        let caseList = []
        let statewiseData = []
        let natureOfOffenceList = []
        let data = this.state.data
        for(var i = 0; i< data.length; i++){
            if(data[i]['S. No.'] == '')
                break
            else {
                var natureOfOffence = data[i]['Nature of Offence']
                if(natureOfOffenceList.length == 0)
                    natureOfOffenceList.push(natureOfOffence)
                else if(natureOfOffenceList.indexOf(natureOfOffence) == -1)
                    natureOfOffenceList.push(natureOfOffence)
                if((this.state.judgementFilter == 'All' || data[i]['Judgment'] == this.state.judgementFilter) && (this.state.natureOfOffenceFilter == 'All' || (natureOfOffence == this.state.natureOfOffenceFilter)) && (this.state.currentState == null || this.state.currentState.state == data[i]['State'])){
                    var position = null
                    var state = stateCoordinates.some(s => {
                        if(s.state == data[i]['State']){
                            position = [s.lat, s.lng]
                            return true
                        }
                        return false
                    })
                    if(statewiseData.length == 0)
                        statewiseData.push({state: data[i]['State'], deaths: 1, position: position})
                    else {
                        var found = statewiseData.some((s,j) => {
                            if(s.state == data[i]['State']){
                                statewiseData[j].deaths ++
                                statewiseData[j].position = position
                                return true 
                            }
                        })
                        if(!found)
                            statewiseData.push({state: data[i]['State'], deaths: 1, position: position})
                    }
                    caseList.push(data[i])
                }
            }
        }
        this.setState({caseList: caseList, statewiseData: statewiseData, natureOfOffenceList: natureOfOffenceList})
    }

    onChange(e){
        let { name, value} = e.target
        this.setState({[name]: value}, () => {
            this.processData()
        })
    }

    setCurrentState(s){
        if(s == null)
            this.setState({currentState: null}, () => {
                this.processData()
            })
        else
            this.setState({currentState: {state: s.state, deaths: s.deaths}}, () => {
                this.processData()
            })
    }

    render() {
        let { statewiseData, currentState, caseList, natureOfOffenceFilter, judgementFilter, natureOfOffenceList } = this.state
        if(statewiseData == null || caseList == null)
            return <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        else
        return (
            <div>
                <div class="welcome">
                    <StatewiseHeader currentState={currentState} natureOfOffenceFilter={natureOfOffenceFilter} natureOfOffenceList={natureOfOffenceList} setCurrentState={this.setCurrentState} onChange={this.onChange} judgementFilter={judgementFilter}/>
                </div>
                <br />
                <section class="statistics mr-3">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-8 statewise-map-div">
                                <StatewiseMap setCurrentState={this.setCurrentState} statewiseData={statewiseData}/>
                            </div>
                            <div class="col-md-4 pt-0 pl-0 pr-0 pb-1 statewise-stats-div">
                                <StatewiseStats caseList={caseList} currentState={currentState} statewiseData={statewiseData}/>
                            </div>
                        </div>
                    </div>
                </section>
                <br /><br />
                <StatewiseCaseList caseList={caseList} currentState={currentState}/>
                <br /><br />
            </div>
        )
    }
}

export default Statewise
