/**
 * @jest-environment node
 */
import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
  cloud_name: 'dep6ir1mi',
  api_key: '494217696768437',
  api_secret: 'wnPjxKqsULcLXmo72Z8NrcABOrg',
  secure: true,
});

describe('Test on fileUpload', () => {
  test('should upload the file to cloudinary', async () => {
    const imageUrl =
      'https://www.shutterstock.com/image-vector/spiderman-art-design-icon-vector-600nw-2404385831.jpg';

    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], 'spiderman.jpg', { type: blob.type });

    const url = await fileUpload(file);
    expect(typeof url).toBe('string');

    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.jpg', '');
    const cloudinaryResponse = await cloudinary.api.delete_resources([
      'journal-app/' + imageId,
    ]);
  });

  test('should return null if no file is provided', async () => {
    const url = await fileUpload(null);
    expect(url).toBe(null);
  });
});
