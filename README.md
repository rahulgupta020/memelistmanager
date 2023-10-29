# memelistmanager
Project Description:-
The Task Management App is a web-based application for organizing tasks and to-do lists. Users can create, edit, and prioritize tasks, set deadlines, and mark them as completed. It includes user authentication and provides a simple and efficient way to manage daily tasks.

Project Requirement:-
1) Use react-router to create two routes named login and dashboard . Make the dashboard a protected route which means if the user directly goes to /dashboard without logging in it should be redirected to “/” which is the login page.
As you don’t have a backend..
Hint:-
    Make some static username password which is acceptable.
    use local storage :- https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/
2) Ensure that there are two username,password combinations user login from for lets say User A and User B.
3) On the dashboard page there is a “logout” button on top right which logs out the given user and takes us back to the login page. Also there are two buttons: “Make a list” and “Show My List”.
4) Make a list shows a table which first 15 entries from the array which you used in 1 and 1a.In each row there is a  checkbox in the first column and a save button at top by which user can make his list and also a CANCEL button beside save which make us return to the previous UI of “Make a list” and “Show my List” button.
5) Show my list if there is no saved list. Gives an alert saying “No saved list” and lets say if user A has previously saved a list,It will show him his list in table as you did in question 1. (ensure it is not user B’s list).

If you want to run this project. Simple clone it. and run Command "npm install". after it it will install node_modules folder. now can you can run this project using "npm start".

screen:
Home Page :-
![image](https://github.com/rahulgupta020/memelistmanager/assets/42673573/6839b836-b7f8-4c5b-9a68-061980e41c11)

Login Page :-
![image](https://github.com/rahulgupta020/memelistmanager/assets/42673573/69fa03d0-4c60-44f1-97d5-4af1da4b02b8)

Home Page with Welcome User :-
![image](https://github.com/rahulgupta020/memelistmanager/assets/42673573/2c3f88d7-378e-4104-94eb-8179ff5742cf)

DashBoard Page :-
![image](https://github.com/rahulgupta020/memelistmanager/assets/42673573/798b7d93-ae80-4b29-a244-3e40023e35b5)

Make a List Page :-
![image](https://github.com/rahulgupta020/memelistmanager/assets/42673573/3c4201fc-0fe7-4fdb-a111-f98414acdc11)

Select and Store List :-
![image](https://github.com/rahulgupta020/memelistmanager/assets/42673573/dcce708a-37a9-4f60-aa3b-fb8d1e26a305)

Show a List Page :-
![image](https://github.com/rahulgupta020/memelistmanager/assets/42673573/64c79269-10de-4efa-8624-1a5cbfb05274)

Click on Show Button :-
![image](https://github.com/rahulgupta020/memelistmanager/assets/42673573/5e709667-f99c-4f95-b58b-f57bb763fc6d)
