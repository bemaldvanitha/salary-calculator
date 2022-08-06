import React from "react";
import { Row, Col, Input, Button, Image } from 'antd';

const BasicSalary: React.FC<{ basicSalary: number, setBasicSalary: (val: number) => void, reset: () => void }> = ({ basicSalary, setBasicSalary, reset }) => {

    return(
        <>
            <Row>
                <Col>
                    <h1>Calculate your salary</h1>
                </Col>
                <Button type={'link'} onClick={reset}>
                    <Col>
                        <Image src={'./icon/reset.png'} width={21} height={18}/>
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