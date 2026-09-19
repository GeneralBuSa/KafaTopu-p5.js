function resimYukle(yol) {
  return loadImage(
    encodeURI(yol),
    () => {},
    (err) => {
      console.warn("Görsel yüklenemedi (" + yol + "). Bir yerel sunucu (Live Server) ile çalıştırmayı deneyin.");
    }
  );
}

function preload() {
  kafaResmi1 = resimYukle("1.png");
  kafaResmi2 = resimYukle("3.png");
  kramponResmi1 = resimYukle("krampon-sol.png");
  kramponResmi2 = resimYukle("krampon-sağ.png");
  messiSag = resimYukle("Messi-sağ.png");
  messiSol = resimYukle("Messi-sol.png");
  ronaldoSag = resimYukle("Ronaldo-sağ.png");
  ronaldoSol = resimYukle("Ronaldo-sol.png");
  topResmi = resimYukle("top.png");
}