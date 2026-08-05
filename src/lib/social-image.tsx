import { ImageResponse } from 'next/og';

import { seoConfig } from '@/config/seo';

function createSocialImage(size: { width: number; height: number }) {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f8faff 0%, #ffffff 56%, #fff0f1 100%)',
        color: '#172033',
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between',
        padding: '72px 78px',
        position: 'relative',
        width: '100%',
      }}
    >
      <div
        style={{
          background: '#e60012',
          borderRadius: '999px',
          height: '360px',
          opacity: 0.08,
          position: 'absolute',
          right: '-100px',
          top: '-140px',
          width: '360px',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '850px' }}>
        <div style={{ color: '#e60012', fontSize: 46, fontWeight: 900, letterSpacing: '-2px' }}>
          viettel
        </div>
        <div
          style={{
            fontSize: 66,
            fontWeight: 900,
            letterSpacing: '-3px',
            lineHeight: 1.08,
            marginTop: '42px',
          }}
        >
          Lắp mạng Viettel tại Ninh Bình
        </div>
        <div style={{ color: '#647084', fontSize: 28, lineHeight: 1.4, marginTop: '28px' }}>
          Internet cáp quang · Wi-Fi Mesh · TV360 · Doanh nghiệp
        </div>
      </div>
      <div
        style={{
          alignItems: 'center',
          background: '#e60012',
          borderRadius: '28px',
          color: '#fff',
          display: 'flex',
          fontSize: 42,
          fontWeight: 900,
          height: '140px',
          justifyContent: 'center',
          width: '140px',
        }}
      >
        V
      </div>
      <div
        style={{
          bottom: '38px',
          color: '#8a93a2',
          display: 'flex',
          fontSize: 20,
          left: '78px',
          position: 'absolute',
        }}
      >
        {seoConfig.url.replace(/^https?:\/\//, '')}
      </div>
    </div>,
    size
  );
}

export { createSocialImage };
