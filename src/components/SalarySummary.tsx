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
        <Card className={'card'}>
            <Row>
                <Col>
                    <h1 className={'mainTitle'}>Your salary</h1>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <p className={'summarySubDetail'}>Items</p>
                </Col>
                <Col span={12}>
                    <p className={'summarySubDetail summaryNumber'}>Amount</p>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <p className={'summaryText'}>Basic Salary</p>
                </Col>
                <Col span={12}>
                    <p className={'summaryNumber summaryText'}>{ basicSalary }</p>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <p className={'summaryText'}>Gross Earning</p>
                </Col>
                <Col span={12}>
                    <p className={'summaryNumber summaryText'}>{ calcTotalAllowances() }</p>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <p className={'summaryText'}>Gross Deduction</p>
                </Col>
                <Col span={12}>
                    <p className={'summaryNumber summaryText'}>{ calcTotalDeductions() }</p>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <p className={'summaryText'}>Employee EPF (8%)</p>
                </Col>
                <Col span={12}>
                    <p className={'summaryNumber summaryText'}>{ epf8() }</p>
                </Col>
            </Row>
            <Card className={'innerCard'}>
                <Row>
                    <Col span={12}>
                        <h2 className={'subCategoryTitle'}>Net Salary (Take Home)</h2>
                    </Col>
                    <Col span={12}>
                        <h2 className={'subCategoryTitle summaryNumber'}>{ netSalaryTakenHome() }</h2>
                    </Col>
                </Row>
            </Card>
            <Row>
                <Col>
                    <p className={'summarySubDetail'}>Contribution from the Employer</p>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <p className={'summaryText'}>Employer EPF (12%)</p>
                </Col>
                <Col span={12}>
                    <p className={'summaryNumber summaryText'}>{ epf12() }</p>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <p className={'summaryText'}>Employer ETF (3%)</p>
                </Col>
                <Col span={12}>
                    <p className={'summaryNumber summaryText'}>{ etf3() }</p>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <p className={'summaryText'}>CTC (Cost to Company)</p>
                </Col>
                <Col span={12}>
                    <p className={'summaryNumber summaryText'}>{ costToCompany() }</p>
                </Col>
            </Row>
        </Card>
    )
}

export default SalarySummary;