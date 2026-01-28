interface RecaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

export async function verifyRecaptcha(token: string): Promise<{
  success: boolean;
  score?: number;
  error?: string;
}> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    // For development, if secret is not set, we'll return success
    if (process.env.NODE_ENV === 'development') {
      console.warn('Missing RECAPTCHA_SECRET_KEY. Skipping verification in development.');
      return { success: true, score: 1.0 };
    }
    throw new Error('Missing RECAPTCHA_SECRET_KEY');
  }

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secret}&response=${token}`,
    });

    if (!res.ok) return { success: false, error: 'Verification service unavailable' };

    const data: RecaptchaResponse = await res.json();
    
    // reCAPTCHA v3 score threshold (default 0.5)
    if (!data.success || (data.score !== undefined && data.score < 0.5)) {
      return { success: false, score: data.score, error: 'Anti-spam verification failed' };
    }
    
    return { success: true, score: data.score };
  } catch (err) {
    console.error('reCAPTCHA verification error:', err);
    return { success: false, error: 'Internal verification error' };
  }
}
