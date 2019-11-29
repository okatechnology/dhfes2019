import moment from 'moment';
import 'moment-timezone';
moment.tz.setDefault('Asia/Tokyo');

interface RedirectEntry {
  /**
   * @param 0 start (inclusive)
   * @param 1 end (exclusive)
   */
  term: [string, string];
  url: string;
  /**
   * *To prevent cache, DO NOT USE 301*
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
    term: ['2019/11/05', '2020/12/31'],
    url: 'https://dhfes.com/',
    status: 302,
  },
];

export const checkEntry = ({ term: [start, end] }: RedirectEntry, m: moment.Moment) => {
  try {
    m = m.clone().set('hour', 6);
    return m.isAfter(convert(start)) && m.isBefore(convert(end));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return false;
  }
};

const convert = (str: string) => moment(str, FORMAT).set('hour', 0);

export default entries;
