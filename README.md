[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9700140&assignment_repo_type=AssignmentRepo)
# Reproduction of WhatsApp download page 

Here you will learn how to reproduce a page [https://www.whatsapp.com/download/] using html and css (no functionality required)
![WhatsApp download page](images/whatsAppPage.png)

## Steps

- Clone this repo:
 - click the green Code button in github, copy the URL
 - open the Visual Studio Code in your learning folder and and write in terminal `git clone paste_your_url_here`
- create a separate branch `git switch -c "dev"`
- add html and css files and code
- in VS Code, click on html file and Go Live (plugin installed previously) to avoid refreshing the page on changes
- when you're done coding, add the changes to staging using + button in VS Code Source Control tab or type on terminal `git add .`
![VS Code staging](images/stage.png) 
- commit and push the code `git commit -am "commit message here"`, `git push -u origin dev`
- go to github and raise a pull request from your development branch to master
![Open PR](images/pullRequest.png) 

## Requirements

- style the page for desktop viewing, but if you have time make it responsive (use the inspector to test the look on mobile devices)
- use any css rules you want
![Inspector](images/inspector.png) 
- if you need to upload images to your repo, place them all inside the images folder
- use English everywhere (page, variables naming, comments, commit messages)