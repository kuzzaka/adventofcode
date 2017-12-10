import {getMaxDiff, checkSum} from './day2'

test('getMaxDiff', () => {
  expect(getMaxDiff('3458\t3471\t')).toEqual(3471)
});

test('checkSum', () => {
  expect(checkSum('3458\t3471\t163\t1299')).toEqual(3308)
});