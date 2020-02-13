import React, {Component} from 'react';
import {Leftbar} from "../../components/Leftbar";

import '../../styles/style.css';

/**
 * @author Andrey Dodonov
 * @description finMan2020
 */

class IncomePage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="main__content">
                <Leftbar/>
                <section className="income main__section">
                    <h1 className="income__header">
                        Income
                    </h1>

                    <div className="income__add">
                        <h1 className="income__add-header">
                            Add income
                        </h1>
                        <form className="income__add-form">
                            <input type="text" placeholder="месяц"/>
                            <input type="text" placeholder="доход"/>
                            <input type="text" placeholder="категория"/>
                            <button>Добавить</button>
                        </form>
                    </div>

                    <table className="income__table">
                        <caption>Table of incomes</caption>
                        <thead className="income__table-thead">
                        <tr>
                            <th>№</th>
                            <th>месяц</th>
                            <th>доход</th>
                            <th>категория</th>
                            <th>сэкономлено</th>
                            <th>динамика</th>
                        </tr>
                        </thead>
                        <tbody className="income__table-tbody">
                        <tr className="income__table-tr">
                            <td>1</td>
                            <td>январь</td>
                            <td>1000$</td>
                            <td>нашёл</td>
                            <td>200$</td>
                            <td>+</td>
                        </tr>
                        <tr className="income__table-tr">
                            <td>2</td>
                            <td>февраль</td>
                            <td>1200$</td>
                            <td>выиграл</td>
                            <td>400$</td>
                            <td>+</td>
                        </tr>
                        <tr className="income__table-tr">
                            <td>3</td>
                            <td>март</td>
                            <td>1100$</td>
                            <td>подарили</td>
                            <td>100$</td>
                            <td>+</td>
                        </tr>
                        </tbody>
                    </table>



                    <div className="income__add">
                        <h1 className="income__add-header">
                            Add regular income
                        </h1>
                        <form className="income__add-form">
                            <input type="text" placeholder="месяц"/>
                            <input type="text" placeholder="доход"/>
                            <input type="text" placeholder="категория"/>
                            <input type="text" placeholder="периодичность"/>
                            <button>Добавить</button>
                        </form>
                    </div>

                    <table className="income__table">
                        <caption>Table of regular incomes</caption>
                        <thead className="income__table-thead">
                        <tr>
                            <th>№</th>
                            <th>месяц</th>
                            <th>доход</th>
                            <th>категория</th>
                            <th>сэкономлено</th>
                            <th>динамика</th>
                        </tr>
                        </thead>
                        <tbody className="income__table-tbody">
                        <tr className="income__table-tr">
                            <td>1</td>
                            <td>январь</td>
                            <td>1000$</td>
                            <td>зарплата</td>
                            <td>200$</td>
                            <td>+</td>
                        </tr>
                        <tr className="income__table-tr">
                            <td>2</td>
                            <td>февраль</td>
                            <td>1200$</td>
                            <td>премия</td>
                            <td>400$</td>
                            <td>+</td>
                        </tr>
                        <tr className="income__table-tr">
                            <td>3</td>
                            <td>март</td>
                            <td>1100$</td>
                            <td>подработка</td>
                            <td>100$</td>
                            <td>+</td>
                        </tr>
                        </tbody>
                    </table>


                </section>
            </div>
        )


    }
}

export default IncomePage;

