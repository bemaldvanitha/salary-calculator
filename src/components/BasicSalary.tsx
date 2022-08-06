import React from "react";
import { Row, Col, Input, Button, Image } from 'antd';

const BasicSalary: React.FC<{ basicSalary: number, setBasicSalary: (val: number) => void, reset: () => void }> = ({ basicSalary, setBasicSalary, reset }) => {

    return(
        <>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-evenly">
                <Col className="gutter-row">
                    <h1 className={'mainTitle'}>Calculate your salary</h1>
                </Col>
                <Col className="gutter-row">
                    <Button type={'link'} onClick={reset} icon={<Image preview={false} src={'./icon/reset.png'}
                                                                       style={{ padding: 8 }}/>} size={'large'}>
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