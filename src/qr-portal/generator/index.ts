import moment from 'moment';
import fs from 'fs';
import path from 'path';
import entries, { checkEntry } from './entries';

const generate = () => {
  const m = moment();
  const target = entries.find((entry) => checkEntry(entry, m));

  const { url, status } = target || entries[0];
  const output = JSON.stringify({ url, status });

  const outpath = process.argv[2];
  if (outpath) {
    fs.writeFileSync(path.join(outpath), output);
  } else {
    // eslint-disable-next-line no-console
    console.log(output);
  }
};

generate();
