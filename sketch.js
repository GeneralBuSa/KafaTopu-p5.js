
function setup() {
  createCanvas(800, 600);

  // Seyirci renklerini oluştur
  seyirciRenk = (typeof seyirciRenk !== 'undefined' && seyirciRenk) ? seyirciRenk : [];
  for (let i = 0; i < 50; i++) { // 50 renk oluştur
    seyirciRenk.push(color(random(255), random(255), random(255)));
  }

  // Top
  futbolTop = {
    x: 400,
    y: 120,
    yaricap: 20,
    hizX: 0,
    hizY: 0,
    yercekimi: 0.5,
    surtunme: 0.99,
    ziplama: 0.8,
  }

  // Oyuncu 1
  oyuncu1 = {
    x: 150,
    y: zemin - 41,
    kafaYaricap: 35,
    kramponGenislik: 68,
    kramponYukseklik: 34,
    hizX: 0,
    hizY: 0,
    hiz: 5,
    ziplamaGucu: 12,
    yercekimi: 0.8,
    zipliyor: false,
    skor: 0,
    sutCekiyor: false,
    sutSayaci: 0,
    kramponAci: 0,
  }

  // Oyuncu 2
  oyuncu2 = {
    x: 650,
    y: zemin - 41,
    kafaYaricap: 35,
    kramponGenislik: 68,
    kramponYukseklik: 34,
    hizX: 0,
    hizY: 0,
    hiz: 5,
    ziplamaGucu: 15,
    yercekimi: 0.8,
    zipliyor: false,
    skor: 0,
    sutCekiyor: false,
    sutSayaci: 0,
    kramponAci: 0,
  }

  // Kaleler
  kale1 = { x: 0, y: 375, genislik: 50, yukseklik: 180, direkKalinlik: 10 }
  kale2 = { x: width, y: 375, genislik: 50, yukseklik: 180, direkKalinlik: 10 }

  sonZamanKontrol = millis()

  // Başlangıçta oyuncuları konumlandır
  topuVeOyunculariIlkKonumlandir();
}

function draw() {
  // Karakter seçim ekranı aktifse sadece onu çiz
  if (karakterSecimEkrani) {
    karakterSeciminiCiz();
    return;
  }

  background(135, 206, 235)

  // Tribünleri çiz
  tribunleriCiz()

  if (oyunBasladi && !oyunBitti && !golEkrani) {
    zamanGuncelle()
  }

  if (golEkrani) {
    golEkraniGoster()
    return
  }

  if (oyunBitti) {
    sonucEkraniGoster()
    return
  }
  if (!oyunIlkKurulduMu) {
    topuVeOyunculariIlkKonumlandir(); // Topu ve oyuncuları başlangıç konumuna yerleştir 
    oyunIlkKurulduMu = true;
    sonZamanKontrol = millis(); // Süre hemen akmaya başlasın
    oyunBekliyor = false; // Oyun başlar başlamaz beklemede olmamalı
    geriSayimAktif = false; // İlk başlangıçta geri sayım aktif olmamalı
    geriSayimMetni = "";
  }

  // Saha tasarımı
  kaleleriCiz()
  sahayiCiz()
  //Oyunun başlayıp başlamadığını ve bitmediğini kontrol edip ona göre gerekli fonksiyonların çalışmasını sağlayan if komutu(gerekli hareketten kastım oyuncu hareketleri top hareketleri vs.)
  if (oyunBasladi && !oyunBitti) {
    oyuncuyuGuncelle(oyuncu1)
    oyuncuyuGuncelle(oyuncu2)
    topuGuncelle()
    carpismalariKontrolEt()
    golleriKontrolEt()
    sutAnimasyonlariniGuncelle()
  }

  //oyuncu çizimleri
  oyuncuyuCiz(oyuncu1, kafaResmi1, true)
  oyuncuyuCiz(oyuncu2, kafaResmi2, false)
  topuCiz()
  //skor bilgisini gösterme
  bilgileriGoster()
  //talimatların gösterilmesi için
  if (!oyunBasladi) {
    talimatlariGoster()
  }

  geriSayimiCiz()
}