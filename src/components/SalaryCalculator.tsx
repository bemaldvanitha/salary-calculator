import React from "react";
import { Row, Col, Card, Divider } from 'antd';

import BasicSalary from "./BasicSalary";
import SalaryEarnings from "./SalaryEarnings";
import SalaryDeduction from "./SalaryDeduction";

const SalaryCalculator: React.FC<{ basicSalary: number, earnings: { id: number, amount: number, epfEtfAllowed: boolean }[],
    deductions: { id: number, amount: number}[], setBasicSalary: (val: number) => void,
    changeDeductions: (value: number, id: number) => void, changeEarnings: (value: number | boolean, id: number) => void,
    addRemoveEarnings: (id: number | undefined) => void, addRemoveDeductions: (id: number | undefined) => void,
    reset: () => void }> = ({ basicSalary, setBasicSalary, earnings, deductions, reset, changeDeductions, changeEarnings, addRemoveEarnings, addRemoveDeductions }) => {

    return(
        <Card className={'card'}>
            <Row className={'calculatorSubSection'}>
                <Col>
                    <BasicSalary basicSalary={ basicSalary } setBasicSalary={ setBasicSalary } reset={reset}/>
                </Col>
            </Row>
            <Row className={'calculatorSubSection'}>
                <Col>
                    <SalaryEarnings earnings={ earnings } changeEarnings={ changeEarnings }
                                    addRemoveEarnings={addRemoveEarnings}/>
                </Col>
            </Row>
            <Divider/>
            <Row className={'calculatorSubSection'}>
                <Col>
                    <SalaryDeduction deductions={ deductions } changeDeductions={ changeDeductions }
                                     addRemoveDeductions={addRemoveDeductions}/>
                </Col>
            </Row>
        </Card>
    )
}

export default SalaryCalculator;