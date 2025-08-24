export const validateEmail = (email: string): string | null => {
  if (!email) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address';
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters long';
  if (!/(?=.*[a-z])/.test(password)) return 'Password must contain at least one lowercase letter';
  if (!/(?=.*[A-Z])/.test(password)) return 'Password must contain at least one uppercase letter';
  if (!/(?=.*\d)/.test(password)) return 'Password must contain at least one number';
  if (!/(?=.*[@$!%*?&])/.test(password)) return 'Password must contain at least one special character';
  return null;
};

export const validateName = (name: string): string | null => {
  if (!name) return 'Name is required';
  if (name.length < 2) return 'Name must be at least 2 characters long';
  if (name.length > 50) return 'Name must be less than 50 characters';
  return null;
};

export const validatePromptTitle = (title: string): string | null => {
  if (!title) return 'Title is required';
  if (title.length < 3) return 'Title must be at least 3 characters long';
  if (title.length > 100) return 'Title must be less than 100 characters';
  return null;
};

export const validatePromptContent = (content: string): string | null => {
  if (!content) return 'Prompt content is required';
  if (content.length < 10) return 'Prompt must be at least 10 characters long';
  if (content.length > 5000) return 'Prompt must be less than 5000 characters';
  return null;
};