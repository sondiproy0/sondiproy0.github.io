public class TestBug {

    public static void main(String[] args) {
        String s = null;
        System.out.println(s.length()); // ❌ NullPointerException
    }

    public void unusedMethod() {
        int x = 10; // ❌ Unused variable
    }
}
