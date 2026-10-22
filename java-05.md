# Raporti i Javës 05

## Çfarë ndërtova
Në këtë javë kemi integruar sistemin e hyrjes me GitHub dhe lejet e përdoruesit. Identiteti përcakton se kush është përdoruesi i kyçur në sistem, roli përcakton të drejtat e tij kryesore (si p.sh. shofer ose udhëtar), ndërsa pronësia verifikon nëse përdoruesi është krijuesi i udhëtimit specifik për të lejuar ndryshimin e orarit me UPDATE në databazë.

## Provat që bëra
### Prova 1: Hyrja, rifreskimi dhe dalja
Hapat: Hapa faqen /panel pa hyrë në sistem, pastaj hyra me GitHub, rifreskova faqen dhe në fund dola.
Rezultati real: Para hyrjes u shfaq butoni për hyrje me GitHub, pas hyrjes dhe rifreskimit u shfaqën të dhënat e profilit dhe paneli i menaxhimit, ndërsa pas daljes sesioni u fshi dhe përdoruesi u kthye në faqen kryesore.

### Prova 2: Shoferi ndryshon udhëtimin e vet
Hapat: Si shofer i lejuar për udhëtimin me ID 2 ndryshova orën nga 08:15 në 08:25 dhe e ruajta.
Rezultati real: Në panel dhe në listë ora u përditësua në 08:25, ndërsa në Neon SQL Editor u konfirmua se ID 2 ruhet në 08:25 në bazën e të dhënave. Pastaj e riktheva orën në 08:15.

### Prova 3: Veprimi pa leje refuzohet
Hapat: Nga formulari i hapur ndryshova ID në 1 ku nuk jam pronar dhe provova të klikoj Ruaj.
Rezultati real: Veprimi u refuzua me mesazh gabimi sepse përdoruesi nuk ka leje, ndërsa në Neon SQL Editor verifikova se ID 1 refuzohet dhe mbetet 08:00 pa u ndryshuar.

## Ku gjendet puna
Linku i repository-t: https://github.com/leonkasmaj5-wq/rideshare-mobile1
Skedarët e rinj: aplikacioni/schema-java05.sql, aplikacioni/lib/auth.ts, aplikacioni/lib/lejet.ts, aplikacioni/app/api/auth/[...nextauth]/route.ts, aplikacioni/app/panel/page.tsx, aplikacioni/app/panel/actions.ts, aplikacioni/components/Hyrja.tsx.

## Çfarë mbetet për përmirësim
Kërkesa për vend është ende simulim në këtë fazë; në të ardhmen do të shtoja rezervimin real të vendeve me konfirmim nga shoferi në kohë reale.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Sqarimi i strukturës së lejeve dhe formatimit të skedarëve të kërkuar u bë me ndihmën e AI, ndërsa testimi i lidhjes me Neon, ekzekutimi i komandave dhe verifikimi i dorëzimit në GitHub u bënë nga vetë unë.
