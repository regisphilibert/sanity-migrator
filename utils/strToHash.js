import { createHash } from 'crypto';

export default (input) => {
  const hash = createHash('md5');
  hash.update(input);
  return hash.digest('hex');
}