import React from "react";
import { Row, Col, Input, Checkbox, Button } from 'antd';
import { CloseCircleOutlined, PlusOutlined } from '@ant-design/icons'
import {CheckboxChangeEvent} from "antd/es/checkbox";

const SalaryEarnings: React.FC<{ earnings: { amount: number, epfEtfAllowed: boolean }[],
    setEarnings: (val: { amount: number, epfEtfAllowed: boolean }[]) => void }> = ({ earnings, setEarnings }) => {

    const setEarningAmount = (e: React.ChangeEvent) => {

    }

    const setEarningEpfEtf = (e: CheckboxChangeEvent) => {

    }

    const addNewAllowance = () => {
        setEarnings([...earnings, { amount: 0, epfEtfAllowed: false }])
    }

    return(
        <>
            <Row>
                <Col>
                    <h2>Earnings</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    Allowance, Fixed Allowance, Bonus and etc.
                </Col>
            </Row>
            { earnings.map(earning => {
                return (
                    <Row key={earning.amount.toString() + Math.random()}>
                        <Col>
                            <Input value={earning.amount} onChange={setEarningAmount}/>
                        </Col>
                        <Col>
                            <CloseCircleOutlined size={20}/>
                        </Col>
                        <Col>
                            <Checkbox onChange={setEarningEpfEtf} checked={earning.epfEtfAllowed}>EPF/ETF</Checkbox>
                        </Col>
                    </Row>
                )
            })}
            <Button type={'link'} onClick={addNewAllowance}>
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

export default SalaryEarnings;