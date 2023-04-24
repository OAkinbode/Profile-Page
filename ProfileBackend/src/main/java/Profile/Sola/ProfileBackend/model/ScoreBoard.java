package Profile.Sola.ProfileBackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.boot.jackson.JsonComponent;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class ScoreBoard {
    @JsonProperty("one")
    String one;
    @JsonProperty("two")
    String two;
    @JsonProperty("three")
    String three;
    @JsonProperty("four")
    String four;
    @JsonProperty("five")
    String five;
    @JsonProperty("six")
    String six;
    @JsonProperty("winner")
    int winner;

    ArrayList<String> thePlay = new ArrayList<String>();

    public ScoreBoard(){}
    public ScoreBoard(String one, String two, String three, String four, String five, String six, int winner){
        this.one = one;
        this.two = two;
        this.three = three;
        this.four = four;
        this.five = five;
        this.six = six;
        this.winner = winner;
    }

    public void addPlay(String c){
        thePlay.add(c);
        map();
    }

    public void clearBoard(){
        thePlay.clear();
        winner = 0;
        one = "";
        two = "";
        three = "";
        four = "";
        five = "";
        six = "";
    }

    public ArrayList<String> display(){
//        map();
        return thePlay;
    }
    public void map(){
        for (int i = 0; i < thePlay.size(); i++) {
            String element = thePlay.get(i);
            if (i == 0)
                one = element;
            else if (i == 1)
                two = element;
            else if (i == 2)
                three = element;
            else if (i == 3)
                four = element;
            else if (i == 4)
                five = element;
            else if (i == 5)
                six = element;
        }

    }

    public void setWinner(int win){winner = win;}


}
