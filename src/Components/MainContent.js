import React, { useState } from 'react';
import { Button, message } from 'antd';
import UserTable from './Table';
import FormModal from './FormModal';

const MainContent = () => {

  const [isVisible, setVisible] = useState(false);
  const [users, setUsers] = useState(
    [
      {
        key: 1,
        firstName: 'John',
        lastName: 'Brown',
        number: '923115456882',
        address: 'DC Washington No. 1 Lake Park',
        type: 'admin'
      },
      {
        key: 2,
        firstName: 'Jim',
        lastName: 'Green',
        number: '923555456882',
        address: 'Canada No. 1 Lake Park',
        type: 'Worker'
      },
      {
        key: 3,
        firstName: 'Joe',
        lastName: 'White',
        number: '923215456112',
        address: 'Afganistan No. 1 Lake Park',
        type: 'Manager'
      },
      {
        key: 4,
        firstName: 'Jack',
        lastName: 'Silver',
        number: '923215456112',
        address: 'New York No. 1 Lake Park',
        type: 'Worker'
      },
      {
        key: 5,
        firstName: 'Johny',
        lastName: 'Black',
        number: '923215456112',
        address: 'London No. 1 Lake Park',
        type: 'Worker'
      },
    ]
  );

  const handleDelete = (key) => {
    setUsers([...users].filter(user => user.key !== key));
    message.success({ content: 'User has been deleted successfully!', duration: 2 });
  };

  return (
    <div className="main-content">
      <Button
        id='add-btn'
        onClick={() => setVisible(true)}
        type="primary"
      >
        Add User
      </Button>
      <UserTable users={users} handleDelete={handleDelete} />
      <FormModal
        users={users}
        isVisible={isVisible} 
        setVisible={setVisible} 
        addUser={setUsers}
      />
    </div>
  );
}

export default MainContent;
