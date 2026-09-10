export default async () => {
  const message=(process.env.WEDDING_GUEST_ALERT_MESSAGE||'').trim();
  const link=(process.env.WEDDING_GUEST_ALERT_LINK||'').trim();
  return Response.json(message ? {message,link:link||null} : {}, {
    headers:{'cache-control':'no-store'}
  });
};
