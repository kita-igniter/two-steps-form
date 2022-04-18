export function phone(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 15;
  let value = e.currentTarget.value;
  value = value.replace(/^(\d{2})(\d{5})/, "($1) $2-");
  e.currentTarget.value = value;
}