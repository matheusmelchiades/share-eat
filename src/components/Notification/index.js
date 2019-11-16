import { store } from 'react-notifications-component';

const SAMPLE = {
  title: '',
  message: '',
  type: 'info',
  insert: 'left',
  container: 'bottom-left',
  animationIn: ['animated', 'fadeIn'],
  animationOut: ['animated', 'fadeOut'],
  dismiss: {
    duration: 5000,
    onScreen: true,
  },
};

export const success = (props = {}) => {
  store.addNotification({ ...SAMPLE, ...props, type: 'success' });
};
