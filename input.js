// input.js

function keyPressed() {
  // Karakter seçim ekranındaysa tuş kontrolleri
  if (karakterSecimEkrani) {
    // 1. Oyuncu karakter değiştirme (A veya D)
    if (keyCode === 65 || keyCode === 68) {
      secilenKarakter1 = (secilenKarakter1 === "messi") ? "ronaldo" : "messi";
    }
    // 2. Oyuncu karakter değiştirme (Sol veya Sağ Ok)
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
      secilenKarakter2 = (secilenKarakter2 === "messi") ? "ronaldo" : "messi";
    }
    // Maçı Başlat (Boşluk veya Enter)
    if (keyCode === 32 || keyCode === ENTER) {
      karakterleriAyarlaVeBaslat();
    }
    return;
  }

  // Oyun bekliyorken (geri sayım aktifken) oyuncuların hareketini engelle
  if (oyunBekliyor) return;

  // Oyun ilk defa başlıyorsa (talimatlar ekranından oyuna geçiş)
  if (!oyunBasladi) {
    oyunBasladi = true;
    return;
  }

  // Oyun bittiğinde 'R' tuşu ile sıfırla
  if (oyunBitti && keyCode === 82) { // R tuşu (82)
    oyunuSifirla();
    return;
  }

  // Eğer oyun bittiyse veya gol ekranı aktifse başka tuş basmalarını yoksay
  if (oyunBitti || golEkrani) return;


  // Oyuncu 1 kontrolleri
  if (keyCode === 65) oyuncu1.hizX = -oyuncu1.hiz; // A - sol
  if (keyCode === 68) oyuncu1.hizX = oyuncu1.hiz; // D - sağ
  if (keyCode === 87 && !oyuncu1.zipliyor) { // W - zıpla
    oyuncu1.hizY = -oyuncu1.ziplamaGucu;
    oyuncu1.zipliyor = true;
  }
  if (keyCode === 83 && !oyuncu1.sutCekiyor) { // S - şut
    oyuncu1.sutCekiyor = true;
    oyuncu1.sutSayaci = 15;
    sutCek(oyuncu1, true);
  }

  // Oyuncu 2 kontrolleri
  if (keyCode === LEFT_ARROW) oyuncu2.hizX = -oyuncu2.hiz;
  if (keyCode === RIGHT_ARROW) oyuncu2.hizX = oyuncu2.hiz;
  if (keyCode === UP_ARROW && !oyuncu2.zipliyor) {
    oyuncu2.hizY = -oyuncu2.ziplamaGucu;
    oyuncu2.zipliyor = true;
  }
  if (keyCode === DOWN_ARROW && !oyuncu2.sutCekiyor) {
    oyuncu2.sutCekiyor = true;
    oyuncu2.sutSayaci = 15;
    sutCek(oyuncu2, false);
  }
}

function keyReleased() {
  // Oyuncu 1
  if (keyCode === 65 || keyCode === 68) {
    oyuncu1.hizX = 0;
  }

  // Oyuncu 2
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    oyuncu2.hizX = 0;
  }
}

function mousePressed() {
  if (karakterSecimEkrani) {
    // 1. Oyuncu kartına tıklama
    if (mouseX >= 100 && mouseX <= 360 && mouseY >= 125 && mouseY <= 465) {
      secilenKarakter1 = (secilenKarakter1 === "messi") ? "ronaldo" : "messi";
    }

    // 2. Oyuncu kartına tıklama
    if (mouseX >= 440 && mouseX <= 700 && mouseY >= 125 && mouseY <= 465) {
      secilenKarakter2 = (secilenKarakter2 === "messi") ? "ronaldo" : "messi";
    }

    // Maça Başla butonuna tıklama
    if (mouseX >= 270 && mouseX <= 530 && mouseY >= 495 && mouseY <= 550) {
      karakterleriAyarlaVeBaslat();
    }
  }
}