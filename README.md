# ⚽ Kafa Topu (Head Ball) - p5.js

p5.js kütüphanesi kullanılarak geliştirilmiş, iki oyunculu, dinamik ve eğlenceli bir kafa topu futbol oyunu. Efsanevi futbolcular **Lionel Messi** ve **Cristiano Ronaldo**'yu seçerek arkadaşlarınızla aynı klavye üzerinden kıyasıya mücadele edin!

---

## ✨ Öne Çıkan Özellikler

- **🌟 Karakter Seçim Ekranı:** Oyuncular maç öncesinde **Messi** veya **Ronaldo** karakterlerinden dilediğini seçebilir.
- **👥 İki Oyunculu Yerel Mücadele:** Aynı klavyede arkadaşınızla 1'e 1 maç keyfi.
- **⚡ Akıcı Fizik ve Şut Dinamikleri:** Yerçekimi, kafa vuruşu, şut açısı ve animasyonlu krampon hareketleri.
- **⏱️ Geri Sayım ve Süre Yönetimi:** Karakter seçiminden sonra ve her golden sonra 3-2-1 geri sayımı; 60 saniyelik çekişmeli maç süresi.
- **🏟️ Dinamik Stadyum Atmosferi:** Renkli seyircilerden oluşan tribünler, saha çizgileri ve kale fileleri.
- **🎯 Görsel Arayüz ve Efektler:** Gol anons ekranı, canlı skor tabelası, maç sonu kazanan duyurusu.

---

## 🎮 Kontroller

### 1. Karakter Seçim Ekranı

| Oyuncu | Karakter Değiştir | Seçim Yöntemi |
| :--- | :--- | :--- |
| **1. Oyuncu (Sol - Kırmızı)** | `A` veya `D` | İlgili karta tıklayarak da değiştirilebilir |
| **2. Oyuncu (Sağ - Mavi)** | `←` veya `→` (Ok Tuşları) | İlgili karta tıklayarak da değiştirilebilir |
| **Maçı Başlat** | `Boşluk (Space)` veya `Enter` | **"MAÇA BAŞLA"** butonuna tıklanabilir |

### 2. Maç İçi Kontroller

| Hareket | 1. Oyuncu (Sol) | 2. Oyuncu (Sağ) |
| :--- | :---: | :---: |
| **Sola Git** | `A` | `←` (Sol Ok) |
| **Sağa Git** | `D` | `→` (Sağ Ok) |
| **Zıpla** | `W` | `↑` (Yukarı Ok) |
| **Şut Çek** | `S` | `↓` (Aşağı Ok) |

- **Yeniden Başlat:** Maç bittiğinde `R` tuşuna basarak oyunu sıfırlayabilirsiniz.

---

## 🚀 Başlarken / Kurulum

Projeyi çalıştırmak için herhangi bir paket yüklemesi veya derleme işlemine gerek yoktur:

1. Proje dosyalarını indirin veya klonlayın:
   ```bash
   git clone https://github.com/GeneralBuSa/KafaTopu-p5.js.git
   ```
2. Görsellerin tarayıcı CORS politikalarına takılmadan sorunsuz yüklenebilmesi için projeyi yerel bir web sunucusu ile açmanız önerilir:
   - **VS Code:** `Live Server` eklentisiyle `index.html` üzerinde sağ tıklayıp **"Open with Live Server"** deyin.
   - **Python:** Proje klasöründe `python -m http.server 8000` komutunu çalıştırıp tarayıcıda `http://localhost:8000` adresine gidin.

---

## 📁 Proje Yapısı

```plaintext
KafaTopu-p5.js/
├── index.html            # Oyunun ana HTML sayfası
├── style.css             # Sayfa düzeni ve stil dosyası
├── p5.min.js             # p5.js kütüphanesi
│
├── degisken.js           # Genel oyun durumları ve yapılandırma değişkenleri
├── fotolar.js            # Karakter, krampon ve top görsellerinin yüklenmesi
├── input.js              # Klavye ve fare etkileşim yönetimi
├── oyuncu.js             # Oyuncu fizikleri, hareketler ve krampon şut animasyonu
├── top.js                # Futbol topu fizikleri, yerçekimi ve sekme mantığı
├── cizim.js              # Saha, tribün, seyirci ve kale çizimleri
├── arayuz.js             # Karakter seçimi, skor, süre, geri sayım ve sonuç ekranları
├── oyun.js               # Süre sayacı, gol tespiti, çarpışma kontrolleri ve sıfırlama
├── sketch.js             # p5.js ana yaşam döngüsü (setup ve draw döngüsü)
│
└── Görseller (Assets)
    ├── Messi-sol.png     # Sol yönlü Messi kafa görseli
    ├── Messi-sağ.png     # Sağ yönlü Messi kafa görseli
    ├── Ronaldo-sol.png   # Sol yönlü Ronaldo kafa görseli
    ├── Ronaldo-sağ.png   # Sağ yönlü Ronaldo kafa görseli
    ├── krampon-sol.png   # 1. Oyuncu krampon görseli
    ├── krampon-sağ.png   # 2. Oyuncu krampon görseli
    └── top.png           # Futbol topu görseli
```

---

## 📄 Lisans

Bu proje açık kaynaklıdır. Dilediğiniz gibi geliştirebilir, değiştirebilir ve kullanabilirsiniz.
