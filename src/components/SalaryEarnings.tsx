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
                    <h2 className={'subCategoryTitle'}>Earnings</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className={'subDetail'}>Allowance, Fixed Allowance, Bonus and etc.</p>
                </Col>
            </Row>
            { earnings.map(earning => {
                return (
                    <Row key={earning.id} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={16}>
                            <Input value={earning.amount} onChange={(e) =>setEarningAmount(e, earning.id) }/>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Button type={'link'} onClick={ () => removeAllowance(earning.id) }
                                    icon={<Image preview={false} src={'./icon/close.png'}/>} size={'large'}/>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Checkbox onChange={(e) => setEarningEpfEtf(e, earning.id) } checked={earning.epfEtfAllowed}>EPF/ETF</Checkbox>
                        </Col>
                    </Row>
                )
            })}
            <Button type={'link'} onClick={addNewAllowance} icon={<Image src={'./icon/add.png'} style={{ padding: 8 }} preview={false}/>}
                     size={'large'}>
                Add New Allowance
            </Button>
        </>
    )
}

export default SalaryEarnings;