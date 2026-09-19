// ui.js

function bilgileriGoster() {
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(2);
  textAlign(CENTER);
  text(oyuncu1.skor + " - " + oyuncu2.skor, width / 2, 50);

  textSize(24);
  fill(255);
  textAlign(CENTER);
  const dakika = Math.floor(kalanSure / 60);
  const saniye = kalanSure % 60;
  text("Süre: " + (dakika < 10 ? "0" : "") + dakika + ":" + (saniye < 10 ? "0" : "") + saniye, width / 2, 80);
  noStroke();
}

function talimatlariGoster() {
  fill(0, 0, 0, 200);
  stroke(255);
  strokeWeight(2);
  rect(150, 200, 500, 200);

  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER);
  text("KAFA TOPU OYUNU", width / 2, 240);

  textSize(16);
  text("Kırmızı Oyuncu: A (Sol), D (Sağ), W (Zıpla), S (Şut)", width / 2, 280);
  text("Mavi Oyuncu: ← (Sol), → (Sağ), ↑ (Zıpla), ↓ (Şut)", width / 2, 310);
  text("Oyunu başlatmak için herhangi bir tuşa basın", width / 2, 340);
  text("Oyun bittiğinde R tuşu ile yeniden başlat", width / 2, 370);
}

function golEkraniGoster() {
  background(0, 0, 0, 200);
  fill(255, 255, 0);
  stroke(255);
  strokeWeight(2);
  textSize(60 + sin(golEkraniSayaci * 0.3) * 10);
  textAlign(CENTER);
  text("GOL!", width / 2, height / 2 - 50);

  fill(255);
  noStroke();
  textSize(30);
  const golAtanText = golAtan === 1 ? "KIRMIZI OYUNCU" : "MAVİ OYUNCU";
  text(golAtanText, width / 2, height / 2 + 20);

  golEkraniSayaci++;
  if (golEkraniSayaci > 120) {
    golEkrani = false;
    golEkraniSayaci = 0;
  }
}

function sonucEkraniGoster() {
  background(0, 0, 0, 200);
  fill(255);
  textSize(40);
  textAlign(CENTER);
  text("OYUN BİTTİ", width / 2, height / 2 - 50);

  textSize(30);
  const kazanan = oyuncu1.skor > oyuncu2.skor ? "KIRMIZI OYUNCU KAZANDI!" :
                   oyuncu2.skor > oyuncu1.skor ? "MAVİ OYUNCU KAZANDI!" : "BERABERE!";
  text(kazanan, width / 2, height / 2);
  textSize(24);
  text("Yeniden başlamak için 'R' tuşuna basın", width / 2, height / 2 + 50);
}

function geriSayimiBaslat() {
  geriSayimAktif = true;
  geriSayimSayaci = 180; // Yaklaşık 3 saniye (60 FPS * 3)
  geriSayimMetni = "3";
  oyunBekliyor = true; // Geri sayım başladığında oyunu bekleme moduna al
}

function geriSayimiCiz() {
  if (geriSayimAktif) {
    fill(255, 255, 255); // Kırmızı renk
    textSize(100);
    textAlign(CENTER, CENTER);
    text(geriSayimMetni, width / 2, height / 2);

    geriSayimSayaci--;
     if (geriSayimSayaci === 180) geriSayimMetni = "3";
    if (geriSayimSayaci === 120) geriSayimMetni = "2";
    if (geriSayimSayaci === 60) geriSayimMetni = "1";
    if (geriSayimSayaci <= 0) {
      geriSayimAktif = false;
      geriSayimMetni = "";
      oyunBekliyor = false; // Geri sayım bittiğinde oyunu beklemeden çıkar
      sonZamanKontrol = millis(); // Süre akmaya başlasın
    }
  }
}

// Karakter Seçim Ekranı Çizimi
function karakterSeciminiCiz() {
  // Arka plan kaplaması
  background(20, 25, 40);

  // Başlık
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(34);
  textStyle(BOLD);
  text("KARAKTERİNİ SEÇ", width / 2, 55);
  textStyle(NORMAL);

  textSize(15);
  fill(200);
  text("Seçmek için kartlara tıklayın veya tuşları kullanın", width / 2, 92);

  // 1. Oyuncu Kartı (Sol - Kırmızı)
  const kart1X = 100, kart1Y = 125, kartW = 260, kartH = 340;
  fill(30, 35, 55);
  stroke(255, 75, 75);
  strokeWeight(3);
  rect(kart1X, kart1Y, kartW, kartH, 16);

  noStroke();
  fill(255, 75, 75);
  textSize(20);
  textStyle(BOLD);
  text("1. OYUNCU", kart1X + kartW / 2, kart1Y + 30);
  textStyle(NORMAL);

  // 1. Oyuncu Resmi
  fill(20, 25, 40);
  ellipse(kart1X + kartW / 2, kart1Y + 125, 120, 120);
  const img1 = (secilenKarakter1 === "messi") ? messiSol : ronaldoSol;
  if (img1 && img1.width > 1) {
    imageMode(CENTER);
    image(img1, kart1X + kartW / 2, kart1Y + 125, 100, 100);
  } else {
    fill(255, 100, 100);
    ellipse(kart1X + kartW / 2, kart1Y + 125, 70, 70);
  }

  // 1. Oyuncu İsim & Değiştirme
  fill(255);
  textSize(22);
  textStyle(BOLD);
  const isim1 = secilenKarakter1 === "messi" ? "L. MESSI" : "C. RONALDO";
  text(isim1, kart1X + kartW / 2, kart1Y + 205);
  textStyle(NORMAL);

  // Değiştir Butonu / Yönergesi
  fill(255, 75, 75, 40);
  stroke(255, 75, 75);
  strokeWeight(1.5);
  rect(kart1X + 30, kart1Y + 230, kartW - 60, 36, 8);
  noStroke();
  fill(255);
  textSize(14);
  text("◄ A / D ► Değiştir", kart1X + kartW / 2, kart1Y + 248);

  // 1. Oyuncu Tuş Bilgisi
  fill(170);
  textSize(12);
  text("Kontroller: W, A, S, D", kart1X + kartW / 2, kart1Y + 300);

  // 2. Oyuncu Kartı (Sağ - Mavi)
  const kart2X = 440, kart2Y = 125;
  fill(30, 35, 55);
  stroke(75, 130, 255);
  strokeWeight(3);
  rect(kart2X, kart2Y, kartW, kartH, 16);

  noStroke();
  fill(75, 130, 255);
  textSize(20);
  textStyle(BOLD);
  text("2. OYUNCU", kart2X + kartW / 2, kart2Y + 30);
  textStyle(NORMAL);

  // 2. Oyuncu Resmi
  fill(20, 25, 40);
  ellipse(kart2X + kartW / 2, kart2Y + 125, 120, 120);
  const img2 = (secilenKarakter2 === "messi") ? messiSag : ronaldoSag;
  if (img2 && img2.width > 1) {
    imageMode(CENTER);
    image(img2, kart2X + kartW / 2, kart2Y + 125, 100, 100);
  } else {
    fill(100, 100, 255);
    ellipse(kart2X + kartW / 2, kart2Y + 125, 70, 70);
  }

  // 2. Oyuncu İsim & Değiştirme
  fill(255);
  textSize(22);
  textStyle(BOLD);
  const isim2 = secilenKarakter2 === "messi" ? "L. MESSI" : "C. RONALDO";
  text(isim2, kart2X + kartW / 2, kart2Y + 205);
  textStyle(NORMAL);

  // Değiştir Butonu / Yönergesi
  fill(75, 130, 255, 40);
  stroke(75, 130, 255);
  strokeWeight(1.5);
  rect(kart2X + 30, kart2Y + 230, kartW - 60, 36, 8);
  noStroke();
  fill(255);
  textSize(14);
  text("◄ Sol / Sağ ► Değiştir", kart2X + kartW / 2, kart2Y + 248);

  // 2. Oyuncu Tuş Bilgisi
  fill(170);
  textSize(12);
  text("Kontroller: Yön Tuşları", kart2X + kartW / 2, kart2Y + 300);

  // "MAÇA BAŞLA" Butonu
  const btnX = 270, btnY = 495, btnW = 260, btnH = 55;
  const hover = mouseX >= btnX && mouseX <= btnX + btnW && mouseY >= btnY && mouseY <= btnY + btnH;
  
  if (hover) {
    fill(46, 204, 113);
    stroke(255);
  } else {
    fill(39, 174, 96);
    stroke(46, 204, 113);
  }
  strokeWeight(2);
  rect(btnX, btnY, btnW, btnH, 28);

  noStroke();
  fill(255);
  textSize(20);
  textStyle(BOLD);
  text("MAÇA BAŞLA", btnX + btnW / 2, btnY + btnH / 2 - 2);
  textStyle(NORMAL);

  textSize(12);
  fill(230);
  text("[ BOŞLUK veya ENTER ]", btnX + btnW / 2, btnY + btnH / 2 + 16);
}

// Karakterleri oyun nesnelerine ata ve oyunu başlat
function karakterleriAyarlaVeBaslat() {
  kafaResmi1 = (secilenKarakter1 === "messi") ? messiSol : ronaldoSol;
  kafaResmi2 = (secilenKarakter2 === "messi") ? messiSag : ronaldoSag;
  karakterSecimEkrani = false;
  oyunBasladi = true;
  topuVeOyunculariIlkKonumlandir();
  oyunIlkKurulduMu = true;
  sonZamanKontrol = millis();
  geriSayimiBaslat();
}