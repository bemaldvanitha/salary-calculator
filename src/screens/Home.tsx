import React, { useState } from "react";
import { Row, Col } from 'antd';

import SalaryCalculator from "../components/SalaryCalculator";
import SalarySummary from "../components/SalarySummary";

const Home: React.FC = () => {
    const [basicSalary, setBasicSalary] = useState<number>(100000);
    const [earnings, setEarnings] = useState<{ id: number, amount: number, epfEtfAllowed: boolean }[]>([{ id: 1,amount: 20000, epfEtfAllowed: false }, { id: 2, amount: 10000, epfEtfAllowed: true }]);
    const [deductions, setDeductions] =useState<{ id: number, amount: number}[]>([{ id: 1, amount: 5000 }]);

    return(
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12} className="gutter-row">
                    <SalaryCalculator basicSalary={basicSalary} earnings={earnings} deductions={deductions}
                                      setBasicSalary={setBasicSalary} setEarnings={setEarnings} setDeductions={setDeductions}/>
                </Col>
                <Col span={12} className="gutter-row">
                    <SalarySummary basicSalary={basicSalary} earnings={earnings} deductions={deductions}/>
                </Col>
            </Row>
        </div>
    )
}

export default Home;