# 🔍Recipe Generator with AI🔍
This is a recipe recommendation & generation app that utilizes user-provided ingredients with the help of AI.  For frontend, React and vanilla CSS is used. NodeJs and OpenAI API is used for the backend. Since AI is used, ingredients are not language- or typo-sensitive, allowing users to input ingredients in any language.

## Live Deployment
You can acces the deployment from this link: [RecipeGenerator/onrender](https://recipegeneratorreactapp.onrender.com). Loading takes a bit because of inactivity.

# Preview 
<h4 align="center">


</h4>


<p align="center">
  <img src="Media/SS1.png" height= "500"> <img src="Media/SS3.png" height= "500">
  <img src="Media/RecipeAppGif.gif" height= "500">
</p>
# How to Run

## For Backend

Change the APIKEY with your own key in the .env file

```bash
OPENAI_API_KEY={Replace with your key}
```

Install project dependencies:
```bash
npm install
```
Run the project:
```bash
npm start
```
Navigate to your browser and go to the specified port in `index.js` (default: 8080).
```
http://localhost:8080
```


## For Frontend

Install project dependencies:
```bash
npm install
```
Run the project:
```bash
npm run dev
```
Navigate to your browser and go to the specified port in `vite.config.js` (default: 5173).
```
http://localhost:5173
```
