import React, { useState } from 'react';
import { Button, Form, Input, Space, Table, Tag } from "antd";

const initialData = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const Tabletest = () => {
  const [data, setData] = useState(initialData);
  const [form] = Form.useForm();

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record, index) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a onClick={() => handleDelete(index)}>Delete</a>
        </Space>
      ),
    },
  ];

  const onFinish = (values) => {
    setData(prevData => [
      ...prevData,
      {
        key: `${prevData.length + 1}`,
        name: values.name,
        age: values.age,
        address: values.address,
        tags: values.tags.split(',').map(tag => tag.trim()),
      },
    ]);

    form.resetFields();
  };

  return (
    <div>
      <Form form={form} layout="inline" onFinish={onFinish}>
        <Form.Item name="name">
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item name="age">
          <Input placeholder="Age" type="number" />
        </Form.Item>
        <Form.Item name="address">
          <Input placeholder="Address" />
        </Form.Item>
        <Form.Item name="tags">
          <Input placeholder="Tags (comma separated)" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Adauga</Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default Tabletest;
