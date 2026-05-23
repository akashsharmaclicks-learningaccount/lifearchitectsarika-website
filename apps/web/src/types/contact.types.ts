export type ContactInquiryPayload = {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message: string;
};

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: unknown;
};
