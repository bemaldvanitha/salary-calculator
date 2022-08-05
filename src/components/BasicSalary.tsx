import React from "react";
import { Row, Col, Input, Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

const BasicSalary: React.FC<{ basicSalary: number, setBasicSalary: (val: number) => void }> = ({ basicSalary, setBasicSalary }) => {

    const reset = () => {

    }

    return(
        <>
            <Row>
                <Col>
                    <h1>Calculate your salary</h1>
                </Col>
                <Button type={'link'} onClick={reset}>
                    <Col>
                        <ReloadOutlined />
                        Reset
                    </Col>
                </Button>
            </Row>
            <Row>
                <Col>
                    <Input onChange={(e) => setBasicSalary(parseFloat(e.target.value))} value={basicSalary.toFixed(2)}/>
                </Col>
            </Row>
        </>
    )
}

export default BasicSalary;