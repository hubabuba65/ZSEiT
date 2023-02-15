import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UnitTest {

    private Unit unit;

    @BeforeEach
    void setUp() {
        Coordinates startCoordinates = new Coordinates(0, 0);
        int maxFuel = 100;
        int maxCargoWeight = 50;
        unit = new Unit(startCoordinates, maxFuel, maxCargoWeight);
    }

    @Test
    void shouldMoveUnitToNewCoordinates() {
        Coordinates expectedCoordinates = new Coordinates(2, 3);

        unit.move(2, 3);

        assertEquals(expectedCoordinates, unit.getCoordinates());
    }

    @Test
    void shouldThrowExceptionWhenMovingUnitTooFar() {
        assertThrows(IllegalStateException.class, () -> unit.move(50, 50));
    }

    @Test
    void shouldTankUpUnit() {
        unit.tankUp();

        assertTrue(unit.getFuel() > 0);
        assertTrue(unit.getFuel() <= unit.getMaxFuel());
    }

    @Test
    void shouldLoadCargo() {
        Cargo cargo = new Cargo("Test Cargo", 10);

        unit.loadCargo(cargo);

        assertTrue(unit.getCargo().contains(cargo));
        assertEquals(cargo.getWeight(), unit.getLoad());
    }

    @Test
    void shouldThrowExceptionWhenLoadingCargoOverLimit() {
        int maxCargoWeight = unit.getMaxCargoWeight();
        Cargo cargo = new Cargo("Test Cargo", maxCargoWeight + 10);

        assertThrows(IllegalStateException.class, () -> unit.loadCargo(cargo));
    }

    @Test
    void shouldUnloadCargo() {
        Cargo cargo = new Cargo("Test Cargo", 10);
        unit.loadCargo(cargo);

        unit.unloadCargo(cargo);

        assertFalse(unit.getCargo().contains(cargo));
        assertEquals(0, unit.getLoad());
    }

    @Test
    void shouldUnloadAllCargo() {
        Cargo cargo1 = new Cargo("Test Cargo 1", 10);
        Cargo cargo2 = new Cargo("Test Cargo 2", 20);
        unit.loadCargo(cargo1);
        unit.loadCargo(cargo2);

        unit.unloadAllCargo();

        assertTrue(unit.getCargo().isEmpty());
        assertEquals(0, unit.getLoad());
    }
}
