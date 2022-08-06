import React, { useState, useEffect } from "react";
import { Row, Col } from 'antd';

import SalaryCalculator from "../components/SalaryCalculator";
import SalarySummary from "../components/SalarySummary";

const Home: React.FC = () => {
    const [basicSalary, setBasicSalary] = useState<number>(0);
    const [earnings, setEarnings] = useState<{ id: number, amount: number, epfEtfAllowed: boolean }[]>([]);
    const [deductions, setDeductions] =useState<{ id: number, amount: number}[]>([]);
    const [firstRun, setFirstRun] = useState<boolean>(true);

    useEffect(() => {
        const basicSal = localStorage.getItem("basicSalary");
        const earningsSal = localStorage.getItem("earnings");
        const deductionsSal = localStorage.getItem("deductions");

        if(basicSal !== null && earningsSal !== null  && deductionsSal !== null){
            setBasicSalary(JSON.parse(basicSal));
            setEarnings(JSON.parse(earningsSal));
            setDeductions(JSON.parse(deductionsSal));
            setFirstRun(false);
        }
    },[]);

    useEffect(() => {
        if(!firstRun) {
            localStorage.setItem("basicSalary", JSON.stringify(basicSalary));
            localStorage.setItem("earnings", JSON.stringify(earnings));
            localStorage.setItem("deductions", JSON.stringify(deductions));
        }
    },[basicSalary, earnings, deductions]);

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