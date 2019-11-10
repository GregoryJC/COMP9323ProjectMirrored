package comp9323.group12.backend.entities;

public class Quiz {
    private Integer id;

    private String name;

    private String relatedSkill;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getRelatedSkill() {
        return relatedSkill;
    }

    public void setRelatedSkill(String relatedSkill) {
        this.relatedSkill = relatedSkill == null ? null : relatedSkill.trim();
    }
}