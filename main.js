const questionsData = [
    {
        question: "Kako se zoveš?",
        options: ["Štef", "Jura", "Pero"],
        answer: "Štef" 
    },
    {
        question: "Kako se prezivaš?",
        options: ["Štefić", "Jurić", "Perić"],
        answer: "Štefić" 
    }
]
  
questionsData.forEach((q) => {
    const div = document.createElement("div");
    div.setAttribute("class", "question");
    document.body.append(div);

    const h2 = document.createElement("h2");
    h2.innerHTML = q.question;
    div.append(h2);

    // console.log(q.options);

    q.options.forEach((option) => {
        const button = document.createElement("button");
        button.setAttribute("class", "option");
        button.innerHTML = option;
        div.append(button)
    })


});
   
