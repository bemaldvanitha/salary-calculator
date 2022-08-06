import React, { useState } from "react";
import { Row, Col } from 'antd';

import SalaryCalculator from "../components/SalaryCalculator";
import SalarySummary from "../components/SalarySummary";

const Home: React.FC = () => {
    const [basicSalary, setBasicSalary] = useState<number>(100000);
    const [earnings, setEarnings] = useState<{ id: number, amount: number, epfEtfAllowed: boolean }[]>([{ id: 1,amount: 20000, epfEtfAllowed: false }, { id: 2, amount: 10000, epfEtfAllowed: true }]);
    const [deductions, setDeductions] =useState<{ id: number, amount: number}[]>([{ id: 1, amount: 5000 }]);

    const resetValues = () => {
        setBasicSalary(0);
        setDeductions([]);
        setEarnings([]);
    }

    const changeDeductions = (value: number, id: number) => {
        let changedDeductionPosition = deductions.findIndex(deduct => deduct.id === id);
        let newList = [...deductions]
        newList[changedDeductionPosition].amount = value;
        setDeductions(newList);
    }

    const changeEarnings = (value: number | boolean, id: number) => {
        let changedAllowancePosition = earnings.findIndex(earning => earning.id === id);
        let newList = [...earnings];
        if(typeof value === 'boolean'){
            newList[changedAllowancePosition].epfEtfAllowed = value;
        }else {
            newList[changedAllowancePosition].amount = value;
        }
        setEarnings(newList);
    }

    const addRemoveEarnings = (id: number | undefined) => {
        if(id === -1){
            setEarnings([ ...earnings, { id: Math.random(), amount: 0, epfEtfAllowed: false } ])
        }else {
            const newAllowances = earnings.filter(earning => earning.id !== id);
            setEarnings(newAllowances);
        }
    }

    const addRemoveDeductions = (id: number | undefined) => {
        if(id === -1){
            setDeductions([ ...deductions, { id: Math.random(), amount: 0} ])
        }else{
            const newDeductions = deductions.filter(deduct => deduct.id !== id);
            setDeductions(newDeductions);
        }
    }

    return(
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12} className="gutter-row">
                    <SalaryCalculator basicSalary={basicSalary} earnings={earnings} deductions={deductions}
                                      setBasicSalary={setBasicSalary} reset={resetValues} changeDeductions={ changeDeductions }
                                      changeEarnings={changeEarnings} addRemoveEarnings={addRemoveEarnings}
                                      addRemoveDeductions={addRemoveDeductions}/>
                </Col>
                <Col span={12} className="gutter-row">
                    <SalarySummary basicSalary={basicSalary} earnings={earnings} deductions={deductions}/>
                </Col>
            </Row>
        </div>
    )
}

export default Home;