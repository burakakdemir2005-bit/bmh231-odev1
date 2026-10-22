# BMH231 - Web Programlama - Ödev 1

Bu depo, BMH231 Web Programlama dersi 1. ödevi kapsamında oluşturulmuştur. 
İçerisinde Node.js kullanılarak geliştirilmiş basit bir HTTP sunucusu bulunmaktadır.

## Öğrenci Bilgileri
* **Ad Soyad:** Burak Akdemir
* **Öğrenci No:** 16008124066
* **Bölüm:** Yozgat Bozok Üniversitesi, Bilgisayar Mühendisliği (3. Sınıf)

## Proje İçeriği
* `sunucu.js`: Temel yönlendirme (routing) işlemlerini (/, /hakkimda, /api/ders, /api/agep) ve 404/405 hata kodlarını barındıran HTTP sunucu kodudur.
* `package.json`: Proje bağımlılıklarını (`dayjs`) ve başlatma betiğini (`npm start`) içerir.

## Kurulum ve Çalıştırma
Projeyi bilgisayarınızda çalıştırmak için terminalinizde sırasıyla aşağıdaki adımları izleyebilirsiniz:
1. `git clone https://github.com/burakakdemir2005-bit/bmh231-odev1.git`
2. `cd bmh231-odev1`
3. `npm install`
4. `npm start`

Sunucu çalıştıktan sonra tarayıcınızdan `http://localhost:3000` adresine giderek test edebilirsiniz.
