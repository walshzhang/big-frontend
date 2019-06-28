package iteach.bigfrontend.springbootbackend;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/todo")
public class TodoController {
    private List<Todo> todos = new ArrayList<>();

    @GetMapping
    public List<Todo> listAll() {
        return todos;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void addOne(Todo todo) {
        todos.add(todo);
    }

    @PostMapping("/toggle/{index}")
    @ResponseStatus(HttpStatus.CREATED)
    public void addOne(@PathVariable int index) {
        Function<Todo, Todo> mapper = todo -> {
            boolean done = todo.isDone();
            todo.setDone(!done);
            return todo;
        };

        todos.set(index, mapper.apply(todos.get(index)));
    }

    @DeleteMapping("/{index}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeOne(@PathVariable int index) {
        todos.remove(index - 1);
    }
}