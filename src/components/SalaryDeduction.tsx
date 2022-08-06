import React from "react";
import { Row, Col, Input, Button, Image } from 'antd';

const SalaryDeduction: React.FC<{ deductions: { id: number, amount: number}[],
    addRemoveDeductions: (id: number | undefined) => void, changeDeductions: (value: number, id: number) => void }>
    = ({ deductions, changeDeductions, addRemoveDeductions }) => {

    const changeDeduction = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        changeDeductions(parseFloat(e.target.value), id);
    }

    const addNewDeductions = () => {
        addRemoveDeductions(-1);
    }

    const removeDeduction = (id: number) => {
        addRemoveDeductions(id);
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
                              <Image src={'./icon/close.png'} width={32} height={32}/>
                          </Col>
                      </Button>
                  </Row>
              )
            })}
            <Button type={'link'} onClick={addNewDeductions}>
                <Row>
                    <Col>
                        <Image src={'./icon/add.png'} width={14} height={14}/>
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