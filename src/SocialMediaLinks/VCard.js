// src/SocialMediaLinks/VCard.js
export const downloadVCard = (lang = "en") => {
  const vCardData = {
    en: {
      firstName: "Chamith",
      lastName: "Samarakoon",
      org: "LOGOZO Graphic Design",
      title: "Creative Designer",
      phone: "+94740429827",
      email: "logozo.info@gmail.com",
      website: "https://www.instagram.com/_logozo_/",
    },
    si: {
      firstName: "චමිත්",
      lastName: "සමරකෝන්",
      org: "LOGOZO ග්‍රැෆික් නිර්මාණය",
      title: "නිර්මාණකරු",
      phone: "+94740429827",
      email: "logozo.info@gmail.com",
      website: "https://www.instagram.com/_logozo_/",
    },
  };

  const info = vCardData[lang] || vCardData["en"];

  const escape = (str) => String(str).replace(/,/g, "\\,").replace(/;/g, "\\;");

  const vcf = `BEGIN:VCARD
VERSION:3.0
N:${escape(info.lastName)};${escape(info.firstName)}
FN:${escape(info.firstName)} ${escape(info.lastName)}
ORG:${escape(info.org)}
TITLE:${escape(info.title)}
TEL;TYPE=CELL:${info.phone}
EMAIL:${info.email}
URL:${info.website}
END:VCARD`;

  const blob = new Blob([vcf], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${info.firstName}_${info.lastName}.vcf`;
  document.body.appendChild(link);
  link.click();

  setTimeout(() => {
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  }, 0);
};
