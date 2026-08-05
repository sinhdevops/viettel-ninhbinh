import { createSocialImage } from '@/lib/social-image';

export const alt = 'Lắp mạng Viettel tại Ninh Bình — Internet, Wi-Fi Mesh và TV360';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return createSocialImage(size);
}
