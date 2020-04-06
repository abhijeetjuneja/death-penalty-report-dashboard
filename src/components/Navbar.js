import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {

  render() {

    return (
        <div>
            <aside class="side-nav back-blue text-white" id="show-side-navigation1">
                <div class="heading back-blue text-white">
                    <div class="info text-white">
                        <h3><a href="#" class="text-white">JusticeHub Panel</a></h3>
                    </div>
                </div>
                <ul class="categories">
                    <li><i class="fa fa-home fa-fw" aria-hidden="true"></i><a href="/" class="text-white">Home</a>
                    </li>
                    <li><i class="fa fa-globe fa-fw"></i><a href="/statewise" class="text-white">Statewise Distribution </a>
                    </li>
                    <li><i class="fa fa-file fa-fw"></i><a href="/cases" class="text-white">Cases</a>
                    </li>
                </ul>
            </aside>
        </div>
    )
  }
}

export default withRouter(Navbar)
