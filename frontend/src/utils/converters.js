import moment from 'moment';

const convertDate = (value, format) => moment(value).format(format);

export {
  convertDate
};
