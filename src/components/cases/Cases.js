import React, { Component } from 'react'
import Papa from 'papaparse'
import drawChart from './ChartFunction'

class Cases extends Component {
    constructor(){
        super()
        this.state = {
            offenceList: null,
            caseStatusList:null,
            offenceData: null,
            caseStatusData: null,
            filteredCaseStatusData: null,
            filteredOffenceData: null,
            offenceFilter: 'All',
            caseFilter: 'Number of Persons in HC'
        }
        this.setCurrentState = this.setCurrentState.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    

    componentDidMount(){
        const that = this
        var csvFile1= require('./../../data/DP Directory Information 2019-1.csv')
        Papa.parse(csvFile1,{
            header: true,
            download: true,
            skipEmptyLines: true,
            // Here this is also available. So we can call our custom class method
            complete: (d) => {
                let data = d.data
                this.setState({offenceData: data, filteredOffenceData: data}, () => {
                    that.processOffenceList()
                })       
            }
        })

        var csvFile1= require('./../../data/DP Directory Information 2019-4.csv')
        Papa.parse(csvFile1,{
            header: true,
            download: true,
            skipEmptyLines: true,
            // Here this is also available. So we can call our custom class method
            complete: (d) => {
                let data = d.data
                this.setState({caseStatusData: data, filteredCaseStatusData: data}, () => {
                    that.processCaseStatusList()
                })       
            }
        })
    }

    processOffenceList() {
        let data = this.state.filteredOffenceData
        let offenceList = []
        for(var i = 0; i< data.length; i++){
            if(data[i]['S. No.'] == '')
                break
            else {
                var natureOfOffence = data[i]['Nature of Offence']
                if(this.state.offenceFilter == 'All' || data[i]['Judgment'] == this.state.offenceFilter){
                    if(offenceList.length == 0)
                        offenceList.push({name: natureOfOffence, count: 1})
                    else {
                        var found = offenceList.some((o,i) => {
                            if(o.name == natureOfOffence){
                                offenceList[i].count ++
                                return true 
                            }
                        })
                        if(!found)
                            offenceList.push({name: natureOfOffence, count: 1})
                    }
                }
            }
        }
        this.setState({offenceList: offenceList}, () => {
            let values = []
            let labels = []
            offenceList.map(o => {
                values.push(o.count)
                labels.push(o.name)
            })
            drawChart('offenceChart', values, labels)
        })   
    }

    processCaseStatusList() {
        let data = this.state.filteredCaseStatusData
        let caseStatusList = []
        for(var i = 0; i< data.length; i++){
            if(data[i]['Action'] == '')
                break
            else
                caseStatusList[i] = {name: data[i]['Action'], count: data[i][this.state.caseFilter]}
        }
        this.setState({caseStatusList: caseStatusList}, () => {
            let values = []
            let labels = []
            caseStatusList.map(c => {
                values.push(c.count)
                labels.push(c.name)
            })
            drawChart('caseChart', values, labels)
        })  
    }

    onChange(e){
        let { name, value} = e.target
        this.setState({[name]: value}, () => {
            if(name == 'offenceFilter')
                this.processOffenceList()
            else
                this.processCaseStatusList()
        })
    }

    setCurrentState(s){
        if(s == null)
            this.setState({currentState: null})
        else
            this.setState({currentState: {state: s.state, deaths: s.deaths}})
    }

    render() {
        let { offenceFilter, caseFilter, caseStatusData } = this.state
        return <div>
            <div class="welcome">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="content pb-1">
                                <p><b>Nature of Offence </b>&nbsp;&nbsp;&nbsp;&nbsp; Judgement: &nbsp;
                                    <select name="offenceFilter" onChange={this.onChange} value={offenceFilter}>
                                        <option value="All">All</option>
                                        <option value="Y">Yes</option>
                                        <option value="N">No</option>
                                    </select>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-12" >
                            <div class="content"  style={{position:'relative',height:'400px'}}>
                                <canvas id="offenceChart" height="300"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div class="welcome">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="content pb-1 " >
                                <p><b>Case Status </b>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <select name="caseFilter" onChange={this.onChange} value={caseFilter}>
                                        {caseStatusData != null ? Object.keys(caseStatusData[0]).map((c,i) => {
                                            if(i >  0)
                                                return <option value={c}>{c}</option>
                                        }): null}
                                    </select>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-12" >
                            <div class="content"  style={{position:'relative',height:'400px'}}>
                                <canvas id="caseChart" height="300"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  }
}

export default Cases
