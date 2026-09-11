ISABEL MAIER – PORTFOLIO HTML
=============================

Diese Website ist statisch und kann direkt auf einen normalen IONOS-Webspace hochgeladen werden.
Es ist keine Datenbank und kein CMS erforderlich.

WICHTIGE DATEIEN
----------------
index.html              Projektübersicht / Startseite
ueber-mich.html         Über-mich-Seite
impressum.html          Impressum-Vorlage mit Platzhaltern
css/style.css           Gestaltung, Abstände, Responsive-Verhalten
projekte/*.html         einzelne Projektseiten
assets/images/...       Projektbilder

VOR DER VERÖFFENTLICHUNG
------------------------
1. impressum.html öffnen und ALLE Angaben in [ECKIGEN KLAMMERN] ersetzen bzw. nicht zutreffende optionale Abschnitte löschen.
2. Falls später Analyse, externe Videos, Google Fonts, Maps, Kontaktformular o.ä. eingebaut werden, Datenschutz/Cookie-Konzept erneut prüfen.
3. Website lokal testen: index.html im Browser öffnen.
4. Den INHALT dieses Ordners auf den IONOS-Webspace hochladen. index.html muss im Zielverzeichnis liegen, nicht noch einmal in einem zusätzlichen Unterordner.

BEARBEITEN
----------
Am bequemsten mit Visual Studio Code (VS Code). Alle Inhalte liegen in normalen HTML- und CSS-Dateien.
Nach Änderungen nur die geänderten Dateien per SFTP/FTP wieder zu IONOS hochladen.

HINWEIS ZU VIDEOS
-----------------
Die Portfolio-PDFs enthielten nur Vorschaubilder/Play-Buttons, nicht die ursprünglichen Videodateien. Wenn du die Videos noch hast, kannst du sie später als MP4/WebM ergänzen oder von Vimeo/YouTube einbetten. Bei externen Einbettungen Datenschutz beachten.

RECHTLICHER HINWEIS
-------------------
Die Impressumsvorlage ist eine editierbare Ausgangsbasis und keine individuelle Rechtsberatung. Impressum und Datenschutz sind ausschließlich über die Seite „Über mich“ verlinkt. Welche Datenschutzhinweise im Einzelfall erforderlich sind, hängt von deiner Tätigkeit, deinem Hosting und den tatsächlich eingesetzten Website-Funktionen ab.

V3 Design-Anpassungen:
- Helvetica Neue als primäre Schrift (mit Helvetica/Arial-Fallback)
- Größere, einheitlichere Typografie
- Sticky Header auf allen Seiten
- Menü-Hover in kräftigem Blau statt Unterstreichung
- Projektkarten: Titel + schwarze transparente Ebene erst bei Hover/Keyboard-Fokus
- Auf Touch-Geräten bleiben Projektnamen sichtbar, da dort kein Hover existiert
- Einheitliche Seitenränder links/rechts über die CSS-Variable --pad

V4 Anpassungen:
- Über-mich-Seite verwendet dasselbe sichtbare Hauptmenü wie alle anderen Seiten (kein Burger-Menü).
- Einheitliche Außenkante: Navigation, Texte, Galerien und Footer liegen auf derselben linken/rechten Flucht.
- Schriftfamilie auf Helvetica Neue Light / Helvetica Neue mit Schriftgewicht 300 umgestellt.
- Startseite nutzt wieder das frühere 4:3-Kachelverhältnis und die Motive der damaligen Portfolio-Startseite.
- Projekttitel erscheinen am Desktop erst beim Hover über schwarzer transparenter Fläche.


v7 Änderungen:
- Aktiver Menüpunkt wird fett dargestellt.
- Unter 600 px erscheint ein Burger-Menü mit typografischer Projektliste.
- Schamlos: die zwei falschen unteren Bilder wurden entfernt.


v9 Änderungen:
- "Projekte" ist nur auf der Startseite fett; auf einzelnen Projektseiten nicht mehr.
- Datenschutzseite und Datenschutzlinks entfernt.
- Impressumslinks von Startseite, Projektseiten und sonstigen Seiten entfernt.
- Impressum bleibt ausschließlich über "Über mich" erreichbar.


V11 Inhaltsprüfung gegen die ursprünglichen PDF-Exporte:
- Projekt-Metadaten und Jahresangaben mit den PDFs abgeglichen.
- „Bacherlorthesis“ bei siebenmeter exakt wie im ursprünglichen PDF übernommen.
- „weitere Projekte“ auf allen Projektseiten wieder in der ursprünglichen Auswahl/Reihenfolge angelegt und mit den 4:3-Startseitenmotiven verknüpft.
- Impressum/Datenschutz bleiben nur auf „Über mich“ verlinkt.
- Nutzerseitig gewünschte Abweichungen vom alten Portfolio (Sticky Header, Helvetica Neue Light, Hover-Verhalten, Responsive/Burger-Menü) bleiben erhalten.
