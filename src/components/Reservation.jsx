import React from 'react';
import {
  Form,
  Input,
  DatePicker,
  TimePicker,
  Button,
  Select,
  notification,
} from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const Reservation = () => {
  const onFinish = (values) => {
    // Simulate success or failure
    const isSuccess = true; // Change this to false to simulate failure

    if (isSuccess) {
      notification.success({
        message: 'Reservation Successful',
        description: 'Your reservation has been made successfully!',
      });
    } else {
      notification.error({
        message: 'Reservation Failed',
        description:
          'There was an error making your reservation. Please try again.',
      });
    }
  };

  return (
    <ReservationContainer>
      <ReservationTitle>Guest Reservation</ReservationTitle>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: 'Please select a date!' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Time"
          name="time"
          rules={[{ required: true, message: 'Please select a time!' }]}
        >
          <TimePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Number of Guests"
          name="guests"
          rules={[
            { required: true, message: 'Please select the number of guests!' },
          ]}
        >
          <Select placeholder="Select number of guests">
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="more">More than 5</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Reserve
          </Button>
        </Form.Item>
      </Form>
    </ReservationContainer>
  );
};
const ReservationContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ReservationTitle = styled.h2`
  text-align: center;
  color: #333;
`;
export default Reservation;
