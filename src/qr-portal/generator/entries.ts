import moment from 'moment';
import 'moment-timezone';
moment.tz.setDefault('Asia/Tokyo');

interface RedirectEntry {
  term: [string, string];
  url: string;
  /**
   * 301: Moved Permanently
   * 302: Found
   * 303: See Other
   * 307: Temporary Redirect
   */
  status: 301 | 302 | 303 | 307;
}

const FORMAT = 'YYYY/MM/DD';

const entries: RedirectEntry[] = [
  {
    term: ['2019/10/01', '2019/10/29'],
    url: 'https://dhu.life/dhfes/',
    status: 301,
  },
];

export const checkEntry = ({ term: [start, end] }: RedirectEntry, m: moment.Moment) => {
  m = m.clone().set('hour', 6);
  return m.isAfter(convert(start)) && m.isBefore(convert(end));
};

const convert = (str: string) => moment(str, FORMAT).set('hour', 12);

export default entries;
