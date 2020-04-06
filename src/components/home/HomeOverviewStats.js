import React, { Component } from 'react'

class HomeOverviewStats extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }
    componentDidMount(){
       
    }
    render() {
        let { overViewDeath } = this.props
        return (
            <div>
                <section class="statistics">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="box">
                                    <i class="fa fa-user fa-fw bg-primary"></i>
                                    <div class="info">
                                        <h4>{overViewDeath.total}</h4>
                                        <p>Sentenced to Death</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="box">
                                    <i class="fa fa-file fa-fw danger"></i>
                                    <div class="info">
                                        <h4>{overViewDeath['Total no. of judgments']}</h4>
                                        <p>No. of Judgments</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="box">
                                <i class="fa fa-paste fa-fw success"></i>
                                <div class="info">
                                    <h4>{overViewDeath['Judgments available']} / {overViewDeath['Judgments not available']}</h4>
                                    <p>Judgments Avai/Unavailable</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br /><br />
            </div>
        )
  }
}

export default HomeOverviewStats
