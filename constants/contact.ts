export type ContactInfoItem = {
  id: string;
  label: string;
  value: string;
  /** Path under /public for next/image, or "clock" for built-in icon */
  icon: string | "clock";
};

export const CONTACT_INFO_ITEMS: ContactInfoItem[] = [
  {
    id: "phone",
    label: "Phone:",
    value: "234 913 866 7927",
    icon: "/icons/phone.svg",
  },
  {
    id: "email",
    label: "Email:",
    value: "info@primquisite.com",
    icon: "/icons/email.svg",
  },
  {
    id: "hours",
    label: "Hours:",
    value: "Mon-Fri: 8am - 4pm",
    icon: "clock",
  },
  {
    id: "address",
    label: "Address:",
    value: "20 Awudu Ekpheka Blvd, Lekki Phase 1, Lagos Nigeria.",
    icon: "/icons/office.svg",
  },
];
