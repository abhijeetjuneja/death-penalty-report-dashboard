import React, { Component } from 'react'

class Header extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle header-button collapsed show-side-btn pl-2 pr-2" data-toggle="collapse" data-target="#" aria-expanded="false">
                            <i class="fa fa-bars"></i>
                        </button>
                        <a class="navbar-brand" href="#">&nbsp;&nbsp;<span class="text-blue">Annual Death Penalty report, 2019 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.project39a.com/" target="_blank"  style={{color:'grey', textDecoration:'underline'}} class="pl-4 ml-4">(Data source Credit - Project 39A)</a></span></a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
