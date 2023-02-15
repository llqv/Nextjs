import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RingProgress } from '@ant-design/plots';

type Props = {}

const DemoRingProgress = (props: Props) => {
    const config = {
        height: 300,
        width: 300,
        autoFit: false,
        percent: 0.7,
        color: ['#5B8FF9', '#E8EDF3'],
    };
    return (
        <>
            <RingProgress {...config} />
        </>
    )
}
export default DemoRingProgress