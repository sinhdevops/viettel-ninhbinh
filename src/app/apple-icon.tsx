import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: '#e60012',
        color: '#ffffff',
        display: 'flex',
        fontSize: 92,
        fontWeight: 900,
        height: '100%',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      V
    </div>,
    size
  );
}
