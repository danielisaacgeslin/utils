import * as moment from 'moment-timezone';

export const getTestDate = (date: Date | string = '2019-03-05 11:01:45'): Date => moment(date).tz('America/Los_Angeles').toDate();
