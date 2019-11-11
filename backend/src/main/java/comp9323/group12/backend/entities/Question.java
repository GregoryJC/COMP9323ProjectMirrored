package comp9323.group12.backend.entities;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRawValue;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class Question {
    private Integer id;

    private String content;

    private Integer solution;

    private Integer belongQuiz;

    private String options;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    public Integer getSolution() {
        return solution;
    }

    public void setSolution(Integer solution) {
        this.solution = solution;
    }

    public Integer getBelongQuiz() {
        return belongQuiz;
    }

    public void setBelongQuiz(Integer belongQuiz) {
        this.belongQuiz = belongQuiz;
    }

    public String getOptions() {
        return options;
    }

    public void setOptions(String options) {
        this.options = options == null ? null : options.trim();
    }

    @Override
    public boolean equals(Object answer) throws ClassCastException{
        return solution.equals((Integer) answer);
    }
}