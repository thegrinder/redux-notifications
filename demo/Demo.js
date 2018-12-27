import React, { useContext } from 'react';
import { NotificationsProvider, NotificationsContext } from '../src/index';

const Demo = () => {
  const { showNotification } = useContext(NotificationsContext);
  return (
    <div>
      <button
        type="button"
        onClick={() => showNotification({
          type: 'warning',
          text: 'This is a warning',
        })}
      >
        {'Add notification'}
      </button>
    </div>
  );
};

const props = {
  position: ['auto', 'auto', '40px', '40px'],
  animationDuration: 400,
  animationEasing: 'ease',
  dismissAfter: 2000,
  slideFromSide: '',
};

const Wrapper = () => (
  <NotificationsProvider
    {...props}
    renderNotification={({ payload: { type, text }, removeNotification }) => (
      <div>
        <div style={{ color: type === 'warning' ? 'red' : 'black' }}>{text}</div>
        <button type="button" onClick={removeNotification}>Click to close</button>
      </div>
    )}
  >
    <Demo />
  </NotificationsProvider>
);

export default Wrapper;
