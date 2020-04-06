import React, { Component } from 'react'

class HomeCommutedStats extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }
    componentDidMount(){
       
    }
    render() {
        let { overViewCommuted } = this.props
        return (
            <div>
                <p class="pl-3"><b>Commuted Cases:</b></p> 
                <section class='statis text-center'>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                            <div class="box bg-primary">
                                <i class="fa fa-paste"></i>
                                <h4>{overViewCommuted['Number of Persons in HC']} / {overViewCommuted['Number of Cases in HC']} </h4>
                                <p>HC Persons/Cases</p>
                            </div>
                            </div>
                            <div class="col-md-4">
                            <div class="box danger">
                                <i class="fa fa-paste"></i>
                                <h4>{overViewCommuted['Number of Persons in SC']} / {overViewCommuted['Number of Cases in SC']}</h4>
                                <p>SC Persons/Cases</p>
                            </div>
                            </div>
                            <div class="col-md-4">
                            <div class="box warning">
                                <i class="fa fa-paste"></i>
                                <h4>{overViewCommuted['Judgments Available']} / {overViewCommuted['Judgments Not Available']}</h4>
                                <p>Judgments Avai/Unavailable</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
  }
}

export default HomeCommutedStats
