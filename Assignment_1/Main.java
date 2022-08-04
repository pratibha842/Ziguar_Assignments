import java.util.LinkedList;
import java.util.Queue;


//Implementing Stack using two queues
public class Main {
    Queue<Character> queue_1,queue_2;

//Constructor
    public Main(){
        queue_1 = new LinkedList<>();
        queue_2 = new LinkedList<>();
    }

    void push(Character c){
        if(queue_1.size()==0){
            queue_1.add(c);
            while (queue_2.size()>0){
                queue_1.add(queue_2.poll());
            }
        }
        else if (queue_2.size()==0) {
            queue_2.add(c);
            while (queue_1.size()>0){
                queue_2.add(queue_1.poll());
            }
        }
    }

    Character pop(){
        return (queue_1.size()>0)?queue_1.poll():queue_2.poll();
    }

    public static void main(String[] args){
        Main q = new Main();
        System.out.println("Queue Elements:\nA\nB\nC\nD\nE");
        q.push('A');
        q.push('B');
        q.push('C');
        q.push('D');
        q.push('E');
        q.push('F');

        Character c = null;
        System.out.println("Stack Elements using two queues:");
        while ((c=q.pop())!=null)
            System.out.println(c);

    }
}
