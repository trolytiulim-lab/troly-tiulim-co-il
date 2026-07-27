export const PHONE_DISPLAY = "052-8556611";
export const PHONE_TEL = "+972528556611";
export const CONTACT_EMAIL = "trolytiulim@gmail.com";

export const WHATSAPP_MESSAGE =
  "היי, ראיתי את המסלול בטרולי טיולים ואשמח לשמוע פרטים";

export function waLink(message: string = WHATSAPP_MESSAGE) {
  return "https://wa.me/972528556611?text=" + encodeURIComponent(message);
}

export const WHATSAPP_URL = waLink();
