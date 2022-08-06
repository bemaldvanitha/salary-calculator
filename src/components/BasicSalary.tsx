import React from "react";
import { Row, Col, Input, Button, Image } from 'antd';

const BasicSalary: React.FC<{ basicSalary: number, setBasicSalary: (val: number) => void, reset: () => void }> = ({ basicSalary, setBasicSalary, reset }) => {

    return(
        <>
            <Row>
                <Col>
                    <h1>Calculate your salary</h1>
                </Col>
                <Button type={'link'} onClick={reset} icon={<Image src={'./icon/reset.png'} style={{ padding: 8 }}/>} size={'large'}>
                    Reset
                </Button>
            </Row>
            <Row>
                <Col>
                    <h2 className={'subCategoryTitle'}>Basic Salary</h2>
                </Col>
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