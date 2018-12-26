import java.lang.InterruptedException;
import java.lang.Thread;

public class MultiThread extends Thread {
    private String name;
    public MultiThread(String name) {
        this.name = name;
    }

    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(name + "run: " + i);
            try {
                sleep((int) Math.random() * 10);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        MultiThread thread1 = new MultiThread("A");
        MultiThread thread2 = new MultiThread("B");
        
        thread1.start();
        thread2.start();
    }
}
