import React from 'react';
import { Form, Input, Button, notification, Select } from 'antd';
import styled from 'styled-components';

const OrderOnline = () => {
  const onFinish = (values) => {
    // Simulate success or failure
    const isSuccess = true; // Change this to false to simulate failure

    if (isSuccess) {
      notification.success({
        message: 'Order Successful',
        description: 'Your order has been placed successfully!',
      });
    } else {
      notification.error({
        message: 'Order Failed',
        description: 'There was an error placing your order. Please try again.',
      });
    }
  };

  return (
    <OrderOnlineContainer>
      <OrderOnlineTitle>Order Online</OrderOnlineTitle>
      <Form name="order_online_form" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: 'Please enter your full name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'The input is not valid E-mail!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: 'Please enter your phone number!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Select Item"
          name="item"
          rules={[{ required: true, message: 'Please select an item!' }]}
        >
          <Select placeholder="Select an item">
            <Select.Option value="greekSalad">Greek Salad</Select.Option>
            <Select.Option value="bruchetta">Bruchetta</Select.Option>
            <Select.Option value="lemonDessert">Lemon Dessert</Select.Option>
            <Select.Option value="resturantFood">Restaurant Food</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Quantity"
          name="quantity"
          rules={[{ required: true, message: 'Please enter the quantity!' }]}
        >
          <Input type="number" min={1} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Place Order
          </Button>
        </Form.Item>
      </Form>
    </OrderOnlineContainer>
  );
};
const OrderOnlineContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const OrderOnlineTitle = styled.h2`
  text-align: center;
  color: #333;
`;
export default OrderOnline;
