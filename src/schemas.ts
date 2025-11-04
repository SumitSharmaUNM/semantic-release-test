import { z } from 'zod';

// Zod schema for validating user data.
export const Schemas = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email address'),
  age: z.number().int().positive().optional(),
});
