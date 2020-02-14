import React, {Component} from 'react';
import {Leftbar} from "../../components/Leftbar";

import '../../styles/style.css';

/**
 * @description this page for plans ))
 */

class PlansPage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="main__content">
                <Leftbar/>
                <section className="income main__section">
                    <h1>PlansPage</h1>
                </section>
            </div>
        )
    }
}

export default PlansPage;
