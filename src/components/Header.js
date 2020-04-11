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
                        <a class="navbar-brand" href="#">
                            <button type="button" class="navbar-toggle header-button collapsed show-side-btn pl-2 pr-2 desktop-toggle" data-toggle="collapse" data-target="#" aria-expanded="false">
                                <i class="fa fa-bars"></i>
                            </button>
                            <button type="button" class="navbar-toggle header-button collapsed show-side-btn pl-2 pr-2 mobile-toggle" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false">
                                <i class="fa fa-bars"></i>
                            </button>
                            &nbsp;&nbsp;<span class="text-blue">Annual Death Penalty report, 2019 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.project39a.com/" target="_blank"  style={{color:'grey', textDecoration:'underline'}} class="pl-4 ml-4">(Data source Credit - Project 39A)</a></span>
                        </a>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link text-white " href="/">Home </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white " href="/statewise">Statewise Distribution</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white " href="/cases">Cases</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
