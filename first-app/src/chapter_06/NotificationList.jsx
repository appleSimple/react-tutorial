import React from 'react';
import Notification from './Notification';

const reservedNotifications = [
  {
    id: 1,
    message: '호호잇',
  },
  {
    id: 2,
    message: '반가워요',
  },
  {
    id: 3,
    message: '자리에 앉아주세요.',
  },
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notification: [],
    };
  }

  componentDidMount() {
    const { notification } = this.state;

    console.log('notification', notification);
    timer = setInterval(() => {
      if (notification.length < reservedNotifications.length) {
        const index = notification.length;
        notification.push(reservedNotifications[index]);
        this.setState({
          notification: notification,
        });
      } else {
        clearInterval(this);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notification.map((notification) => {
          return (
            <Notification
              key={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
