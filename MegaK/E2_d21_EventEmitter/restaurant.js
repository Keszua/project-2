const { EventEmitter } = require('events');

class Restaurant extends EventEmitter {
    /**
     * Otwarcie restauracji.
     */
    open() {
        // Emit...
    }

    /**
     * Zamknięcie restauracji.
     */
    close() {
        // Emit...
    }

    /**
     * Stolik został zarezerowany na teraz.
     * Traktuj to jako po prostu 1 stolik mniej.
     */
    reserveTable() {
        // Emit...
    }

    /**
     * Odwołano rezerwację na stolik.
     * Traktuj to jako po prostu 1 stolik więcej.
     */
    cancelTableReservation() {
        // Emit...
    }

    /**
     * Ktoś wziął stolik bez rezerwacji.
     */
    takeTableWithoutReservation() {
        // Emit...
    }

    /**
     * Stolik się popsuł, odpadła noga :/
     */
    markTableAsBroken() {
        // Emit...
    }

    /**
     * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
     */
    cleanupTable() {
        // Emit...
    }
}

module.exports = {
  Restaurant,
};