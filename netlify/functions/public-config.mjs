export default async () => {
  const message=(process.env.WEDDING_GUEST_ALERT||'').trim();
  const link=(process.env.WEDDING_GUEST_ALERT_LINK||'').trim();
  return Response.json(message?{message,link:link||null}:{message:''},{headers:{'cache-control':'no-store'}});
};
