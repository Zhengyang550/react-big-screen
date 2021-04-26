import React from 'react';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import PowerGeneration from './componet/PowerGeneration';
import MonitorMap from './componet/MonitorMap';
import ElectricityConsumption from './componet/ElectricityConsumption';
import PowerCurve from './componet/PowerCurve';
import MonthPowerGeneration from './componet/MonthPowerGeneration';
import YearPowerGeneration from './componet/YearPowerGeneration';
import EquivalentHour from './componet/EquivalentHour';
import MonthElectricityConsumption from './componet/MonthElectricityConsumption';
import YearElectricityConsumption from './componet/YearElectricityConsumption';

export default (): React.ReactNode => {
  return (
    <React.Fragment>
      {/* gutter 数字或使用数组形式同时设置 [容器内ProCard水平间距, 容器内ProCard垂直间距], 支持响应式的对象写法 { xs: 8, sm: 16, md: 24} 单位像素 */}
      <ProCard split="horizontal" bordered className={styles.container}>
        {/* 上半部分 */}
        <ProCard gutter={[8, 0]} className={styles.top}>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 12, lg: 8, xl: 8, xxl:8 }} layout="center" bordered>
            <PowerGeneration />
          </ProCard>
          <ProCard colSpan={{ xs: 0, sm: 0, md: 0, lg: 8, xl: 8, xxl:8 }} layout="center" bordered>
            <MonitorMap />
          </ProCard>
          <ProCard colSpan={{ xs: 0, sm: 0, md: 12, lg: 8, xl: 8, xxl:8 }} layout="center" bordered>
            <ElectricityConsumption />
          </ProCard>
        </ProCard>

        {/*  中間部分 */}
        <ProCard gutter={[8, 0]} className={styles.middle}>
          <ProCard colSpan={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }} layout="center" bordered>
            <PowerCurve />
          </ProCard>
          <ProCard colSpan={{ xs: 0, sm: 0, md: 0, lg: 8, xl: 8 }} layout="center" bordered>
            <MonthPowerGeneration />
          </ProCard>
          <ProCard colSpan={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }} layout="center" bordered>
            <YearPowerGeneration />
          </ProCard>
        </ProCard>

        {/*  下半部分 */}
        <ProCard gutter={[8, 0]} className={styles.bottom}>
          <ProCard colSpan={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }} layout="center" bordered>
            <EquivalentHour />
          </ProCard>
          <ProCard colSpan={{ xs: 0, sm: 0, md: 0, lg: 8, xl: 8 }} layout="center" bordered>
            <MonthElectricityConsumption />
          </ProCard>
          <ProCard colSpan={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }} layout="center" bordered>
            <YearElectricityConsumption />
          </ProCard>
        </ProCard>
      </ProCard>
    </React.Fragment>
  );
};
