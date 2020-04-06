import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      errors: {}
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
                    <a class="navbar-brand" href="#">&nbsp;&nbsp;<span class="text-blue">Annual Death Penalty report, 2019</span></a>
                </div>
            </div>
        </nav>
    )
  }
}

export default Header