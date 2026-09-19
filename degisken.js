// config.js

// Seyirci Renkleri
var seyirciRenk = [];
var seyirciRenkleri = [];

// Oyun Nesneleri
var futbolTop, oyuncu1, oyuncu2, kale1, kale2;

// Resimler
var kafaResmi1, kafaResmi2, kramponResmi1, kramponResmi2;
var messiSag, messiSol, ronaldoSag, ronaldoSol;
var topResmi;

// Karakter Seçim Değişkenleri
var karakterSecimEkrani = true;
var secilenKarakter1 = "messi"; // "messi" veya "ronaldo"
var secilenKarakter2 = "ronaldo"; // "messi" veya "ronaldo"

// Ayarlar ve Sabitler
var zemin = 550;

// Oyun Durumu Değişkenleri
var oyunBasladi = false;
var oyunBitti = false;
var kalanSure = 60;
var sonZamanKontrol;

// Gol Ekranı Değişkenleri
var golEkrani = false;
var golEkraniSayaci = 0;
var golAtan = 0; // 1 veya 2

// Geri Sayım Değişkenleri
var geriSayimAktif = false;
var geriSayimSayaci = 0;
var geriSayimMetni = "";
var oyunBekliyor = false;

var oyunIlkKurulduMu = false;