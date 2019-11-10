package comp9323.group12.backend.entities;

import java.util.Date;

public class Comment {
    private Integer id;

    private Date createdTime;

    private String creator;

    private Integer relatedPost;

    private String content;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public Integer getRelatedPost() {
        return relatedPost;
    }

    public void setRelatedPost(Integer relatedPost) {
        this.relatedPost = relatedPost;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }
}