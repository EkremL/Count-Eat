import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Kullanıcı adınız minimum 5 karakter olmalıdır.")
    .required("Kullanıcı adı girmek zorunludur."),
  email: yup
    .string()
    .email("Geçerli bir email giriniz.")
    .required("Email girmek zorunludur."),
  password: yup
    .string()
    .min(5, "Şifreniz minimum 5 karakter olmalıdır.")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz",
    }),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor!")
    .required("Tekrar şifre girmek zorunludur"),
});
