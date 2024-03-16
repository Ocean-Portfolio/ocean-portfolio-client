import UAParser from 'ua-parser-js';
import { createStaticContext } from '@/utils/context/StaticContext';

export const StaticContextUserAgent = createStaticContext<UAParser.IResult>({
  ua: '',
  browser: {
    name: '',
    version: '',
    major: '',
  },
  device: {
    model: '',
    type: '',
    vendor: '',
  },
  engine: {
    name: '',
    version: '',
  },
  os: {
    name: '',
    version: '',
  },
  cpu: {
    architecture: '',
  },
});
