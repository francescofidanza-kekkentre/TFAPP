/**
 * Database contenuti per la preparazione al TFA Sostegno — Scuola Secondaria di Secondo Grado
 * Basato sul DM 30 settembre 2011 (Allegato C) e sulle tracce reali dei cicli precedenti (VI, VII, VIII, IX Ciclo)
 */

window.TFA_DATA = {
  topics: [
    {
      id: "normativa",
      title: "Normativa Scolastica e Inclusione",
      shortTitle: "Normativa & PEI",
      badge: "Ambito 1",
      color: "#2563eb",
      description: "Dalla L. 517/77 al D.Lgs. 66/2017 e 96/2019, fino al DI 182/2020 e DM 153/2023: il quadro normativo completo per il secondo grado (PFI, PCTO, tre percorsi didattici).",
      lessons: [
        {
          id: "norm-1",
          title: "Evoluzione storica dell'inclusione: dall'inserimento al modello ICF",
          readTime: "8 min",
          examTarget: "Scritto & Orale",
          keyPoints: [
            "L. 118/1971 (inserimento formale) e Documento Falcucci (1975) che inaugura la filosofia dell'integrazione.",
            "L. 517/1977: abolizione delle classi differenziali e introduzione della figura dell'insegnante specializzato per il sostegno.",
            "Sentenza Corte Costituzionale n. 215/1987: garantisce la piena frequenza della Scuola Secondaria di II Grado agli alunni con disabilità (superando il mero 'sarà facilitata' della L. 118/71).",
            "L. 104/1992: Legge-quadro per l'assistenza, l'integrazione sociale e i diritti delle persone handicappate (artt. 12-16 dedicati al diritto all'istruzione e all'integrazione scolastica).",
            "L. 170/2010 (DSA - Disturbi Specifici di Apprendimento) e Direttiva Ministeriale 27/12/2012 sui BES (Bisogni Educativi Speciali: disabilità, disturbi evolutivi specifici, svantaggio socio-economico, linguistico e culturale).",
            "D.Lgs. 66/2017 modificato dal D.Lgs. 96/2019: adozione del Profilo di Funzionamento su base bio-psico-sociale ICF-CY (OMS), potenziamento del GLO e principio di 'accomodamento ragionevole' (Convenzione ONU 2006 ratificata con L. 18/2009)."
          ],
          content: `
            <h4>1. Il passaggio dall'Inserimento all'Inclusione</h4>
            <p>Per la <strong>Scuola Secondaria di Secondo Grado</strong>, una pietra miliare imprescindibile da citare all'esame scritto e orale è la <strong>Sentenza della Corte Costituzionale n. 215 del 3 giugno 1987</strong>. Prima di questa sentenza, l'art. 28 della L. 118/1971 disponeva soltanto che la frequenza delle scuole superiori fosse "facilitata", non assicurata. La Consulta dichiarò l'illegittimità costituzionale di tale limite, sancendo il diritto pieno e incondizionato degli studenti con disabilità a frequentare gli istituti secondari di secondo grado.</p>
            <h4>2. Il sistema integrato D.Lgs. 66/2017, D.Lgs. 96/2019 e DI 182/2020 (aggiornato dal DM 153/2023)</h4>
            <p>Con la riforma della "Buona Scuola" (L. 107/2015) e i decreti attuativi <strong>D.Lgs. 66/2017</strong> e <strong>D.Lgs. 96/2019</strong>, la scuola italiana adotta ufficialmente il paradigma bio-psico-sociale dell'<strong>ICF (International Classification of Functioning, Disability and Health)</strong> dell'OMS:</p>
            <ul>
              <li><strong>Profilo di Funzionamento (PF):</strong> Sostituisce e ricomprende la Diagnosi Funzionale (DF) e il Profilo Dinamico Funzionale (PDF). È redatto dall'Unità di Valutazione Multidisciplinare (UVM) con la collaborazione dei genitori, di un rappresentante dell'amministrazione scolastica (di norma il docente di sostegno) e, <em>nella secondaria di secondo grado, con la partecipazione diretta dello studente</em> secondo il principio di <strong>autodeterminazione</strong>.</li>
              <li><strong>GLO (Gruppo di Lavoro Operativo per l'inclusione):</strong> Composto dal Consiglio di Classe, genitori, figure specialistiche interne/esterne, UVM e — peculiarità fondamentale del II grado — <strong>dallo studente stesso</strong>. Approva il PEI entro il 31 ottobre, effettua la verifica intermedia e formula la verifica finale entro il 30 giugno con proposta di ore di sostegno e assistenza per l'anno successivo.</li>
              <li><strong>Le 4 Dimensioni del PEI nazionale (DI 182/2020):</strong>
                <ol>
                  <li>Dimensione della <strong>Relazione, dell'Interazione e della Socializzazione</strong>;</li>
                  <li>Dimensione della <strong>Comunicazione e del Linguaggio</strong>;</li>
                  <li>Dimensione dell'<strong>Autonomia e dell'Orientamento</strong>;</li>
                  <li>Dimensione <strong>Cognitiva, Neuropsicologica e dell'Apprendimento</strong>.</li>
                </ol>
              </li>
            </ul>
          `,
          tips: [
            "Nella prova scritta del II grado cita SEMPRE il principio di 'autodeterminazione' dello studente nel GLO (D.Lgs. 96/2019) e la Sentenza Corte Cost. 215/1987: sono due elementi distintivi che i commissari cercano nei compiti per le superiori.",
            "Non confondere mai GLI (Gruppo di Lavoro per l'Inclusione d'istituto, che redige il PAI entro giugno) e GLO (Gruppo di Lavoro Operativo sul singolo alunno, che redige il PEI)."
          ]
        },
        {
          id: "norm-2",
          title: "I 3 Percorsi del PEI nel Secondo Grado, PCTO ed Esame di Stato",
          readTime: "9 min",
          examTarget: "Scritto & Orale",
          keyPoints: [
            "Percorso Ordinario (Sez. 8 PEI): stessi obiettivi della classe (con eventuali strumenti compensativi/tempi aggiuntivi); rilascia il Diploma con pieno valore legale.",
            "Percorso Personalizzato con prove equipollenti (obiettivi minimi riconducibili ai programmi ministeriali): rilascia il Diploma con pieno valore legale (D.Lgs. 62/2017 art. 20).",
            "Percorso Differenziato (non riconducibile ai programmi ministeriali): finalizzato al rilascio dell'Attestato di credito formativo (non del diploma), con possibilità di passaggio al percorso equipollente su delibera del CdC.",
            "Raccordo PEI – PFI (Progetto Formativo Individuale) negli Istituti Professionali (D.Lgs. 61/2017).",
            "Raccordo PEI – PCTO (Percorsi per le Competenze Trasversali e per l'Orientamento) e Progetto di Vita (L. 328/2000 art. 14)."
          ],
          content: `
            <h4>1. Specificità esclusiva del II Grado: i tre regimi didattici del PEI</h4>
            <p>A differenza del primo ciclo (dove la progettazione porta comunque al diploma di licenza conclusiva salvo casi eccezionali di solo attestato), nella <strong>Scuola Secondaria di Secondo Grado</strong> il GLO deve esplicitare nella <strong>Sezione 8 del PEI</strong> quale percorso segue lo studente per ciascuna disciplina:</p>
            <ul>
              <li><strong>Tipo A — Percorso Ordinario:</strong> Lo studente segue la programmazione di classe senza riduzioni degli obiettivi disciplinari; possono essere previste modalità di verifica personalizzate o tempi più lunghi. Titolo finale: <strong>Diploma di Stato</strong>.</li>
              <li><strong>Tipo B — Percorso Personalizzato (con verifiche equipollenti / obiettivi minimi):</strong> I contenuti sono semplificati o ridotti ma <em>globalmente riconducibili</em> ai programmi ministeriali. Le prove equipollenti possono avere modalità diverse (es. strutturate invece che aperte, uso di tecnologie) ma devono accertare un livello culturale e professionale idoneo al rilascio del <strong>Diploma di Stato</strong>.</li>
              <li><strong>Tipo C — Percorso Differenziato:</strong> Gli obiettivi sono tarati sulle potenzialità individuali e non sono riconducibili ai programmi ministeriali. La famiglia deve esserne formalmente informata e ha facoltà di opporsi (in caso di opposizione formale, l'alunno segue il percorso ordinario/equipollente ed è valutato come il resto della classe). Titolo finale: <strong>Attestato di credito formativo</strong> (D.Lgs. 62/2017, art. 20, c. 5), valido come titolo per l'accesso ai centri di formazione professionale o ai servizi lavorativi protetti.</li>
            </ul>
            <h4>2. PCTO e Progetto di Vita</h4>
            <p>Nel secondo grado il PEI deve progettare specificamente il <strong>PCTO (Percorsi per le Competenze Trasversali e per l'Orientamento, ex Alternanza Scuola-Lavoro, L. 145/2018)</strong>. Il PCTO per l'alunno con disabilità (in azienda, presso laboratori interni protetti o in enti del Terzo Settore) costituisce il ponte operativo verso il <strong>Progetto Individuale / Progetto di Vita</strong> (art. 14 L. 328/2000), preparando la transizione all'età adulta ("Dopo di Noi", L. 112/2016).</p>
          `,
          tips: [
            "All'orale chiedono spessissimo: 'Cosa succede se la famiglia rifiuta il PEI differenziato alle superiori?'. Risposta: La famiglia ha diritto di opporsi formalmente; in tal caso lo studente rimane inserito nel percorso ordinario/per obiettivi minimi e viene valutato in base agli standard ministeriali della classe.",
            "Negli Istituti Professionali (D.Lgs. 61/2017) ricorda sempre di citare l'integrazione tra PEI e PFI (Progetto Formativo Individuale), redatto entro il 31 gennaio del primo anno."
          ]
        }
      ]
    },
    {
      id: "psicopedagogia",
      title: "Psicologia dello Sviluppo, Cognitiva e dell'Adolescenza",
      shortTitle: "Psicopedagogia",
      badge: "Ambito 2",
      color: "#7c3aed",
      description: "Teorie dell'apprendimento, sviluppo cognitivo e identitario nell'adolescente (Piaget, Vygotskij, Erikson, Marcia, Bruner, Ausubel, Bandura) e intelligenza (Gardner, Sternberg).",
      lessons: [
        {
          id: "psico-1",
          title: "Lo sviluppo cognitivo e identitario nell'adolescenza (14-19 anni)",
          readTime: "10 min",
          examTarget: "Scritto & Orale",
          keyPoints: [
            "Jean Piaget: Stadio delle operazioni formali (11-12+ anni), pensiero ipotetico-deduttivo, astrazione e combinatoria.",
            "Lev Vygotskij: Zona di Sviluppo Prossimale (ZSP), mediazione storico-culturale, linguaggio interiore e ruolo dello Scaffolding (Wood, Bruner, Ross 1976).",
            "Erik Erikson: V stadio psicosociale ('Identità vs Confusione/Diffusione di ruoli') tipico dell'adolescenza.",
            "James Marcia: I 4 stati dell'identità adolescenziale (Acquisita, Moratoria, Bloccata/Foreclosure, Diffusa) basati su esplorazione e impegno.",
            "Jerome Bruner: Rappresentazione esecutiva, iconica e simbolica; pensiero paradigmatico (logico-scientifico) vs pensiero narrativo; curricolo a spirale.",
            "David Ausubel: Apprendimento significativo vs meccanico, organizzatori anticipati (advance organizers) e mappe concettuali di Novak."
          ],
          content: `
            <h4>1. Il pensiero adolescenziale tra Piaget, Vygotskij e Bruner</h4>
            <p>Gli studenti della secondaria di secondo grado attraversano la fase cruciale dell'<strong>adolescenza</strong>. Dal punto di vista cognitivo, secondo <strong>Jean Piaget</strong>, l'adolescente accede allo <strong>stadio operatorio formale</strong>: è capace di ragionare per ipotesi (pensiero ipotetico-deduttivo, "se... allora"), di operare su proposizioni astratte senza bisogno di un ancoraggio concreto immediato e di riflettere sul proprio stesso pensiero (metacognizione).</p>
            <p>Con gli studenti con disabilità intellettiva nella scuola superiore, dove il pensiero astratto può risultare compromesso, diventa fondamentale applicare la <strong>Zona di Sviluppo Prossimale (ZSP) di Lev Vygotskij</strong> e la tripartizione dei sistemi di rappresentazione di <strong>Jerome Bruner</strong> (<em>esecutivo, iconico, simbolico</em>): quando il codice simbolico/astratto (es. una formula algebrica o un concetto filosofico) è inaccessibile, il docente di sostegno costruisce uno <strong>scaffolding</strong> che passa per mediatori iconici (schemi, video, mappe) ed esecutivi/attivi (laboratorio, realtà aumentata, manipolazione).</p>
            <h4>2. Compiti evolutivi e costruzione dell'Identità (Erikson, Marcia, Havighurst)</h4>
            <ul>
              <li><strong>Erik Erikson (Teoria dello sviluppo psicosociale):</strong> Il quinto stadio (12-18 anni) è dominato dal conflitto <em>Identità vs Diffusione di identità</em>. La virtù emergente è la <strong>fedeltà</strong> (ai propri valori e progetti). L'integrazione nel gruppo dei pari è prioritaria rispetto all'approvazione dell'adulto.</li>
              <li><strong>James Marcia (Stati dell'Identità):</strong> Incrociando le dimensioni di <em>esplorazione</em> (delle alternative) e <em>impegno</em> (scelta), individua 4 stati: <strong>Identità realizzata/acquisita</strong> (esplorazione + impegno), <strong>Moratoria</strong> (esplorazione in corso senza impegno definitivo), <strong>Blocco dell'identità / Foreclosure</strong> (impegno assunto passivamente dalle figure genitoriali senza esplorazione), <strong>Diffusione dell'identità</strong> (né esplorazione né impegno).</li>
              <li><strong>Albert Bandura:</strong> Concetto di <strong>Autoefficacia percepita (Self-efficacy)</strong>, determinismo triadico reciproco (persona, comportamento, ambiente) e apprendimento vicario/per modellamento (<em>modeling</em>).</li>
            </ul>
          `,
          tips: [
            "Nelle tracce scritte sul 'gruppo dei pari' o sulla 'demotivazione scolastica nel biennio delle superiori', collega sempre il senso di Autoefficacia di Bandura, lo stile di attribuzione causale (Weiner: locus of control interno/esterno) e la crisi d'identità di Erikson/Marcia.",
            "Cita sempre Ausubel ('organizzatori anticipati') e Novak ('mappe concettuali') quando spieghi come adattare una lezione frontale complessa di storia, diritto o scienze per la classe."
          ]
        },
        {
          id: "psico-2",
          title: "Teorie dell'Intelligenza, Stili Cognitivi e Metacognizione",
          readTime: "8 min",
          examTarget: "Preselettiva & Scritto",
          keyPoints: [
            "Howard Gardner: Teoria delle Intelligenze Multiple (Frames of Mind, 1983) — 9 forme (linguistica, logico-matematica, spaziale, corporeo-cinestetica, musicale, interpersonale, intrapersonale, naturalistica, esistenziale).",
            "Robert J. Sternberg: Teoria Triarchica dell'intelligenza (analitica/componenziale, creativa/esperienziale, pratica/contestuale).",
            "Joy Paul Guilford: Pensiero convergente (una sola risposta corretta) vs Pensiero divergente (fluidità, flessibilità, originalità, elaborazione).",
            "Edward De Bono: Pensiero laterale e tecnica dei 'Sei cappelli per pensare' (bianco, rosso, nero, giallo, verde, blu).",
            "John H. Flavell e Cesare Cornoldi: Didattica metacognitiva (conoscenza metacognitiva + processi di controllo ed autoregolazione)."
          ],
          content: `
            <h4>1. Valorizzare i talenti diversi nella scuola superiore: Gardner e Sternberg</h4>
            <p>La scuola secondaria di secondo grado tende storicamente a premiare quasi esclusivamente l'intelligenza verbale-linguistica e logico-matematica. Il docente specializzato sul sostegno utilizza la <strong>Teoria delle Intelligenze Multiple di Howard Gardner</strong> per offrire <em>entry points</em> (punti di accesso) plurali ai saperi disciplinari, e la <strong>Teoria Triarchica di Robert Sternberg</strong> per affiancare al pensiero analitico quello pratico-contestuale e creativo.</p>
            <h4>2. I 4 livelli della Didattica Metacognitiva (Cornoldi / Ianes)</h4>
            <p>Un pilastro dei quesiti scritti sul metodo di studio nel II grado è l'approccio metacognitivo articolato su quattro livelli interconnessi:</p>
            <ol>
              <li><strong>Conoscenze sul funzionamento cognitivo generale:</strong> capire come funzionano memoria di lavoro (Baddeley), attenzione selettiva/sostenuta e oblio.</li>
              <li><strong>Autoconsapevolezza del proprio funzionamento cognitivo:</strong> riconoscere il proprio stile cognitivo (globale vs analitico, visuale vs verbale, impulsivo vs riflessivo) e i propri punti di forza/debolezza.</li>
              <li><strong>Uso generalizzato di strategie di autoregolazione cognitiva:</strong> pianificare un compito, monitorare la comprensione in itinere, valutare il risultato.</li>
              <li><strong>Variabili psicologiche ed emotivo-motivazionali sottostanti:</strong> locus of control, autostima, senso di autoefficacia (Bandura) e gestione dell'ansia da prestazione.</li>
            </ol>
          `,
          tips: [
            "I 4 livelli della didattica metacognitiva di Cornoldi/Ianes sono una struttura perfetta per scalettare un saggio breve sulla 'promozione dell'autonomia nello studio nel secondo grado'.",
            "Per i test preselettivi memorizza bene gli abbinamenti autore-concetto: Guilford = pensiero divergente (4 fattori: fluidità, flessibilità, originalità, elaborazione); De Bono = pensiero laterale / 6 cappelli; Sternberg = teoria triarchica; Cattell = intelligenza fluida e cristallizzata."
          ]
        }
      ]
    },
    {
      id: "empatia",
      title: "Empatia, Intelligenza Emotiva e Creatività",
      shortTitle: "Empatia & Emozioni",
      badge: "Ambito 3",
      color: "#db2777",
      description: "Uno dei nuclei fondanti del bando TFA (DM 30/09/2011): Goleman, Salovey & Mayer, Rogers, Hoffman, Baron-Cohen, alfabetizzazione emotiva e gestione dei conflitti.",
      lessons: [
        {
          id: "emp-1",
          title: "Intelligenza Emotiva, Empatia e Relazione Educativa",
          readTime: "9 min",
          examTarget: "Scritto, Orale & Preselettiva",
          keyPoints: [
            "Peter Salovey e John D. Mayer (1990): primi a coniare il costrutto scientifico di 'Intelligenza Emotiva' (percepire, usare, comprendere e gestire le emozioni).",
            "Daniel Goleman (1995): 5 domini dell'Intelligenza Emotiva — Consapevolezza di sé, Padronanza di sé (autocontrollo), Motivazione, Empatia, Abilità sociali.",
            "Martin L. Hoffman: Sviluppo dell'empatia (dal distress empatico globale ed egocentrico fino all'empatia per la condizione di vita dell'altro nell'adolescenza).",
            "Carl Rogers: Terapia/Pedagogia non direttiva centrata sulla persona — i 3 pilastri della relazione d'aiuto: Autenticità/Congruenza, Considerazione positiva incondizionata, Comprensione empatica.",
            "Thomas Gordon: Ascolto attivo, 'Messaggio-Io' (I-message) vs 'Messaggio-Tu' giudicante e le 12 barriere della comunicazione.",
            "Giacomo Rizzolatti: Scoperta dei neuroni specchio (substrato neurobiologico dell'empatia e della comprensione delle intenzioni altrui)."
          ],
          content: `
            <h4>1. Perché Empatia e Intelligenza Emotiva sono al centro della prova scritta TFA</h4>
            <p>L'Allegato C del DM 30 settembre 2011 dedica un intero asse concettuale alle <em>"competenze socio-psico-pedagogiche, all'intelligenza emotiva, all'empatia e al pensiero creativo"</em>. Quasi ogni anno almeno una traccia scritta richiede di coniugare <strong>empatia, inclusione e didattica disciplinare</strong>.</p>
            <h4>2. Autori chiave da padroneggiare per un elaborato da 28-30/30</h4>
            <ul>
              <li><strong>Salovey & Mayer (1990) e Daniel Goleman (1995):</strong> Mentre Salovey e Mayer definiscono l'intelligenza emotiva come abilità cognitiva di elaborazione delle informazioni affettive, Goleman la declina in competenze personali (consapevolezza di sé, autocontrollo, motivazione intrinseca) e competenze sociali (empatia, gestione delle relazioni).</li>
              <li><strong>Norma Feshbach (Modello multidimensionale dell'empatia):</strong> L'empatia richiede 3 componenti: 1) capacità di decodificare gli stati emotivi altrui; 2) capacità di assumere il ruolo e la prospettiva dell'altro (<em>role-taking / perspective-taking</em>, studiato anche da <strong>Robert Selman</strong>); 3) capacità di rispondere affettivamente in modo sintonico.</li>
              <li><strong>Carl Rogers e Thomas Gordon nella classe secondaria:</strong> Con adolescenti oppositivi, demotivati o con disturbi del comportamento, il docente applica l'<strong>ascolto attivo</strong> e il <strong>Messaggio-Io</strong> di Gordon (esprimere i propri sentimenti rispetto al comportamento dello studente senza etichettarne la personalità, evitando le "12 barriere della comunicazione" come ordinare, moraleggiare, ridicolizzare).</li>
              <li><strong>Albert Ellis (Rational-Emotive Behavior Therapy - REBT) e Mario Di Pietro:</strong> L'<strong>Educazione Razionale Emotiva (ERE)</strong> a scuola aiuta gli adolescenti a riconoscere il modello ABC (<em>Activating event, Beliefs/pensieri irrazionali, Consequences emotive</em>) e a ristrutturare le convinzioni disfunzionali.</li>
            </ul>
          `,
          tips: [
            "Se la traccia scritta parla di 'empatia e gestione delle emozioni in classe', cita la triade: Goleman (5 domini), Rogers/Gordon (ascolto attivo e Messaggio-Io) e Di Pietro/Ellis (Educazione Razionale Emotiva - modello ABC).",
            "Ricorda la differenza per la preselettiva: il termine 'Intelligenza Emotiva' fu coniato nel 1990 da Salovey e Mayer, e reso celebre al grande pubblico nel 1995 da Daniel Goleman."
          ]
        }
      ]
    },
    {
      id: "metodologie",
      title: "Metodologie Didattiche Attive, UDL e TIC",
      shortTitle: "Metodologie & TIC",
      badge: "Ambito 4",
      color: "#059669",
      description: "Universal Design for Learning (CAST), Cooperative Learning, Peer Tutoring, Flipped Classroom, Debate, EAS, Didattica laboratoriale e tecnologie assistive.",
      lessons: [
        {
          id: "met-1",
          title: "Universal Design for Learning (UDL) e Metodologie Cooperative nel II Grado",
          readTime: "10 min",
          examTarget: "Scritto & Orale",
          keyPoints: [
            "UDL (Universal Design for Learning - CAST): 3 principi guida — 1) Molteplici mezzi di Rappresentazione (il 'cosa' dell'apprendimento), 2) Molteplici mezzi di Azione ed Espressione (il 'come'), 3) Molteplici mezzi di Coinvolgimento/Engagement (il 'perché').",
            "Cooperative Learning (Johnson & Johnson, Kagan, Slavin, Sharan): 5 pilastri — Interdipendenza positiva, Responsabilità individuale e di gruppo, Interazione costruttiva faccia a faccia, Competenze sociali, Revisione/valutazione di gruppo (group processing).",
            "Jigsaw Classroom (Elliot Aronson): ogni studente diventa 'esperto' di un segmento di contenuto in un gruppo di esperti e poi lo insegna al proprio gruppo base.",
            "Peer Education / Peer Tutoring (Topping): particolarmente efficace tra adolescenti perché sfrutta la simmetria comunicativa tra pari.",
            "Flipped Classroom (Bergmann & Sams) ed EAS - Episodi di Apprendimento Situato (Pier Cesare Rivoltella: fase preparatoria, fase operatoria, fase ristrutturativa con debriefing)."
          ],
          content: `
            <h4>1. Progettare per tutti fin dall'inizio: l'Universal Design for Learning (UDL)</h4>
            <p>Elaborato dal centro di ricerca statunitense <strong>CAST</strong> (ispirandosi all'Universal Design architettonico di Ronald Mace), l'<strong>UDL</strong> supera la logica dell'adattamento "a posteriori" per il singolo alunno con BES, progettando curricoli flessibili lungo <strong>3 direttrici</strong> corrispondenti a tre reti neurali (riconoscimento, strategica, affettiva):</p>
            <ol>
              <li><strong>Fornire molteplici mezzi di rappresentazione:</strong> testo digitale accessibile, mappe visive, podcast, video sottotitolati, glossari multilingue.</li>
              <li><strong>Fornire molteplici mezzi di azione ed espressione:</strong> consentire allo studente di dimostrare quanto appreso tramite elaborati scritti, presentazioni multimediali, artefatti di laboratorio, podcast o mappe interattive.</li>
              <li><strong>Fornire molteplici mezzi di coinvolgimento:</strong> compiti di realtà autentici (Wiggins), scelta autonoma, rubriche trasparenti e feedback formativo immediato.</li>
            </ol>
            <h4>2. Metodologie d'elezione per la Scuola Secondaria di Secondo Grado</h4>
            <ul>
              <li><strong>Jigsaw (Aronson):</strong> Eccellente per storia, letteratura, scienze o diritto: l'alunno con disabilità o DSA prepara il proprio sottotema nel "gruppo di esperti" con il supporto di compagni che studiano la stessa porzione, acquisendo sicurezza prima di tornare nel "gruppo base".</li>
              <li><strong>Debate regolamentato (Avanguardie Educative INDIRE):</strong> Sviluppa argomentazione, pensiero critico, public speaking ed empatia cognitiva (sostenere anche una tesi non propria). Nel gruppo di Debate i ruoli possono essere differenziati (speaker, ricercatore di fonti, fact-checker, timekeeper), garantendo la partecipazione attiva di ogni studente.</li>
              <li><strong>EAS (Episodi di Apprendimento Situato - Rivoltella):</strong> Articolato in 3 momenti: 1) <em>Preparatorio</em> (stimolo iniziale e problem setting a casa/in classe); 2) <em>Operatorio</em> (micro-attività di produzione in piccolo gruppo); 3) <em>Ristrutturativo</em> (debriefing metacognitivo e lezione a posteriori del docente che fissa i concetti chiave).</li>
            </ul>
          `,
          tips: [
            "All'orale, quando ti presentano uno studio di caso pratico ('Studente con spettro autistico ad alto funzionamento o con disabilità intellettiva lieve in una classe terza di un Istituto Tecnico'), proponi SEMPRE una progettazione UDL articolata in un EAS o in un Jigsaw con ruoli definiti, specificando esattamente cosa fa lo studente target e come coopera con i compagni.",
            "Evita di proporre attività in cui l'alunno con disabilità lavora isolato fuori dall'aula con il solo docente di sostegno: la normativa (Linee Guida 2009 e D.Lgs. 66/2017) sancisce che il docente di sostegno è contitolare della classe e promuove la co-progettazione e il co-teaching."
          ]
        }
      ]
    },
    {
      id: "autonomia",
      title: "Autonomia Scolastica, Governance e Valutazione",
      shortTitle: "Governance & PTOF",
      badge: "Ambito 5",
      color: "#d97706",
      description: "DPR 275/1999 (Autonomia), PTOF, RAV, PdM, Organi Collegiali (D.Lgs. 297/94), riforma del secondo ciclo (DPR 87, 88, 89 del 2010 e D.Lgs. 61/2017) e valutazione (D.Lgs. 62/2017).",
      lessons: [
        {
          id: "auto-1",
          title: "Autonomia Scolastica (DPR 275/99), PTOF, SNV e Ordinamenti del II Grado",
          readTime: "9 min",
          examTarget: "Preselettiva, Scritto & Orale",
          keyPoints: [
            "Art. 21 L. 59/1997 (Legge Bassanini) e DPR 275/1999: Regolamento dell'autonomia delle istituzioni scolastiche (autonomia didattica art. 4, organizzativa art. 5, di ricerca/sperimentazione/sviluppo art. 6, reti di scuole art. 7).",
            "Quota di autonomia nei curricoli: nel secondo grado è pari al 20% nel primo biennio, 20% nel secondo biennio e 20% nel quinto anno per i Licei (DPR 89/2010), con ulteriori spazi di flessibilità negli Istituti Tecnici (DPR 88/2010, fino al 30-35%) e Professionali (D.Lgs. 61/2017, fino al 40%).",
            "PTOF (Piano Triennale dell'Offerta Formativa, art. 1 c. 14 L. 107/2015): elaborato dal Collegio dei Docenti sulla base degli indirizzi del Dirigente Scolastico e approvato dal Consiglio di Istituto entro il mese di ottobre precedente al triennio di riferimento.",
            "SNV (Sistema Nazionale di Valutazione, DPR 80/2013): INVALSI, INDIRE e Contingente ispettivo; fasi del ciclo di miglioramento: RAV (Rapporto di Autovalutazione) → PdM (Piano di Miglioramento) → Valutazione esterna → Rendicontazione sociale.",
            "Organi Collegiali (Testo Unico D.Lgs. 297/1994): Consiglio di Classe (nel II grado con 2 genitori e 2 studenti), Collegio dei Docenti, Consiglio di Istituto, Comitato per la valutazione dei docenti (riformato dalla L. 107/2015 c. 129)."
          ],
          content: `
            <h4>1. L'architettura dell'Autonomia Scolastica: dal DPR 275/1999 alla L. 107/2015</h4>
            <p>Il <strong>DPR 275/1999</strong> definisce l'autonomia funzionale delle scuole come garanzia di libertà di insegnamento (art. 33 Cost.) e di successo formativo (art. 1). Le sue tre declinazioni fondamentali da ricordare sono:</p>
            <ul>
              <li><strong>Autonomia didattica (art. 4):</strong> flessibilità delle unità orarie (nel rispetto del monte ore annuo complessivo), articolazione modulare di gruppi di alunni anche provenienti da classi diverse (<em>classi aperte</em>, preziosissime per l'inclusione!), percorsi individualizzati e attività di recupero/potenziamento.</li>
              <li><strong>Autonomia organizzativa (art. 5):</strong> adattamento del calendario scolastico (fermo restando il minimo di 200 giorni di lezione fissato dall'art. 74 del D.Lgs. 297/1994), distribuzione dell'orario su non meno di 5 giorni settimanali, impiego flessibile dei docenti.</li>
              <li><strong>Autonomia di ricerca, sperimentazione e sviluppo (art. 6):</strong> progettazione di innovazioni metodologiche, formazione in servizio, documentazione educativa e scambio di informazioni.</li>
            </ul>
            <h4>2. Gli Ordinamenti della Scuola Secondaria di Secondo Grado</h4>
            <ul>
              <li><strong>Licei (DPR 89/2010):</strong> 6 percorsi (Artistico, Classico, Linguistico, Musicale e Coreutico, Scientifico anche con opzione Scienze Applicate e sezione Sportiva, Scienze Umane anche con opzione Economico-Sociale), a cui si è aggiunto il <em>Liceo del Made in Italy</em> (L. 206/2023). Orario strutturato in due bienni e un quinto anno.</li>
              <li><strong>Istituti Tecnici (DPR 88/2010):</strong> 2 settori (Economico con 2 indirizzi; Tecnologico con 9 indirizzi), 1056 ore annue (32 ore settimanali).</li>
              <li><strong>Istituti Professionali (D.Lgs. 61/2017):</strong> 11 indirizzi di studio, organizzati in un <em>biennio unitario</em> (2112 ore complessive) e un <em>triennio</em> articolato in terzo, quarto e quinto anno (1056 ore per anno), con forte personalizzazione tramite il <strong>PFI (Progetto Formativo Individuale)</strong> e le Unità di Apprendimento (UdA).</li>
            </ul>
          `,
          tips: [
            "Chi elabora e chi approva il PTOF? È una delle domande più ricorrenti sia nella preselettiva sia all'orale: il Dirigente Scolastico emana l'Atto di indirizzo → il Collegio dei Docenti ELABORA il PTOF → il Consiglio di Istituto APPROVA il PTOF.",
            "Ricorda la composizione del Consiglio di Classe nella Secondaria di II Grado (D.Lgs. 297/94 art. 5): tutti i docenti della classe (incluso a pieno titolo il docente di sostegno, contitolare con diritto di voto per tutti gli alunni della classe), 2 rappresentanti dei genitori e 2 rappresentanti degli studenti."
          ]
        }
      ]
    },
    {
      id: "guida-prove",
      title: "Strategie per Prova Scritta e Prova Orale",
      shortTitle: "Guida Scritta & Orale",
      badge: "Coaching Esame",
      color: "#0284c7",
      description: "Come impostare una traccia aperta in 15-25 righe per la prova scritta e come strutturare la lezione simulata o lo studio di caso alla prova orale per massimizzare il punteggio.",
      lessons: [
        {
          id: "guida-1",
          title: "Metodo in 5 step per la Prova Scritta (Quesiti a risposta aperta / Saggio breve)",
          readTime: "7 min",
          examTarget: "Strategia Prova Scritta",
          keyPoints: [
            "Analisi dei 4 criteri di valutazione usati dalle commissioni universitarie: 1) Pertinenza alla traccia, 2) Rigore teorico e normativo, 3) Capacità di sintesi e argomentazione critica, 4) Riferimento operativo al grado di scuola (Secondaria di II Grado).",
            "Struttura aurea in 4 paragrafi: Inquadramento teorico-normativo → Autori e costrutti psicopedagogici → Declinazione metodologico-didattica nel II grado → Conclusione sull'inclusione e sul ruolo del docente di sostegno.",
            "Uso del lessico specialistico (ICF, accomodamento ragionevole, autodeterminazione, scaffolding, UDL, corresponsabilità educativa, co-teaching, Progetto di Vita)."
          ],
          content: `
            <h4>La Formula in 4 Paragrafi (15-25 righe) per ogni quesito aperto</h4>
            <p>Nelle prove scritte del TFA Sostegno (che variano da ateneo ad ateneo da 1 saggio breve a 3-5 quesiti a risposta aperta sintetica con limite di righe), la commissione ha pochi minuti per correggere ciascun elaborato. Usa sempre questa architettura cristallina:</p>
            <ol>
              <li><strong>Paragrafo 1 — Cornice Normativa e Definizione (3-4 righe):</strong> Definisci subito il concetto richiesto dalla traccia ancorandolo alla norma di riferimento (es. <em>"Alla luce del D.Lgs. 66/2017, modificato dal D.Lgs. 96/2019, e della prospettiva bio-psico-sociale ICF..."</em> oppure <em>"Nel quadro dell'autonomia didattica ex DPR 275/1999..."</em>).</li>
              <li><strong>Paragrafo 2 — Fondamento Psicopedagogico con Autori (5-6 righe):</strong> Cita almeno 2-3 autori pertinenti con il nome esatto del loro costrutto (es. Vygotskij per la ZSP, Bruner per lo scaffolding, Goleman/Salovey & Mayer per l'intelligenza emotiva, Bandura per l'autoefficacia, Gardner per le intelligenze multiple).</li>
              <li><strong>Paragrafo 3 — Calata Didattica nella Secondaria di II Grado (5-6 righe):</strong> È il paragrafo che fa la differenza tra un 21/30 e un 29/30! Mostra come quel concetto si applica concretamente con adolescenti di 14-19 anni (es. cooperative learning Jigsaw, Debate, Flipped Classroom, EAS, raccordo con il PCTO e il PFI, coinvolgimento attivo nel GLO).</li>
              <li><strong>Paragrafo 4 — Chiusura sul Ruolo del Docente Specializzato (2-3 righe):</strong> Concludi richiamando la funzione del docente di sostegno come <em>"risorsa per l'intera classe e regista dell'inclusione"</em> in ottica di corresponsabilità educativa e Progetto di Vita (art. 14 L. 328/2000).</li>
            </ol>
          `,
          tips: [
            "Non scrivere mai elenchi puntati scarni nella prova scritta: usa connettivi logici eleganti ('In tale cornice normativa...', 'Sul versante psicopedagogico...', 'Declinando tali premesse nel contesto della scuola secondaria di secondo grado...').",
            "Evita espressioni superate come 'alunno diversamente abile', 'portatore di handicap' o 'programmi ministeriali': usa sempre 'studente con disabilità' (Convenzione ONU 2006) e 'Indicazioni nazionali / Linee guida ordinamentali'."
          ]
        },
        {
          id: "guida-2",
          title: "Come superare la Prova Orale: Studio di Caso e Motivazione Professionale",
          readTime: "8 min",
          examTarget: "Strategia Prova Orale",
          keyPoints: [
            "Struttura tipica del colloquio orale: 1) Domanda teorico-normativa o psicopedagogica, 2) Risoluzione di uno studio di caso / progettazione didattica inclusiva, 3) Motivazione e ruolo del docente di sostegno.",
            "Griglia mentale in 6 punti per risolvere qualsiasi Studio di Caso all'orale in 5 minuti.",
            "Come gestire le criticità con il Consiglio di Classe o con la famiglia senza mai porsi in contrapposizione ma attivando mediazione e collegialità."
          ],
          content: `
            <h4>Come rispondere a uno "Studio di Caso" alla Prova Orale</h4>
            <p>Quando la commissione ti propone un caso (es. <em>"In una classe II di un Istituto Tecnico c'è uno studente con disturbo oppositivo-provocatorio o autismo che rifiuta di lavorare e il collega curricolare tende a delegarlo a lei fuori dall'aula. Come interviene?"</em>), segui sempre questi <strong>6 passaggi</strong>:</p>
            <ol>
              <li><strong>Osservazione sistematica e lettura del contesto su base ICF:</strong> Consultazione del fascicolo personale (Profilo di Funzionamento, PEI) e osservazione dei <em>fattori ambientali</em> (barriere e facilitatori sensoriali, relazionali e didattici in aula).</li>
              <li><strong>Ascolto attivo e Alleanza con lo studente:</strong> Colloquio empatico non giudicante (Rogers, Gordon) per comprendere i bisogni sottostanti al comportamento-problema (Analisi Funzionale ABC: Antecedenti, Comportamento, Conseguenze) e valorizzarne gli interessi (autodeterminazione).</li>
              <li><strong>Co-progettazione con i docenti curricolari (Corresponsabilità):</strong> Rifiuto garbato ma fermo della delega/esclusione dall'aula; proposta di <em>co-teaching</em> (es. <em>station teaching</em> o <em>team teaching</em>) per progettare un'attività inclusiva per l'intera classe.</li>
              <li><strong>Scelta metodologica e tecnologica (UDL + Metodologia attiva):</strong> Proposta di un'attività cooperativa (es. Cooperative Learning con assegnazione di un ruolo strategico allo studente, Peer Tutoring, laboratorio pratico o gamification con TIC).</li>
              <li><strong>Coinvolgimento della rete (GLO e Famiglia):</strong> Condivisione delle strategie con la famiglia e gli specialisti dell'UVM in sede di GLO per garantire coerenza educativa tra scuola ed extrascuola.</li>
              <li><strong>Valutazione formativa e autovalutazione:</strong> Valutazione coerente con il PEI (D.Lgs. 62/2017 art. 20), attenta ai processi e ai progressi individuali per rafforzare l'autoefficacia (Bandura).</li>
            </ol>
          `,
          tips: [
            "Alla domanda motivazionale ('Perché vuole diventare docente di sostegno nella secondaria di secondo grado?'), evita risposte solo emotivo-vocazionali: evidenzia la volontà di unire rigore metodologico, mediazione didattica e accompagnamento dell'adolescente verso l'autonomia e il Progetto di Vita adulto."
          ]
        }
      ]
    }
  ],

  // Quesiti a scelta multipla (Preselettiva) basati sulle banche dati ufficiali CINECA / Atenei italiani dei cicli precedenti
  quizQuestions: [
    {
      id: "q1",
      topicId: "normativa",
      cycle: "VIII Ciclo — Banca Dati Ufficiale",
      question: "Quale pronuncia della Corte Costituzionale ha sancito il pieno diritto degli alunni con disabilità a frequentare la Scuola Secondaria di Secondo Grado, dichiarando illegittimo il limite del 'sarà facilitata' previsto dall'art. 28 comma 3 della L. 118/1971?",
      options: [
        "La Sentenza della Corte Costituzionale n. 215 del 1987",
        "La Sentenza della Corte Costituzionale n. 80 del 2010",
        "La Sentenza della Corte Costituzionale n. 275 del 2016",
        "La Sentenza della Corte Costituzionale n. 517 del 1977"
      ],
      correctIndex: 0,
      explanation: "La storica Sentenza n. 215/1987 della Corte Costituzionale ha dichiarato l'illegittimità costituzionale dell'art. 28, c. 3, della L. 118/1971 nella parte in cui, in riferimento ai soggetti con disabilità, prevedeva che 'sarà facilitata', anziché disporre che 'è assicurata', la frequenza alle scuole medie superiori."
    },
    {
      id: "q2",
      topicId: "normativa",
      cycle: "IX Ciclo — Prova Preselettiva II Grado",
      question: "Ai sensi del D.Lgs. 66/2017, come modificato dal D.Lgs. 96/2019, e del DI 182/2020, quale specificità caratterizza la composizione e i lavori del GLO nella Scuola Secondaria di Secondo Grado?",
      options: [
        "La partecipazione attiva degli studenti con disabilità, nel rispetto del principio di autodeterminazione",
        "L'assenza dei rappresentanti dell'Unità di Valutazione Multidisciplinare dell'ASL",
        "La presidenza obbligatoria affidata all'insegnante specializzato per il sostegno",
        "L'approvazione del PEI rimessa al solo Consiglio di Istituto"
      ],
      correctIndex: 0,
      explanation: "L'art. 15 c. 10 della L. 104/1992, come novellato dal D.Lgs. 66/2017 e dal D.Lgs. 96/2019, stabilisce espressamente che all'interno del Gruppo di Lavoro Operativo (GLO) 'è assicurata la partecipazione attiva degli studenti con accertata condizione di disabilità in età evolutiva ai fini dell'inclusione scolastica nel rispetto del principio di autodeterminazione'."
    },
    {
      id: "q3",
      topicId: "normativa",
      cycle: "VIII Ciclo — Prova Preselettiva II Grado",
      question: "Nella Scuola Secondaria di Secondo Grado, qualora l'alunno con disabilità segua un PEI differenziato (non riconducibile ai programmi ministeriali), quale titolo viene rilasciato al superamento dell'Esame di Stato ai sensi dell'art. 20 c. 5 del D.Lgs. 62/2017?",
      options: [
        "Un attestato di credito formativo recante gli elementi informativi relativi all'indirizzo e alla durata del corso di studi seguito",
        "Un diploma di istruzione secondaria di secondo grado con menzione del percorso differenziato",
        "Nessun documento ufficiale, ma solo la pagella dell'ultimo anno",
        "Un diploma equipollente valido esclusivamente per i concorsi pubblici"
      ],
      correctIndex: 0,
      explanation: "Ai sensi dell'art. 20, comma 5, del D.Lgs. 62/2017 e del DI 182/2020, agli studenti con disabilità che seguono una progettazione differenziata non riconducibile ai programmi ministeriali non viene rilasciato il diploma, bensì l'attestato di credito formativo."
    },
    {
      id: "q4",
      topicId: "normativa",
      cycle: "VII Ciclo — Banca Dati Ufficiale",
      question: "Secondo il Decreto Interministeriale n. 182/2020 (e successive disposizioni correttive del DM 153/2023), quali sono le quattro dimensioni attorno a cui si articola il modello nazionale di PEI?",
      options: [
        "1) Relazione, interazione e socializzazione; 2) Comunicazione e linguaggio; 3) Autonomia e orientamento; 4) Cognitiva, neuropsicologica e dell'apprendimento",
        "1) Affettiva; 2) Motoria-prassica; 3) Linguistica; 4) Sensoriale",
        "1) Clinica; 2) Riabilitativa; 3) Didattica; 4) Assistenziale",
        "1) Inserimento; 2) Integrazione; 3) Inclusione; 4) Valutazione"
      ],
      correctIndex: 0,
      explanation: "L'art. 8 del DI 182/2020 (confermato dal D.Lgs. 96/2019) individua le 4 dimensioni fondamentali del PEI: Relazione/interazione/socializzazione; Comunicazione e linguaggio; Autonomia e orientamento; Cognitiva, neuropsicologica e dell'apprendimento."
    },
    {
      id: "q5",
      topicId: "normativa",
      cycle: "VIII Ciclo — Prova Preselettiva II Grado",
      question: "Negli Istituti Professionali riformati dal D.Lgs. 61/2017, con quale documento strategico deve raccordarsi il PEI dello studente con disabilità?",
      options: [
        "Con il PFI (Progetto Formativo Individuale), redatto dal Consiglio di Classe entro il 31 gennaio del primo anno",
        "Con il PDF (Profilo Dinamico Funzionale), redatto dal Consiglio di Istituto",
        "Con il PDP (Piano Didattico Personalizzato), redatto dall'ASL",
        "Con il RAV (Rapporto di Autovalutazione) individuale"
      ],
      correctIndex: 0,
      explanation: "Nel nuovo ordinamento degli Istituti Professionali (D.Lgs. 61/2017), per ciascuno studente il Consiglio di Classe redige il PFI (Progetto Formativo Individuale); per gli studenti con disabilità il PEI si raccorda strettamente con il PFI."
    },
    {
      id: "q6",
      topicId: "psicopedagogia",
      cycle: "IX Ciclo — Banca Dati Ufficiale",
      question: "Secondo la teoria dello sviluppo psicosociale di Erik Erikson, quale crisi evolutiva caratterizza specificamente il periodo dell'adolescenza (12-18 anni circa)?",
      options: [
        "Identità vs Confusione/Diffusione di ruoli",
        "Industriosità vs Senso di inferiorità",
        "Intimità vs Isolamento",
        "Iniziativa vs Senso di colpa"
      ],
      correctIndex: 0,
      explanation: "Nel modello epigenetico a 8 stadi di Erik Erikson, il V stadio (adolescenza) vede il confronto tra 'Identità vs Confusione/Diffusione di identità' (o di ruoli), la cui risoluzione positiva conduce alla virtù della fedeltà."
    },
    {
      id: "q7",
      topicId: "psicopedagogia",
      cycle: "VIII Ciclo — Banca Dati Ufficiale",
      question: "Nel modello degli stati dell'identità adolescenziale elaborato da James Marcia, come viene definito lo stato in cui l'adolescente ha assunto un impegno (valori, scelte scolastiche/professionali) mutuandolo dalle figure genitoriali senza aver prima attraversato una fase di esplorazione autonoma?",
      options: [
        "Blocco dell'identità (Identity Foreclosure / Identità preclusa)",
        "Moratoria d'identità (Identity Moratorium)",
        "Diffusione dell'identità (Identity Diffusion)",
        "Identità realizzata (Identity Achievement)"
      ],
      correctIndex: 0,
      explanation: "James Marcia distingue 4 stati incrociando esplorazione e impegno: presenza di impegno senza esplorazione configura il 'Blocco dell'identità' (Foreclosure); esplorazione in corso senza impegno è 'Moratoria'; esplorazione + impegno è 'Identità acquisita'; assenza di entrambi è 'Diffusione'."
    },
    {
      id: "q8",
      topicId: "psicopedagogia",
      cycle: "VII Ciclo — Banca Dati Ufficiale",
      question: "Chi ha introdotto il concetto di 'Scaffolding' (impalcatura di sostegno) in un celebre articolo del 1976 per descrivere il processo attraverso cui l'adulto o un pari più esperto supporta il discente nella risoluzione di un compito oltre le sue capacità attuali?",
      options: [
        "David Wood, Jerome S. Bruner e Gail Ross",
        "Jean Piaget e Bärbel Inhelder",
        "Burrhus F. Skinner e Edward Thorndike",
        "John Bowlby e Mary Ainsworth"
      ],
      correctIndex: 0,
      explanation: "Il termine 'Scaffolding' è stato coniato da Wood, Bruner e Ross nel saggio 'The role of tutoring in problem solving' (1976), sviluppando operativamente l'intuizione vygotskijana della Zona di Sviluppo Prossimale."
    },
    {
      id: "q9",
      topicId: "psicopedagogia",
      cycle: "IX Ciclo — Banca Dati Ufficiale",
      question: "Secondo David Ausubel, affinché si realizzi un 'apprendimento significativo' (e non meramente meccanico), quali condizioni devono verificarsi?",
      options: [
        "Il nuovo contenuto deve essere logicamente significativo e lo studente deve possedere conoscenze pregresse pertinenti (subsumers) ed essere intenzionato a collegarle",
        "Il materiale deve essere appreso tramite ripetizione mnemonica associata a rinforzi positivi intermittenti",
        "Lo studente deve scoprire autonomamente il contenuto senza alcuna guida o strutturazione preliminare da parte del docente",
        "Il compito deve basarsi esclusivamente sulla rappresentazione esecutiva-motoria"
      ],
      correctIndex: 0,
      explanation: "Per Ausubel l'apprendimento è significativo quando la nuova informazione s'innesta nella struttura cognitiva preesistente grazie ai 'concetti integratori' (subsumers), spesso attivati dal docente tramite 'organizzatori anticipati' (advance organizers)."
    },
    {
      id: "q10",
      topicId: "psicopedagogia",
      cycle: "VIII Ciclo — Banca Dati Ufficiale",
      question: "Quali sono i tre tipi di intelligenza che compongono la 'Teoria Triarchica' di Robert J. Sternberg?",
      options: [
        "Intelligenza analitica (componenziale), creativa (esperienziale) e pratica (contestuale)",
        "Intelligenza verbale, spaziale e cinestetica",
        "Intelligenza fluida, cristallizzata ed emotiva",
        "Intelligenza convergente, divergente e laterale"
      ],
      correctIndex: 0,
      explanation: "Nella Teoria Triarchica (Beyond IQ, 1985), Sternberg articola l'intelligenza umana in tre sub-teorie: componenziale (analitica), esperienziale (creativa) e contestuale (pratica)."
    },
    {
      id: "q11",
      topicId: "empatia",
      cycle: "IX Ciclo — Banca Dati Ufficiale",
      question: "Quali studiosi hanno coniato per primi nel 1990 il termine scientifico 'Intelligenza Emotiva' (Emotional Intelligence), definendola come la capacità di monitorare le proprie e le altrui emozioni, differenziarle e usare tali informazioni per guidare il pensiero e l'azione?",
      options: [
        "Peter Salovey e John D. Mayer",
        "Daniel Goleman e Howard Gardner",
        "Paul Ekman e Richard Lazarus",
        "Carl Rogers e Abraham Maslow"
      ],
      correctIndex: 0,
      explanation: "Furono gli psicologi statunitensi Peter Salovey e John D. Mayer a pubblicare nel 1990 l'articolo fondativo 'Emotional Intelligence', mentre Daniel Goleman rese celebre il concetto nel 1995 con il suo bestseller."
    },
    {
      id: "q12",
      topicId: "empatia",
      cycle: "VIII Ciclo — Banca Dati Ufficiale",
      question: "Nel modello di Daniel Goleman (1995), quali sono i cinque domini fondamentali in cui si articola l'Intelligenza Emotiva?",
      options: [
        "Consapevolezza di sé, Padronanza di sé, Motivazione, Empatia, Abilità sociali",
        "Gioia, Tristezza, Rabbia, Paura, Disgusto",
        "Fluidità, Flessibilità, Originalità, Elaborazione, Valutazione",
        "Assimilazione, Accomodamento, Equilibrazione, Astrazione, Socializzazione"
      ],
      correctIndex: 0,
      explanation: "Goleman suddivide le competenze emotive in competenze personali (Consapevolezza di sé, Padronanza di sé/Autocontrollo, Motivazione) e competenze sociali (Empatia, Abilità sociali)."
    },
    {
      id: "q13",
      topicId: "empatia",
      cycle: "VII Ciclo — Banca Dati Ufficiale",
      question: "Secondo Joy Paul Guilford, quali sono i principali fattori che caratterizzano il 'pensiero divergente'?",
      options: [
        "Fluidità, flessibilità, originalità ed elaborazione",
        "Logica deduttiva, velocità di calcolo, memoria a breve termine e precisione",
        "Imitazione, condizionamento operante, rinforzo ed estinzione",
        "Introiezione, proiezione, sublimazione e razionalizzazione"
      ],
      correctIndex: 0,
      explanation: "Per J.P. Guilford il pensiero divergente (creativo) si misura attraverso: Fluidità (quantità di idee prodotte), Flessibilità (capacità di cambiare categoria o prospettiva), Originalità (rarità/novità delle risposte) ed Elaborazione (capacità di sviluppare e arricchire l'idea)."
    },
    {
      id: "q14",
      topicId: "empatia",
      cycle: "VIII Ciclo — Banca Dati Ufficiale",
      question: "Nella tecnica dei 'Sei cappelli per pensare' di Edward De Bono, quale cappello rappresenta la creatività, la generazione di nuove idee alternative e il pensiero laterale?",
      options: [
        "Il cappello verde",
        "Il cappello nero",
        "Il cappello bianco",
        "Il cappello blu"
      ],
      correctIndex: 0,
      explanation: "Nei 6 cappelli di De Bono: Bianco = dati oggettivi/neutralità; Rosso = emozioni/intuizioni; Nero = cautela/criticità; Giallo = ottimismo/vantaggi; Verde = creatività/pensiero laterale; Blu = controllo metacognitivo e regia del processo."
    },
    {
      id: "q15",
      topicId: "empatia",
      cycle: "IX Ciclo — Banca Dati Ufficiale",
      question: "Secondo Thomas Gordon ('Insegnanti efficaci'), quale strategia comunicativa consente al docente di affrontare un comportamento inadeguato dello studente esprimendo il proprio stato d'animo e gli effetti tangibili del comportamento, senza giudicare o colpevolizzare la persona dell'alunno?",
      options: [
        "Il 'Messaggio-Io' (I-message) abbinato all'ascolto attivo",
        "Il 'Messaggio-Tu' direttivo e valutativo",
        "L'uso sistematico delle '12 barriere della comunicazione'",
        "L'applicazione del time-out punitivo immediato"
      ],
      correctIndex: 0,
      explanation: "Thomas Gordon propone il 'Messaggio-Io' (in tre parti: descrizione non valutativa del comportamento, effetto concreto sull'insegnante, stato d'animo provato) in contrapposizione al 'Messaggio-Tu' giudicante che innesca difesa e ribellione nell'adolescente."
    },
    {
      id: "q16",
      topicId: "metodologie",
      cycle: "IX Ciclo — Banca Dati Ufficiale",
      question: "Quali sono i tre principi cardine dell'Universal Design for Learning (UDL) elaborato dal centro di ricerca CAST?",
      options: [
        "Fornire molteplici mezzi di rappresentazione, molteplici mezzi di azione ed espressione, molteplici mezzi di coinvolgimento",
        "Fornire obiettivi minimi, prove equipollenti e tempi aggiuntivi",
        "Fornire lezioni frontali, interrogazioni orali e verifiche sommative standardizzate",
        "Sostituire integralmente i libri di testo con dispositivi individuali e software riabilitativi"
      ],
      correctIndex: 0,
      explanation: "Le Linee Guida UDL del CAST si fondano su tre principi: 1) Molteplici mezzi di Rappresentazione (il 'cosa' dell'apprendimento), 2) Molteplici mezzi di Azione ed Espressione (il 'come'), 3) Molteplici mezzi di Coinvolgimento/Engagement (il 'perché')."
    },
    {
      id: "q17",
      topicId: "metodologie",
      cycle: "VIII Ciclo — Banca Dati Ufficiale",
      question: "Chi ha ideato la metodologia cooperativa della 'Jigsaw Classroom' (classe puzzle), particolarmente efficace per ridurre i conflitti intergruppo e valorizzare il contributo di ciascuno studente?",
      options: [
        "Elliot Aronson",
        "Roger e David Johnson",
        "Spencer Kagan",
        "Burrhus F. Skinner"
      ],
      correctIndex: 0,
      explanation: "Lo psicologo sociale Elliot Aronson ideò nel 1971 ad Austin (Texas) la 'Jigsaw Classroom', in cui il materiale di studio viene frazionato in segmenti e ciascuno studente si forma in un 'gruppo di esperti' prima di insegnare la propria parte al 'gruppo base'."
    },
    {
      id: "q18",
      topicId: "metodologie",
      cycle: "VII Ciclo — Banca Dati Ufficiale",
      question: "Nella metodologia degli EAS (Episodi di Apprendimento Situato) teorizzata da Pier Cesare Rivoltella, quali sono le tre fasi strutturali dell'azione didattica?",
      options: [
        "Fase preparatoria, fase operatoria e fase ristrutturativa",
        "Fase diagnostica, fase espositiva e fase sanzionatoria",
        "Brainstorming, lezione cattedratica e test a crocette",
        "Osservazione, imitazione e rinforzo"
      ],
      correctIndex: 0,
      explanation: "L'EAS di Rivoltella ribalta la lezione tradizionale articolandosi in: 1) Momento preparatorio (situazione stimolo e framework concettuale), 2) Momento operatorio (micro-attività di produzione in gruppo), 3) Momento ristrutturativo (debriefing, riflessione metacognitiva e lezione a posteriori)."
    },
    {
      id: "q19",
      topicId: "autonomia",
      cycle: "IX Ciclo — Banca Dati Ufficiale",
      question: "Ai sensi dell'art. 3 del DPR 275/1999, come sostituito dall'art. 1, comma 14, della Legge 107/2015, qual è l'iter corretto per la predisposizione del PTOF (Piano Triennale dell'Offerta Formativa)?",
      options: [
        "È elaborato dal Collegio dei Docenti sulla base degli indirizzi definiti dal Dirigente Scolastico ed è approvato dal Consiglio di Istituto",
        "È elaborato dal Dirigente Scolastico ed è approvato dal Collegio dei Docenti",
        "È elaborato dal Consiglio di Istituto su proposta del GLI ed è approvato dall'Ufficio Scolastico Regionale",
        "È elaborato dai Consigli di Classe ed è approvato dal Comitato per la valutazione dei docenti"
      ],
      correctIndex: 0,
      explanation: "La L. 107/2015 ha stabilito che il Dirigente Scolastico definisce gli indirizzi per le attività della scuola e delle scelte di gestione, il Collegio dei Docenti ELABORA il PTOF e il Consiglio di Istituto (o di Circolo) lo APPROVA."
    },
    {
      id: "q20",
      topicId: "autonomia",
      cycle: "VIII Ciclo — Banca Dati Ufficiale",
      question: "Ai sensi dell'art. 5 del Testo Unico D.Lgs. 297/1994, come è composta la componente elettiva (genitori e studenti) nei Consigli di Classe della Scuola Secondaria di Secondo Grado?",
      options: [
        "Due rappresentanti dei genitori e due rappresentanti degli studenti",
        "Quattro rappresentanti dei genitori e nessun rappresentante degli studenti",
        "Un solo rappresentante dei genitori e quattro rappresentanti degli studenti",
        "Tre rappresentanti dei genitori e tre rappresentanti del personale ATA"
      ],
      correctIndex: 0,
      explanation: "Nella Scuola Secondaria di Secondo Grado fanno parte del Consiglio di Classe tutti i docenti della classe (inclusi i docenti di sostegno contitolari), 2 rappresentanti eletti dai genitori degli alunni e 2 rappresentanti eletti dagli studenti."
    }
  ],

  // Tracce Ufficiali Prova Scritta (Anni Precedenti) con griglia concettuale, normativa/autori da citare e svolgimento modello
  writtenTraces: [
    {
      id: "w1",
      university: "Traccia Ufficiale VIII Ciclo — Scuola Secondaria di II Grado",
      topicId: "normativa",
      title: "PEI, Autodeterminazione e Progetto di Vita nella Secondaria di II Grado",
      prompt: "Il candidato illustri il ruolo del Piano Educativo Individualizzato (PEI) nella Scuola Secondaria di Secondo Grado alla luce del D.Lgs. 66/2017, del D.Lgs. 96/2019 e del DI 182/2020 (con le modifiche del DM 153/2023), soffermandosi sul principio di autodeterminazione dello studente, sui raccordi con i PCTO e sulla costruzione del Progetto di Vita.",
      requiredElements: [
        "Riferimento al D.Lgs. 66/2017, D.Lgs. 96/2019, DI 182/2020 e DM 153/2023",
        "Modello bio-psico-sociale ICF (OMS) e Profilo di Funzionamento",
        "Partecipazione attiva dello studente al GLO e principio di autodeterminazione",
        "Distinzione tra i 3 percorsi del II grado (Ordinario, Personalizzato/Equipollente, Differenziato)",
        "Raccordo tra PEI, PCTO (L. 145/2018), eventuale PFI (D.Lgs. 61/2017) e Progetto Individuale/di Vita (art. 14 L. 328/2000)"
      ],
      modelAnswer: `Nel quadro normativo ridisegnato dal D.Lgs. 66/2017, integrato dal D.Lgs. 96/2019 e attuato dal DI 182/2020 (come aggiornato dal DM 153/2023), il Piano Educativo Individualizzato (PEI) supera la visione medico-assistenziale per adottare pienamente l'approccio bio-psico-sociale della classificazione ICF dell'OMS. Redatto dal Gruppo di Lavoro Operativo per l'inclusione (GLO) a partire dal Profilo di Funzionamento, il PEI individua obiettivi, strumenti, strategie e criteri di valutazione lungo quattro dimensioni: Relazione/interazione/socializzazione, Comunicazione/linguaggio, Autonomia/orientamento e Dimensione cognitiva, neuropsicologica e dell'apprendimento, rimuovendo le barriere e valorizzando i facilitatori di contesto secondo il principio dell'accomodamento ragionevole (Convenzione ONU 2006, L. 18/2009).

Nella Scuola Secondaria di Secondo Grado, l'innovazione più qualificante introdotta dal D.Lgs. 96/2019 consiste nel riconoscimento del diritto alla partecipazione attiva dello studente con disabilità alle riunioni del GLO, in attuazione del principio di autodeterminazione. L'adolescente non è più mero destinatario passivo dell'intervento educativo, ma co-protagonista consapevole delle scelte che riguardano il proprio percorso formativo, il quale nel secondo ciclo può articolarsi in tre regimi (Sez. 8 del PEI): percorso ordinario, percorso personalizzato con prove equipollenti (entrambi finalizzati al conseguimento del Diploma di Stato ex art. 20 D.Lgs. 62/2017) oppure percorso differenziato, finalizzato al rilascio dell'attestato di credito formativo.

In tale prospettiva evolutiva, come evidenziato dalla Pedagogia Speciale (Pavone, Ianes, Cottini), il PEI del secondo grado si configura come il ponte strategico verso l'età adulta e il Progetto di Vita, integrandosi nel Progetto Individuale ex art. 14 della L. 328/2000. Strumento cardine di questa transizione sono i Percorsi per le Competenze Trasversali e per l'Orientamento (PCTO, L. 145/2018) e, negli Istituti Professionali, il raccordo con il Progetto Formativo Individuale (PFI, D.Lgs. 61/2017): attraverso esperienze laboratoriali autentiche in azienda o nel territorio, il docente specializzato guida il Consiglio di Classe nel promuovere competenze di cittadinanza, autoefficacia (Bandura) e occupabilità, accompagnando il giovane verso una piena inclusione sociale e lavorativa.`
    },
    {
      id: "w2",
      university: "Traccia Ufficiale IX Ciclo — Scuola Secondaria di II Grado",
      topicId: "empatia",
      title: "Empatia, Intelligenza Emotiva e Gestione del Gruppo Classe Adolescenziale",
      prompt: "Il candidato analizzi il rapporto tra empatia, intelligenza emotiva e processi di apprendimento nella Scuola Secondaria di Secondo Grado, illustrando come il docente specializzato sul sostegno possa promuovere un clima di classe inclusivo e prevenire fenomeni di demotivazione, isolamento o disagio relazionale.",
      requiredElements: [
        "Costrutto di Intelligenza Emotiva (Salovey & Mayer 1990; i 5 domini di Goleman 1995)",
        "Multidimensionalità dell'empatia (Hoffman, Feshbach, Rizzolatti)",
        "Relazione d'aiuto e comunicazione efficace (Carl Rogers, Thomas Gordon - ascolto attivo e Messaggio-Io)",
        "Compiti evolutivi dell'adolescenza (Erikson, Marcia) e senso di autoefficacia (Bandura)",
        "Metodologie didattiche attive in classe (Cooperative Learning, Peer Tutoring, Circle Time, Debate)"
      ],
      modelAnswer: `I processi di apprendimento non avvengono mai in un vuoto affettivo: le neuroscienze affettive (Damasio, Immordino-Yang) e la psicologia dell'educazione dimostrano un legame inscindibile tra cognizione ed emozione, sintetizzato da Lucangeli nel principio della "warm cognition". Tale intreccio assume un rilievo cruciale nella Scuola Secondaria di Secondo Grado, dove l'adolescente è impegnato nella costruzione della propria identità (Erikson; Marcia) e vive un'intensa riorganizzazione emotiva e relazionale in cui il riconoscimento da parte del gruppo dei pari risulta determinante.

Sul piano teorico, il costrutto di Intelligenza Emotiva, introdotto da Salovey e Mayer (1990) e sviluppato da Daniel Goleman (1995) nei cinque domini della consapevolezza di sé, padronanza di sé, motivazione, empatia e abilità sociali, offre al docente coordinate essenziali per progettare ambienti di apprendimento inclusivi. Accanto ad esso, l'empatia — intesa nel modello multidimensionale di Feshbach e Hoffman come integrazione tra decodifica emotiva, perspective-taking cognitivo e condivisione affettiva, fondata neurobiologicamente sul sistema dei neuroni specchio (Rizzolatti) — costituisce la competenza cardine della relazione educativa.

Nell'agire quotidiano in classe, il docente specializzato sul sostegno, contitolare del Consiglio di Classe (L. 104/1992; D.Lgs. 66/2017), traduce tali riferimenti adottando la postura non direttiva di Carl Rogers (autenticità, accettazione positiva incondizionata, comprensione empatica) e le tecniche comunicative di Thomas Gordon (ascolto attivo e "Messaggio-Io" non giudicante). Sul versante didattico, per contrastare l'isolamento dello studente con BES e il drop-out motivazionale, il docente promuove metodologie ad alta mediazione sociale come il Cooperative Learning (Johnson & Johnson; Jigsaw di Aronson), il Peer Tutoring, il Circle Time e l'Educazione Razionale Emotiva (Ellis; Di Pietro): pratiche che trasformano la classe in una comunità di pratica accogliente, rafforzando l'autoefficacia percepita (Bandura) e il benessere socio-emotivo di tutti gli studenti.`
    },
    {
      id: "w3",
      university: "Traccia Ufficiale VIII Ciclo — Scuola Secondaria di II Grado",
      topicId: "metodologie",
      title: "Universal Design for Learning (UDL), Metodologie Attive e TIC per l'Inclusione",
      prompt: "In una classe del secondo biennio di un Istituto Secondario di Secondo Grado è inserito uno studente con disabilità intellettiva di grado lieve e difficoltà di astrazione. Il candidato illustri come l'approccio dell'Universal Design for Learning (UDL), integrato con metodologie didattiche attive e Tecnologie dell'Informazione e della Comunicazione (TIC), consenta di progettare un'attività didattica inclusiva insieme ai docenti curricolari.",
      requiredElements: [
        "Passaggio dall'adattamento a posteriori alla progettazione universale (UDL - CAST e i suoi 3 principi)",
        "Riferimento a Vygotskij (ZSP), Bruner (rappresentazione esecutiva, iconica, simbolica e scaffolding) e Ausubel (organizzatori anticipati)",
        "Scelta di metodologie attive (Jigsaw, Flipped Classroom, EAS di Rivoltella, Didattica laboratoriale)",
        "Uso inclusivo e non stigmatizzante delle TIC per tutta la classe",
        "Co-progettazione e co-teaching tra docente di sostegno e docenti curricolari"
      ],
      modelAnswer: `Nel secondo biennio della Scuola Secondaria di Secondo Grado, l'aumento della complessità epistemologica e dell'astrazione concettuale delle discipline rappresenta spesso una barriera per lo studente con disabilità intellettiva lieve. Per superare la logica riduttiva dell'intervento speciale rivolto al singolo alunno isolato dal gruppo, il docente specializzato promuove in seno al Consiglio di Classe una co-progettazione fondata sull'Universal Design for Learning (UDL, elaborato dal CAST) e sul paradigma bio-psico-sociale ICF (D.Lgs. 66/2017 e 96/2019).

Operativamente, i tre principi dell'UDL vengono declinati facendo leva sulla Zona di Sviluppo Prossimale di Vygotskij e sulla pluralità dei codici rappresentativi di Bruner (esecutivo, iconico e simbolico):
1) Molteplici mezzi di rappresentazione: prima della spiegazione, i docenti in co-teaching forniscono a tutta la classe organizzatori anticipati (Ausubel), mappe concettuali multimediali (Novak), infografiche interattive e brevi video sottotitolati secondo la metodologia della Flipped Classroom (Bergmann & Sams), facilitando la decodifica dei concetti astratti tramite mediatori iconici e analogici (Damiano);
2) Molteplici mezzi di coinvolgimento: la classe viene organizzata in un Episodio di Apprendimento Situato (EAS, Rivoltella) con apprendimento cooperativo secondo il modello Jigsaw di Aronson. Lo studente con disabilità assume nel proprio gruppo un ruolo ben definito e valorizzante, supportato da un compagno in Peer Tutoring, sperimentando interdipendenza positiva (Johnson & Johnson) e incremento dell'autoefficacia (Bandura);
3) Molteplici mezzi di azione ed espressione: le TIC (ambienti cloud condivisi, software per mappe e presentazioni digitali, sintesi vocale) vengono impiegate come strumenti ordinari per l'intero gruppo classe, evitando ogni effetto stigmatizzante e consentendo a ciascuno di esprimere gli apprendimenti attraverso un artefatto digitale valutato mediante rubriche autentiche (Wiggins) coerenti con il PEI.`
    },
    {
      id: "w4",
      university: "Traccia Ufficiale VII Ciclo — Scuola Secondaria di II Grado",
      topicId: "autonomia",
      title: "Autonomia Scolastica, Flessibilità Didattica e Governance dell'Inclusione",
      prompt: "Il candidato delinei gli strumenti di flessibilità didattica e organizzativa previsti dal Regolamento dell'Autonomia Scolastica (DPR 275/1999) e dalla Legge 107/2015, evidenziando come essi si connettano con la governance dell'inclusione (PTOF, PAI, GLI, GLO) nella Scuola Secondaria di Secondo Grado.",
      requiredElements: [
        "Art. 21 L. 59/1997 e DPR 275/1999 (autonomia didattica art. 4, organizzativa art. 5, di ricerca art. 6, reti art. 7)",
        "Quote di autonomia e spazi di flessibilità negli ordinamenti del II grado (DPR 87, 88, 89/2010 e D.Lgs. 61/2017)",
        "Il PTOF (L. 107/2015 c. 14) e il Piano per l'Inclusione (PAI, art. 8 D.Lgs. 66/2017)",
        "Articolazione tra GLI d'istituto e GLO di classe (D.Lgs. 66/2017 e 96/2019)",
        "Sistema Nazionale di Valutazione (DPR 80/2013: RAV e Piano di Miglioramento)"
      ],
      modelAnswer: `L'autonomia delle istituzioni scolastiche, introdotta dall'art. 21 della L. 59/1997, regolamentata dal DPR 275/1999 e dotata di rango costituzionale con la riforma dell'art. 117 Cost. (L. Cost. 3/2001), non costituisce un fine meramente burocratico, bensì lo strumento giuridico e pedagogico per garantire la libertà di insegnamento e il successo formativo di ciascuno studente (art. 1 DPR 275/1999).

Nella Scuola Secondaria di Secondo Grado, gli articoli 4, 5 e 6 del DPR 275/1999, unitamente ai regolamenti di riordino del secondo ciclo (DPR 88 e 89/2010 per Tecnici e Licei; D.Lgs. 61/2017 per i Professionali), offrono leve decisive per la personalizzazione inclusiva: l'autonomia didattica consente di modulare i tempi di apprendimento, attivare percorsi per gruppi di livello o di interesse anche a classi aperte, progettare per Unità di Apprendimento interdisciplinari e utilizzare la quota di autonomia (20%) e gli spazi di flessibilità curricolare per laboratori inclusivi e potenziamento; l'autonomia di ricerca (art. 6) e gli accordi di rete (art. 7) sostengono la sperimentazione metodologica e il raccordo con gli enti territoriali.

Tali scelte trovano sintesi progettuale nel Piano Triennale dell'Offerta Formativa (PTOF, art. 1 c. 14 L. 107/2015), elaborato dal Collegio dei Docenti sulla base dell'atto di indirizzo del Dirigente Scolastico e approvato dal Consiglio di Istituto. Parte integrante del PTOF è il Piano per l'Inclusione (PAI, art. 8 D.Lgs. 66/2017), predisposto annualmente entro giugno dal Gruppo di Lavoro per l'Inclusione (GLI) d'istituto. In un circolo virtuoso tra macro-organizzazione e micro-progettazione d'aula presidiata dai singoli GLO, la scuola monitora l'efficacia delle proprie scelte inclusive attraverso il Sistema Nazionale di Valutazione (DPR 80/2013), traducendo gli esiti del Rapporto di Autovalutazione (RAV) in azioni concrete all'interno del Piano di Miglioramento (PdM).`
    }
  ],

  // Scenari Reali di Prova Orale (Studi di Caso + Domande di Commissione)
  oralCases: [
    {
      id: "o1",
      title: "Caso 1 — Rifiuto del sostegno e isolamento in un Istituto Tecnico",
      context: "Classe II di un Istituto Tecnico settore Tecnologico (Indirizzo Informatica). Marco, 15 anni, ha una diagnosi di Disturbo dello Spettro Autistico ad alto funzionamento (Livello 1 DSM-5) e segue una programmazione per obiettivi minimi (prove equipollenti). Rifiuta la vicinanza fisica del docente di sostegno in aula perché teme il giudizio dei compagni ('Non voglio l'insegnante di sostegno vicino a me, non sono stupido'). Alcuni docenti curricolari chiedono al docente di sostegno di portarlo in aula sostegno durante le ore di matematica e informatica.",
      commissionQuestion: "Come interviene nei confronti dello studente, dei colleghi del Consiglio di Classe e del gruppo dei pari per risolvere la situazione nel rispetto della normativa e della pedagogia inclusiva?",
      checklist: [
        {
          step: "1. Accoglienza del bisogno di autodeterminazione e identità (Erikson / D.Lgs. 96/2019)",
          detail: "Legittimare il disagio di Marco: a 15 anni il bisogno di appartenenza al gruppo dei pari (Erikson) è prioritario. L'affiancamento esclusivo one-to-one sul banco è percepito come uno stigma (barriera ambientale in ottica ICF)."
        },
        {
          step: "2. Rifiuto motivato dell'uscita sistematica dall'aula e affermazione della contitolarità",
          detail: "Ricordare con tatto collegiale ai docenti curricolari che il docente di sostegno è assegnato alla classe (L. 104/92 art. 13; Linee Guida 2009) e che portare sistematicamente l'alunno fuori dall'aula lede il diritto all'inclusione."
        },
        {
          step: "3. Cambio di postura in aula: Co-teaching e supporto diffuso",
          detail: "Concordare con i docenti di matematica e informatica modalità di co-teaching ('One teach, one assist' su tutta la classe o 'Station teaching'): il docente di sostegno circola tra tutti i banchi supportando i vari gruppi di lavoro, così Marco riceve aiuto senza sentirsi 'etichettato'."
        },
        {
          step: "4. Valorizzazione del punto di forza (Informatica) tramite Peer Tutoring e Cooperative Learning",
          detail: "Sfruttare le abilità logiche e informatiche di Marco organizzando attività di Pair Programming o Cooperative Learning strutturato in laboratorio, in cui Marco possa assumere il ruolo di tutor/esperto tecnico per i compagni (potenziamento dell'autoefficacia di Bandura)."
        },
        {
          step: "5. Strutturazione visiva e prevedibilità (UDL / TEACCH adattato al II grado)",
          detail: "Fornire anticipatamente a tutta la classe su piattaforma digitale la scaletta della lezione, gli organizzatori anticipati (Ausubel) e le consegne chiare, riducendo l'ansia da imprevisto tipica dello spettro autistico."
        },
        {
          step: "6. Condivisione in sede di GLO con partecipazione dello studente",
          detail: "Coinvolgere Marco nella riunione del GLO (principio di autodeterminazione ex D.Lgs. 96/2019) per concordare insieme a lui e alla famiglia le modalità di supporto che preferisce."
        }
      ]
    },
    {
      id: "o2",
      title: "Caso 2 — Scelta tra PEI Equipollente e PEI Differenziato e opposizione della famiglia",
      context: "Classe III di un Liceo delle Scienze Umane. Sofia, 16 anni, presenta una Disabilità Intellettiva di grado moderato (F71 ICD-10). Nel biennio ha seguito con fatica un percorso per obiettivi minimi, ma all'inizio del terzo anno, con l'introduzione di Filosofia e l'approfondimento teorico delle Scienze Umane, il Consiglio di Classe ritiene opportuno proporre il passaggio a un PEI differenziato. I genitori di Sofia si oppongono fermamente perché desiderano che la figlia consegua il Diploma di Stato.",
      commissionQuestion: "Qual è il quadro normativo applicabile in caso di disaccordo della famiglia sul PEI differenziato e quali strategie di mediazione e progettazione didattica metterebbe in atto?",
      checklist: [
        {
          step: "1. Inquadramento normativo esatto (D.Lgs. 62/2017 art. 20 e DI 182/2020)",
          detail: "Chiarire subito alla commissione la norma: la proposta di PEI differenziato spetta al GLO, ma richiede il consenso della famiglia. Se la famiglia si oppone formalmente al percorso differenziato, la scuola è tenuta a far seguire alla studentessa il percorso ordinario/per obiettivi minimi, ma la valutazione avverrà in base ai criteri riconducibili ai programmi ministeriali."
        },
        {
          step: "2. Ascolto empatico della famiglia (Rogers / Gordon) e superamento del conflitto",
          detail: "Evitare uno scontro burocratico con i genitori: accogliere le loro paure legate al futuro della figlia ('ferita narcisistica' e timore di esclusione) spiegando con chiarezza e trasparenza la differenza tra prove equipollenti e percorso differenziato."
        },
        {
          step: "3. Verifica preliminare di tutti gli accomodamenti ragionevoli (Convenzione ONU)",
          detail: "Prima di arrendersi al differenziato, verificare con il Consiglio di Classe se sono stati davvero attivati tutti i mediatori didattici possibili: traduzione dei concetti filosofici e pedagogici in mappe visive, storie sociali, esempi concreti di vita quotidiana (Bruner: dal simbolico all'iconico ed esecutivo) e prove equipollenti (es. prove strutturate/colloquio guidato con mappe)."
        },
        {
          step: "4. Valorizzazione della reversibilità del percorso differenziato",
          detail: "Se il divario rispetto agli obiettivi minimi risulta effettivamente incolmabile e fonte di frustrazione/ansia per Sofia, rassicurare la famiglia spiegando che il PEI differenziato NON è irreversibile: qualora negli anni successivi la studentessa maturasse le competenze necessarie, il Consiglio di Classe può deliberare il rientro nel percorso equipollente senza esami integrativi."
        },
        {
          step: "5. Progettazione del PCTO e del Progetto di Vita (L. 328/2000)",
          detail: "Mostrare alla famiglia e a Sofia il valore concreto del percorso: progettare un PCTO (es. presso servizi educativi per l'infanzia, biblioteche o cooperative sociali coerenti con il Liceo delle Scienze Umane) che dia senso pratico alle discipline e costruisca reali autonomie per il Progetto di Vita."
        }
      ]
    },
    {
      id: "o3",
      title: "Caso 3 — Studente con Disabilità Motoria, PCTO e Barriere alla Partecipazione",
      context: "Classe IV di un Istituto Professionale per l'Enogastronomia e l'Ospitalità Alberghiera (IPSEOA). Luca, 17 anni, ha una tetraparesi spastica con linguaggio verbale preservato e funzionamento cognitivo nella norma (segue un PEI ordinario/equipollente finalizzato al diploma). La classe deve svolgere 90 ore di PCTO presso strutture ristorative e alberghiere esterne, e alcuni docenti temono che per Luca non sia possibile svolgere lo stage esterno, proponendo di lasciarlo a scuola a fare ricerche al computer.",
      commissionQuestion: "Come progetta un PCTO realmente inclusivo per Luca, raccordando PEI e PFI ed evitando qualsiasi forma di discriminazione indiretta?",
      checklist: [
        {
          step: "1. Principio di non discriminazione e Accomodamento Ragionevole (Convenzione ONU 2006 / D.Lgs. 66/2017)",
          detail: "Lasciare Luca a scuola mentre tutta la classe va in azienda costituirebbe una forma di esclusione. Il diritto al PCTO è pienamente garantito agli studenti con disabilità e va progettato raccordando PEI e PFI (Progetto Formativo Individuale ex D.Lgs. 61/2017)."
        },
        {
          step: "2. Analisi biopsicosociale ICF: distinguere performance e capacità grazie ai facilitatori tecnologici",
          detail: "Luca ha un funzionamento cognitivo e comunicativo integro: la disabilità motoria riguarda l'esecuzione manuale di cucina/sala, ma il profilo professionale dell'Istituto Alberghiero comprende anche l'Accoglienza Turistica, il Front-Office, il Food & Beverage Management, la comunicazione enogastronomica e il controllo qualità."
        },
        {
          step: "3. Co-progettazione con il Tutor scolastico e il Tutor aziendale",
          detail: "Individuare una struttura alberghiera o ristorativa priva di barriere architettoniche e co-progettare con il tutor aziendale mansioni ad alto valore formativo: gestione prenotazioni digitali, progettazione di menù accessibili e multilingue, customer care, gestione social/web marketing della struttura con ausili informatici (puntatore oculare, riconoscimento vocale o tastiera adattata)."
        },
        {
          step: "4. Connessione con la classe: progetto cooperativo integrato",
          detail: "Creare un compito di realtà condiviso per la classe (es. l'ideazione e promozione di un evento enogastronomico inclusivo del territorio) in cui il lavoro di front-office e comunicazione curato da Luca si integri direttamente con il lavoro di cucina e sala dei compagni (interdipendenza positiva)."
        },
        {
          step: "5. Valutazione delle competenze nel colloquio dell'Esame di Stato",
          detail: "Documentare l'esperienza nel portfolio dello studente in vista della relazione sul PCTO da presentare al colloquio dell'Esame di Stato (D.Lgs. 62/2017), valorizzandone l'autonomia e l'orientamento professionale futuro."
        }
      ]
    }
  ]
};
