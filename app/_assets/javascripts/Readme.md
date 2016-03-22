# Verwendung der JavaScript-Dateien

In die Ordner `foot` und `head` können beliebig viele JavaScript-Dateien kopiert werden. Deren Reihenfolge beim Import wird durch die Gulp-Tasks `scriptsFoot` und `scriptsHead` festgelegt.

Die Dateinamen werden in den Tasks in der gewünschten Reihenfolge eingetragen (siehe vorhandene Tasks).

Diese Vorgehensweise ist insbesondere bei der Verwendung des UIKit-Frameworks interessant. Es hat Module und Komponenten, die nicht im Core enthalten sind und bei Bedarf hinzugeladen werden. Jetzt müssen deren JavaScript-Dateien einfach in den Ordner `foot` kopiert und mit dem Task `scriptsFoot` in der richtigen Reihenfolge eingebunden werden.
