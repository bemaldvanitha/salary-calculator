import React from "react";
import {Row, Col, Input, Button} from 'antd';
import {CloseCircleOutlined, PlusOutlined} from "@ant-design/icons";

const SalaryDeduction: React.FC<{ deductions: number[], setDeductions: (val: number[]) => void }> = ({ deductions,setDeductions }) => {

    const changeDeduction = () => {

    }

    const addNewDeductions = () => {
        setDeductions([ ...deductions, 0 ])
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
                  <Row>
                      <Col>
                          <Row key={deduction.toString() + Math.random()}>
                              <Col>
                                  <Input value={deduction} onChange={changeDeduction}/>
                              </Col>
                              <Col>
                                  <CloseCircleOutlined size={20}/>
                              </Col>
                          </Row>
                      </Col>
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