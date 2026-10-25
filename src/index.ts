import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Willkommen bei Isabell Stark</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
    body {font-family: 'Inter', sans-serif;}
    /* Custom transition for project description */
    .card-desc {max-height: 0; transition: max-height 0.3s ease-out; overflow: hidden;}
    .group:hover .card-desc {max-height: 20rem;}
  </style>
</head>
<body class="bg-gray-50 text-gray-900 font-sans">
  <!-- Navigation -->
  <nav class="bg-white shadow fixed w-full z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <div class="flex-shrink-0 text-xl font-bold text-blue-800">Isabell Stark</div>
        <div class="hidden md:flex space-x-8">
          <a href="#" class="text-gray-700 hover:text-blue-600 transition">Start</a>
          <a href="#interessen" class="text-gray-700 hover:text-blue-600 transition">Interessen</a>
          <a href="#projekte" class="text-gray-700 hover:text-blue-600 transition">Projekte</a>
          <a href="#kontakt" class="text-gray-700 hover:text-blue-600 transition">Kontakt</a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="pt-24 bg-gradient-to-r from-blue-50 to-white min-h-screen flex items-center">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h1 class="text-5xl md:text-6xl font-extrabold text-blue-800 mb-6">Willkommen bei Isabell Stark</h1>
      <p class="text-lg md:text-xl text-gray-700 mb-8">Ein kurzer Überblick über meine Arbeit und Leidenschaft im Web‑Entwicklungsbereich.</p>
      <a href="#projekte" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Meine Projekte entdecken</a>
    </div>
  </section>

  <!-- Interessen -->
  <section id="interessen" class="max-w-7xl mx-auto px-4 py-12">
    <h2 class="text-3xl font-semibold text-blue-800 mb-8 text-center">Interessen</h2>
    <ul class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Kaffee trinken -->
      <li class="group relative p-6 bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden flex flex-col">
        <h3 class="text-xl font-medium text-gray-800">Kaffee trinken</h3>
        <div class="card-desc mt-2 text-gray-700">
          <p>Ich trinke sehr gerne guten Kaffee – wer denn nicht? Mein Morgen startet immer mit einem Cappuccino aus meiner DeLonghi‑Siebträgermaschine. Diese Siebträgermaschine eignet sich hervorragend, wenn man ins Coffee‑Game einsteigen will. Meine ersten Latte‑Art‑Blumen habe ich damit bereits hinbekommen. Perfekt sind sie noch lange nicht, aber sie lassen sich erkennen – oder nicht?</p>
          <div class="mt-4 grid grid-cols-2 gap-4">
            <div class="bg-gray-200 h-48 w-full rounded"></div>
            <div class="bg-gray-200 h-48 w-full rounded"></div>
          </div>
          <p class="mt-4 font-medium">Café‑Tipps in Frankfurt:</p>
          <ul class="list-disc list-inside">
            <li><a href="https://blanca-coffee.de" class="text-blue-600 hover:underline">Blanca Coffee</a></li>
            <li><a href="https://www.gresso.de" class="text-blue-600 hover:underline">Gresso</a></li>
          </ul>
        </div>
      </li>
      <!-- Sport -->
      <li class="group relative p-6 bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden flex flex-col">
        <h3 class="text-xl font-medium text-gray-800">Sport</h3>
        <div class="card-desc mt-2 text-gray-700">
          <p>Ich habe ca. 18 Jahre lang Handball gespielt und aufgrund von Kreuzbandrissen in beiden Knien aufgehört. Jetzt schaue ich gerne meiner alten Mannschaft und meinen Freunden zu. Zurzeit gehe ich ins Gym und versuche, regelmäßig zu trainieren, aber manchmal fehlt einfach die Motivation. Im Sommer treffe ich mich immer wieder mit Freunden zum Paddeln. Profi in der Sportart werde ich nicht mehr, aber ich habe jede Menge Spaß dabei.</p>
        </div>
      </li>
      <!-- Malen -->
      <li class="group relative p-6 bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden flex flex-col">
        <h3 class="text-xl font-medium text-gray-800">Malen</h3>
        <div class="card-desc mt-2 text-gray-700">
          <p>Ich male sehr gerne – nicht gut, aber gern. Und ich male eigentlich nicht so richtig, sondern Malen nach Zahlen. Denn so kreativ und begabt bin ich nicht, um ein eigenes Bild zu malen. Ich habe es versucht, aber schön war es nicht.</p>
          <div class="mt-4 bg-gray-200 h-48 w-full rounded"></div>
        </div>
      </li>
    </ul>
  </section>

  <!-- Projekte -->
  <section id="projekte" class="max-w-7xl mx-auto px-4 py-12">
    <h2 class="text-3xl font-semibold text-blue-800 mb-8 text-center">Projekte</h2>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <article class="group bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <h3 class="text-xl font-bold text-blue-800 mb-2">Projekt 1</h3>
        <div class="card-desc text-gray-700">
          <p>Kurzbeschreibung des Projektes (Platzhalter). Mehr Details werden beim Hover angezeigt.</p>
        </div>
      </article>
      <article class="group bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <h3 class="text-xl font-bold text-blue-800 mb-2">Projekt 2</h3>
        <div class="card-desc text-gray-700">
          <p>Kurzbeschreibung des Projektes (Platzhalter). Mehr Details werden beim Hover angezeigt.</p>
        </div>
      </article>
      <article class="group bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <h3 class="text-xl font-bold text-blue-800 mb-2">Projekt 3</h3>
        <div class="card-desc text-gray-700">
          <p>Kurzbeschreibung des Projektes (Platzhalter). Mehr Details werden beim Hover angezeigt.</p>
        </div>
      </article>
    </div>
  </section>

  <!-- Kontakt -->
  <section id="kontakt" class="max-w-4xl mx-auto px-4 py-12 text-center">
    <h2 class="text-3xl font-semibold text-blue-800 mb-6">Kontakt</h2>
    <p class="text-gray-700 mb-2">E‑Mail: <span class="text-blue-600">email@example.com</span></p>
    <p class="text-gray-700">Telefon: <span class="text-blue-600">+49 123 456789</span></p>
    <p class="text-gray-700 mt-2"><a href="https://www.linkedin.com/feed/" class="text-blue-600 hover:underline flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 mr-1"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-.028-3.152-1.921-3.152-1.921 0-2.216 1.5-2.216 3.048v5.604h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.562 2.841-1.562 3.039 0 3.6 2 3.6 4.603v5.592z"/></svg>LinkedIn</a></p>
  </section>

  <!-- Footer -->
  <footer class="bg-white py-6 mt-12 shadow-inner">
    <div class="max-w-4xl mx-auto text-center text-gray-500">
      © 2024 Isabell Stark – Alle Rechte vorbehalten.
    </div>
  </footer>
</body>
</html>`)
})

export default app
