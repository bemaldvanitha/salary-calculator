import React from "react";
import {Row, Col, Input, Button} from 'antd';
import {CloseCircleOutlined, PlusOutlined} from "@ant-design/icons";

const SalaryDeduction: React.FC<{ deductions: { id: number, amount: number}[], setDeductions: (val: { id: number, amount: number}[]) => void }> = ({ deductions,setDeductions }) => {

    const changeDeduction = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        let changedDeduction = deductions.find(deduct => deduct.id === id);
        const newDeductions = deductions.filter(deduct => deduct.id !== id);

        if(changedDeduction !== undefined){
            changedDeduction.amount = parseFloat(e.target.value);
            setDeductions([ ...newDeductions, changedDeduction])
        }
    }

    const addNewDeductions = () => {
        setDeductions([ ...deductions, { id: Math.random(), amount: 0} ])
    }

    const removeDeduction = (id: number) => {
        const newDeductions = deductions.filter(deduct => deduct.id !== id);
        setDeductions(newDeductions);
    }

    return(
        <>
            <Row>
                <Col>
                    Deductions
                </Col>
            </Row>
            <Row>
                <Col>
                    Salary Advances, Loan Deductions and all
                </Col>
            </Row>
            { deductions.map(deduction => {
              return(
                  <Row key={deduction.toString() + Math.random()}>
                      <Col>
                          <Input value={deduction.amount} onChange={ (e) => changeDeduction(e, deduction.id) }/>
                      </Col>
                      <Button type={'link'} onClick={ () => removeDeduction(deduction.id) }>
                          <Col>
                              <CloseCircleOutlined size={20}/>
                          </Col>
                      </Button>
                  </Row>
              )
            })}
            <Button type={'link'} onClick={addNewDeductions}>
                <Row>
                    <Col>
                        <PlusOutlined />
                    </Col>
                    <Col>
                        Add New Allowance
                    </Col>
                </Row>
            </Button>
        </>
    )
}

export default SalaryDeduction;