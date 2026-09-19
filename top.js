// ball.js

function topuGuncelle() {
  // Oyun bekliyorsa topun hareketini ve yerçekimini durdur
  if (oyunBekliyor) {
    futbolTop.hizX = 0;
    futbolTop.hizY = 0;
    return; // Topu güncelleme
  }

  futbolTop.hizY += futbolTop.yercekimi; // Yerçekimi etkisini uygula

  futbolTop.x += futbolTop.hizX;
  futbolTop.y += futbolTop.hizY;
  futbolTop.hizX *= futbolTop.surtunme;
  futbolTop.hizY *= futbolTop.surtunme;

  // Zemin çarpışması
  if (futbolTop.y + futbolTop.yaricap > zemin) {
    futbolTop.y = zemin - futbolTop.yaricap;
    futbolTop.hizY = -futbolTop.hizY * futbolTop.ziplama;
  }

  // Duvar çarpışmaları
  if (futbolTop.x - futbolTop.yaricap < 0 && (futbolTop.y < kale1.y || futbolTop.y > kale1.y + kale1.yukseklik)) {
    futbolTop.x = futbolTop.yaricap;
    futbolTop.hizX = -futbolTop.hizX * futbolTop.ziplama;
  }

  if (futbolTop.x + futbolTop.yaricap > width && (futbolTop.y < kale2.y || futbolTop.y > kale2.y + kale2.yukseklik)) {
    futbolTop.x = width - futbolTop.yaricap;
    futbolTop.hizX = -futbolTop.hizX * futbolTop.ziplama;
  }

  // Tavan çarpışması
  if (futbolTop.y - futbolTop.yaricap < 0) {
    futbolTop.y = futbolTop.yaricap;
    futbolTop.hizY = -futbolTop.hizY * futbolTop.ziplama;
  }
}

function topuCiz() {
  if (topResmi && topResmi.width > 1) {
    push();
    translate(futbolTop.x, futbolTop.y);
    imageMode(CENTER);
    image(topResmi, 0, 0, futbolTop.yaricap * 2, futbolTop.yaricap * 2);
    pop();
  } else {
    fill(255);
    stroke(0);
    strokeWeight(2);
    ellipse(futbolTop.x, futbolTop.y, futbolTop.yaricap * 2, futbolTop.yaricap * 2);
    noStroke();
  }
}