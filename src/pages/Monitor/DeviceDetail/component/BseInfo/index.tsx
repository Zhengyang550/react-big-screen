/**
 * @Author：zy
 * @Description：云仓信息
 * @Data: 2021/5/12 13:17
 */
import React, {useState,useEffect} from 'react';
import styles from './index.less';
import { Card, Descriptions, Divider, message } from 'antd';
import { getYuncangById } from '@/services/yuncang';
import * as enumUtils from '@/utils/enumUtils';


// 属性类型
type PropField = {
  yuncangId: number ;    // 可编辑
};

const Index: React.FC<PropField> = ({yuncangId}) => {
  // 云仓信息
  const [yuncang,setYuncang] = useState<API.YuncangItem>({});


  // 获取云仓信息
  const handleYuncang =  async (id: number) => {
    try{
      const res: API.ResponseMessage<API.YuncangItem> = await getYuncangById(id);
      setYuncang(res.data);
    }catch (error) {
      message.error(error, 2);
    }
  };

  // 获取云仓信息
  useEffect( ()=>{
     handleYuncang(yuncangId);
  },[]);

  return (
    <React.Fragment>
      <div className={styles.baseInfo}>
        <Card bordered={false} className={styles.content}>
          {/*   默认一行三列  */}
          <Descriptions
            title='基础信息'
          >
            <Descriptions.Item label='云仓名称'>{yuncang.yuncangName}</Descriptions.Item>
            <Descriptions.Item label='采集器SN'>{yuncang.collectorSn}</Descriptions.Item>
            <Descriptions.Item label='规格尺寸'>{yuncang.size}</Descriptions.Item>
            <Descriptions.Item label='省份'>{yuncang.province}</Descriptions.Item>
            <Descriptions.Item label='城市'>{yuncang.city}</Descriptions.Item>
            <Descriptions.Item label='纬度'>{yuncang.latitude}</Descriptions.Item>
            <Descriptions.Item label='经度'>{yuncang.longitude}</Descriptions.Item>
            <Descriptions.Item label='运营模式'>{yuncang.mode && enumUtils.YuncangModeEnum[yuncang.mode].text}</Descriptions.Item>
            <Descriptions.Item label='主要设备'>{yuncang.mainDevice}</Descriptions.Item>
            <Descriptions.Item label='描述'>{yuncang.note}</Descriptions.Item>
          </Descriptions>
          <Divider
          />

          <Descriptions
            title='配置信息'
          >
            <Descriptions.Item label='系统电压'>{yuncang.voltage}V</Descriptions.Item>
            <Descriptions.Item label='系统额定功率'>{yuncang.power}kW</Descriptions.Item>
            <Descriptions.Item label='光伏容量'>{yuncang.capacity}kW</Descriptions.Item>
            <Descriptions.Item label='逆变一体机'>{yuncang.converter}</Descriptions.Item>
            <Descriptions.Item label='并网侧功率'>{yuncang.powerGrid}kW</Descriptions.Item>
            <Descriptions.Item label='离网端功率'>{yuncang.powerIsolated}kW</Descriptions.Item>
            <Descriptions.Item label='电池容量'>{yuncang.batterySize}mAh</Descriptions.Item>
            <Descriptions.Item label='电池数量'>{yuncang.batteryNum}</Descriptions.Item>
            <Descriptions.Item label='电池类型'>{yuncang.batteryType}</Descriptions.Item>
            <Descriptions.Item label='水箱容量'>{yuncang.tankCapacity}L</Descriptions.Item>
            <Descriptions.Item label='传感器数量'>{yuncang.sensor}</Descriptions.Item>
          </Descriptions>
          <Divider/>

          <Descriptions
            title='摄像头信息'
          >
            <Descriptions.Item label='设备序列号'>{yuncang.cameraDeviceSerial}</Descriptions.Item>
            <Descriptions.Item label='设备验证码'>{yuncang.cameraValidateCode}</Descriptions.Item>
            <Descriptions.Item label='视频播放地址'>{yuncang.cameraVideoAddress}</Descriptions.Item>
          </Descriptions>
          <Divider
          />
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Index;
