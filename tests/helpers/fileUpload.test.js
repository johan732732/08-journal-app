/**
 * @jest-environment node
 */
import { fileUpload } from '../../src/helpers/fileUpload';

describe('Test on fileUpload', () => {
  test('should upload the file to cloudinary', async () => {
    const imageUrl =
      'https://www.shutterstock.com/image-vector/spiderman-art-design-icon-vector-600nw-2404385831.jpg';

    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], 'spiderman.jpg', { type: blob.type });

    const url = await fileUpload(file);
    expect(typeof url).toBe('string');
  });

  test('should return null if no file is provided', async () => {
    const url = await fileUpload(null);
    expect(url).toBe(null);
  });
});
