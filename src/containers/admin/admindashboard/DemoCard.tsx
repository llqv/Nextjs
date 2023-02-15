import { Card, Col, Row } from 'antd';
import React from 'react';

const DemoCard: React.FC = () => (
    <Row gutter={16}>
        <Col span={8}>
            <Card title="Card title 1" bordered={false}>
                Card content 1
            </Card>
        </Col>
        <Col span={8}>
            <Card title="Card title 2" bordered={false}>
                Card content 2
            </Card>
        </Col>
        <Col span={8}>
            <Card title="Card title 3" bordered={false}>
                Card content 3
            </Card>
        </Col>
    </Row>
);

export default DemoCard;