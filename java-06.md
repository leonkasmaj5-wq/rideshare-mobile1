# Raporti i Javës 06 - Progressive Web App (PWA) dhe Leximi Offline

## Çfarë ndërtova
Në këtë javë kemi konvertuar aplikacionin RideShare në Progressive Web App (PWA) duke shtuar manifestin e aplikacionit, Service Worker-in për ruajtjen e të dhënave në cache, endpoint-in publik API për leximin e udhëtimeve dhe faqe speciale offline.html që u lejon përdoruesve të shohin udhëtimet e ruajtura edhe pa lidhje interneti.

## Provat që bëra
### Prova 1: Manifesti dhe vizita online
Hapat: Hapa /manifest.webmanifest dhe ikonat /icons/icon-192.png e /icons/icon-512.png, pastaj kontrollova Application -> Service Workers te shfletuesi.
Rezultati real: Manifesti shfaqi emrin RideShare AAB dhe ngjyrat e temës, ndërsa /sw.js u regjistrua si aktiv dhe ruajti përgjigjen e /api/udhetimet te Cache Storage.

### Prova 2: Pa internet, edhe pas rifreskimit
Hapat: Në tab-in e RideShare aktivizova Network -> Offline dhe rifreskova faqen ose hapa /offline.html.
Rezultati real: Dokumenti offline u hap pa internet, shfaqi tri kartat e udhëtimeve me kohën e kopjes së ruajtur dhe butoni "Kërko vend" ishte i çaktivizuar sepse kjo pamje shërben vetëm për lexim.

### Prova 3: Rikthe lidhjen dhe kërko të dhënat e reja
Hapat: Mbajta aplikacionin offline, ndryshova orën e udhëtimit ID 2 në 08:25 nga Neon SQL Editor, pastaj ktheva rrjetin në Online dhe klikova "Rifresko listën".
Rezultati real: Udhëtimi ID 2 u përditësua në orën 08:25 duke treguar burimin e ri nga serveri, dhe pastaj e riktheva orën në 08:15 në Neon.

## Ku gjendet puna
Linku i repository-t: https://github.com/leonkasmaj5-wq/rideshare-mobile1
Skedarët e rinj: java-06.md, aplikacioni/public/sw.js, aplikacioni/public/offline.html, aplikacioni/src/app/manifest.ts (ose app/manifest.ts), aplikacioni/src/app/api/udhetimet/route.ts, aplikacioni/src/components/Pwa.tsx.

## Çfarë mbetet për përmirësim
Kopja offline në këtë fazë është vetëm për leximin e listës publike; në të ardhmen mund të shtohet sinkronizimi automatik (Background Sync) kur rrjeti rikthehet.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Kodi i Service Worker-it dhe konfigurimi i PWA u realizuan me ndihmën e AI sipas udhëzimeve të lëndës, ndërsa testimi i modalitetit offline në shfletues dhe dërgimi i kodit në GitHub u kryen nga unë.
