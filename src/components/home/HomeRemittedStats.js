import React, { Component } from 'react'

class HomeRemittedStats extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }
    componentDidMount(){
       
    }
    render() {
        let { overViewRemitted } = this.props
        return (
            <div>
                <p class="pl-3"><b>Remitted Cases:</b></p> 
                <section class='statis text-center'>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                            <div class="box bg-primary">
                                <i class="fa fa-paste"></i>
                                <h4>{overViewRemitted['Number of Persons in HC']} / {overViewRemitted['Number of Cases in HC']} </h4>
                                <p class="lead">HC Persons/Cases</p>
                            </div>
                            </div>
                            <div class="col-md-4">
                            <div class="box danger">
                                <i class="fa fa-paste"></i>
                                <h4>{overViewRemitted['Number of Persons in SC']} / {overViewRemitted['Number of Cases in SC']}</h4>
                                <p class="lead">SC Persons/Cases</p>
                            </div>
                            </div>
                            <div class="col-md-4">
                            <div class="box warning">
                                <i class="fa fa-paste"></i>
                                <h4>{overViewRemitted['Judgments Available']} / {overViewRemitted['Judgments Not Available']}</h4>
                                <p class="lead">Judgments Avai/Unavailable</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
  }
}

export default HomeRemittedStats
