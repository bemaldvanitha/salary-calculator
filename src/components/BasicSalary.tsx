import React from "react";
import { Row, Col, Input, Button, Image } from 'antd';

const BasicSalary: React.FC<{ basicSalary: number, setBasicSalary: (val: number) => void, reset: () => void }> = ({ basicSalary, setBasicSalary, reset }) => {

    return(
        <>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={18}>
                    <h1 className={'mainTitle'}>Calculate your salary</h1>
                </Col>
                <Col className="gutter-row" span={4}>
                    <Button type={'link'} onClick={reset} icon={<Image src={'./icon/reset.png'} style={{ padding: 8 }}/>} size={'large'}>
                        Reset
                    </Button>
                </Col>
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