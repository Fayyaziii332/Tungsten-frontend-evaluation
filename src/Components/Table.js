import React from 'react';
import { Table, Popconfirm, Tag, Button } from 'antd';

const { Column, ColumnGroup } = Table;

const UserTable = ({ users, handleDelete }) => {

  return (
    <Table
      dataSource={users}
      style={{ width: "70%" }}
      scroll={{ x: 900, y: 230 }}
      size='small'
      pagination={users.length >= 5 ? {
        total: users.length,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        pageSize: 5,
      } : false}
    >
      <ColumnGroup title="Name">
        <Column 
          sorter={(a, b) => a.firstName.length - b.firstName.length}
          align='center' 
          title="First Name" 
          dataIndex="firstName" 
          key="firstName"
          render={(text) => <p id='name-label'>{text}</p>}
        />
        <Column align='center' title="Last Name" dataIndex="lastName" key="lastName" />
      </ColumnGroup>
      <Column 
        align='center' 
        title="User Type" 
        dataIndex="type" 
        key="type" 
        render={(tag) =>
          <Tag color="green" key={tag}>
            {tag.toUpperCase()}
          </Tag>}
      />
      <Column width="30%" title="Address" dataIndex="address" key="address" />
      <Column title="Phone Number" dataIndex="number" key="number" />
      <Column
        title="Action"
        key="action"
        fixed='right'
        align='center'
        width="10%"
        render={(_, record) => users.length >= 1 ?
          (<Popconfirm title="Are you sure to delete? " onConfirm={() => handleDelete(record.key)}>
            <Button type="link" className="delete-btn">Delete</Button>
          </Popconfirm>)
          : null
        }
      />
    </Table>
  );
}

export default UserTable;
