# Dieses Respository wird nicht weiter gepflegt, kann aber natürlich weiter genutzt werden

# Leo's Jekyll Template mit UIKit powered by Gulp und Sass

### Aktuell ist der Branch `develop`!

## Installation
Klone das Repository auf Deinen Computer und wechsle in den Projektordner. Starte:

```sh
$ ./install-dev.sh
```

Damit werden automatisch `bundle`, `bower install` und `npm install` gestartet.

## Einstellungen

Öffne `gulpFiles/config.js` und ändere die Einstellungen falls nötig. Allerdings müssen eigentlich nur die `rsync` Einstellungen tatsächlich angepasst werden. Ändere `destination` zum Pfad Deines Webservers und ändere `hostname` und `username`.

## Gulp.js starten

Drei Tasks sind verfügbar:

```sh
$ gulp
$ gulp publish
$ gulp deploy
```

- `gulp` baut die Assets zusammen, erstellt die Jekyll Site, kopiert die `bower-components/normalize-css/normalize.css` in `app/_assets/scss` und benennt sie in `_normalize.scss` um, damit sie von der `main.sass` korrekt importiert werden kann und startet den Entwicklungsserver. Abschließend wird der `watch` Task gestartet.
- `gulp publish` kopiert und optimiert die Assets und startet ein Production-Build von Jekyll.
- `gulp deploy` transferiert die generierten Dateien mit Rsync auf den Server.

## Arbeiten

Die Idee hinter den Jade-Dateien ist, dass die Webseiten wegen der Übersichtlichkeit im Prinzip nur aus Front Matter und Includes bestehen sollen.

Die Includes werden alle mit Jade geschrieben, weil es schneller geht und die Wartung wegen der Übersichtlichkeit viel einfacher wird.

Die Dateien dazu werden im Ordner `app/_jadefiles` gespeichert und dann mit dem Gulp-Task `jade` automatisch in den Ordner `/app/_includes/_jade-converts` als HTML-Dateien kopiert. Diese können dann in den Seiten mit `include` eingebunden werden (siehe Beispiel `index.html`).

Im Ordner `/app/_data` befindet sich neben der Navigation auch eine Beispieldatei `beispiel.yml`. Hier sind individuelle Texte hinterlegt, die mit dem Liquid-Tag abgerufen werden können. Zum Beispiel: `{{ site.data.beispiel.header-title }}`. Dadurch wird die Wartung ebenfalls vereinfacht, weil die Texte in den Data-Dateien übersichtlich sind und einfach geändert werden können.
