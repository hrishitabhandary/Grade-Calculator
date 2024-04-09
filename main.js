document.addEventListener('DOMContentLoaded',()=>{
    function calculateAverage(){
        const mathScore = parseInt(document.querySelector('#math').value);
        const englishScore = parseInt(document.querySelector('#english').value);
        const scienceScore = parseInt(document.querySelector('#science').value);
        
        if (isNaN(mathScore) || isNaN(englishScore) || isNaN(scienceScore)){
           return alert('Please enter scores for all subjects');
        }
        const average = (mathScore+englishScore+scienceScore)/3;
        const result = document.querySelector('#result');
        const para = document.createElement('p');
        para.textContent = `Your average score is ${average} out of 100.`;
        result.appendChild(para);
        // let letterGrade ;
        // if (average>=90){
        //     letterGrade = 'A';
        //     para.textContent+=  `Your grade is ${letterGrade}`;
        // }else if (average>=80){
        //     letterGrade = 'B';
        //     para.textContent+=  `Your grade is ${letterGrade}`;
        // }else if (average>=70){
        //     letterGrade = 'C';
        //     para.textContent +=  `Your grade is ${letterGrade}`;
        // }else if (average>=60){
        //     letterGrade = 'D';
        //     para.textContent +=  `Your grade is ${letterGrade}`;
        // }else{
        //     letterGrade = 'F';
        //     para.textContent +=  `Your grade is ${letterGrade}`;
        // }

        let letterGrade;
        switch(true){
            case (average>=90):
                letterGrade = 'A';
                break;
            case (average>=80):
                letterGrade = 'B';
                break;
            case (average>=70):
                letterGrade = 'C';
                break;
            case (average>=60):
                letterGrade = 'D';
                break;
            default:
                letterGrade = 'F';
        }
        // we set the switch statement with condition or expression true because we want to evaluate each case based on a boolean expression
        para.textContent += `Your grade is ${letterGrade}`;
    }
    const btn = document.querySelector('button');
    btn.addEventListener('click',calculateAverage);

});