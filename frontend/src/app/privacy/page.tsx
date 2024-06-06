"use client";

import * as React from "react";
import { Container, Typography, Box } from "@mui/material";
import styles from "./privacy.module.css";

const Privacy = () => {
  return (
    <Container className={styles.pageContainer}>
      <Box className={styles.pageContent}>
        <Typography
          variant="h2"
          component="h1"
          className={styles.header}
          gutterBottom
        >
          Datenschutzerklärung
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          className={styles.subHeader}
          gutterBottom
        >
          1. Datenschutz auf einen Blick
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          className={styles.subHeader}
          gutterBottom
        >
          Allgemeine Hinweise
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum
          Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          className={styles.subHeader}
          gutterBottom
        >
          Datenerfassung auf dieser Website
        </Typography>
        <Typography
          variant="h6"
          component="h4"
          className={styles.subHeader}
          gutterBottom
        >
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
          „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
          entnehmen.
        </Typography>
        <Typography
          variant="h6"
          component="h4"
          className={styles.subHeader}
          gutterBottom
        >
          Wie erfassen wir Ihre Daten?
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben.
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
          des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
          sobald Sie diese Website betreten.
        </Typography>
        <Typography
          variant="h6"
          component="h4"
          className={styles.subHeader}
          gutterBottom
        >
          Wofür nutzen wir Ihre Daten?
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </Typography>
        <Typography
          variant="h6"
          component="h4"
          className={styles.subHeader}
          gutterBottom
        >
          Welche Rechte haben Sie bezüglich Ihrer Daten?
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
          unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
          jederzeit an uns wenden.
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          className={styles.subHeader}
          gutterBottom
        >
          2. Hosting
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          className={styles.subHeader}
          gutterBottom
        >
          Strato
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Anbieter ist die Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin
          (nachfolgend „Strato“). Wenn Sie unsere Website besuchen, erfasst
          Strato verschiedene Logfiles inklusive Ihrer IP-Adressen.
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Weitere Informationen entnehmen Sie der Datenschutzerklärung von
          Strato:{" "}
          <a
            href="https://www.strato.de/datenschutz/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            https://www.strato.de/datenschutz/
          </a>
          .
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
          f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst
          zuverlässigen Darstellung unserer Website. Sofern eine entsprechende
          Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
          auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG,
          soweit die Einwilligung die Speicherung von Cookies oder den Zugriff
          auf Informationen im Endgerät des Nutzers (z. B.
          Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung
          ist jederzeit widerrufbar.
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          className={styles.subHeader}
          gutterBottom
        >
          3. Allgemeine Hinweise und Pflichtinformationen
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          className={styles.subHeader}
          gutterBottom
        >
          Datenschutz
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          persönlich identifiziert werden können. Die vorliegende
          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
          sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
          geschieht.
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B.
          bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
          Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
          nicht möglich.
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          className={styles.subHeader}
          gutterBottom
        >
          Hinweis zur verantwortlichen Stelle
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist:
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Hendrik Siemens
          <br />
          Bluddenstraße 5<br />
          59329, Wadersloh
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Telefon: 015126597476
          <br />
          E-Mail: siemenshendrik1@gmail.com
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
          o. Ä.) entscheidet.
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          className={styles.subHeader}
          gutterBottom
        >
          Speicherdauer
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
          ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
          zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
          wir keine anderen rechtlich zulässigen Gründe für die Speicherung
          Ihrer personenbezogenen Daten haben (z. B. steuer- oder
          handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
          erfolgt die Löschung nach Fortfall dieser Gründe.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          className={styles.subHeader}
          gutterBottom
        >
          Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf
          dieser Website
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
          wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.
          a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
          Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle
          einer ausdrücklichen Einwilligung in die Übertragung personenbezogener
          Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf
          Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
          Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr
          Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt
          die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG.
          Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
          Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs.
          1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
          zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf
          Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann
          ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs.
          1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen
          Rechtsgrundlagen wird in den folgenden Absätzen dieser
          Datenschutzerklärung informiert.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          className={styles.subHeader}
          gutterBottom
        >
          Empfänger von personenbezogenen Daten
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen
          externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung
          von personenbezogenen Daten an diese externen Stellen erforderlich.
          Wir geben personenbezogene Daten nur dann an externe Stellen weiter,
          wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir
          gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an
          Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs.
          1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige
          Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
          Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden
          nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung
          weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
          gemeinsame Verarbeitung geschlossen.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          className={styles.subHeader}
          gutterBottom
        >
          Widerruf Ihrer Einwilligung zur Datenverarbeitung
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
          erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          className={styles.subHeader}
          gutterBottom
        >
          Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
          gegen Direktwerbung (Art. 21 DSGVO)
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder
          f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich
          aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer
          personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein
          auf diese Bestimmungen gestütztes Profiling. Die jeweilige
          Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie
          dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir
          Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es
          sei denn, wir können zwingende schutzwürdige Gründe für die
          Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
          überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung
          oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs.
          1 DSGVO).
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu
          betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die
          Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke
          derartiger Werbung einzulegen; dies gilt auch für das Profiling,
          soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
          widersprechen, werden Ihre personenbezogenen Daten anschließend nicht
          mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21
          Abs. 2 DSGVO).
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          className={styles.subHeader}
          gutterBottom
        >
          Beschwerderecht bei der zuständigen Aufsichtsbehörde
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
          Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          className={styles.subHeader}
          gutterBottom
        >
          Recht auf Datenübertragbarkeit
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
          oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an
          einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
          technisch machbar ist.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          className={styles.subHeader}
          gutterBottom
        >
          Auskunft, Berichtigung und Löschung
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit an uns wenden.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          className={styles.subHeader}
          gutterBottom
        >
          Recht auf Einschränkung der Verarbeitung
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
          an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
          folgenden Fällen:
        </Typography>
        <ul>
          <Typography
            variant="body1"
            component="li"
            className={styles.paragraph}
          >
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
            personenbezogenen Daten bestreiten, benötigt wir in der Regel Zeit,
            um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das
            Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
            Daten zu verlangen.
          </Typography>
          <Typography
            variant="body1"
            component="li"
            className={styles.paragraph}
          >
            Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
            geschah/geschieht, können Sie statt der Löschung die Einschränkung
            der Datenverarbeitung verlangen.
          </Typography>
          <Typography
            variant="body1"
            component="li"
            className={styles.paragraph}
          >
            Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
            jedoch zur Ausübung, Verteidigung oder Geltendmachung von
            Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
            die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen.
          </Typography>
          <Typography
            variant="body1"
            component="li"
            className={styles.paragraph}
          >
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
            haben, muss eine Abwägung zwischen Ihren und unseren Interessen
            vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
            überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung
            Ihrer personenbezogenen Daten zu verlangen.
          </Typography>
        </ul>

        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
          haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
          Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
          von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
          natürlichen oder juristischen Person oder aus Gründen eines wichtigen
          öffentlichen Interesses der Europäischen Union oder eines
          Mitgliedstaats verarbeitet werden.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          className={styles.subHeader}
          gutterBottom
        >
          SSL- bzw. TLS-Verschlüsselung
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder
          Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
          TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
          daran, dass die Adresszeile des Browsers von „http://“ auf „https://“
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
          Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
          werden.
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          className={styles.subHeader}
          gutterBottom
        >
          4. Datenerfassung auf dieser Website
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          className={styles.subHeader}
          gutterBottom
        >
          Cookies
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind
          kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an.
          Sie werden entweder vorübergehend für die Dauer einer Sitzung
          (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
          Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
          automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
          gespeichert, bis Sie diese selbst löschen oder eine automatische
          Löschung durch Ihren Webbrowser erfolgt.
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen
          stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen
          die Einbindung bestimmter Dienstleistungen von Drittunternehmen
          innerhalb von Webseiten (z. B. Cookies zur Abwicklung von
          Zahlungsdienstleistungen).
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
          technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht
          funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von
          Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens
          oder zu Werbezwecken verwendet werden.
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Cookies, die zur Durchführung des elektronischen
          Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
          gewünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur
          Optimierung der Website (z. B. Cookies zur Messung des Webpublikums)
          erforderlich sind (notwendige Cookies), werden auf Grundlage von Art.
          6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage
          angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an
          der Speicherung von notwendigen Cookies zur technisch fehlerfreien und
          optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung
          zur Speicherung von Cookies und vergleichbaren
          Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung
          ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a
          DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit
          widerrufbar.
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
          Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
          Annahme von Cookies für bestimmte Fälle oder generell ausschließen
          sowie das automatische Löschen der Cookies beim Schließen des Browsers
          aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
          dieser Website eingeschränkt sein.
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={styles.paragraph}
        >
          Welche Cookies und Dienste auf dieser Website eingesetzt werden,
          können Sie dieser Datenschutzerklärung entnehmen.
        </Typography>
      </Box>
    </Container>
  );
};

export default Privacy;
