import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RingProgress } from '@ant-design/plots';

type Props = {}

const DemoRingUnprogress = (props: Props) => {
    const config = {
        height: 300,
        width: 300,
        autoFit: false,
        percent: 0.6,
        color: ['#F4664A', '#E8EDF3'],
        innerRadius: 0.85,
        radius: 0.98,
        statistic: {
            title: {
                style: {
                    color: '#363636',
                    fontSize: '12px',
                    lineHeight: '14px',
                },
                formatter: () => '进度',
            },
        },
    };
    return (
        <>
            <RingProgress {...config} />
        </>
    )
}

export default DemoRingUnprogress