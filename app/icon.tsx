import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

const Icon = () =>
  new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: '#f7f9fc',
        color: '#1e293b',
        display: 'flex',
        fontSize: 40,
        fontWeight: 700,
        height: '100%',
        justifyContent: 'center',
        letterSpacing: '-0.12em',
        width: '100%',
      }}
    >
      N<span style={{ color: '#275be8' }}>.</span>
    </div>,
    size,
  )

export default Icon
