import { dateStringConversion } from './dateStringConversion';

describe('function dateStringConversion', () => {
  it('should convert date string to expected format', () => {
    const inputDate = '2022-08-23T12:34:56.789Z';
    const expectedOutput = '2022-08-23';

    const result = dateStringConversion(inputDate);

    expect(result).toEqual(expectedOutput);
  });

  it('should return empty string if input is empty', () => {
    const inputDate = '';
    const expectedOutput = '';

    const result = dateStringConversion(inputDate);

    expect(result).toEqual(expectedOutput);
  });
});
