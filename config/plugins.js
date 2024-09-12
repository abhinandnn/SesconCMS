module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', 'c8e4b66b208d2d9bcd5751bf7c40fc0047cfca4cfea10fc307f04a215bc55b17'),
      },
    },
  });
