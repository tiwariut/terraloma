export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { token } = body;

    if (!token) {
      return new Response(
        JSON.stringify({ success: false, message: 'Token is missing' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${secretKey}&response=${token}`
      }
    );

    const data = await verifyRes.json();

    if (data.success) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ success: false, data }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
