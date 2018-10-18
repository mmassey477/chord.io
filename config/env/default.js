'use strict';
module.exports = {
  app: {
    title: 'Chord',
    description: 'A music app for parties',
    keywords: 'music, songs',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  port: process.env.PORT || 3000,
  host: process.env.HOST || '0.0.0.0',
  managerQueue: process.env.MANAGER_QUEUE,
  scratchDir: './scratch/',
  templateEngine: 'swig',
  // Session Cookie settings
  sessionCookie: {
    // session expiration is set by default to 24 hours
    maxAge: 24 * (60 * 60 * 1000),
    // httpOnly flag makes sure the cookie is only accessed
    // through the HTTP protocol and not JS/browser
    httpOnly: true,
    // secure cookie should be turned to true to provide additional
    // layer of security so that the cookie is set only when working
    // in HTTPS mode.
    secure: false
  },
  // sessionSecret should be changed for security measures and concerns
  sessionSecret: process.env.SESSION_SECRET || 'e7M~q?Vy86=yn.L7',
  // sessionKey is the cookie session name
  sessionKey: 'sessionId',
  sessionCollection: 'sessions',
  // Lusca config
  csrf: {
    csrf: false,
    csp: { /* Content Security Policy object */},
    xframe: 'SAMEORIGIN',
    p3p: 'ABCDEF',
    xssProtection: true
  },
  logo: 'modules/core/client/img/brand/logo.png',
  favicon: 'modules/core/client/img/brand/favicon.ico',
  uploads: {
    profileUpload: {
      dest: './modules/users/client/img/profile/uploads/', // Profile upload destination path
      limits: {
        fileSize: 10 * 1024 * 1024 // Max file size in bytes (10 MB)
      }
    },
    modelImportUpload: {
      dest: './scratch/', // skp model destination path
      limits: {
        fileSize: 1000 * 1024 * 1024 // Max file size in bytes (1000 MB)
      }
    }
  },
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  hashingSecret: process.env.HASHING_SECRET,
  designSharingKey: process.env.DESIGN_SHARING_KEY,
  reportSharingKey: process.env.REPORT_SHARING_KEY,
  hashingAlgorithm: process.env.HASHING_ALGORITHM,
  jwtPrivateKey: process.env.JWT_PRIVATE_KEY,
  masterVersion: process.env.MASTER_VERSION
};
