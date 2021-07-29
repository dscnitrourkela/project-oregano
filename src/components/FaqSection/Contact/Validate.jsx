export default function validate(values) {
  const errors = {};
  const setErrors = {};

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.text.trim()) {
    errors.text = 'Message required';
  }

  return { errors, setErrors };
}
