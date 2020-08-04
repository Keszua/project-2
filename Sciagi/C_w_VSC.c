Opis instalacji C w VS Code:
https://code.visualstudio.com/docs/cpp/config-mingw

1. Ściągnij i zainstaluj: https://sourceforge.net/projects/mingw-w64/
2. Po zinstalowaniu, dodaj Zmienne środowiskowe:
	PM na mój koputer -> Właściwości -> Zaawansowane ustawienia systemu ->
	-> Zaawansowane -> Zmienne środowiskowe... -> Path -> Edytuj -> Nowy ->
C:\mingw-w64\x86_64-8.1.0-win32-seh-rt_v6-rev0\mingw64\bin

Zakładanie projektu: Po prostu zakłądam sobie nowy folder i plik main.cpp  lub inny.cpp
Moge go otworzyć w notatniku, ale najwygodneij w VSCode

Najprostrzy kod gdzie coś widać:

	#include <iostream>
	int main()
	{
		std::cout << "Heloworld" << endl;
	}

Aby skomilować i  uruchomić:
Sposób 1: 
	Zapisz plik (Ctrl+S)
	Stworzyć automatycznie plik "task.json" przez: Terminal > Configure Default Build Task  > i wybrać: "C/C++:g++.exe build active file"
	Kompiluj skrutem klawiszomym: CTRL+Shift+B			-> wyswietli sie informacja o (pomyślnym lub nie ) przebiegu kompilacji. Naciskamy dowoly klawisz.
	Uruchamiamy projetk polecenim: ".\main.cpp"   lub inna nasza nazwa plikuk .exe, który się pojawi na liście.

Sposób 2: 
	W konsoli, będąc na ścieżce z projektem, wpisz: "g++ main.cpp" (lub inna twoja nazwa pliku)
	Pojawiał się nowy plik wynikowy, o domyslnej nazwie "a.exe"
	W kosoli uruchom plik oleceniem: ".\a.exe" lub ".\a"

Debagowanie:
	Naciśnij F5 (lub Run > Add Configuration) i wybierz: "C++ (GDB/LLDB)"
	Następnie z listy wybierz "g++.exe build and debug active file"
	Stworzony zostanie plik konfiguracyjny "launch.json"







Płytka EFM32 TINY GECKO PCB2100 REV. A03
Dioda 
	USER LED:  gpioPortD  7

Przyciski: 
	PB0: gpioPortD  8
	PB1: gpioPortB  11

	CMU_ClockEnable(cmuClock_GPIO, true);
	GPIOINT_Init();
	GPIO_PinModeSet(gpioPortD, 8, gpioModeInput, 0);
 
	GPIOINT_CallbackRegister(8, gpioCallback);			//Register callbacks before setting up and enabling pin interrupt.
	GPIO_IntConfig(gpioPortD, 8, false, true, true);	//Set falling edge interrupt for both ports



RS 232


Konfiguracja diody:
	CMU_ClockEnable(cmuClock_HFPER, true);
	CMU_ClockEnable(cmuClock_GPIO, true);
	GPIO_PinModeSet(USER_LED_PORT, USER_LED_PIN, gpioModePushPull, 0); //GPIO_PinModeSet(gpioPortD, 7, gpioModePushPull, 0);

Przełączenie diody:
	GPIO_PinOutToggle(USER_LED_PORT, USER_LED_PIN); 	//BSP_LedToggle(0);


Przyciski:





Scieżka do bibliotek:
C:\SiliconLabs\SimplicityStudio\v4\developer\sdks\gecko_sdk_suite\v2.7\platform\emlib\src

Dostępne porty:

PA12
PA13
PA14

PB11
PB12

PC4
PC6
PC14

PD0
PD1 x2
PD2 x2
PD3
PD4 x2
PD5
PD6
PD7
PD8 x2











