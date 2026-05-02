/**
 * File: next.config.ts
 * Description: Next.js configuration options.
 * Author: Noé Henchoz
 * License: MIT
 * Copyright (c) 2026 Noé Henchoz
 */

import os from 'node:os'
import type { NextConfig } from 'next'

// TODO: one line comment here
const getLocalIp = () => {
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces))
    for (const iface of interfaces[name] ?? [])
      if (iface.family === 'IPv4' && !iface.internal) return iface.address
  return '127.0.0.1'
}

const nextConfig: NextConfig = {
  // TODO: one line comment here, why set allowedDevOrigins
  allowedDevOrigins: [getLocalIp()],
}

export default nextConfig
