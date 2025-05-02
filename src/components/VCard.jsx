// src/components/VCard.js

export const vcardText = `
BEGIN:VCARD
VERSION:3.0
FN:Chamith Samarakoon
ORG:LOGOZO
TITLE:Graphic Designer
TEL:+94-0767984712
EMAIL:youremail@example.com
URL:https://yourwebsite.com
END:VCARD
`;

export const downloadVCard = () => {
  const blob = new Blob([vcardText.trim()], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Chamith_Samarakoon.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url); // Clean up memory
};
