import React, { Component } from 'react'

class StatewiseHeader extends Component {
    constructor(){
        super()
        this.state = {
        }
    }

    componentDidMount(){

    }

    render() {
        let { currentState, natureOfOffenceFilter, natureOfOffenceList, setCurrentState, onChange, judgementFilter  } = this.props
        return (
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="content pb-1">
                                <p><b>Statewise Distribution (Click marker to Select State)</b> &nbsp;&nbsp;
                                {currentState != null ? <button type="button" class="btn btn-sm btn-secondary" onClick={() => setCurrentState(null)}>Show All</button>: null}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                    Offense: &nbsp;
                                    <select name="natureOfOffenceFilter" onChange={onChange} value={natureOfOffenceFilter}>
                                        <option value="All">All</option>
                                        {natureOfOffenceList != null ? natureOfOffenceList.map(n => {
                                            return <option value={n}>{n}</option>
                                        }) : null}
                                    </select> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                    Judgment: &nbsp;
                                    <select name="judgementFilter" onChange={onChange} value={judgementFilter}>
                                        <option value="All">All</option>
                                        <option value="Y">Yes</option>
                                        <option value="N">No</option>
                                    </select>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
  }
}

export default StatewiseHeader
