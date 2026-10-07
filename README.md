# Teknoy

Modern, premium ve kurumsal bir Teknoy web sitesi; kurumsal yazılım, web geliştirme ve IT destek hizmetlerine odaklanır.

## Çalıştırma

PowerShell'de bu klasöre geçip yerel sunucuyu başlatın:

```powershell
Set-Location "$HOME\Desktop\Teknoy-Site-Yuklemeye-Hazir"
python -m http.server 8000
```

Ardından tarayıcıda aşağıdaki adresleri açabilirsiniz:

- Ana sayfa: `http://localhost:8000/`
- Satış sayfası: `http://localhost:8000/sales.html`
- Hizmet detayı: `http://localhost:8000/service-detail.html`
- Elektrik hizmetleri: `http://localhost:8000/electrical-service.html`
- Gizlilik ve KVKK: `http://localhost:8000/privacy-policy.html`
- Çerez politikası: `http://localhost:8000/cookie-policy.html`
- Teşekkür sayfası: `http://localhost:8000/thank-you.html`

## İçerik ve görseller

- Premium kurumsal görünüm
- Kurumsal yazılım, web geliştirme, IT ve elektrik hizmetleri
- Elektrik panosu montajı/yenileme, tesisat kurulumu, arıza tespiti ve tamir
- Lead formları (FormSubmit üzerinden e-posta ile iletilir)
- WhatsApp bağlantısı
- Ayrı satış ve teklif sayfası
- Scroll animasyonları
- Gizlilik/KVKK aydınlatma metni ve çerez politikası
- Site görselleri `assets/images/` klasöründe yerel olarak saklanır; yayın sırasında harici görsel URL'sine ihtiyaç duyulmaz.

## GitHub'a yükleme

Bu klasör yayınlanacak dosyaların köküdür. GitHub'da `Add file > Upload files` bölümünü açıp bu klasörün **içeriğini** yükleyin; klasörün kendisini yüklemeyin. `index.html` depo kökünde görünmeli, görsel klasörü de `assets/images/` yolunu korumalıdır.

## Gizlilik ve çerez bilgilendirmesi

Formlar, iletişim bilgisi paylaşılmadan önce gizlilik aydınlatma metninin okunmasını ister. Site analiz ve reklam çerezi kullanmaz; çerez bilgilendirmesinin kapatıldığını hatırlamak için tarayıcının yerel depolamasına tercih kaydı yazar. Ayrıntılar için `privacy-policy.html` ve `cookie-policy.html` sayfalarına bakın.
