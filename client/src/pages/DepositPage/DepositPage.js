import React, {Component} from 'react';
import {Leftbar} from "../../components/Leftbar";

import '../../styles/style.css';

/**
 * @description this page for deposit ))
 */

class DepositPage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="main__content">
                <Leftbar/>
                <section className="income main__section">
                    <h1>DepositPage</h1>
                </section>
            </div>
        )
    }
}

export default DepositPage;
