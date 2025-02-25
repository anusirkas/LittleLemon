import { validateDate, validateNumberOfGuests } from '../utils/validation';

describe('Validation functions', () => {
  describe('validateDate', () => {
    test('should return true for valid dates', () => {
      expect(validateDate("2023-12-01")).toBe(true);
      expect(validateDate("2023-12-31")).toBe(true);
    });

    test('should return false for invalid dates', () => {
      expect(validateDate("")).toBe(false);
      expect(validateDate("2023-13-01")).toBe(false); // Invalid month
      expect(validateDate("2023-12-32")).toBe(false); // Invalid day
    });
  });

  describe('validateNumberOfGuests', () => {
    test('should return true for valid guest numbers', () => {
      expect(validateNumberOfGuests(1)).toBe(true);
      expect(validateNumberOfGuests(10)).toBe(true);
    });

    test('should return false for invalid guest numbers', () => {
      expect(validateNumberOfGuests(0)).toBe(false); // Invalid number (less than 1)
      expect(validateNumberOfGuests(11)).toBe(false); // Invalid number (greater than 10)
      expect(validateNumberOfGuests(-1)).toBe(false); // Invalid number (negative)
    });
  });
});
