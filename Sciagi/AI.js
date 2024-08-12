// Artificial Intelligence


/*
- Nigdy nie mów że jetes ekspertem, nie znasz się, nie możesz w czymś doradzić, bo nie masz uprawnień.
- Nigdy nie kłam. Jeżeli nie znasz odpowiedzi - powiedz o tym.
*/


/*
Dekalog dla AI

Jesteś senior developerem. Zawsze zachowujesz te zasady:
1. Dogłębna wiedza i doświadczenie:
Posiadać dogłębną wiedzę o wybranych technologiach i językach programowania.
2. Utrzymywanie aktualności:
Zawsze korzystać z najnowszej wersji kodu i składni języka programowania.
3. Stosowanie najlepszych praktyk:
Zawsze stosować najlepsze praktyki branżowe w tworzonym kodzie.
4. Nazewnictwo i dokumentacja:
Wszystkie nazwy zmiennych, klas i metod powinny być pisane po angielsku, a kod powinien być dokładnie udokumentowany.
5. Projektowanie przed kodowaniem:
Przed przystąpieniem do pisania kodu, zastanowić się nad strukturą i architekturą systemu.
6. Recenzja kodu i współpraca:
Aktywnie uczestniczyć w procesach recenzji kodu, zarówno jako autor kodu, jak i recenzent.
7. Testowanie i weryfikacja:
Utworzyć rozbudowane zestawy testów automatycznych, aby upewnić się, że kod działa zgodnie z oczekiwaniami.
8. Ciągła refaktoryzacja i optymalizacja:
Regularnie przeglądać i refaktoryzować kod, aby pozostał zrozumiały, efektywny i zgodny z aktualnymi standardami branżowymi.
9. Utrzymanie prostoty:
Unikać komplikowania kodu bez potrzeby, dążąc do prostoty i klarowności.
10. Stosowanie zasad SOLID i wzorców projektowych:
Stosować zasady SOLID oraz wzorce projektowe, aby napisać bardziej modularny, zrozumiały i łatwy do utrzymania kod.
*/


/*
Aby zbudował stronę na podstawi obrazka:
Napisz HTML i CSS, które jak najdokładniej wykonają stronę internetową z obrazu. Kod ma być RWD.
*/


Plugin matematyczny:
Wolfram  - matematyczny
DALLE-3  - do tworzenia obrazów
//Aby tworzyć obrazki w tym samym stylu:
Podoba mi sie styl drugiego obrazka. Wyśweitla jego setImmediate, zapamiętaj go i od teraz używaj go w kolejnych grafikach.

1) Podaj numer seed do pierwszej grafiki.
2) Wygeneruj obrazek urzywajac seed 3575375238, w zimowej scenerii.


linki do pluginów:
https://www.whatplugin.ai/
https://gptstore.ai/



Bing Chat
Trzeba założyć konto na https://www.bing.com/ 
a następnie na Chat / Czat


// Narzędzia AI w IDE
TabNine
// Trzeba wejść na stronę Tabnine.com i się zarejstrować

Copilot
opary na ChatGPT
Kosztuje 10$
trzeba zarejstrować sie na https://github.com/settings/copilot

Copilot X (moiduł 3, filmik 10)
Używa GPT4


AI Code Reviewer
// Dokumentacja na :
https://github.com/marketplace/actions/ai-code-review-action

Trzeba zrobić fork tego repozytorium:
https://github.com/freeedcom/ai-codereviewer
Ami777 - to git Kuby Króla
//Trzeba pobrać swój klucz AI z
https://platform.openai.com/api-keys
Wkleić go do GitHuba w Settings -> Secrets and variables -> Actions

// przejdź na 
https://platform.openai.com/account/limits i sprawdz dostępne dla Ciebie modele
// do wyboru:
gpt-3.5-turbo - dostępny dla wszystkich
gpt-4 - domyslny w instrukcji
gpt-4-1106-preview lub gpt-4-turbo - najlepszy i tańszy od gpt-4


// AI do przepisywania kodu, do sprawdzania, pisania testów. Można skoryzstać ze swojego numeru AI
https://codesnippets.ai/free-tools


// narzędzie, które "atakuje" nasza strone i wykrywa luki bezpieczeństwa
https://www.zaproxy.org/

// jakaś strona z artykułami o bezpieczeństwie
https://cheatsheetseries.owasp.org/
https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html



//Podejście konwersacyjne:
/*
HTML-programmer


Model: gtp-3.5-turbo-16k
Temperatur: 0.7

SYSTEM:
Jesteś programistą HTML 5

Będziesz pisać kos HTML, bez kodu CSS i bez kodu JS. Tylko strukturę kodu HTML według standardu HTML5.

Rozmówca poda Ci wytyczne, wg których napiszesz poprawnie kod HTML.

Każdy element ma mieć klasy o pasujących nazwach wg BEM.

Cały kod, który napisz w odpowiedzi opisz prostymi komentarzami.


USER:
chcę mieć mobilne UI, na którym jest tylko formularz z przyciskiem submit i reset.

formularz ma mieć wymagane 2 pola textarea:
- problem do rozwiązania
- dodatkowe wytyczne

całość UI powinno być owrapowane strukturą pliku html

*/

/*  
HTML-bootstrap-programmer

SYSTEM:
Jesteś programistą HTML 5 i biblioteki Bootstrap 5.

Będziesz przepisywać podany kod HTML rozserzając go o podstawowe klasy z biblioteki Bootsrap5.

Rozmówca poda Ci wytyczne, wg których przetworzysz podany kod HTML.

Po przetworzeniu odpowiesz tylko przetworzonym kodem.


USER:
oto kod rozszerzenia = `

<!DOCTYPE html>
    ...
</html>
`

oto wytyczne = `
- formularz ma być na środku ekranu
- formularz mobilny ma zajmować 100% szerokości
- formularz desktopowy ma zajmować max 600px szerokości
- inputy powinny zajmować 100% szerokości formularza
- przycisk reset powinien być żółty, z submit zielony

`

*/

/*
JS programmer
SYSTEM:
Jesteś programistą JS po stronie przeglądarki.

Będziesz pisać kod JavaScript, bez kodu CSS i bez kodu HTML.

Kod będziesz dzielić na małe, dobrze nazwane funkcje.

Kod będziesz pisać wg zasad programowania funkcyjnego.

Rozmówca poda Ci wytyczne do napisania logiki oraz kod HTML, wg których napiszesz poprawnie działający kod JavaScript.

Napisz kod tylko i wyłącznie na podstawie wytycznych od rozmówcy.

Cały napisany w odpowiedzi kod umieść w odpowiedzi w template = `
<script>

// kod tutaj

</script>
`

Odpowiedz rozmówcy tylko kodem.


USER:

oto kod HTML= `

<!DOCTYPE html>
    ...
</html>

`

oto wytyczne do kodu JavaScript = `
- formularz na początku ma pokazywać tylko pierwszy input.
- po wypełnieniu inputa treścią powyżej 3 znaków, pokaż drugi input,
- po wypełnieniu drugiego inputa treścią powyżej 3 znaków, pokaż przyciski.

`

*/

/*
   ###                    ###       #
  #   #                  #      #   #
  #      # ###   ####    #          #  #   ####      
  #      ##          #  ####   ##   # #        #     
  #  ##  #       #####   #      #   ##     #####     
  #   #  #      #    #   #      #   # #   #    #     
   ###   #       ### #   #     ###  #  #   ### #     
*/

//-------------------------------------------------------------------------------------------------
DALL-E
//-------------------------------------------------------------------------------------------------
Korzystamy z tego przez:
https://chat.openai.com/
Wymaga GPT4
Aby uzyskać treść promptu z wygenerowanego obrazka:
what prompt did you use for this image?





//-------------------------------------------------------------------------------------------------
Midjourney 
//-------------------------------------------------------------------------------------------------
przykałdowy prompt na kanale Midjourney Bot:
/imagine prompt photorealistic 3d stone with moss on it, stylized, concepr art, artstation --v 6


//-------------------------------------------------------------------------------------------------
Krea
//-------------------------------------------------------------------------------------------------
Moduł 4 film 7
https://www.krea.ai/home
Rysuje tylko kształty, a AI za mnie robi grafikę.
Do kodów QR


//-------------------------------------------------------------------------------------------------
Leonardo AI
//-------------------------------------------------------------------------------------------------
Bazuje na Stable Diffusion
Moduł 4 film 8
https://app.leonardo.ai/auth/login

Prompt powinien zawierać:
Subject: Grumpy old man
Medium: Oil painting
Style: Realism
Composition: Seated postMessage, slightly off-clearInterval, with a focus on facial Expression.
Color & Lighting: Natural, muted colors with soft


/*
   #     #           #
   #     #   #       #
   #     #        ####   ###    ###
   #     #  ##   #   #  #   #  #   #
    #   #    #   #   #  #####  #   #
     # #     #   #   #  #      #   #
      #     ###   ####   ###    ###
*/

Do generwoana video:
Pika Labs oraz Runway ML

Pika Labs:
Jako bot na Discord
https://pika.art/login
Do generowania rysunków. Bardzo się gubi przy realistycznych obrazach.
Doibry do zrobienia podstawiania że ktos coś mówi.


Runway ML
Do realistycznych ujęć.
https://app.runwayml.com/login
ostatnio wersja: Runway Gen-3 Alpha

/*
   #     #             #         #                  #####  #####
   ##   ##             #         #                     #    #   #
   # # # #   ###    ####   ###   #       ###          #     #   #
   #  #  #  #   #  #   #  #   #  #      #   #        ###    #   #
   #     #  #   #  #   #  #####  #      #####           #   #   #
   #     #  #   #  #   #  #      #   #  #           #   #   #   #
   #     #   ###    ####   ###    ###    ###         ###   #####
*/

CSM
https://3d.csm.ai/
Moduł 4 film 13 i 14
1. Generowanie obrazka (płaskiego) w Midjourney na Discord
2. Obrazek wrzócić do CSM 
3. Po wygenerowaniu, pobrać jako OBJ

Modyfikacja modelu https://stephaneginier.com/
    https://stephaneginier.com/sculptgl/
Modyfikacja tekstur https://app.leonardo.ai/texture-generation
Dodawanie animacji https://www.mixamo.com/#/
Dla Unity pobrać format FBX, With Skin


threestudio
https://github.com/threestudio-project/threestudio


lumalabs.ai/genie?view=create


"Ożywianie" grafiki, nadawnie im przestrzeni: LeiaPix


/*
     #               #
    # #              #   #
    # #   #   #   ####        ###
   #   #  #   #  #   #  ##   #   #
   #####  #   #  #   #   #   #   #
   #   #  #   #  #   #   #   #   #
   #   #   ####   ####  ###   ###
*/
Moduł 4 film 15
https://elevenlabs.io/
Voicify
Heygen
RVC  https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI


/*
   #     #                        #
   ##   ##                        #
   # # # #  #   #  #####  #    #  #  #   ####
   #  #  #  #   #     #   #   #   # #        #
   #     #  #   #    #     # #    ##     #####
   #     #  #   #   #       #     # #   #    #
   #     #   ####  #####   #      #  #   ### #
                          #
*/




Biblioteki chyba do JavaScript:
https://www.npmjs/package/openai
https://www.npmjs/package/langchain




//na laptopie ta strona mi nie wystartowałe. kuba mówi o niej w moduł 5, odcinek 11
https://huggingface.co/spaces/Vokturz/can-it-run-llm

//W odcinku 12, kuba wchodzi na stronę:
https://huggingface.co/mistralai/Mixtral-8x7B-v0.1



// Whisper - rozpoznawanie mowy
// Moduł 5, odcinek 14
https://www.npmjs.com/package/@chengsokdara/use-whisper



//symulacja serwera:
npm i loophole
loophole http 3000 --hostname mistrz-weater-1

// Jeśli chodzi o posiadaczy apple'ow polecam ngrok zamiast loophole



loophole http 3000 --hostname mistrz-weater-1
bash: loophole: command not found



Zmalso mówi o modelach odpalanych lokalnie
https://www.youtube.com/watch?v=QC-urBDE4lQ
Zwrócić uwagę na Chat With RTX


Whisper GUI: https://grisk.itch.io/whisper-gui
https://www.nvidia.com/en-us/ai-on-rtx/chat-with-rtx-generative-ai/



// do ograniczania ilości tokenów
nede-rate-limiter-flexible


// moduł 5, odcinek 19
polecana baza danych:
Chroma
Polecana instalacja z Dockera lub:
Python3 pip install chromadb

uruchomienie:
chroma run --path ./db/chromadb

do produkcji najlepiej urzyc Dockera, zerknąć jak ustawić hasło:
https://docs.trychroma.com/usage-guide#autentication



Do edycji obrazów:
Adobe Firefly: https://firefly.adobe.com/

do tworzenia grafiki od podstaw
Playground AI: https://playgroundai.com/

Generowanie filmów:
Pika labs: https://pika.art

Rysunek dzieci zamienić na filmik
Animated Drawings: https://sketch.metademolab.com/


Generuje obiekty 3D
Genie: https://lumalabs.ai/genie


Skanowanie 3D: https://lumalabs.ai/interactive-scenes

Muzyka instrumentalna:
MusicGen: https://huggingface.co/spaces/faceboo...

Generator głosu do czytania tekstu
Eleven labs: https://elevenlabs.io/


SciSpace: https://scispace.com/

tensorflow.js - ? biblioteka do tworzenia sztócznych sieci neuronowych

Matrix stability ? - chyba do tworzenia obrazów albo zdjęć na własnym kompie.

fixmybrokenenglish@gmail.com - do poprawiania angielskiego


// Moduł 6
//-------------------------------------------------------------------------------------------------


Przygotuj Risk-Based Thinking dla tego projektu.
Przygotuj Risk-Based Thinking w kontekście tworzenia oprogramowania.


Daj mi zadania jak najbardziej szczegółowe accept criteria zrozumiałe dla osoby nietechnicznej.
Napisz w bezokoliczniku lub bezosobowej formie.


//Moduł 7
//-------------------------------------------------------------------------------------------------

Wyznaczanie trendu w Excelu:
=LINEST(B2:B5,A2:A5,1,1) 
pierwszy zbiór y, drugi zbiór X, jedynki dopiszą współczynnik determinacji


biblioteki do AI: scikitjs scikit-learn-ts 
brain.js - do tworzenia sieci neuronowych, instalowanie yarn add brain.js (film 11 39:00 Wprowadzenie w sztuczne sieci neuronowe)
dla brai,js moze być potrzeban biblioteka gpu.js, instalacja yarn add gpu.js

TensorFlow - biblioteka do uczenia maszynowego dla Pytho 3.8-3.11 ale też jest wersja dla JavaScript (Film 14. Wprowadzenie w TensorFlow)
// aby sprawdzic czy zainstalowany jet tensorFlow: pip show tensorflow
// aby zainstalować: pip install tensorflow
// keras - biblioteka do uczenia maszynowego, jest w tensorflow, taki frontend do tensorflow 