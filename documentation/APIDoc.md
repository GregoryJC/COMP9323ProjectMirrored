## API Doc

>**Authentication**
>
>- `GET` `/api/login/`  ***login***
>- `POST` `/api/signup/`  ***sign up***
>- `GET` `/api/logout/`  ***log out***

>**Post**
>
>- `GET` `/api/post/`  ***retrieve all posts***
>- `GET` `/api/post/<int: id>/`  ***retrieve specific post content***
>- `POST` `/api/post/`  ***create new post***

>**Comment**
>
>- `GET` `/api/post/<int: id>/comment/`  ***retrieve all comments through post id***
>- `POST` `/api/post/<int: id>/comment/`  ***leave a comment over the post***

> **Quiz**
>
> - `GET` `/api/quiz/<int: id>/`  ***Retrieve a quiz***
> - `GET` `/api/quiz/`  ***Retrieve all quiz***
> - `POST` `/api/quiz/{id}`  ***Submit a quiz***

> **Top Post**
>
> - `GET` `/api/toppost/`  ***Retrieve top 10 posts***
>
> **Recommend**
>
> - `GET` `/api/project/recommend/`  ***Retrieve some recommended projects***

> **Profile**
>
> - `GET` `/api/profile/`  ***Retrieve one's profile***
> - `GET` `/api/profile/posts/`  ***Retrieve one's posts***
> - `GET` `/api/profile/comments/`  ***Retrieve one's comments***
> - `GET` `/api/profile/project/favorite/`  ***show a list of favorite projects***
> - `GET` `/api/profile/project/participate/`  ***show a list of enrolling projects***

> **Project**
>
> - `GET` `/api/project/`  ***Retrieve all projects***
> - `GET` `/api/project/<int: id>`  ***Retrieve specific project***
> - `GET` `/api/project/<int: id>/favorite`  ***like a project***
> - `POST` `/api/project/`  ***Create a new project***
> - `POST` `/api/project/<int: id>/join`  ***Take part in a project***

