import * as yup from "yup";

export const AuthLoginSchema = yup.object({
  userName: yup.string().required("Name is required"),
  temporaryPassword: yup.string().required("Temporary password is required"),
  newPassword: yup.string().required("New password is required"),
});

export const AuthSecurityQuestion = yup.object({
  securityQuestion: yup.string().required("Please select a security question."),
  securityAnswer: yup.string().required("Security answer is required"),
});

export const AuthOtpVerification = yup.object({
  otp: yup.string().required("OTP is required."),
});

export const AuthForgetPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required."),
});

export const AuthResetPasswordSchema = yup.object({
  password: yup.string().required("New password is required"),
  newPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const UserProfileEditSchema = yup.object({
  // fullName: yup.string().required("Name is required"),
  fullName: yup
    .string()
    .required("Name is required")
    .matches(/^[^\s]/, "Name cannot start with a space")
    .matches(/^[a-zA-Z\s'-]+$/, "Name can only contain letters")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),
  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female", "other"], "Please select a valid gender"),
  dob: yup
    .date()
    .required("Date of birth is required")
    .max(new Date(), "Date of birth cannot be in the future")
    .min(new Date(1900, 0, 1), "Invalid date of birth")
    .typeError("Please enter a valid date"),
  expiryDate: yup
    .date()
    .required("Expiry date is required")
    .min(new Date(), "Expiry date must be in the future")
    .typeError("Please enter a valid date"),
  comment: yup.string().max(500, "Comment cannot exceed 500 characters"),
  attachments: yup
    .mixed<File>()
    .nullable()
    .test("fileSize", "File size is too large", (value: any) => {
      if (!value || !(value instanceof File)) return true;
      return value.size <= 5000000; // 5MB limit
    }),
  phone: yup.string(),
});

export const AdditionalDocumentEditSchema = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .matches(/^[^\s]/, "Title cannot start with a space")
    .matches(/^[a-zA-Z\s'-]+$/, "Title can only contain letters")
    .min(2, "Title must be at least 2 characters")
    .max(50, "Title cannot exceed 50 characters"),
  question1: yup
    .string()
    .required("Question is required")
    .transform((value) => value?.trim())
    .matches(/^[a-zA-Z]/, "Question must start with a letter")
    .min(2, "Question must be at least 2 characters")
    .max(200, "Question cannot exceed 200 characters")
    .matches(
      /^[a-zA-Z0-9\s.,'’“”"?!-]+$/,
      "Question can only contain letters, numbers, spaces, and standard punctuation"
    ),
  question2: yup
    .string()
    .required("Question is required")
    .transform((value) => value?.trim())
    .matches(/^[a-zA-Z]/, "Question must start with a letter")
    .min(2, "Question must be at least 2 characters")
    .max(200, "Question cannot exceed 200 characters")
    .matches(
      /^[a-zA-Z0-9\s.,'’“”"?!-]+$/,
      "Question can only contain letters, numbers, spaces, and standard punctuation"
    ),
  question3: yup
    .string()
    .required("Question is required")
    .transform((value) => value?.trim())
    .matches(/^[a-zA-Z].*$/, "Question must start with a letter")
    .min(2, "Question must be at least 2 characters")
    .max(200, "Question cannot exceed 200 characters")
    .matches(
      /^[a-zA-Z0-9\s?.,'-]+$/,
      "Question can only contain letters, numbers, spaces, and basic punctuation"
    ),
  question4: yup
    .string()
    .required("Question is required")
    .transform((value) => value?.trim())
    .matches(/^[a-zA-Z].*$/, "Question must start with a letter")
    .min(2, "Question must be at least 2 characters")
    .max(200, "Question cannot exceed 200 characters")
    .matches(
      /^[a-zA-Z0-9\s?.,'-]+$/,
      "Question can only contain letters, numbers, spaces, and basic punctuation"
    ),
  answer1: yup.string().required("Answer is required"),
  answer2: yup.string().required("Answer is required"),

  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female", "other"], "Please select a valid gender"),
  dob: yup
    .date()
    .required("Date of birth is required")
    .max(new Date(), "Date of birth cannot be in the future")
    .min(new Date(1900, 0, 1), "Invalid date of birth")
    .typeError("Please enter a valid date"),
  expiryDate: yup
    .date()
    .required("Expiry date is required")
    .min(new Date(), "Expiry date must be in the future")
    .typeError("Please enter a valid date"),
  comment: yup.string().max(500, "Comment cannot exceed 500 characters"),
  attachments: yup
    .mixed<File>()
    .nullable()
    .test("fileSize", "File size is too large", (value: any) => {
      if (!value || !(value instanceof File)) return true;
      return value.size <= 5000000; // 5MB limit
    }),
  phone: yup.string(),
});

export const ProfileEditSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  designation: yup.string().required("Designation is required"),
  language: yup.string().required("Language is required"),
  dateFormat: yup.string().required("Date format is required"),
  timeZone: yup.string().required("Time zone is required"),
});
