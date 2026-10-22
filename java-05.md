echo '# Raporti i Javës 05 - Paneli i Menaxhimit dhe Përditësimi i Orarit

## Përshkrimi i Punës
Në këtë javë kemi ndërtuar panelin e menaxhimit të udhëtimeve ku përdoruesit e autorizuar mund të përditësojnë orarin e udhëtimit me UPDATE në Neon PostgreSQL.

## Prova 1
Kemi testuar përditësimin e orarit për udhëtimin e lejuar.

### Rezultati real:
Udhëtimi me ID 2 u përditësua me sukses në orën 08:25 në bazën e të dhënave.

## Prova 2
Kemi provuar përditësimin e një udhëtimi ku përdoruesi nuk është pronar ose i autorizuar.

### Rezultati real:
Udhëtimi me ID 1 u refuzua dhe ora mbeti e paprekur në 08:00.
' > java-05.md