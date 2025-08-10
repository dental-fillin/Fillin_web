import { ContactSchema, JobOpeningSchema } from '@/lib/schema';

describe('ContactSchema', () => {
  it('rejects invalid email', () => {
    const r = ContactSchema.safeParse({ name: 'John Doe', email: 'bad', message: 'Hello', phone: '+1234567' });
    expect(r.success).toBe(false);
  });

  it('accepts valid payload', () => {
    const r = ContactSchema.safeParse({ name: 'John Doe', email: 'test@example.com', message: 'Hi', phone: '+1234567890' });
    expect(r.success).toBe(true);
  });
});

describe('JobOpeningSchema', () => {
  it('requires job_title and company_name', () => {
    const r = JobOpeningSchema.safeParse({ contact_email: 'x@y.com' });
    expect(r.success).toBe(false);
  });
});
