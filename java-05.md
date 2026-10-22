# Raporti i Javës 05

## Përshkrimi i Punës
Në këtë javë kemi ndërtuar panelin e menaxhimit të udhëtimeve ku përdoruesit e autorizuar mund të përditësojnë orarin e udhëtimit me UPDATE në Neon PostgreSQL.

## Prova 1
Hapat e provës: Testojmë përditësimin e orarit për udhëtimin kur përdoruesi është i autorizuar me ID 2.
Rezultati real: Udhëtimi me ID 2 u përditësua me sukses në orën 08:25 në bazën e të dhënave.

## Prova 2
Hapat e provës: Provojmë përditësimin e një udhëtimi ku përdoruesi nuk është pronar ose i autorizuar me ID 1.
Rezultati real: Udhëtimi me ID 1 u refuzua dhe ora mbeti e paprekur në 08:00.

## Prova 3
Hapat e provës: Verifikojmë hyrjen me GitHub dhe ruajtjen e sesionit për përdoruesin.
Rezultati real: Hyrja me GitHub funksionon dhe lejet e panelit zbatohen saktë.
