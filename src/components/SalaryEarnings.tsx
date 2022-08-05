import React from "react";
import { Row, Col, Input, Checkbox, Button } from 'antd';
import { CloseCircleOutlined, PlusOutlined } from '@ant-design/icons'
import {CheckboxChangeEvent} from "antd/es/checkbox";

const SalaryEarnings: React.FC<{ earnings: { id: number, amount: number, epfEtfAllowed: boolean }[],
    setEarnings: (val: { id: number, amount: number, epfEtfAllowed: boolean }[]) => void }> = ({ earnings, setEarnings }) => {

    const setEarningAmount = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        let changedAllowance = earnings.find(earning => earning.id === id);
        const newAllowances = earnings.filter(earning => earning.id !== id);

        if(changedAllowance !== undefined){
            changedAllowance.amount = parseFloat(e.target.value);
            setEarnings([ ...newAllowances, changedAllowance])
        }
    }

    const setEarningEpfEtf = (e: CheckboxChangeEvent, id: number) => {
        let changedAllowance = earnings.find(earning => earning.id === id);
        const newAllowances = earnings.filter(earning => earning.id !== id);

        if(changedAllowance !== undefined){
            changedAllowance.epfEtfAllowed = e.target.checked;
            setEarnings([ ...newAllowances, changedAllowance])
        }
    }

    const addNewAllowance = () => {
        setEarnings([...earnings, { id: Math.random(), amount: 0, epfEtfAllowed: false }])
    }

    const removeAllowance = (id: number) => {
        const newAllowances = earnings.filter(earning => earning.id !== id);
        setEarnings(newAllowances);
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
                            <Input value={earning.amount} onChange={(e) =>setEarningAmount(e, earning.id) }/>
                        </Col>
                        <Button type={'link'} onClick={ () => removeAllowance(earning.id) }>
                            <Col>
                                <CloseCircleOutlined size={20}/>
                            </Col>
                        </Button>
                        <Col>
                            <Checkbox onChange={(e) => setEarningEpfEtf(e, earning.id) } checked={earning.epfEtfAllowed}>EPF/ETF</Checkbox>
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