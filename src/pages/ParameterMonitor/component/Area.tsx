/**
 * @Author：zy
 * @Description：图标参考官网 https://charts.ant.design/zh-CN/demos/global/
 * @Data: 2021/2/25 16:40
 */
import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';
import styles from '../index.less';

const Component : React.FC = () => {
  //显示数据
  const [data,setData] = useState<Array<object>>([]);

  //异步请求数据
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(()=>{
    asyncFetch();
  });

  const config = {
    data: data,
    xField: 'Date',
    yField: 'scales',
    annotations: [
      {
        type: 'text',
        position: ['min', 'median'],
        content: '中位数',
        offsetY: -4,
        style: { textBaseline: 'bottom' },
      },
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: 'red',
          lineDash: [2, 2],
        },
      },
    ],
  };

  // @ts-ignore
  return <Area className={styles.area} {...config} />;
};

export default Component;
