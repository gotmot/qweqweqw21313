function formatPhoneNumber(phone) {
  if (typeof phone !== 'string') {
    return 'Ошибка: неверный формат номера телефона.';
  }

  const cleaned = phone.replace(/[^\d+]/g, '');

  if (!cleaned.startsWith('+7') && !cleaned.startsWith('8')) {
    return 'Ошибка: неверный формат номера телефона.';
  }

  let normalized = cleaned.startsWith('8') ? '+7' + cleaned.slice(1) : cleaned;

  if (!/^\+7\d{11}$/.test(normalized)) {
    return 'Ошибка: неверный формат номера телефона.';
  }

  const digits = normalized.slice(2);

  return `+7 ${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
}


const phone1 = "89161234567";
console.log(formatPhoneNumber(phone1));

const phone2 = "+79161234567";
console.log(formatPhoneNumber(phone2));

const phone3 = "1234567890";
console.log(formatPhoneNumber(phone3));

