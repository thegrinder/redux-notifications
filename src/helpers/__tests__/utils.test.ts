import {
  convertToCssPosition,
  convertToCssDuration,
  getFlexDirection,
  getAnimatedMargin,
  Position,
} from '../utils';

describe('utils', () => {
  describe('convertToCssPosition', () => {
    it('should properly convert given position', () => {
      const testPosition: Position = ['auto', 'auto', '30px', '30px'];
      const expected = {
        bottom: '30px',
        left: '30px',
        right: 'auto',
        top: 'auto',
      };
      expect(convertToCssPosition(testPosition)).toEqual(expected);
    });
  });

  describe('convertToCssDuration', () => {
    it('should properly convert given miliseconds', () => {
      const testDuration = 300;
      const expected = '0.3s';
      expect(convertToCssDuration(testDuration)).toEqual(expected);
    });
  });

  describe('getFlexDirection', () => {
    it('should return the correct flex-direction', () => {
      expect(getFlexDirection(['10px', '10px', 'auto', 'auto'])).toEqual(
        'column'
      );
      expect(getFlexDirection(['auto', 'auto', '10px', '10px'])).toEqual(
        'column-reverse'
      );
    });
  });

  describe('getAnimatedMargin', () => {
    it('should return the correct margin', () => {
      expect(getAnimatedMargin(['10px', '10px', 'auto', 'auto'])).toEqual(
        'top'
      );
      expect(getAnimatedMargin(['auto', 'auto', '10px', '10px'])).toEqual(
        'bottom'
      );
    });
  });
});
