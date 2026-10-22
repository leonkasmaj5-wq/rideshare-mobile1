cat << 'EOF' > java-05.md
# Raporti i Javës 05

## Përshkrimi
Kemi krijuar panelin e menaxhimit me autorizim nga GitHub dhe ndryshimin e orarit.

## Prova 1
Hapat: Testojmë përditësimin e orarit kur përdoruesi ka leje.
Rezultati real: Udhëtimi 2 u ruajt në 08:25 në bazën e të dhënave.

## Prova 2
Hapat: Provojmë ndryshimin e orarit për udhëtim pa leje.
Rezultati real: Udhëtimi 1 u refuzua dhe ora mbetet 08:00.

## Prova 3
Hapat: Verifikojmë hyrjen me GitHub dhe kontrollin e lejeve.
Rezultati real: Hyrja funksionon dhe paneli kontrollon pronarin me sukses.
EOF