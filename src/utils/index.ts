import { CommentType, Status, StatusColor } from 'types';
import { AxiosError } from 'axios';

export const handleError = (error: unknown) => {
  console.error('Error details:', error);

  let message = 'Unknown error';

  if (error instanceof AxiosError) {
    message = `${error.response?.status}: ${error.response?.data?.message || error.message}`;
  } else if (error instanceof Error) {
    message = error.message;
  }

  alert(message);
  return message;
};

export const getColor = (status: Status): StatusColor => {
  let iconColor = '#0CCA1F';
  let textColor = 'green';
  let text = 'Печатаю';
  if (status === 'connect') {
    iconColor = '#3751DB';
    textColor = 'blue';
    text = 'Подключите канал';
  } else if (status === 'waiting') {
    iconColor = '#11253E';
    textColor = 'gray';
    text = 'Ожидаю сообщений';
  } else if (status === 'testing') {
    iconColor = '#CA8A0C';
    textColor = 'orange';
    text = 'Протестируйте меня';
  }
  return { iconColor, textColor, text };
};

export const getStatus = (data: CommentType[]): Status => {
  const hasInfoEmail = data.some((comment) => comment.email.includes('info'));
  if (hasInfoEmail) {
    return 'testing';
  }
  const hasBizEmail = data.some((comment) => comment.email.includes('io'));
  if (hasBizEmail) {
    return 'waiting';
  }
  const hasComEmail = data.some((comment) => comment.email.includes('tv'));
  if (hasComEmail) {
    return 'connect';
  }
  return 'typing';
};

export const AUTO_REFRESH_INTERVAL = 10 * 60 * 1000;
