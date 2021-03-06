/**
 * 用户编辑表单 ModelForm
 * https://procomponents.ant.design/components/modal-form
 */
import React, { useState } from 'react';
import ProForm, { ProFormText, StepsForm, ProFormRadio, ProFormTextArea } from '@ant-design/pro-form';
import styles from './index.less';
import { Form, Modal, Button, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

// 属性类型
type PropField = {
  initialValues?: API.YuncangItem
  editable?: boolean
  onFinish: (values: API.YuncangItem) => Promise<void>
  visible: boolean
  setVisible: (value: boolean) => void
};

const Index: React.FC<PropField> = ({
                                      editable = true,
                                      onFinish,
                                      visible,
                                      setVisible,
                                      initialValues
                                    }) => {
  // 当前步骤数
  const [current,setCurrent] = useState<number>(0);

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };


  return (
    <StepsForm<API.YuncangItem>
      // @ts-ignore
      onFinish={async (values) =>{
        await onFinish(values);
        setCurrent(0);
      }}
      formProps={{
        initialValues,
      }}
      current={current}
      onCurrentChange={setCurrent}
      submitter={{
        render: (props) => {
          if (props.step === 0) {
            return [
              <Button  key='next' type='primary' onClick={() => props.onSubmit?.()}>
                下一步 {'>'}
              </Button>
              ]
          }

          if (props.step === 1) {
            return [
              <Button key='pre' onClick={() => props.onPre?.()}>
                {'<'} 上一步
              </Button>,
              <Button type='primary' key='next' onClick={() => props.onSubmit?.()}>
                下一步 {'>'}
              </Button>
            ];
          }

          return [
            <Button key='gotoTwo' onClick={() => props.onPre?.()}>
              {'<'} 上一步
            </Button>,
            <Button type='primary' key='goToTree' onClick={() => props.onSubmit?.()}>
              提交
            </Button>,
          ];
        },
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={820}
            title='更新云仓'
            onCancel={() => {
              setCurrent(0);
              setVisible(false)}
            }
            visible={visible}
            footer={submitter}
            destroyOnClose
          >
            <div className={styles.cloudRegisterForm}>
              {dom}
            </div>
          </Modal>
        );
      }}
    >
      <StepsForm.StepForm
        title='基础信息'
      >
        <ProForm.Group>
          <ProFormText
            name='yuncangName'
            label='云仓名称'
            width='sm'
            rules={[
              {
                required: true,
              },
              {
                type: 'string',
                min: 2,
                max: 18,
              },
            ]}
          />
          <ProFormText
            name='collectorSn'
            label='采集器SN'
            width='sm'
            disabled={!editable}
            rules={[
              {
                required: true,
              },
            ]}
          />
        </ProForm.Group>

        <ProForm.Group>
          <ProFormText
            name='size'
            label='规格尺寸'
            width='sm'
            rules={[
              {
                type: 'number',
              },
            ]}
          />
          <ProFormRadio.Group
            name='mode'
            label='运行模式'
            width='sm'
            options={[
              {
                label: '租赁',
                value: 'LEASE',
              },
              {
                label: '自持',
                value: 'SELF_SUSTAINING',
              }
            ]}
          />
        </ProForm.Group>

        <ProForm.Group>
          <ProFormText
            name='province'
            label='省份'
            width='sm'
            disabled={!editable}
          />
          <ProFormText
            name='city'
            label='尝试'
            width='sm'
            disabled={!editable}
          />
        </ProForm.Group>

        <ProForm.Group>
          <ProFormText
            name='longitude'
            label='经度'
            width='sm'
            disabled={!editable}
            rules={[
              {
                required: true,
              },
            ]}
          />
          <ProFormText
            name='latitude'
            label='纬度'
            width='sm'
            disabled={!editable}
            rules={[
              {
                required: true,
              },
            ]}
          />
        </ProForm.Group>

        <ProForm.Group>
          <ProFormText
            name='mainDevice'
            label='主要设备'
            width='sm'
          />
          <ProFormTextArea
            name='note'
            label='描述'
            width='sm'
          />
        </ProForm.Group>
      </StepsForm.StepForm>

      <StepsForm.StepForm
        title='配置信息'
        name='time'
      >
        <ProForm.Group>
          <ProFormText
            name='voltage'
            label='系统电压'
            width='sm'
            fieldProps={{
              suffix: <span className='ant-form-text'>V</span>,
              type: 'number'
            }}
          />
          <ProFormText
            name='power'
            label='系统额定功率'
            width='sm'
            fieldProps={{
              suffix: <span className='ant-form-text'>kW</span>,
              type: 'number'
            }}
          />
        </ProForm.Group>

        <ProForm.Group>
          <ProFormText
            name='capacity'
            label='光伏容量'
            width='sm'
            fieldProps={{
              suffix: <span className='ant-form-text'>kWh</span>,
              type: 'number'
            }}
          />
          <ProFormText
            name='converter'
            label='逆变一体机'
            width='sm'
          />
        </ProForm.Group>

        <ProForm.Group>
          <ProFormText
            name='powerGrid'
            label='并网侧功率'
            width='sm'
            fieldProps={{
              suffix: <span className='ant-form-text'>kW</span>,
              type: 'number'
            }}
          />
          <ProFormText
            name='powerIsolated'
            label='离网端功率'
            width='sm'
            fieldProps={{
              suffix: <span className='ant-form-text'>kW</span>,
              type: 'number'
            }}
          />
        </ProForm.Group>

        <ProForm.Group>
          <ProFormText
            name='batterySize'
            label='电池容量'
            width='sm'
            fieldProps={{
              suffix: <span className='ant-form-text'>mAh</span>,
              type: 'number'
            }}
          />
          <ProFormText
            name='batteryNum'
            label='电池数量'
            width='sm'
            fieldProps={{
              type: 'number'
            }}
          />
        </ProForm.Group>

        <ProForm.Group>
          <ProFormText
            name='batteryType'
            label='电池类型'
            width='sm'
          />
          <ProFormText
            name='tankCapacity'
            label='水箱容量'
            width='sm'
            fieldProps={{
              suffix: <span className='ant-form-text'>L</span>,
              type: 'number'
            }}
          />
        </ProForm.Group>

        <ProForm.Group>
          <ProFormText
            name='sensor'
            label='传感器数量'
            width='sm'
            fieldProps={{
              type: 'number'
            }}
          />
        </ProForm.Group>
      </StepsForm.StepForm>

      <StepsForm.StepForm
        title='摄像头信息'
      >
        <ProForm.Group>
          <ProFormText
            name='cameraDeviceSerial'
            label='序列号'
            width='sm'
            tooltip='萤石摄像头，设备序列号'
          />
          <ProFormText
            name='cameraValidateCode'
            label='验证码'
            width='sm'
            tooltip='萤石摄像头，设备验证码，设备机身上的六位大写字母'
          />
        </ProForm.Group>

        <ProForm.Group>
          <ProFormText
            name='cameraVideoAddress'
            label='视频播放地址'
            width='sm'
          />
        </ProForm.Group>
        <Form.Item label='云仓照片'>
          <Form.Item name='dragger' valuePropName='fileList' getValueFromEvent={normFile} noStyle>
            <Upload.Dragger name='files' action='/upload.do'>
              <p className='ant-upload-drag-icon'>
                <InboxOutlined />
              </p>
              <p className='ant-upload-text'>Click or drag file to this area to upload</p>
              <p className='ant-upload-hint'>Support for a single or bulk upload.</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </StepsForm.StepForm>

    </StepsForm>
  );
};

export default Index;
