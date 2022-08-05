import React from "react";
import { Row, Col, Card } from 'antd';

const SalarySummary: React.FC<{ basicSalary: number, earnings: { amount: number, epfEtfAllowed: boolean }[], deductions: { id: number, amount: number}[] }> =
    ({ basicSalary, earnings, deductions }) => {

    const calcTotalDeductions = () => {
        let deduction = 0;
        deductions.forEach(deduct => {
            deduction += deduct.amount
        })
        return deduction;
    }

    const calcTotalAllowances = () => {
        let allowance = 0;
        earnings.forEach(earning => {
            allowance += earning.amount;
        })
        return allowance;
    }

    const epf8 =() => {
        let epfCalcSum = basicSalary;
        earnings.forEach(earning => {
            if(earning.epfEtfAllowed){
                epfCalcSum += earning.amount;
            }
        })
        return (epfCalcSum * 8) / 100;
    }

    const epf12 =() => {
        let epfCalcSum = basicSalary;
        earnings.forEach(earning => {
            if(earning.epfEtfAllowed){
                epfCalcSum += earning.amount;
            }
        })
        return (epfCalcSum * 12) / 100;
    }

    const etf3 =() => {
        let epfCalcSum = basicSalary;
        earnings.forEach(earning => {
            if(earning.epfEtfAllowed){
                epfCalcSum += earning.amount;
            }
        })
        return (epfCalcSum * 3) / 100;
    }

    const netSalaryTakenHome = () => {
        return basicSalary + calcTotalAllowances() - epf8() - calcTotalDeductions();
    }

    const costToCompany = () => {
        return basicSalary + calcTotalAllowances() - calcTotalDeductions() + epf12() + etf3();
    }

    return(
        <>
            <Row>
                <Col>
                    <h1>Your salary</h1>
                </Col>
            </Row>
            <Row>
                <Col span={7}>
                    Items
                </Col>
                <Col span={7}>
                    Amount
                </Col>
            </Row>
            <Row>
                <Col span={7}>
                    Basic Salary
                </Col>
                <Col span={7}>
                    { basicSalary }
                </Col>
            </Row>
            <Row>
                <Col span={7}>
                    Gross Earning
                </Col>
                <Col span={7}>
                    { calcTotalAllowances() }
                </Col>
            </Row>
            <Row>
                <Col span={7}>
                    Gross Deduction
                </Col>
                <Col span={7}>
                    { calcTotalDeductions() }
                </Col>
            </Row>
            <Row>
                <Col span={7}>
                    Employee EPF (8%)
                </Col>
                <Col span={7}>
                    { epf8() }
                </Col>
            </Row>
            <Card>
                <Row>
                    <Col span={7}>Net Salary (Take Home)</Col>
                    <Col span={7}>{ netSalaryTakenHome() }</Col>
                </Row>
            </Card>
            <Row>
                <Col>Contribution from the Employer</Col>
            </Row>
            <Row>
                <Col span={7}>
                    Employer EPF (12%)
                </Col>
                <Col span={7}>
                    { epf12() }
                </Col>
            </Row>
            <Row>
                <Col span={7}>
                    Employer ETF (3%)
                </Col>
                <Col span={7}>
                    { etf3() }
                </Col>
            </Row>
            <Row>
                <Col span={7}>
                    CTC (Cost to Company)
                </Col>
                <Col span={7}>
                    { costToCompany() }
                </Col>
            </Row>
        </>
    )
}

export default SalarySummary;