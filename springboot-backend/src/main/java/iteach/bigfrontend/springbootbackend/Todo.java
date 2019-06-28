package iteach.bigfrontend.springbootbackend;

public class Todo {
    private String action;
    private boolean done;

    public Todo() {
        done = false;
    }

    /**
     * @param action the action to set
     */
    public void setAction(String action) {
        this.action = action;
    }

    /**
     * @return the action
     */
    public String getAction() {
        return action;
    }

    /**
     * @return the done
     */
    public boolean isDone() {
        return done;
    }

    /**
     * @param done the done to set
     */
    public void setDone(boolean done) {
        this.done = done;
    }
}