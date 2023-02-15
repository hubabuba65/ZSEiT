package test;

import org.hamcrest.CoreMatchers;
import org.junit.Assert;
import org.junit.Test;

public class CargoTest {

    @Test
    public void testCargoCreation() {
        Cargo cargo = new Cargo("Test cargo", 100);
        Assert.assertEquals("Test cargo", cargo.getName());
        Assert.assertEquals(100, cargo.getWeight());
    }

    @Test
    public void testCargoEquality() {
        Cargo cargo1 = new Cargo("Test cargo", 100);
        Cargo cargo2 = new Cargo("Test cargo", 100);
        Assert.assertEquals(cargo1, cargo2);
        Assert.assertThat(cargo1, CoreMatchers.equalTo(cargo2));
    }

    @Test
    public void testCargoInequality() {
        Cargo cargo1 = new Cargo("Test cargo 1", 100);
        Cargo cargo2 = new Cargo("Test cargo 2", 100);
        Assert.assertNotEquals(cargo1, cargo2);
        Assert.assertThat(cargo1, CoreMatchers.not(CoreMatchers.equalTo(cargo2)));
    }

    @Test
    public void testCargoHashcode() {
        Cargo cargo1 = new Cargo("Test cargo", 100);
        Cargo cargo2 = new Cargo("Test cargo", 100);
        Assert.assertEquals(cargo1.hashCode(), cargo2.hashCode());
    }
}
