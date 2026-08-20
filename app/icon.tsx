import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

const Icon = () =>
  new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: '#f1efe8',
        color: '#161612',
        display: 'flex',
        fontSize: 40,
        fontWeight: 700,
        height: '100%',
        justifyContent: 'center',
        letterSpacing: '-0.12em',
        width: '100%',
      }}
    >
      N<span style={{ color: '#3157d5' }}>.</span>
    </div>,
    size,
  )

export default Icon
