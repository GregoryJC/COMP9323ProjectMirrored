## API Doc

>**Authentication**
>
>- `GET` `/api/login/`  ***login***
>
>- `POST` `/api/signup/`  ***sign up***
>
>- `GET` `/api/logout/`  ***log out***

>**Post**
>
>- `GET` `/api/post/`  ***retrieve all posts***
>- `GET` `/api/post/<int: id>/`  ***retrieve specific post content***
>- `POST` `/api/post/`  ***create new post***

>**Comment**
>
>- `GET` `/api/post/<int: id>/comment/`  ***retrieve all comments through post id***
>- `POST` `/api/post/<int: id>/comment/`  ***leave comment over the post***

> **Quiz**
>
> - `GET` `/api/quiz/<int: id>/`  Retrieve a quiz
> - `GET` `/api/quiz/`  Retrieve all quiz