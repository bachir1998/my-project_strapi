module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b5c7553c494e0f6c82167edbaec2233a'),
  },
});
