/* =========================================================
   MÉCANIQUE DES STRUCTURES
   ENSTP — 2026/2027
   Dr. Assas Taqiyeddine
========================================================= */


/* =========================================================
   DONNÉES DU COURS
========================================================= */

const courseData = {

    s1: [

        {
            id:"CH01",
            title:"Lignes d'influence des structures isostatiques et hyperstatiques",
            short:"Influence Lines",
            icon:"fa-chart-line",

            description:
            "Étude des lignes d'influence des réactions, efforts internes et grandeurs structurales sous charges mobiles.",

            topics:[
                "I.1 Introduction",
                "I.2 Ligne d'influence d'une poutre",
                "I.3 Principe de Müller-Breslau",
                "I.4 Poutres avec système de plancher",
                "I.5 Ligne d'influence des treillis",
                "I.6 Ligne d'influence des portiques",
                "I.7 Applications",
                "I.8 Problèmes et exercices",
                "II. Structures hyperstatiques"
            ],

            objectives:[
                "Comprendre la notion de ligne d'influence.",
                "Construire les lignes d'influence des réactions.",
                "Déterminer les lignes d'influence des efforts internes.",
                "Appliquer le principe de Müller-Breslau.",
                "Analyser l'effet des charges mobiles.",
                "Déterminer les valeurs maximales des sollicitations."
            ]
        },


        {
            id:"CH02",
            title:"Câbles",
            short:"Cables",
            icon:"fa-link",

            description:
            "Analyse des câbles soumis à des charges concentrées et distribuées.",

            topics:[
                "Introduction",
                "Câble soumis à une charge concentrée",
                "Équilibre du câble",
                "Effort horizontal",
                "Flèche du câble",
                "Câble soumis à une charge uniformément répartie",
                "Équation du câble",
                "Applications",
                "Problèmes"
            ],

            objectives:[
                "Identifier les caractéristiques mécaniques d'un câble.",
                "Établir les équations d'équilibre.",
                "Calculer la tension dans le câble.",
                "Déterminer la flèche.",
                "Analyser un câble sous charge concentrée.",
                "Analyser un câble sous charge répartie."
            ]
        },


        {
            id:"CH03",
            title:"Arches",
            short:"Arches",
            icon:"fa-archway",

            description:
            "Analyse des arcs et détermination des réactions et efforts internes.",

            topics:[
                "Introduction aux arcs",
                "Géométrie des arches",
                "Arches à trois articulations",
                "Arches à deux articulations",
                "Réactions d'appui",
                "Effort normal",
                "Effort tranchant",
                "Moment fléchissant",
                "Applications"
            ],

            objectives:[
                "Comprendre le fonctionnement structural d'une arche.",
                "Déterminer les réactions d'appui.",
                "Calculer les sollicitations internes.",
                "Interpréter l'effet de la géométrie.",
                "Résoudre des problèmes pratiques."
            ]
        }

    ],


    s2: [

        {
            id:"CH04",
            title:"Plaques minces élastiques rectangulaires",
            short:"Thin Elastic Plates",
            icon:"fa-border-all",

            description:
            "Étude du comportement élastique des plaques minces rectangulaires.",

            topics:[
                "Introduction",
                "Hypothèses des plaques minces",
                "Équations différentielles",
                "Conditions aux limites",
                "Plaques simplement appuyées",
                "Plaques encastrées",
                "Déformées",
                "Contraintes",
                "Applications numériques"
            ],

            objectives:[
                "Identifier les hypothèses des plaques minces.",
                "Formuler les équations gouvernantes.",
                "Déterminer les conditions aux limites.",
                "Calculer les déplacements.",
                "Déterminer les contraintes."
            ]
        },


        {
            id:"CH05",
            title:"Réseaux de poutres croisées",
            short:"Crossed Beam Network",
            icon:"fa-network-wired",

            description:
            "Analyse des systèmes structuraux constitués de poutres croisées.",

            topics:[
                "Introduction",
                "Modélisation du réseau",
                "Compatibilité des déplacements",
                "Équilibre aux nœuds",
                "Méthodes de calcul",
                "Répartition des charges",
                "Moments fléchissants",
                "Efforts tranchants",
                "Applications"
            ],

            objectives:[
                "Modéliser un réseau de poutres.",
                "Établir les conditions de compatibilité.",
                "Déterminer la répartition des charges.",
                "Calculer les sollicitations.",
                "Interpréter le comportement global."
            ]
        },


        {
            id:"CH06",
            title:"Torsion",
            short:"Torsion",
            icon:"fa-arrows-rotate",

            description:
            "Étude de la torsion des éléments structuraux et détermination des contraintes.",

            topics:[
                "Introduction",
                "Torsion des sections circulaires",
                "Angle de torsion",
                "Contrainte tangentielle",
                "Moment de torsion",
                "Torsion des sections non circulaires",
                "Sections ouvertes",
                "Sections fermées",
                "Applications"
            ],

            objectives:[
                "Comprendre le phénomène de torsion.",
                "Calculer le moment de torsion.",
                "Déterminer les contraintes tangentielles.",
                "Calculer l'angle de torsion.",
                "Analyser différentes géométries."
            ]
        }

    ]

};


/* =========================================================
   ÉTUDIANTS — DONNÉES DE DÉMONSTRATION
========================================================= */

let students = {

    "01":[
        {id:"01-001", name:"Étudiant 01"},
        {id:"01-002", name:"Étudiant 02"},
        {id:"01-003", name:"Étudiant 03"},
        {id:"01-004", name:"Étudiant 04"},
        {id:"01-005", name:"Étudiant 05"},
        {id:"01-006", name:"Étudiant 06"},
        {id:"01-007", name:"Étudiant 07"},
        {id:"01-008", name:"Étudiant 08"},
        {id:"01-009", name:"Étudiant 09"},
        {id:"01-010", name:"Étudiant 10"}
    ],

    "02":[
        {id:"02-001", name:"Étudiant 01"},
        {id:"02-002", name:"Étudiant 02"},
        {id:"02-003", name:"Étudiant 03"},
        {id:"02-004", name:"Étudiant 04"},
        {id:"02-005", name:"Étudiant 05"},
        {id:"02-006", name:"Étudiant 06"},
        {id:"02-007", name:"Étudiant 07"},
        {id:"02-008", name:"Étudiant 08"},
        {id:"02-009", name:"Étudiant 09"},
        {id:"02-010", name:"Étudiant 10"}
    ]

};


/* =========================================================
   VARIABLES
========================================================= */

let currentSemester = "s1";

let attendanceData =
    JSON.parse(
        localStorage.getItem("mds_attendance")
    ) || {};

let gradesData =
    JSON.parse(
        localStorage.getItem("mds_grades")
    ) || {};


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setTimeout(() => {

            document
                .getElementById("loader")
                .classList.add("hidden");

        },700);


        initializeNavigation();

        initializeButtons();

        initializeSemesterSwitchers();

        initializeAttendance();

        initializeGrades();

        initializeSearch();

        initializeNotifications();

        initializeMobileMenu();

        initializeBackTop();

        renderObjectives();

        renderProgramme("s1");

        renderCourses("s1");

        renderVideos("s1");

        renderAttendance();

        renderGrades();

    }
);


/* =========================================================
   NAVIGATION
========================================================= */

function initializeNavigation(){

    document
    .querySelectorAll(".nav-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openPage(
                    button.dataset.page
                );

            }
        );

    });


    document
    .querySelectorAll("[data-page-target]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openPage(
                    button.dataset.pageTarget
                );

            }
        );

    });

}


function openPage(page){

    document
    .querySelectorAll(".page")
    .forEach(section => {

        section.classList.remove("active");

    });


    const target =
        document.getElementById(
            `page-${page}`
        );

    if(target){

        target.classList.add("active");

    }


    document
    .querySelectorAll(".nav-btn")
    .forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.page === page
        );

    });


    document
    .getElementById("navLinks")
    ?.classList.remove("open");


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* =========================================================
   BUTTONS
========================================================= */

function initializeButtons(){

    document
    .querySelectorAll(".course-resource")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                toast(
                    "Le document sera ajouté au dossier correspondant."
                );

            }
        );

    });

}


/* =========================================================
   OBJECTIFS
========================================================= */

function renderObjectives(){

    const container =
        document.getElementById(
            "objectifsContainer"
        );

    if(!container) return;

    let html = "";

    ["s1","s2"].forEach(
        semester => {

            const title =
                semester === "s1"
                ? "Semestre 01"
                : "Semestre 02";

            html += `
                <div class="section-heading compact">
                    <span class="eyebrow">
                        ${title}
                    </span>
                    <h2>
                        Objectifs des chapitres
                    </h2>
                </div>
            `;


            courseData[semester]
            .forEach(chapter => {

                html += `
                <article class="chapter-card">

                    <div class="chapter-header">

                        <div class="chapter-number">
                            ${chapter.id.replace("CH","")}
                        </div>

                        <div>

                            <h3>
                                ${chapter.title}
                            </h3>

                            <p>
                                ${chapter.description}
                            </p>

                        </div>

                    </div>

                    <div class="chapter-body">

                        <ul class="chapter-list">

                            ${chapter.objectives.map(
                                objective => `
                                <li>
                                    ${objective}
                                </li>
                                `
                            ).join("")}

                        </ul>

                    </div>

                </article>
                `;

            });

        }
    );


    container.innerHTML = html;

}


/* =========================================================
   PROGRAMME
========================================================= */

function renderProgramme(semester){

    const container =
        document.getElementById(
            "programmeContainer"
        );

    if(!container) return;

    let html = "";

    courseData[semester]
    .forEach(chapter => {

        html += `

        <article class="chapter-card">

            <div class="chapter-header">

                <div class="chapter-number">

                    ${chapter.id.replace("CH","")}

                </div>

                <div>

                    <h3>
                        ${chapter.title}
                    </h3>

                    <p>
                        ${chapter.description}
                    </p>

                </div>

            </div>


            <div class="chapter-body">

                <ul class="chapter-list">

                    ${chapter.topics.map(
                        topic => `
                        <li>${topic}</li>
                        `
                    ).join("")}

                </ul>

            </div>

        </article>

        `;

    });


    container.innerHTML = html;

}


/* =========================================================
   COURS
========================================================= */

function renderCourses(semester){

    const container =
        document.getElementById(
            "coursContainer"
        );

    if(!container) return;

    container.innerHTML =
        courseData[semester]
        .map(chapter => `

            <article class="course-card">

                <div class="course-card-top">

                    <span>
                        ${chapter.id}
                    </span>

                    <h3>
                        ${chapter.short}
                    </h3>

                </div>

                <div class="course-card-body">

                    <p>
                        ${chapter.description}
                    </p>


                    <button
                    class="course-resource"
                    onclick="openResource('${chapter.id}','web')">

                        <i class="fa-solid fa-globe"></i>

                        <span>
                            Cours Web
                        </span>

                    </button>


                    <button
                    class="course-resource"
                    onclick="openResource('${chapter.id}','pdf')">

                        <i class="fa-solid fa-file-pdf"></i>

                        <span>
                            Cours PDF
                        </span>

                    </button>


                    <button
                    class="course-resource"
                    onclick="openResource('${chapter.id}','td')">

                        <i class="fa-solid fa-pen-ruler"></i>

                        <span>
                            TD
                        </span>

                    </button>


                    <button
                    class="course-resource"
                    onclick="openResource('${chapter.id}','application')">

                        <i class="fa-solid fa-calculator"></i>

                        <span>
                            Application
                        </span>

                    </button>

                </div>

            </article>

        `)
        .join("");

}


/* =========================================================
   RESSOURCES
========================================================= */

function openResource(chapter,type){

    const labels = {

        web:"Cours Web",

        pdf:"Cours PDF",

        td:"Travaux dirigés",

        application:"Application"

    };


    toast(
        `${labels[type]} — ${chapter}`
    );

}


/* =========================================================
   VIDEOS
========================================================= */

function renderVideos(semester){

    const container =
        document.getElementById(
            "videosContainer"
        );

    if(!container) return;


    container.innerHTML =
        courseData[semester]
        .map(chapter => `

            <article class="video-card">

                <div class="video-thumb">

                    <i class="fa-solid ${chapter.icon}"></i>

                </div>

                <div class="video-body">

                    <span>
                        ${chapter.id}
                    </span>

                    <h3>
                        ${chapter.short}
                    </h3>

                    <p>
                        Tutoriels et démonstrations
                        pédagogiques.
                    </p>

                    <br>

                    <button
                    class="btn primary"
                    onclick="openVideo('${chapter.short}')">

                        <i class="fa-brands fa-youtube"></i>

                        Voir les vidéos

                    </button>

                </div>

            </article>

        `)
        .join("");

}


function openVideo(title){

    const query =
        encodeURIComponent(
            `Mécanique des Structures ${title}`
        );

    window.open(
        `https://www.youtube.com/results?search_query=${query}`,
        "_blank"
    );

}


/* =========================================================
   SEMESTER SWITCHERS
========================================================= */

function initializeSemesterSwitchers(){

    document
    .querySelectorAll(".semester-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                .querySelectorAll(".semester-btn")
                .forEach(b =>
                    b.classList.remove("active")
                );

                button.classList.add("active");

                currentSemester =
                    button.dataset.semester;

                renderProgramme(
                    currentSemester
                );

            }
        );

    });


    document
    .querySelectorAll(".course-semester-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                .querySelectorAll(".course-semester-btn")
                .forEach(b =>
                    b.classList.remove("active")
                );

                button.classList.add("active");

                renderCourses(
                    button.dataset.semester
                );

            }
        );

    });


    document
    .querySelectorAll(".video-semester-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                .querySelectorAll(".video-semester-btn")
                .forEach(b =>
                    b.classList.remove("active")
                );

                button.classList.add("active");

                renderVideos(
                    button.dataset.semester
                );

            }
        );

    });

}


/* =========================================================
   ATTENDANCE
========================================================= */

function initializeAttendance(){

    document
    .getElementById("loadAttendance")
    ?.addEventListener(
        "click",
        renderAttendance
    );


    document
    .getElementById("studentSearch")
    ?.addEventListener(
        "input",
        renderAttendance
    );


    document
    .getElementById("allPresent")
    ?.addEventListener(
        "click",
        () =>
            setAllAttendance("present")
    );


    document
    .getElementById("allAbsent")
    ?.addEventListener(
        "click",
        () =>
            setAllAttendance("absent")
    );


    document
    .getElementById("allJustified")
    ?.addEventListener(
        "click",
        () =>
            setAllAttendance("justified")
    );


    document
    .getElementById("printAttendance")
    ?.addEventListener(
        "click",
        printAttendance
    );


    document
    .getElementById("exportAttendance")
    ?.addEventListener(
        "click",
        exportAttendance
    );


    document
    .getElementById("studentImport")
    ?.addEventListener(
        "change",
        importStudents
    );

}


function attendanceKey(){

    const group =
        document.getElementById(
            "attendanceGroup"
        ).value;

    const date =
        document.getElementById(
            "attendanceDate"
        ).value;

    return `${group}_${date}`;

}


function renderAttendance(){

    const group =
        document.getElementById(
            "attendanceGroup"
        )?.value || "01";

    const search =
        document.getElementById(
            "studentSearch"
        )?.value
        .toLowerCase() || "";

    const body =
        document.getElementById(
            "attendanceBody"
        );

    if(!body) return;


    const key =
        attendanceKey();


    if(!attendanceData[key]){
        attendanceData[key] = {};
    }


    const filtered =
        students[group]
        .filter(student =>
            student.name
            .toLowerCase()
            .includes(search)
        );


    body.innerHTML =
        filtered
        .map(
            (student,index) => {

                const status =
                    attendanceData[key][student.id]
                    ?.status || "present";

                const observation =
                    attendanceData[key][student.id]
                    ?.observation || "";


                return `

                <tr>

                    <td>
                        ${index+1}
                    </td>

                    <td>
                        <strong>
                            ${student.name}
                        </strong>
                    </td>

                    <td>
                        ${student.id}
                    </td>

                    <td>

                        <button
                        class="attendance-choice choice-present"
                        onclick="setAttendance('${student.id}','present')">

                            <i class="fa-solid fa-check"></i>

                        </button>

                    </td>

                    <td>

                        <button
                        class="attendance-choice choice-absent"
                        onclick="setAttendance('${student.id}','absent')">

                            <i class="fa-solid fa-xmark"></i>

                        </button>

                    </td>

                    <td>

                        <button
                        class="attendance-choice choice-justified"
                        onclick="setAttendance('${student.id}','justified')">

                            <i class="fa-solid fa-file-circle-check"></i>

                        </button>

                    </td>

                    <td>

                        <input
                        class="observation"
                        value="${observation}"
                        onchange="setObservation('${student.id}',this.value)"
                        placeholder="Observation">

                    </td>

                </tr>

                `;

            }
        )
        .join("");


    updateAttendanceStats();

}


function setAttendance(studentId,status){

    const key =
        attendanceKey();

    if(!attendanceData[key]){
        attendanceData[key] = {};
    }


    attendanceData[key][studentId] = {

        status,

        observation:
            attendanceData[key][studentId]
            ?.observation || ""

    };


    saveAttendance();

    renderAttendance();

}


function setObservation(studentId,value){

    const key =
        attendanceKey();

    if(!attendanceData[key]){
        attendanceData[key] = {};
    }


    if(!attendanceData[key][studentId]){

        attendanceData[key][studentId] = {
            status:"present"
        };

    }


    attendanceData[key][studentId]
        .observation = value;


    saveAttendance();

}


function saveAttendance(){

    localStorage.setItem(
        "mds_attendance",
        JSON.stringify(attendanceData)
    );

}


function setAllAttendance(status){

    const group =
        document.getElementById(
            "attendanceGroup"
        ).value;

    const key =
        attendanceKey();


    if(!attendanceData[key]){
        attendanceData[key] = {};
    }


    students[group].forEach(student => {

        attendanceData[key][student.id] = {

            status,

            observation:
                attendanceData[key][student.id]
                ?.observation || ""

        };

    });


    saveAttendance();

    renderAttendance();

    toast("Présence mise à jour.");

}


function updateAttendanceStats(){

    const group =
        document.getElementById(
            "attendanceGroup"
        )?.value || "01";

    const key =
        attendanceKey();

    const data =
        attendanceData[key] || {};


    let present=0;
    let absent=0;
    let justified=0;


    students[group].forEach(student => {

        const status =
            data[student.id]?.status
            || "present";


        if(status==="present") present++;

        if(status==="absent") absent++;

        if(status==="justified") justified++;

    });


    document.getElementById(
        "totalStudents"
    ).textContent =
        students[group].length;

    document.getElementById(
        "presentStudents"
    ).textContent =
        present;

    document.getElementById(
        "absentStudents"
    ).textContent =
        absent;

    document.getElementById(
        "justifiedStudents"
    ).textContent =
        justified;

}


/* =========================================================
   IMPORT CSV
========================================================= */

function importStudents(event){

    const file =
        event.target.files[0];

    if(!file) return;


    const reader =
        new FileReader();


    reader.onload = function(e){

        const lines =
            e.target.result
            .split(/\r?\n/)
            .filter(Boolean);


        const imported =
            lines
            .slice(1)
            .map(line => {

                const parts =
                    line.split(",");

                return {

                    id:
                        parts[0]?.trim(),

                    name:
                        parts.slice(1)
                        .join(",")
                        .trim()

                };

            })
            .filter(student =>
                student.id &&
                student.name
            );


        const group =
            document.getElementById(
                "attendanceGroup"
            ).value;


        students[group] = imported;

        renderAttendance();

        toast(
            `${imported.length} étudiants importés.`
        );

    };


    reader.readAsText(
        file,
        "UTF-8"
    );

}


/* =========================================================
   EXPORT ATTENDANCE CSV
========================================================= */

function exportAttendance(){

    const group =
        document.getElementById(
            "attendanceGroup"
        ).value;

    const key =
        attendanceKey();


    const rows = [

        [
            "École Nationale Supérieure des Travaux Publics",
            "",
            "",
            ""
        ],

        [
            "المدرسة الوطنية العليا للأشغال العمومية",
            "",
            "",
            ""
        ],

        [
            "HIGHER NATIONAL SCHOOL OF PUBLIC WORKS",
            "",
            "",
            ""
        ],

        [],

        [
            "Mécanique des Structures",
            "Présence",
            document.getElementById(
                "attendanceDate"
            ).value,
            `Groupe ${group}`
        ],

        [
            "Matricule",
            "Nom",
            "Statut",
            "Observation"
        ]

    ];


    students[group].forEach(student => {

        const record =
            attendanceData[key]
            ?. [student.id];

        rows.push([

            student.id,

            student.name,

            record?.status || "present",

            record?.observation || ""

        ]);

    });


    const csv =
        rows
        .map(row =>
            row
            .map(cell =>
                `"${String(cell).replaceAll('"','""')}"`
            )
            .join(";")
        )
        .join("\n");


    const blob =
        new Blob(
            ["\ufeff"+csv],
            {
                type:"text/csv;charset=utf-8;"
            }
        );


    downloadBlob(
        blob,
        `presence-MDS-${group}.csv`
    );


    toast("Fichier de présence exporté.");

}


/* =========================================================
   PRINT ATTENDANCE
========================================================= */

function printAttendance(){

    const group =
        document.getElementById(
            "attendanceGroup"
        ).value;

    const date =
        document.getElementById(
            "attendanceDate"
        ).value;


    const printWindow =
        window.open(
            "",
            "_blank"
        );


    const table =
        document.getElementById(
            "attendanceTable"
        ).outerHTML;


    printWindow.document.write(`

        <!DOCTYPE html>

        <html lang="fr">

        <head>

            <meta charset="UTF-8">

            <title>Présence Mécanique des Structures</title>

            <style>

                body{
                    font-family:Arial;
                    padding:30px;
                }

                h1,h2,p{
                    text-align:center;
                }

                table{
                    width:100%;
                    border-collapse:collapse;
                    margin-top:30px;
                }

                th,td{
                    border:1px solid #777;
                    padding:8px;
                }

                th{
                    background:#0b2d4d;
                    color:white;
                }

            </style>

        </head>

        <body>

            <h1>
                المدرسة الوطنية العليا للأشغال العمومية
            </h1>

            <h2>
                ÉCOLE NATIONALE SUPÉRIEURE DES TRAVAUX PUBLICS
            </h2>

            <p>
                Mécanique des Structures —
                Groupe ${group} —
                ${date}
            </p>

            ${table}

        </body>

        </html>

    `);


    printWindow.document.close();

    printWindow.focus();

    printWindow.print();

}


/* =========================================================
   GRADES
========================================================= */

function initializeGrades(){

    document
    .getElementById("calculateGrades")
    ?.addEventListener(
        "click",
        calculateGrades
    );


    document
    .getElementById("exportGrades")
    ?.addEventListener(
        "click",
        exportGrades
    );


    document
    .getElementById("gradesGroup")
    ?.addEventListener(
        "change",
        renderGrades
    );

}


function renderGrades(){

    const group =
        document.getElementById(
            "gradesGroup"
        )?.value || "01";


    const body =
        document.getElementById(
            "gradesBody"
        );

    if(!body) return;


    body.innerHTML =
        students[group]
        .map(
            (student,index) => {

                const grade =
                    gradesData[
                        `${group}_${student.id}`
                    ] || {};


                return `

                <tr>

                    <td>
                        ${index+1}
                    </td>

                    <td>
                        <strong>
                            ${student.name}
                        </strong>
                    </td>

                    <td>

                        <input
                        class="grade-input"
                        type="number"
                        min="0"
                        max="5"
                        step="0.25"
                        data-id="${student.id}"
                        data-field="absence"
                        value="${grade.absence ?? 5}">

                    </td>

                    <td>

                        <input
                        class="grade-input"
                        type="number"
                        min="0"
                        max="10"
                        step="0.25"
                        data-id="${student.id}"
                        data-field="interrogation"
                        value="${grade.interrogation ?? 0}">

                    </td>

                    <td>

                        <input
                        class="grade-input"
                        type="number"
                        min="0"
                        max="5"
                        step="0.25"
                        data-id="${student.id}"
                        data-field="participation"
                        value="${grade.participation ?? 0}">

                    </td>

                    <td>

                        <input
                        class="grade-input"
                        type="number"
                        min="0"
                        max="5"
                        step="0.25"
                        data-id="${student.id}"
                        data-field="homework"
                        value="${grade.homework ?? 0}">

                    </td>

                    <td class="total-grade">
                        <span
                        id="total-${student.id}">
                        ${grade.total ?? "—"}
                        </span>
                    </td>

                    <td>
                        <span
                        id="remark-${student.id}">
                        ${grade.remark ?? "—"}
                        </span>
                    </td>

                </tr>

                `;

            }
        )
        .join("");

}


function calculateGrades(){

    const group =
        document.getElementById(
            "gradesGroup"
        ).value;


    students[group].forEach(student => {

        const inputs =
            document
            .querySelectorAll(
                `[data-id="${student.id}"]`
            );


        const values = {};

        inputs.forEach(input => {

            values[
                input.dataset.field
            ] =
                Number(input.value) || 0;

        });


        let total =
            values.absence +
            values.interrogation +
            values.participation;


        /*
         Le devoir maison est enregistré séparément.
         Il peut servir à l'évaluation de participation.
        */

        total =
            Math.min(
                20,
                total
            );


        let remark = "À compléter";


        if(total >= 16)
            remark = "Très bien";

        else if(total >= 14)
            remark = "Bien";

        else if(total >= 10)
            remark = "Passable";

        else
            remark = "À améliorer";


        gradesData[
            `${group}_${student.id}`
        ] = {

            ...values,

            total:
                Number(total.toFixed(2)),

            remark

        };


        const totalElement =
            document.getElementById(
                `total-${student.id}`
            );

        const remarkElement =
            document.getElementById(
                `remark-${student.id}`
            );


        if(totalElement)
            totalElement.textContent =
                total.toFixed(2);


        if(remarkElement)
            remarkElement.textContent =
                remark;

    });


    localStorage.setItem(
        "mds_grades",
        JSON.stringify(gradesData)
    );


    toast(
        "Notes calculées et enregistrées."
    );

}


/* =========================================================
   EXPORT NOTES
========================================================= */

function exportGrades(){

    const group =
        document.getElementById(
            "gradesGroup"
        ).value;


    const rows = [

        [
            "École Nationale Supérieure des Travaux Publics"
        ],

        [
            "المدرسة الوطنية العليا للأشغال العمومية"
        ],

        [
            "HIGHER NATIONAL SCHOOL OF PUBLIC WORKS"
        ],

        [],

        [
            "Mécanique des Structures",
            `Groupe ${group}`
        ],

        [
            "Matricule",
            "Nom",
            "Absence /5",
            "Interrogation /10",
            "Participation /5",
            "Devoir maison",
            "Total /20",
            "Observation"
        ]

    ];


    students[group].forEach(student => {

        const grade =
            gradesData[
                `${group}_${student.id}`
            ] || {};


        rows.push([

            student.id,

            student.name,

            grade.absence ?? "",

            grade.interrogation ?? "",

            grade.participation ?? "",

            grade.homework ?? "",

            grade.total ?? "",

            grade.remark ?? ""

        ]);

    });


    const csv =
        rows
        .map(row =>
            row
            .map(cell =>
                `"${String(cell).replaceAll('"','""')}"`
            )
            .join(";")
        )
        .join("\n");


    downloadBlob(

        new Blob(
            ["\ufeff"+csv],
            {
                type:"text/csv;charset=utf-8"
            }
        ),

        `notes-MDS-${group}.csv`

    );


    toast("Notes exportées.");

}


/* =========================================================
   DOWNLOAD
========================================================= */

function downloadBlob(blob,filename){

    const url =
        URL.createObjectURL(blob);

    const a =
        document.createElement("a");

    a.href = url;

    a.download = filename;

    document.body.appendChild(a);

    a.click();

    a.remove();

    URL.revokeObjectURL(url);

}


/* =========================================================
   SEARCH
========================================================= */

function initializeSearch(){

    const overlay =
        document.getElementById(
            "searchOverlay"
        );


    document
    .getElementById("searchButton")
    ?.addEventListener(
        "click",
        () => {

            overlay.classList.add("show");

            document
            .getElementById("searchInput")
            .focus();

        }
    );


    document
    .getElementById("closeSearch")
    ?.addEventListener(
        "click",
        () =>
            overlay.classList.remove("show")
    );


    document
    .getElementById("searchInput")
    ?.addEventListener(
        "input",
        searchPlatform
    );

}


function searchPlatform(){

    const query =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();


    const results =
        document.getElementById(
            "searchResults"
        );


    if(query.length < 2){

        results.innerHTML = `
            <p style="color:#667482;margin-top:20px;">
                Saisissez au moins deux caractères.
            </p>
        `;

        return;

    }


    const found = [];


    ["s1","s2"].forEach(semester => {

        courseData[semester]
        .forEach(chapter => {

            const searchable =
                `
                ${chapter.id}
                ${chapter.title}
                ${chapter.description}
                ${chapter.topics.join(" ")}
                ${chapter.objectives.join(" ")}
                `.toLowerCase();


            if(searchable.includes(query)){

                found.push(chapter);

            }

        });

    });


    if(!found.length){

        results.innerHTML = `
            <p style="margin-top:20px;">
                Aucun résultat trouvé.
            </p>
        `;

        return;

    }


    results.innerHTML =
        found
        .map(chapter => `

            <div
            class="search-result"
            onclick="goToChapter('${chapter.id}')">

                <strong>
                    ${chapter.id} —
                    ${chapter.title}
                </strong>

                <p>
                    ${chapter.description}
                </p>

            </div>

        `)
        .join("");

}


function goToChapter(id){

    document
    .getElementById(
        "searchOverlay"
    )
    .classList.remove("show");


    openPage("programme");


    setTimeout(() => {

        const element =
            [...document.querySelectorAll(
                ".chapter-card"
            )]
            .find(
                card =>
                    card.textContent.includes(id)
            );


        if(element){

            element.scrollIntoView({
                behavior:"smooth",
                block:"center"
            });

        }

    },300);

}


/* =========================================================
   NOTIFICATIONS
========================================================= */

function initializeNotifications(){

    const panel =
        document.getElementById(
            "notificationPanel"
        );


    document
    .getElementById("notificationButton")
    ?.addEventListener(
        "click",
        () =>
            panel.classList.toggle("show")
    );


    document
    .getElementById("closeNotification")
    ?.addEventListener(
        "click",
        () =>
            panel.classList.remove("show")
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

function initializeMobileMenu(){

    document
    .getElementById("mobileMenu")
    ?.addEventListener(
        "click",
        () => {

            document
            .getElementById("navLinks")
            .classList.toggle("open");

        }
    );

}


/* =========================================================
   BACK TO TOP
========================================================= */

function initializeBackTop(){

    const button =
        document.getElementById(
            "backTop"
        );


    window.addEventListener(
        "scroll",
        () => {

            button.classList.toggle(
                "show",
                window.scrollY > 500
            );

        }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        }
    );

}


/* =========================================================
   TOAST
========================================================= */

function toast(message){

    const element =
        document.getElementById(
            "toast"
        );

    const text =
        document.getElementById(
            "toastText"
        );


    text.textContent =
        message;


    element.classList.add(
        "show"
    );


    setTimeout(
        () =>
            element.classList.remove(
                "show"
            ),
        2500
    );

}