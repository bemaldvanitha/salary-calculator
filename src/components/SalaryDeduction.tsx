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
                    <h2 className={'subCategoryTitle'}>Deductions</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className={'subDetail'}>Salary Advances, Loan Deductions and all</p>
                </Col>
            </Row>
            { deductions.map(deduction => {
              return(
                  <Row key={deduction.id} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                      <Col className="gutter-row" span={20}>
                          <Input value={deduction.amount} onChange={ (e) => changeDeduction(e, deduction.id) }/>
                      </Col>
                      <Col className="gutter-row" span={4}>
                        <Button type={'link'} onClick={ () => removeDeduction(deduction.id) }
                                icon={<Image src={'./icon/close.png'} preview={false}/>} size={'large'}/>
                      </Col>
                  </Row>
              )
            })}
            <Button type={'link'} onClick={addNewDeductions} icon={<Image src={'./icon/add.png'} style={{ padding: 8 }} preview={false}/>}
                    size={'large'}>
                Add New Allowance
            </Button>
        </>
    )
}

export default SalaryDeduction;