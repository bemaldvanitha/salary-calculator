import React from "react";
import { Row, Col, Card, Divider } from 'antd';

import BasicSalary from "./BasicSalary";
import SalaryEarnings from "./SalaryEarnings";
import SalaryDeduction from "./SalaryDeduction";

const SalaryCalculator: React.FC<{ basicSalary: number, earnings: { amount: number, epfEtfAllowed: boolean }[], deductions: number[], setBasicSalary: (val: number) => void,
    setEarnings: (val: { amount: number, epfEtfAllowed: boolean }[]) => void, setDeductions: (val: number[]) => void }> = ({ basicSalary, setBasicSalary, earnings, setEarnings, deductions, setDeductions }) => {
    return(
        <Card>
            <Row>
                <Col>
                    <BasicSalary basicSalary={ basicSalary } setBasicSalary={ setBasicSalary }/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SalaryEarnings earnings={ earnings } setEarnings={ setEarnings }/>
                </Col>
            </Row>
            <Divider/>
            <Row>
                <Col>
                    <SalaryDeduction deductions={ deductions } setDeductions={ setDeductions }/>
                </Col>
            </Row>
        </Card>
    )
}

export default SalaryCalculator;