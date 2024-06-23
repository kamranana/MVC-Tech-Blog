* {
  box-sizing: border-box;
}

body, html {
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
  color: #333;
}

a {
  text-decoration: none;
  color: #225ca3;
  font-weight: bold;
  transition: color .1s;
}

a:hover {
  color: #3486eb;
}

button {
  background-color: #225ca3;
  border: 0;
  padding: 1%;
  color: white;
  font-weight: bold;
  transition: background-color .1s;
  cursor: pointer;
  border-radius: 25px;
}

button:hover {
  background-color: #3486eb;
}

.post-list {
  margin: 0;
  padding: 0;
}

textarea, input {
  padding: .5%;
  border-radius: 5px;
  border: 1px solid #ccc;
}

textarea:focus, input:focus {
  outline: none;
  border: 1px solid #3486eb;
}

textarea {
  min-width: 40%;
  min-height: 100px;
}

form > div {
  margin-bottom: 2%;
}

form label {
  display: block;
}

.wrapper {
  width: 100%;
  min-height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

header {
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1%;
  background-color: #bbdbff;
}

header h1 {
  font-size: 2em;
}

main {
  flex: 1;
  padding: 3% 4%;
}

.btn-no-style {
  background: none;
  border: none;
  padding: 10;
  cursor: pointer;
  text-decoration: none;
  color: #225ca3;
  font-size: 100%;
  font-weight: bold;
  transition: color .1s;
  margin-left: 16px;
}

.btn-no-style:hover {
  background: none;
  color: #3486eb;
}

.delete-post-btn {
  background-color: #d41414;
}

.delete-post-btn:hover {
  background-color: #ff643d;
}

.post {
  margin-bottom: 2%;
  line-height: 150%;
}

.post .title span {
  font-style: italic;
  font-size: 90%;
  color: #7d7d7d;
}

.edit-link {
  display: block;
  margin: -1.5% 0 2% 0;
}

.comment-form {
  margin-bottom: 5%;
}

.comment {
  padding: 1%;
  margin-bottom: 1%;
}

.comment:nth-child(odd) {
  background-color: #fff5eb;
}

.comment .meta {
  font-size: 90%;
  margin-bottom: .5%;
  opacity: .6;
}

.new-post-form input {
  width: 300px;
}

.edit-post-form {
  margin-bottom: 5%;
}

footer {
  display: flex;
  justify-content: center;
  padding: 1%;
  font-size: 110%;
  background-color: #bbdbff;
}
