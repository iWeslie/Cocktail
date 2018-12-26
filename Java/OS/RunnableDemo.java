import jdk.nashorn.internal.runtime.regexp.joni.exception.InternalException;

/**
 * RunnableDemo
 */
public class RunnableDemo {
    private Thread t;
    private String threadName;

    RunnableDemo(String name) {
        threadName = name;
        System.out.println("Creating: " + threadName);
    }

    public void run() {
        System.out.println("Running " + threadName);
        try {
            
        }
        catch (InternalException err) {
            System.out.println("Thread " + threadName + " interrupted.");
        }
        System.out.println("Thread " + threadName + " exiting.");
    }

    public void start() {
        System.out.println("Starting" + threadName);
        if (t == null) {
            t = new Thread(this, threadName);
            t.start();
        }
    }
}