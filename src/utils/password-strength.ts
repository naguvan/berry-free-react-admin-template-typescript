import value from "../assets/scss/_themes-vars.module.scss";
const hasNumber = (value: string) => {
  return new RegExp(/[0-9]/).test(value);
};
const hasMixed = (value: string) => {
  return new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value);
};
const hasSpecial = (value: string) => {
  return new RegExp(/[!#@$%^&*)(+=._-]/).test(value);
};
export const strengthColor = (count: number) => {
  if (count < 2) return { label: "Poor", color: value.red500 };
  if (count < 3) return { label: "Weak", color: value.amber500 };
  if (count < 4) return { label: "Normal", color: value.deepOrange200 };
  if (count < 5) return { label: "Good", color: value.A200 };
  if (count < 6) return { label: "Strong", color: value.A700 };
};
export const strengthIndicator = (value: string) => {
  let strengths = 0;
  if (value.length > 5) strengths++;
  if (value.length > 7) strengths++;
  if (hasNumber(value)) strengths++;
  if (hasSpecial(value)) strengths++;
  if (hasMixed(value)) strengths++;
  return strengths;
};
