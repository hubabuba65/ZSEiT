package test;

import org.junit.jupiter.api.Test;
import pl.devfoundry.testing.homework.Coordinates;

import static org.junit.jupiter.api.Assertions.*;

public class CoordinatesTest {

    @Test
    public void testValidCoordinates() {
        // given
        int x = 50;
        int y = 60;

        // when
        Coordinates coordinates = new Coordinates(x, y);

        // then
        assertEquals(x, coordinates.getX());
        assertEquals(y, coordinates.getY());
    }

    @Test
    public void testNegativeCoordinates() {
        // given
        int x = -1;
        int y = 50;

        // then
        assertThrows(IllegalArgumentException.class, () -> new Coordinates(x, y));
    }

    @Test
    public void testCoordinatesGreaterThan100() {
        // given
        int x = 50;
        int y = 101;

        // then
        assertThrows(IllegalArgumentException.class, () -> new Coordinates(x, y));
    }

    @Test
    public void testCopyCoordinates() {
        // given
        Coordinates originalCoordinates = new Coordinates(50, 60);
        int x = 10;
        int y = -20;

        // when
        Coordinates newCoordinates = Coordinates.copy(originalCoordinates, x, y);

        // then
        assertEquals(originalCoordinates.getX() + x, newCoordinates.getX());
        assertEquals(originalCoordinates.getY() + y, newCoordinates.getY());
    }

    @Test
    public void testEquals() {
        // given
        Coordinates coordinates1 = new Coordinates(50, 60);
        Coordinates coordinates2 = new Coordinates(50, 60);

        // then
        assertTrue(coordinates1.equals(coordinates2));
    }

    @Test
    public void testNotEquals() {
        // given
        Coordinates coordinates1 = new Coordinates(50, 60);
        Coordinates coordinates2 = new Coordinates(40, 70);

        // then
        assertFalse(coordinates1.equals(coordinates2));
    }
}
