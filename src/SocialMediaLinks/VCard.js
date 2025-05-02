export const downloadVCard = (lang = "en") => {
    const vCardData = {
      en: {
        firstName: "Chamith",
        lastName: "Samarakoon",
        org: "LOGOZO Graphic Design",
        title: "Creative Designer",
        phone: "+94767984712",
        email: "youremail@example.com",
        website: "https://www.instagram.com/_logozo_/",
      },
      si: {
        firstName: "චමිත්",
        lastName: "සමරකෝන්",
        org: "LOGOZO ග්‍රැෆික් නිර්මාණය",
        title: "නිර්මාණකරු",
        phone: "+94767984712",
        email: "youremail@example.com",
        website: "https://www.instagram.com/_logozo_/",
      },
    };
  
    const info = vCardData[lang] || vCardData["en"];
  
    const vcf = `BEGIN:VCARD
  VERSION:3.0
  N:${info.lastName};${info.firstName}
  FN:${info.firstName} ${info.lastName}
  ORG:${info.org}
  TITLE:${info.title}
  TEL;TYPE=CELL:${info.phone}
  EMAIL:${info.email}
  URL:${info.website}
  END:VCARD`;
  
    const blob = new Blob([vcf], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
    link.href = url;
    link.download = `${info.firstName}_${info.lastName}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  