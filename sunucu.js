const http = require('http');
const dayjs = require('dayjs');

const server = http.createServer((req, res) => {
    // 1. Sunucu her isteğin yöntemini ve yolunu uçbirime yazar
    console.log(`İstek: ${req.method} ${req.url}`);

    // 2. GET dışındaki yöntemler (405 Hata Kodu)
    if (req.method !== 'GET') {
        res.writeHead(405, { 
            'Content-Type': 'text/plain; charset=utf-8', 
            'Allow': 'GET' 
        });
        return res.end('Sadece GET isteklerine izin veriliyor.');
    }

    // 3. Yönlendirmeler (Routes)
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Ana Sayfa</h1><p><a href="/hakkimda">Hakkimda Sayfasina Git</a></p>');
    } 
    else if (req.url === '/hakkimda') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Hakkimda</h1><p>Ben Burak Akdemir, Yozgat Bozok Universitesi Bilgisayar Muhendisligi 3. sinif ogrencisiyim.</p>');
    } 
    else if (req.url === '/api/ders') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ 
            kod: "BMH231", 
            ad: "Web Programlama", 
            gun: "Cuma" 
        }));
    } 
    else if (req.url === '/api/agep') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        const sonTeslim = dayjs('2026-11-01');
        const bugun = dayjs();
        const kalanGun = sonTeslim.diff(bugun, 'day');
        
        res.end(JSON.stringify({ 
            tarih: "01.11.2026", 
            kalanGun: kalanGun 
        }));
    } 
    // 4. Diger tüm yollar (404 Hata Kodu)
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Sayfa bulunamadi');
    }
});

// Sunucuyu başlat
server.listen(3000, () => {
    console.log('Sunucu 3000 portunda calisiyor...');
});
// Bu satir MASTER dalinda eklendi