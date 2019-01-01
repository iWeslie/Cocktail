package algorithm;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * RandomList
 */
public class RandomList {
    private int m0, m1, m2, m3;

    public void randomList() {
        Random random = new Random();
        List<Integer> integerList = new ArrayList<Integer>();
        // generate random numbers between 0-159 
        m0 = random.nextInt(160);
        for (int i = 0; i < 20; i++) {
            integerList.add(m0);
            integerList.add(m0 + 1);
            integerList.add(m0 + 2);
            if (m0 == 0) {
                m1 = m0;
            } else {
                // forward
                m1 = random.nextInt(m0);
            }
            integerList.add(m1);
            integerList.add(m1 + 1);
            integerList.add(m1 + 2);
            // backward
            m2 = random.nextInt(160 - m1 - 3) + m1 + 3;
            integerList.add(m2);
            integerList.add(m2 + 1);
            integerList.add(m2 + 2);
            if (m2 == 0) {
                m3 = m2;
            } else {
                // forward
                m3 = random.nextInt(m2);
            }
            integerList.add(m3);
            integerList.add(m3 + 1);
            integerList.add(m3 + 2);
            m0 = random.nextInt(160 - m3 - 3) + m3 + 3;
        }

        // remove number LT 159
        for (int i = 0; i < integerList.size();) {
            if (integerList.get(i) > 159) {
                integerList.remove(i);
            } else {
                i++;
            }
        }

        System.out.println("Generate command completed, total: " + integerList.size());
        for (Integer integer : integerList) {
            System.out.print(integer + ",");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        RandomList l = new RandomList();
        l.randomList();
    }
}