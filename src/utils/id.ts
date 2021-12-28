import { customAlphabet } from 'nanoid';

const Alphabet =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function ID(size = 8): string {
  const nanoid = customAlphabet(Alphabet, size);
  return nanoid();
}
