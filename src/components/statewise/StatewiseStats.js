import React, { Component } from 'react'

class StatewiseStats extends Component {
    constructor(){
        super()
        this.state = {
        }
    }

    componentDidMount(){

    }

    render() {
        let { currentState, caseList, statewiseData } = this.props
        return (
            <div>
                <div class="row">
                    <div class="col-md-12 mb-4">
                        <div class="box">
                            <i class="fa fa-user fa-fw bg-danger text-center"></i>
                            <div class="info">
                                <h4>{caseList.length}</h4>
                                <p>Sentenced to Death</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 mb-4 mt-4">
                        {currentState == null ? <div class="box">
                            <i class="fa fa-user fa-globe bg-success text-center"></i>
                            <div class="info">
                                <h4>-</h4>
                                <p>Showing All States</p>
                            </div>
                        </div> :
                        <div class="box">
                            <i class="fa fa-globe bg-success text-center"></i>
                            <div class="info">
                                <h4>{currentState.state}</h4>
                                <p>Selected State</p>
                            </div>
                        </div>}
                    </div>
                    <div class="col-md-12 mb-4 mt-4">
                        <div class="box">
                            <i class="fa fa-map-marker bg-warning text-center"></i>
                            <div class="info">
                                <h4>{statewiseData.length}</h4>
                                <p>States</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
  }
}

export default StatewiseStats
