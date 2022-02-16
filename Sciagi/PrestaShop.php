<?php
Edycja FORMULARZA REJESTRACJI:
Formulaż jest w: .../classes/form/CustomerFormatter.php
Po aktualizacji znikną te zmiany, dla tego trzeba skopiować sobie do ten plik do:
.../override/classes/form/CustomerFormatter.php

class CustomerFormatterCore implements FormFormatterInterface
// edytować na
class CustomerFormatter extends CustomerFormatterCore implements FormFormatterInterface
# następnie w panelAdmina > Zaawansowane > Wydajnosc > Wyczysc pamiec podreczna
# więcej na https://devdocs.prestashop.com/1.7/modules/concepts/overrides/

#--------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------
