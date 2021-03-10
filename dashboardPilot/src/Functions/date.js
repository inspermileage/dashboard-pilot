import moment from 'moment';

export function useDateFormated(date) {
  const responseDate = moment(date).format('YYYY-MM-DD');

  return responseDate;
}
