import React, { Component } from 'react'
import Homepage from './Homepage';
import Contact from '../../components/navbar/Contact';
import Welcome from './Welcome';

export default class HomePageContainer extends Component {
    render() {
        return (
            <div>
                <Contact />
                <Welcome />
                <Homepage />
            </div>
        )
    }
}
