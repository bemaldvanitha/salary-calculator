import React from "react";
import { Row, Col, Input, Checkbox, Button, Image } from 'antd';
import {CheckboxChangeEvent} from "antd/es/checkbox";

const SalaryEarnings: React.FC<{ earnings: { id: number, amount: number, epfEtfAllowed: boolean }[],
    addRemoveEarnings: (id: number | undefined) => void,
    changeEarnings: (value: number | boolean, id: number) => void}> = ({ earnings, changeEarnings, addRemoveEarnings }) => {

    const setEarningAmount = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        changeEarnings(parseFloat(e.target.value), id);
    }

    const setEarningEpfEtf = (e: CheckboxChangeEvent, id: number) => {
        changeEarnings(e.target.checked, id);
    }

    const addNewAllowance = () => {
        addRemoveEarnings(-1);
    }

    const removeAllowance = (id: number) => {
        addRemoveEarnings(id);
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
                                <Image src={'./icon/close.png'} width={32} height={32}/>
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

export default SalaryEarnings;